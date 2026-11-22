#!/usr/bin/env bash
# Tests the keep/delete decisions of evict_ci_images.sh with stubbed gh/docker.
# Usage: .github/scripts/tests/test_evict_ci_images.sh
set -euo pipefail

HERE=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
# shellcheck source=../evict_ci_images.sh
source "${HERE}/../evict_ci_images.sh"

H1=$(printf 'a%.0s' {1..64}) H2=$(printf 'b%.0s' {1..64}) H3=$(printf 'c%.0s' {1..64})
failures=0

check() { # name expected actual
  if [[ "$2" == "$3" ]]; then echo "ok   $1"; else
    echo "FAIL $1: expected [$2] got [$3]"; failures=$((failures + 1)); fi
}

# id, name(digest), created_at, tags(json array)
v() { printf '{"id":%s,"name":"sha256:%s","created_at":"%s","metadata":{"container":{"tags":%s}}}' "$1" "$2" "$3" "$4"; }
VERSIONS="[
$(v 1 idx1 2026-01-01T00:00:00Z "[\"${H1}\"]"),
$(v 2 plat1 2026-01-01T00:00:00Z '[]'),
$(v 3 att1 2026-01-01T00:00:00Z '[]'),
$(v 4 idx2 2026-02-01T00:00:00Z "[\"${H2}\"]"),
$(v 5 plat2 2026-02-01T00:00:00Z '[]'),
$(v 6 idx3 2026-03-01T00:00:00Z "[\"${H3}\"]"),
$(v 7 cache 2026-01-01T00:00:00Z '["cache"]'),
$(v 8 orphan 2026-01-01T00:00:00Z '[]'),
$(v 9 young 2026-03-02T00:00:00Z '[]'),
$(v 10 other 2026-01-01T00:00:00Z '["v1.0"]')
]"

KEEP_NEWEST=2
# Newest 2 hashes (H2, H3), the cache tag and the non-hash tag; H1 is evictable.
keepers=$(tagged_keepers <<< "${VERSIONS}" | cut -d' ' -f1 | sort -n | tr '\n' ' ')
check "tagged keepers" "4 6 7 10 " "${keepers}"

# Children of kept indexes are protected; stub: idx2 -> plat2, idx3 -> none.
child_digests() { case "$1" in *@sha256:idx2) echo sha256:plat2 ;; esac; }
KEEP=$(mktemp)
{
  while read -r _ digest _; do
    echo "${digest}"
    child_digests "img@${digest}"
  done < <(tagged_keepers <<< "${VERSIONS}")
} > "${KEEP}"
del=$(deletions 2026-03-01T12:00:00Z "${KEEP}" <<< "${VERSIONS}" | cut -d' ' -f1 | sort -n | tr '\n' ' ')
# 1 (old hash), 2/3 (its children), 8 (orphan) go; 5 (child of kept) and 9 (young) stay.
check "deletions" "1 2 3 8 " "${del}"
rm -f "${KEEP}"

# End to end with stubbed gh: dry run must not delete, a real run must.
list_versions() { echo "${VERSIONS}"; }
deleted=()
delete_version() { deleted+=("$2"); }
cutoff() { echo 2026-03-01T12:00:00Z; }
DRY_RUN=true evict_package pkg > /dev/null 2>&1
check "dry run deletes nothing" "0" "${#deleted[@]}"
DRY_RUN=false evict_package pkg > /dev/null 2>&1
check "real run deletes" "1 2 3 8" "$(printf '%s\n' "${deleted[@]}" | sort -n | tr '\n' ' ' | sed 's/ $//')"

exit $((failures > 0))
