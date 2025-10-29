# Minimal development Dockerfile
# Only installs npm dependencies since content is volume-mounted
FROM node:25-bullseye AS base

# Create app directory
WORKDIR /app/src

# Copy package files and install dependencies
COPY package.json package-lock.json ./

# Optimize npm ci for better performance in CI environments
RUN npm ci --prefer-offline --no-audit --progress=false

# Development debug build 
FROM base AS debug

RUN apt-get update && apt-get install -y \
    less \
    iputils-ping \
    dnsutils

# Source code will be volume-mounted at runtime

# Default stage - just npm dependencies installed
FROM base
