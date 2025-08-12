# Orionrobots Website

**ALWAYS** reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

Orionrobots is a static website about robotics using Eleventy (11ty) static site generator with Webpack for asset bundling. The site includes a blog with Jekyll-style posts, wiki pages, and robotics tutorials. It's hosted on 3rd party hosting with Apache configuration.

## Working Effectively

### CRITICAL: Bootstrap and Build Commands
- Bootstrap and run the repository:
  - `docker compose up` -- **NEVER CANCEL** - builds and starts development server. Set timeout to 300+ seconds for initial build.
- Build assets and site manually:
  - `docker compose run dist` -- builds webpack bundle.js, takes ~30 seconds
  - `docker compose run build` -- builds full static site, takes ~3 minutes. Set timeout to 240+ seconds.

### Development Server
- Run local development server:
  - `docker compose up serve` -- starts Eleventy dev server on port 8081, **NEVER CANCEL** - builds then watches files. Set timeout to 300+ seconds for initial build.

### Testing Commands
- BDD integration tests:
  - `docker compose run test` -- runs Cucumber.js tests with Playwright in containerized environment
  - **Note**: Playwright installation may fail in some CI environments
  - Tests require a running staging server to test against

## Validation Scenarios

### Manual Validation Required
**ALWAYS** manually validate any new code by testing these scenarios after making changes:
1. **Homepage Loading**: Visit the root page and verify navigation works
2. **Blog Post Access**: Navigate to a recent blog post and verify images load
3. **Wiki Navigation**: Test wiki links and cross-references work
4. **Search Functionality**: Test any search features if they exist

### Staging Test Validation
Always test these key pages that are verified in CI:
- Homepage: `/` (should return 200 OK)
- Construction guide: `/construction_guide.html` (should return 200 OK)
- Wiki pages: `/wiki/lego` and similar (check for 404s)

### Build Verification
- Run `docker compose run dist && docker compose run build` and verify `_site` directory is created with content
- Check that `_site/index.html` exists and contains proper HTML structure
- Verify `dist/bundle.js` exists and is approximately 330KB

## Key Project Structure

### Root Directory Contents
```
.eleventy.js          -- Eleventy configuration
.github/             -- GitHub workflows and scripts
_config.yml          -- Jekyll-style configuration (still used by Eleventy)
_includes/           -- Liquid templates and layouts
_posts/              -- Old Jekyll posts structure
_site/               -- Generated static site (build output)
content/             -- Main content (blog posts, wiki pages)
dist/                -- Webpack build output (bundle.js)
docker-compose.yml   -- Docker development environment setup
package.json         -- npm dependencies and scripts
src/                 -- Source files for Webpack
tests/staging        -- Gherkin-based BDD tests for website functionality
webpack.config.js    -- Webpack configuration
```

### Important Scripts and Tools
- `.github/scripts/new_post.sh "Title"` -- creates new blog post with proper folder structure
- `npm run stats` -- generates webpack bundle analysis
- `npm run check-missing-tags` -- lists files without proper tagging

## Build Process Details

### Build Order (Critical)
1. **Webpack Build** (`docker compose run dist`): Creates `dist/bundle.js` with CSS and JS assets
2. **Eleventy Build** (`docker compose run build`): Processes markdown, creates HTML, copies assets to `_site/`

### Timing Expectations
- Docker compose up: ~4-5 minutes for initial build and start (set 300+ second timeout)
- Docker dist build: ~30 seconds (set 60+ second timeout)
- Docker site build: ~3 minutes (**NEVER CANCEL** - set 240+ second timeout)

### Known Build Warnings
- Sass deprecation warnings about @import rules (normal, build continues)
- Webpack bundle size warnings (normal, ~330KB bundle.js)
- Missing thumbnail warnings for some images (normal, falls back gracefully)

## Dependencies and Environment

### Required Dependencies
- Docker and Docker Compose (primary development environment)
- Node.js 20+ (for native development alternative)
- npm 10+ (for native development alternative)
- Python 3.12+ (for simple HTTP server testing)

### Optional Dependencies
- pre-commit (for git hooks)
- Playwright (for BDD testing, included in Docker test environment)

## Configuration Files

### Key Config Files to Understand
- `_config.yml`: Jekyll-style config still used for menu, site metadata
- `.eleventy.js`: Main Eleventy configuration, plugins, filters, shortcodes
- `package.json`: All npm scripts and dependencies
- `webpack.config.js`: Asset bundling configuration

### Development vs Production
- Development: Use `docker compose up serve` for live reloading, or `npm run serve` for native development
- Production: Build with `docker compose run dist && docker compose run build` or `npm run dist && npm run 11ty`, serve from `_site/`

## Common Development Tasks

### Creating New Blog Posts
```bash
.github/scripts/new_post.sh "Your Post Title"
```
This creates properly structured content with frontmatter in `content/YYYY/MM/` directory.

### Adding New Assets
- Images: Place in `galleries/` or `content/YYYY/MM/` for posts
- CSS/JS: Add to `src/` and import in `src/index.js`
- Static files: Use Eleventy passthrough copy in `.eleventy.js`

### Adding scripts or utilities
- Ensure these are run through a docker compose command

### Troubleshooting Build Issues
1. Clear containers and rebuild: `docker compose down && docker compose build --no-cache`
2. Clear build outputs: `docker compose run --rm base rm -rf _site dist`
3. Rebuild: `docker compose run dist && docker compose run build`
4. Alternative native troubleshooting:
   - Clear `node_modules`: `rm -rf node_modules && npm install`
   - Clear build outputs: `rm -rf _site dist`
   - Rebuild: `npm run dist && npm run 11ty`

## CI/CD Information

### GitHub Workflows
- Uses Docker Compose for consistent CI/CD environments
- Staging tests run BDD Playwright tests (may be flaky)
- Deployment happens to Apache hosting with htaccess rules

### Pre-commit Hooks
- Run `pre-commit install` to set up git hooks
- Uses mega-linter with most linters disabled
- Focus on security, GitHub Actions, JS, and Markdown linting

## Repository Context

This is a Jekyll-to-Eleventy migrated project (now fully Eleventy) with:
- Mixed content structure (legacy `_posts/` and new `content/`)
- Jekyll-style frontmatter and Liquid templates
- Bootstrap 5 + jQuery frontend
- Extensive robotics content and tutorials
- Apache hosting with custom htaccess rules

**CRITICAL REMINDER**: Use Docker Compose as the primary development method. Never cancel long-running builds - they can take 3-5+ minutes for initial setup.
