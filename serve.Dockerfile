FROM node:18-bullseye
# Install dependencies

WORKDIR /src
COPY package.json package-lock.json ./

RUN npm install
