# Article Content Tests

This directory contains BDD tests for validating article content and layout.

## Test Files

### `article-content.feature`
Contains two scenarios testing the article at `/2025/07/08/08-comparing-anker-power-packs.html`:

1. **Article Content Validation**: Tests that the article has:
   - Tags navigation with links to tag slugs
   - Post header in H2 element  
   - Page title containing post title and "orionrobots"
   - Visible images inside article tag without dead links
   - Date and author in div element
   - Footer with Discord and YouTube links
   - Main navigation menu at top

2. **Desktop Layout Validation**: Tests that in desktop view:
   - Images, tables and text don't overflow the article container margin

### `validate-article.sh`
A simple bash script that validates article structure without requiring Playwright. This is useful for:
- Quick validation during development
- CI environments where Playwright installation fails
- Manual testing

## Running Tests

### BDD Tests (Preferred)
```bash
# With local server
BASE_URL=http://localhost:8080 npm run test:bdd

# With Docker (includes staging server)
docker compose --profile manual run test
```

### Simple Validation (Fallback)
```bash
# Start a local server first
cd _site && python3 -m http.server 8080

# Run validation
./tests/validate-article.sh
```

## Prerequisites

### For BDD Tests
- Playwright browsers installed (`npx playwright install`)
- Site built and served (see project README)

### For Simple Validation  
- `curl` command available
- Site served on localhost:8080

## Test Coverage

The tests validate that the article meets all requirements specified in issue #262:

- ✅ Set of tags in nav linking to tag slug places
- ✅ Post header in H2 element  
- ✅ Page title contains post title and "orionrobots"
- ✅ Visible images inside article tag (not dead links)
- ✅ Date and author in div element
- ✅ Footer with Discord and YouTube links
- ✅ Main menu navigation at top
- ✅ Desktop layout doesn't overflow into sidebar

## Article Structure Verified

The target article `/2025/07/08/08-comparing-anker-power-packs.html` contains:

- Title: "Comparing anker power packs | Orionrobots - Learn to build robots at home"
- H2 header with `class="page-header"`
- 4 tag links: `/tags/robotics-at-home`, `/tags/robotics-projects`, `/tags/raspberry-pi`, `/tags/robot-building`
- 7 images within `<article>` tag with proper src attributes
- Date/author in `<div class="date text-secondary">` with `<time>` and author info
- Footer with Discord (`discord.gg`) and YouTube (`youtube.com/orionrobots`) links
- Main navigation in `<nav class="navbar">`