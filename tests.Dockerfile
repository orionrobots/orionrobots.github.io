FROM node:18-bullseye

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including test dependencies)
RUN npm ci

# Copy test files
COPY tests/ ./tests/

# Set default command to run BDD tests
CMD ["npm", "run", "test:bdd"]