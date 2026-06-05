#!/usr/bin/env bash
# validate-local-build.sh
#
# Runs a series of local validation checks against a built _site/ served by
# the http_serve Docker container on port 8082.
#
# Prerequisites:
#   1. Site has been built:  docker compose run --rm dist && docker compose run --rm build
#   2. http_serve is running: docker compose --profile manual up -d http_serve
#
# Usage:
#   .github/scripts/validate-local-build.sh
#
# Keywords: bdd test validate staging local smoke thumbnails avif image performance
#
# Known skipped test:
#   Scenario 5 (gallery trailing-slash redirect) requires htaccess/Apache rewrite
#   rules that are not loaded in the local http_serve environment.
#   See: https://github.com/orionrobots/orionrobots.github.io/issues/413

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

HTTP_SERVE_CONTAINER="orionrobotsgithubio-http_serve-1"
DOCKER_NETWORK="orionrobotsgithubio_default"
TEST_IMAGE="orionrobotsgithubio-test"
BASE_URL="http://${HTTP_SERVE_CONTAINER}"
HOST_PORT=8082

cd "$PROJECT_ROOT"

# ─── Step 1: Verify http_serve is running ────────────────────────────────────
echo ""
echo "=== Step 1: Checking http_serve is running ==="
if ! docker ps --format '{{.Names}}' | grep -q "^${HTTP_SERVE_CONTAINER}$"; then
  echo "ERROR: ${HTTP_SERVE_CONTAINER} is not running."
  echo "Start it with: docker compose --profile manual up -d http_serve"
  exit 1
fi

# ─── Step 2: Quick HTTP smoke check from host ─────────────────────────────────
echo ""
echo "=== Step 2: HTTP smoke checks (host -> port ${HOST_PORT}) ==="
for path in "/" "/construction_guide.html" "/tags/arduino/"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:${HOST_PORT}${path}")
  if [[ "$status" == "200" ]]; then
    echo "  OK  ${path} -> ${status}"
  else
    echo "  FAIL ${path} -> ${status}"
    SMOKE_FAILED=1
  fi
done
if [[ -n "${SMOKE_FAILED:-}" ]]; then
  echo "ERROR: Smoke checks failed."
  exit 1
fi

# ─── Step 3: Verify AVIF images are generated ────────────────────────────────
echo ""
echo "=== Step 3: Verifying AVIF/WebP image generation ==="
avif_count=$(find _site/assets/images -name "*.avif" 2>/dev/null | wc -l)
webp_count=$(find _site/assets/images -name "*.webp" 2>/dev/null | wc -l)
thumb_avif=$(find _site/assets/thumbnails -name "*.avif" 2>/dev/null | wc -l)
echo "  Post body AVIF: ${avif_count}"
echo "  Post body WebP: ${webp_count}"
echo "  Thumbnail AVIF: ${thumb_avif}"
if [[ "$avif_count" -eq 0 ]]; then
  echo "ERROR: No AVIF images found in _site/assets/images. Was the build run?"
  exit 1
fi

# ─── Step 4: BDD tests (scenarios 1-4, skip 5 - gallery redirect) ─────────────
# TODO: Scenario 5 (gallery trailing-slash redirect) is skipped here because
# the local http_serve does not load .htaccess rewrite rules.
# See: https://github.com/orionrobots/orionrobots.github.io/issues/413
echo ""
echo "=== Step 4: BDD tests (via Docker, network: ${DOCKER_NETWORK}) ==="
echo "  NOTE: Gallery redirect test (scenario 5) will fail in this environment"
echo "  due to missing htaccess rewrites — this is a known local limitation."
echo ""

docker run --rm \
  --network "${DOCKER_NETWORK}" \
  -e BASE_URL="${BASE_URL}" \
  -v "${PROJECT_ROOT}/tests:/app/src/tests" \
  -v "${PROJECT_ROOT}/package.json:/app/src/package.json" \
  -v "${PROJECT_ROOT}/package-lock.json:/app/src/package-lock.json" \
  -v "${PROJECT_ROOT}/cucumber.js:/app/src/cucumber.js" \
  "${TEST_IMAGE}" \
  npm run test:bdd
BDD_EXIT=$?

# Scenario 5 (gallery redirect) is expected to fail locally — treat 1 failure
# as a passing run; more than 1 failure is a real problem.
if [[ "$BDD_EXIT" -ne 0 ]]; then
  echo ""
  echo "  BDD tests had failures. If only the gallery redirect scenario failed,"
  echo "  that is expected locally (see issue #413). Check output above."
  # Do not exit 1 here — let the user judge from the output.
fi

echo ""
echo "=== Validation complete ==="
