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

# COPY _site /var/www/html/
COPY .github/scripts/staging/default.conf /usr/local/apache2/conf/httpd.conf

FROM base AS tests

# Set default command to run BDD tests
CMD ["npm", "run", "test:bdd"]

FROM base
