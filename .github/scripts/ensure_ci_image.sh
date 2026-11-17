#!/usr/bin/env bash
# Ensure a prebuilt CI image exists on ghcr.io, tagged by a hash of its inputs.
#
# Usage: ensure_ci_image.sh <output-name> <image> <docker-target> <input-file>...
#
# Writes "<output-name>=<tag>" to $GITHUB_OUTPUT, then builds and pushes the
# image only if that tag is not in the registry yet. A failed build or push is
# a warning, not an error: jobs that consume the image fall back to building
# it themselves (e.g. a token without packages:write, such as Dependabot's).
set -euo pipefail

BUILDER=ci-builder

# Tag = hash of the files that determine the image, so it only changes when
# the image would.
compute_tag() {
  cat -- "$@" | sha256sum | cut -d' ' -f1
}

image_exists() {
  docker manifest inspect "$1" > /dev/null 2>&1
}

# Registry layer cache needs a docker-container buildx builder; only created
# when we actually have to build, so the common (image exists) path stays fast.
ensure_builder() {
  docker buildx inspect "${BUILDER}" > /dev/null 2>&1 \
    || docker buildx create --name "${BUILDER}" --driver docker-container --use > /dev/null
}

build_and_push() {
  local image=$1 tag=$2 target=$3
  ensure_builder
  docker buildx build --target "${target}" \
    --cache-from "type=registry,ref=${image}:cache" \
    --cache-to "type=registry,ref=${image}:cache,mode=max" \
    --tag "${image}:${tag}" --push .
}

main() {
  local output=$1 image=$2 target=$3
  shift 3
  local tag
  tag=$(compute_tag "$@")

  echo "${output}=${tag}" >> "${GITHUB_OUTPUT:?GITHUB_OUTPUT is not set}"

  if image_exists "${image}:${tag}"; then
    echo "${image}:${tag} already exists" | tee -a "${GITHUB_STEP_SUMMARY:-/dev/null}"
    return 0
  fi

  if build_and_push "${image}" "${tag}" "${target}"; then
    echo "Built and pushed ${image}:${tag}" | tee -a "${GITHUB_STEP_SUMMARY:-/dev/null}"
  else
    echo "::warning::Could not build/push ${image}:${tag}; jobs will build it themselves"
  fi
}

main "$@"
