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
set -euo pipefail

OWNER=${OWNER:-orionrobots}
DRY_RUN=${DRY_RUN:-true}
KEEP_NEWEST=${KEEP_NEWEST:-5}
MIN_AGE_DAYS=${MIN_AGE_DAYS:-14}

list_versions() {
  gh api --paginate "/orgs/${OWNER}/packages/container/$1/versions?per_page=100" \
    | jq -s 'add // []'
}

# Digests of the manifests an image index points at (none for a plain image).
child_digests() {
  docker buildx imagetools inspect --raw "$1" | jq -r '.manifests[]?.digest'
}

delete_version() {
  gh api --method DELETE "/orgs/${OWNER}/packages/container/$1/versions/$2"
}

cutoff() {
  date -u -d "${MIN_AGE_DAYS} days ago" +%Y-%m-%dT%H:%M:%SZ
}

# stdin: versions JSON. stdout: "<id> <digest> <tags>" of versions whose tags
# put them in the keep set (age is applied separately, to deletions only).
tagged_keepers() {
  jq -r --argjson n "${KEEP_NEWEST}" '
    def is_hash: test("^[0-9a-f]{64}$");
    def tags: .metadata.container.tags // [];
    ([.[] | select(tags | length > 0 and all(is_hash))]
       | sort_by(.created_at) | reverse | .[:$n] | map(.id)) as $newest
    | .[]
    | select(tags | length > 0)
    | select(.id as $id | ($newest | index($id)) != null
             or (tags | any(is_hash | not)))
    | "\(.id) \(.name) \(tags | join(","))"'
}

# stdin: versions JSON. $1: cutoff, $2: file of digests to keep (one per line).
# stdout: "<id> <digest> <created_at> <tags>" of versions to delete.
deletions() {
  jq -r --arg cutoff "$1" --rawfile keep "$2" '
    ($keep | split("\n") | map(select(. != ""))) as $k
    | .[]
    | select(.created_at < $cutoff)
    | select(.name as $d | $k | index($d) | not)
    | "\(.id) \(.name) \(.created_at) \(.metadata.container.tags // [] | join(","))"'
}

evict_package() {
  local package=$1 image="ghcr.io/${OWNER}/$1"
  local versions keep id digest tags count=0
  versions=$(list_versions "${package}")
  keep=$(mktemp)

  # If a kept image's children cannot be read we cannot tell what is orphaned,
  # so fail before deleting anything.
  while read -r id digest tags; do
    echo "keep ${digest} (${tags})" >&2
    echo "${digest}" >> "${keep}"
    child_digests "${image}@${digest}" >> "${keep}"
  done < <(tagged_keepers <<< "${versions}")

  while read -r id digest created tags; do
    count=$((count + 1))
    echo "delete ${package} ${id} ${digest} ${created} [${tags}]"
    if [[ "${DRY_RUN}" != "true" ]]; then
      delete_version "${package}" "${id}"
    fi
  done < <(deletions "$(cutoff)" "${keep}" <<< "${versions}")

  rm -f "${keep}"
  local verb="Would delete"
  [[ "${DRY_RUN}" == "true" ]] || verb="Deleted"
  echo "${package}: ${verb} ${count} of $(jq length <<< "${versions}") versions" \
    | tee -a "${GITHUB_STEP_SUMMARY:-/dev/null}"
}

main() {
  local package
  for package in "$@"; do
    evict_package "${package}"
  done
}

if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
  main "$@"
fi
