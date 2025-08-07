# Orionrobots Website

**ALWAYS** reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

Orionrobots is a static website about robotics using Eleventy (11ty) static site generator with Webpack for asset bundling. The site includes a blog with Jekyll-style posts, wiki pages, and robotics tutorials. It's hosted as a GitHub Pages-style site with Apache configuration.

## Working Effectively

### CRITICAL: Bootstrap and Build Commands
- Bootstrap the repository:
  - `npm install` -- **NEVER CANCEL** - takes 1 minute. Docker npm ci is BROKEN, use npm install instead.
- Build assets and site:
  - `npm run dist` -- builds webpack bundle.js, takes 7 seconds. Set timeout to 30+ seconds.
  - `npm run 11ty` -- **NEVER CANCEL** - builds full static site, takes 2.5 minutes. Set timeout to 180+ seconds.
- Full development workflow:
  ```bash
  npm install
  npm run dist
  npm run 11ty
  ```

### CRITICAL: Docker Known Issues
- **DO NOT USE** `docker compose up` commands - Docker npm ci fails with "Exit handler never called!" error
- Docker builds timeout after 7+ minutes with npm installation issues
- Use native npm commands on host instead of Docker for development

### Development Server
- Run local development server:
  - `npm run serve` -- starts Eleventy dev server on port 8081, **NEVER CANCEL** - builds then watches files. Set timeout to 180+ seconds for initial build.
  - Alternative: After building, serve with Python: `cd _site && python3 -m http.server 8082`

### Testing Commands
- BDD integration tests:
  - `npm run test:bdd` or `npm test` -- runs Cucumber.js tests with Playwright
  - **CRITICAL**: Playwright installation often fails in CI environments
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
- Run `npm run dist && npm run 11ty` and verify `_site` directory is created with content
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
docker-compose.yml   -- BROKEN Docker setup
package.json         -- npm dependencies and scripts
src/                 -- Source files for Webpack
webpack.config.js    -- Webpack configuration
```

### Important Scripts and Tools
- `.github/scripts/new_post.sh "Title"` -- creates new blog post with proper folder structure
- `npm run stats` -- generates webpack bundle analysis
- `npm run check-missing-tags` -- lists files without proper tagging

## Build Process Details

### Build Order (Critical)
1. **Webpack Build** (`npm run dist`): Creates `dist/bundle.js` with CSS and JS assets
2. **Eleventy Build** (`npm run 11ty`): Processes markdown, creates HTML, copies assets to `_site/`

### Timing Expectations
- npm install: ~1 minute (standard timeout OK)
- webpack dist: ~7 seconds (set 30+ second timeout)  
- Eleventy build: ~2.5 minutes (**NEVER CANCEL** - set 180+ second timeout)
- Eleventy serve: ~2.5 minutes initial build then watches (**NEVER CANCEL** - set 180+ second timeout)

### Known Build Warnings
- Sass deprecation warnings about @import rules (normal, build continues)
- Webpack bundle size warnings (normal, ~330KB bundle.js)
- Missing thumbnail warnings for some images (normal, falls back gracefully)

## Dependencies and Environment

### Required Dependencies
- Node.js 20+ (tested with v20.19.4)
- npm 10+ (tested with v10.8.2)
- Python 3.12+ (for simple HTTP server testing)

### Optional Dependencies
- Docker (BROKEN - do not rely on Docker commands)
- pre-commit (for git hooks)
- Playwright (for BDD testing, often fails to install)

## Configuration Files

### Key Config Files to Understand
- `_config.yml`: Jekyll-style config still used for menu, site metadata
- `.eleventy.js`: Main Eleventy configuration, plugins, filters, shortcodes
- `package.json`: All npm scripts and dependencies
- `webpack.config.js`: Asset bundling configuration

### Development vs Production
- Development: Use `npm run serve` for live reloading
- Production: Build with `npm run dist && npm run 11ty`, serve from `_site/`

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

### Troubleshooting Build Issues
1. Clear `node_modules`: `rm -rf node_modules && npm install`
2. Clear build outputs: `rm -rf _site dist`
3. Rebuild: `npm run dist && npm run 11ty`
4. **NEVER** try Docker commands - they are broken

## CI/CD Information

### GitHub Workflows
- **DO NOT** rely on Docker workflows - they have npm ci issues
- Staging tests run BDD Playwright tests (may be flaky)
- Deployment happens to Apache hosting with htaccess rules

### Pre-commit Hooks
- Run `pre-commit install` to set up git hooks
- Uses mega-linter with most linters disabled
- Focus on security, GitHub Actions, JS, and Markdown linting

## Repository Context

This is a long-running Jekyll-to-Eleventy migration project with:
- Mixed content structure (legacy `_posts/` and new `content/`)
- Jekyll-style frontmatter and Liquid templates
- Bootstrap 5 + jQuery frontend
- Extensive robotics content and tutorials
- Apache hosting with custom htaccess rules

**CRITICAL REMINDER**: Docker builds are BROKEN. Always use native npm commands. Never cancel long-running builds - they can take 2.5+ minutes.