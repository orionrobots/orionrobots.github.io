FROM node:24-bullseye

# Create app directory
WORKDIR /app/src

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the app source
COPY . /app/src

