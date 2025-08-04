FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy test files and the necessary scripts from package.json
COPY tests/ ./tests/

# Set default command to run BDD tests
CMD ["npm", "run", "test:bdd"]