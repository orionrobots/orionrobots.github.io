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

FROM httpd:2.4.63 AS httpd_serve

# COPY _site /var/www/html/
COPY _drafts/staging/http2.conf /etc/httpd/conf/httpd.conf

FROM base
