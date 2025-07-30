FROM node:24-bullseye AS base

# Create app directory
WORKDIR /app/src

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the app source
COPY . /app/src

FROM base AS debug

RUN apt-get update && apt-get install -y \
    less \
    iputils-ping \
    dnsutils

FROM dcycle/broken-link-checker:3 AS broken_link_checker

FROM httpd:2.4.64 AS httpd_serve

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy the http2 configuration
COPY .github/scripts/staging/http2.conf /usr/local/apache2/conf/http2.conf

FROM base
