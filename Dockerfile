# Base: node with npm dependencies installed
# Source code is volume-mounted for development use
FROM node:25-bullseye AS base

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

# HTTP serve: serves the built static site via Apache
# For staging: build context is _site/ which must contain httpd.conf
# For local testing: build context is repo root; config is at .github/scripts/staging/default.conf
FROM httpd:2.4.66 AS httpd_serve

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

COPY . /usr/local/apache2/htdocs/
RUN if [ -f /usr/local/apache2/htdocs/httpd.conf ]; then \
      cp /usr/local/apache2/htdocs/httpd.conf /usr/local/apache2/conf/httpd.conf; \
    elif [ -f /usr/local/apache2/htdocs/.github/scripts/staging/default.conf ]; then \
      cp /usr/local/apache2/htdocs/.github/scripts/staging/default.conf /usr/local/apache2/conf/httpd.conf; \
    else \
      echo "ERROR: No Apache configuration file found"; \
      exit 1; \
    fi && \
    rm -rf /usr/local/apache2/htdocs/.github \
           /usr/local/apache2/htdocs/httpd.conf

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

COPY tests/ ./tests/

CMD ["npm", "run", "test:bdd"]

# Default stage: base with npm dependencies (for development with volume-mounted source)
FROM base
