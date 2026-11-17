# Base: node with npm dependencies installed
# Source code is volume-mounted for development use
FROM node:26-bookworm AS base

WORKDIR /app/src

COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit --progress=false

# Debug: base with additional debugging tools
FROM base AS debug

RUN apt-get update && apt-get install -y \
  less \
  iputils-ping \
  dnsutils \
  && rm -rf /var/lib/apt/lists/*

# Broken link checker
FROM dcycle/broken-link-checker:3 AS broken_link_checker

# HTTP serve: Apache with the staging config, serving a *mounted* site.
# _site/ (including its .htaccess) is volume-mounted at run time, like the rsynced
# production docroot, so this image does not depend on the site content: it only
# rebuilds when this stage or the conf changes (no 340 MB COPY per run).
FROM httpd:2.4.69 AS httpd_serve

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

COPY .github/scripts/staging/default.conf /usr/local/apache2/conf/httpd.conf

# Tests: base with Playwright for BDD integration testing
FROM base AS tests

RUN apt-get update && apt-get install -y \
  libnss3 \
  libatk-bridge2.0-0 \
  libdrm2 \
  libxkbcommon0 \
  libgtk-3-0 \
  libgbm1 \
  libasound2 \
  && rm -rf /var/lib/apt/lists/*

RUN npx playwright install chromium --with-deps

COPY cucumber.js ./
# tests/ is volume-mounted by the compose `test` service, so it is not baked in:
# the image then depends only on this file, package*.json and cucumber.js, which
# lets CI build it once per change and pull it (see on_call_test_image.yaml).

CMD ["npm", "run", "test:bdd"]

# Default stage: base with npm dependencies (for development with volume-mounted source)
FROM base
