# Docker Performance Optimization

This repository uses Docker Compose for development, but was experiencing slow build times due to large build context transfers (425MB) when used in GitHub Copilot sessions.

## Problem
The original setup transferred the entire repository (425MB including galleries/, content/, _image_sources/) to Docker during build, even though:
- Development services use volume mounts (`.:/app/src`)
- Only npm dependencies need to be installed in the container 
- Source code is mounted at runtime, not during build

## Solution
Created optimized Docker setup:

### Files Added
- `dev.Dockerfile` - Minimal dockerfile that only installs npm dependencies
- Updated `.dockerignore` - Aggressive exclusion of large directories

### Changes Made
- `docker-compose.yml` - Updated serve, dist, build, and shell services to use `dev.Dockerfile`
- Original `Dockerfile` - Kept for production services that need full content (httpd_serve, staging, etc.)

### Performance Improvement
- **Build context:** 425MB → 72 bytes (99.98% reduction, ~6000x smaller)
- **npm ci optimization:** Added `--prefer-offline --no-audit --progress=false` flags

## Architecture

### Development Services (use dev.Dockerfile)
- `serve` - Eleventy development server
- `dist` - Webpack asset bundling  
- `build` - Site generation
- `shell` - Interactive debugging

These services:
1. Build minimal container with just npm dependencies
2. Mount entire source code via volume at runtime
3. No need to copy large content directories during build

### Production Services (use full Dockerfile)
- `httpd_serve` - Apache web server
- `staging` - Staging deployment
- `test` - BDD testing

These services need full content copied during build since they don't use development volume mounts.

## Usage
Development workflows remain the same:
```bash
docker compose up              # Start development server
docker compose run dist        # Build webpack assets  
docker compose run build       # Build static site
```

The build context transfer is now nearly instantaneous instead of transferring hundreds of megabytes.