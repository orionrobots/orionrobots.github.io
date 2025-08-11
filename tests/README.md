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

## Running Tests

To run the BDD integration tests:
```bash
docker compose run test
```

## Prerequisites

- Playwright browsers installed (handled automatically in Docker)
- Site built and served (see project README)