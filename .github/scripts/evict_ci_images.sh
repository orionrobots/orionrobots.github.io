#!/usr/bin/env bash
# Evict old prebuilt CI image versions from ghcr.io (#568).
#
# Usage: evict_ci_images.sh <package>...      e.g. orionrobots-site.test
#
# Environment:
#   DRY_RUN        "true" (default) only prints what would be deleted
#   KEEP_NEWEST    hash-tagged versions to always keep per package (default 5)
#   MIN_AGE_DAYS   never delete anything younger than this (default 14)
#   OWNER          org owning the packages (default orionrobots)
#   GH_TOKEN       token with packages:write/delete on the packages
#
# GHCR has no last-pull time, so "least recently used" is approximated by
# creation order. Always kept: the `cache` tag, any tag that is not a 64-hex
# hash, the newest KEEP_NEWEST hash tags, and every child manifest (platform,
# attestation) of a kept tag. Everything else older than MIN_AGE_DAYS is
# deleted, including orphaned untagged manifests. Safe because consumers fall
# back to building the image when a pull misses.
set -o errexit -o nounset -o pipefail

OWNER=${OWNER:-orionrobots}
DRY_RUN=${DRY_RUN:-true}
KEEP_NEWEST=${KEEP_NEWEST:-5}
MIN_AGE_DAYS=${MIN_AGE_DAYS:-14}

# The tag ensure_ci_image.sh gives an image: sha256 of its inputs.
readonly INPUT_HASH_TAG_PATTERN='^[0-9a-f]{64}$'

list_versions() {
  local package=$1
  # --paginate prints one JSON array per page; merge them into one array.
  gh api --paginate "/orgs/${OWNER}/packages/container/${package}/versions?per_page=100" \
    | jq --slurp 'add // []'
}

# Digests of the manifests an image index points at (none for a plain image).
list_child_digests() {
  local image_reference=$1
  docker buildx imagetools inspect --raw "${image_reference}" \
    | jq --raw-output '.manifests[]?.digest'
}

delete_version() {
  local package=$1 version_id=$2
  gh api --method DELETE "/orgs/${OWNER}/packages/container/${package}/versions/${version_id}"
}

# Versions created before this are old enough to delete (ISO 8601, so it
# compares correctly as a string).
oldest_protected_timestamp() {
  date --utc --date="${MIN_AGE_DAYS} days ago" +%Y-%m-%dT%H:%M:%SZ
}

# stdin: versions JSON. stdout: "<id> <digest> <tags>" for each version kept
# because of its tags (the age rule is applied later, to deletions only).
list_versions_kept_by_tag() {
  jq --raw-output \
    --argjson keep_newest "${KEEP_NEWEST}" \
    --arg hash_tag_pattern "${INPUT_HASH_TAG_PATTERN}" '
    def tags: .metadata.container.tags // [];
    def is_hash_tag: test($hash_tag_pattern);
    def has_only_hash_tags: (tags | length > 0) and (tags | all(is_hash_tag));
    def has_non_hash_tag: tags | any(is_hash_tag | not);

    ([.[] | select(has_only_hash_tags)]
      | sort_by(.created_at)
      | reverse
      | .[:$keep_newest]
      | map(.id)) as $newest_hash_tagged_ids
    | .[]
    | select(
        (.id as $version_id | $newest_hash_tagged_ids | index($version_id) != null)
        or has_non_hash_tag
      )
    | "\(.id) \(.name) \(tags | join(","))"'
}

# stdin: versions JSON.
# $1: only versions created before this timestamp may be deleted.
# $2: file listing digests that must be kept, one per line.
# stdout: "<id> <digest> <created_at> <tags>" for each version to delete.
list_versions_to_delete() {
  local oldest_protected=$1 keep_digests_file=$2
  jq --raw-output \
    --arg oldest_protected "${oldest_protected}" \
    --rawfile keep_digests_text "${keep_digests_file}" '
    ($keep_digests_text | split("\n") | map(select(. != ""))) as $keep_digests
    | .[]
    | select(.created_at < $oldest_protected)
    | select(.name as $digest | $keep_digests | index($digest) | not)
    | "\(.id) \(.name) \(.created_at) \(.metadata.container.tags // [] | join(","))"'
}

# Writes the digest of every kept version, and of its children, to a file.
# Children matter: a hash tag is an index whose platform and attestation
# manifests are untagged, and deleting them breaks the kept image. If a kept
# image cannot be read we cannot tell what is orphaned, so fail before any
# delete.
write_keep_digests() {
  local package=$1 versions=$2 keep_digests_file=$3
  local image="ghcr.io/${OWNER}/${package}"
  local version_id digest tags

  while read -r version_id digest tags; do
    echo "keep ${digest} (${tags})" >&2
    echo "${digest}" >> "${keep_digests_file}"
    list_child_digests "${image}@${digest}" >> "${keep_digests_file}"
  done < <(list_versions_kept_by_tag <<< "${versions}")
}

evict_package() {
  local package=$1
  local versions keep_digests_file
  local version_id digest created_at tags
  local deleted_count=0

  versions=$(list_versions "${package}")
  keep_digests_file=$(mktemp)
  write_keep_digests "${package}" "${versions}" "${keep_digests_file}"

  while read -r version_id digest created_at tags; do
    deleted_count=$((deleted_count + 1))
    echo "delete ${package} ${version_id} ${digest} ${created_at} [${tags}]"
    if [[ "${DRY_RUN}" != "true" ]]; then
      delete_version "${package}" "${version_id}"
    fi
  done < <(list_versions_to_delete "$(oldest_protected_timestamp)" "${keep_digests_file}" <<< "${versions}")

  rm --force "${keep_digests_file}"
  report_summary "${package}" "${deleted_count}" "$(jq length <<< "${versions}")"
}

report_summary() {
  local package=$1 deleted_count=$2 total_count=$3
  local verb="Deleted"
  if [[ "${DRY_RUN}" == "true" ]]; then
    verb="Would delete"
  fi
  echo "${package}: ${verb} ${deleted_count} of ${total_count} versions" \
    | tee --append "${GITHUB_STEP_SUMMARY:-/dev/null}"
}

main() {
  local package
  for package in "$@"; do
    evict_package "${package}"
  done
}

# Only run when executed, so the tests can source the functions.
if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
  main "$@"
fi
