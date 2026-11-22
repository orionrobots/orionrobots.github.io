#!/usr/bin/env bash
# Tests the keep/delete decisions of evict_ci_images.sh with stubbed gh/docker.
# Usage: .github/scripts/tests/test_evict_ci_images.sh
set -o errexit -o nounset -o pipefail

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
# shellcheck source=/dev/null
source "${script_dir}/../evict_ci_images.sh"

readonly OLDEST_PROTECTED=2026-03-01T12:00:00Z
OLDEST_HASH_TAG=$(printf 'a%.0s' {1..64})
MIDDLE_HASH_TAG=$(printf 'b%.0s' {1..64})
NEWEST_HASH_TAG=$(printf 'c%.0s' {1..64})
readonly OLDEST_HASH_TAG MIDDLE_HASH_TAG NEWEST_HASH_TAG

failure_count=0

assert_equal() {
  local test_name=$1 expected=$2 actual=$3
  if [[ "${expected}" == "${actual}" ]]; then
    echo "ok   ${test_name}"
  else
    echo "FAIL ${test_name}: expected [${expected}] got [${actual}]"
    failure_count=$((failure_count + 1))
  fi
}

# Prints one package version as the GitHub API returns it.
make_version() {
  local version_id=$1 digest_name=$2 created_at=$3 tags_json=$4
  printf '{"id":%s,"name":"sha256:%s","created_at":"%s","metadata":{"container":{"tags":%s}}}' \
    "${version_id}" "${digest_name}" "${created_at}" "${tags_json}"
}

# Ids of the versions on stdin, sorted and space separated.
sorted_ids() {
  cut --delimiter=' ' --fields=1 | sort --numeric-sort | tr '\n' ' '
}

build_versions() {
  cat <<EOF
[
$(make_version 1 oldest_index 2026-01-01T00:00:00Z "[\"${OLDEST_HASH_TAG}\"]"),
$(make_version 2 oldest_platform 2026-01-01T00:00:00Z '[]'),
$(make_version 3 oldest_attestation 2026-01-01T00:00:00Z '[]'),
$(make_version 4 middle_index 2026-02-01T00:00:00Z "[\"${MIDDLE_HASH_TAG}\"]"),
$(make_version 5 middle_platform 2026-02-01T00:00:00Z '[]'),
$(make_version 6 newest_index 2026-03-01T00:00:00Z "[\"${NEWEST_HASH_TAG}\"]"),
$(make_version 7 cache 2026-01-01T00:00:00Z '["cache"]'),
$(make_version 8 orphan 2026-01-01T00:00:00Z '[]'),
$(make_version 9 too_young_to_delete 2026-03-02T00:00:00Z '[]'),
$(make_version 10 release_tag 2026-01-01T00:00:00Z '["v1.0"]')
]
EOF
}

# Stubs for the functions that talk to GitHub and the registry. The script's
# own functions call them, so shellcheck cannot see the calls.
# shellcheck disable=SC2329
list_child_digests() {
  local image_reference=$1
  if [[ "${image_reference}" == *@sha256:middle_index ]]; then
    echo sha256:middle_platform
  fi
}

# shellcheck disable=SC2329
list_versions() {
  build_versions
}

# shellcheck disable=SC2329
delete_version() {
  local version_id=$2
  deleted_ids+=("${version_id}")
}

# shellcheck disable=SC2329
oldest_protected_timestamp() {
  echo "${OLDEST_PROTECTED}"
}

test_versions_kept_by_tag() {
  # Newest 2 hash tags, the cache tag and the non-hash tag. The oldest hash
  # tag is evictable.
  # shellcheck disable=SC2034 # read by the sourced script
  KEEP_NEWEST=2
  local kept_ids
  kept_ids=$(list_versions_kept_by_tag <<< "$(build_versions)" | sorted_ids)
  assert_equal "versions kept by tag" "4 6 7 10 " "${kept_ids}"
}

test_versions_to_delete() {
  local keep_digests_file deleted
  keep_digests_file=$(mktemp)
  write_keep_digests pkg "$(build_versions)" "${keep_digests_file}" 2> /dev/null
  deleted=$(list_versions_to_delete "${OLDEST_PROTECTED}" "${keep_digests_file}" \
    <<< "$(build_versions)" | sorted_ids)
  rm --force "${keep_digests_file}"
  # 1 (old hash tag), 2 and 3 (its children) and 8 (orphan) go. 5 is a child
  # of a kept tag and 9 is too young.
  assert_equal "versions to delete" "1 2 3 8 " "${deleted}"
}

test_dry_run_deletes_nothing() {
  deleted_ids=()
  DRY_RUN=true evict_package pkg > /dev/null 2>&1
  assert_equal "dry run deletes nothing" "0" "${#deleted_ids[@]}"
}

test_real_run_deletes() {
  deleted_ids=()
  DRY_RUN=false evict_package pkg > /dev/null 2>&1
  local deleted
  deleted=$(printf '%s\n' "${deleted_ids[@]}" | sort --numeric-sort | tr '\n' ' ')
  assert_equal "real run deletes" "1 2 3 8 " "${deleted}"
}

test_pr_numbered_tags() {
  # .base images are tagged by PR number: newest evictable one is kept, and
  # `latest` is permanent.
  local original_pattern=${EVICTABLE_TAG_PATTERN}
  # shellcheck disable=SC2034 # read by the sourced script
  EVICTABLE_TAG_PATTERN='^[0-9]+$'
  # shellcheck disable=SC2034 # read by the sourced script
  KEEP_NEWEST=1
  local versions kept_ids
  versions="[
$(make_version 1 pr_old 2026-01-01T00:00:00Z '["560"]'),
$(make_version 2 pr_new 2026-02-01T00:00:00Z '["561"]'),
$(make_version 3 latest_image 2026-01-01T00:00:00Z '["latest"]')
]"
  kept_ids=$(list_versions_kept_by_tag <<< "${versions}" | sorted_ids)
  assert_equal "PR numbered tags" "2 3 " "${kept_ids}"
  EVICTABLE_TAG_PATTERN=${original_pattern}
}

main() {
  test_versions_kept_by_tag
  test_versions_to_delete
  test_dry_run_deletes_nothing
  test_real_run_deletes
  test_pr_numbered_tags
  exit $((failure_count > 0))
}

main
