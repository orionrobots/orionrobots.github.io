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
    less

FROM base
