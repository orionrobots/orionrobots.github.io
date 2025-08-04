FROM node:24-bullseye AS base

# Create app directory
WORKDIR /app/src

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy rest of the app source
COPY . /app/src

FROM base AS debug

RUN apt-get update && apt-get install -y \
    less \
    iputils-ping \
    dnsutils

FROM dcycle/broken-link-checker:3 AS broken_link_checker

FROM httpd:2.4.64 AS httpd_serve

# Install curl for healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy Apache configuration - flexible approach for both contexts
# For staging: httpd.conf will be in the build context  
# For development: default.conf will be sourced from .github/scripts/staging/
COPY . /tmp/build_context/
RUN if [ -f /tmp/build_context/httpd.conf ]; then \
      echo "Using httpd.conf for staging configuration"; \
      cp /tmp/build_context/httpd.conf /usr/local/apache2/conf/httpd.conf; \
    elif [ -f /tmp/build_context/default.conf ]; then \
      echo "Using default.conf from build context"; \
      cp /tmp/build_context/default.conf /usr/local/apache2/conf/httpd.conf; \
    elif [ -f /tmp/build_context/.github/scripts/staging/default.conf ]; then \
      echo "Using default.conf from .github/scripts/staging/"; \
      cp /tmp/build_context/.github/scripts/staging/default.conf /usr/local/apache2/conf/httpd.conf; \
    else \
      echo "ERROR: No configuration file found"; \
      exit 1; \
    fi

# Copy site content to web directory
COPY . /usr/local/apache2/htdocs/

FROM base AS tests

# Install necessary packages for Playwright
RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk-bridge2.0-0 \
    libdrm2 \
    libxkbcommon0 \
    libgtk-3-0 \
    libgbm1 \
    libasound2 \
    && rm -rf /var/lib/apt/lists/*

# Install Playwright browsers
RUN npx playwright install chromium --with-deps

# Set default command to run BDD tests
CMD ["npm", "run", "test:bdd"]

FROM base
