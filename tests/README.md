# BDD Tests

This directory contains BDD tests for validating article content and layout.

## Test Files

### `article-content.feature`
Contains BDD scenarios for testing article content and layout validation.

### `tab-gallery.feature`
Regression tests for the `{% tab_gallery %}` shortcode's client-side script, run against a real gallery page. Tagged `@gallery`: CI runs these as a separate `gallery_test` job, in parallel with the remaining scenarios (`not @gallery`).

## Running Tests

To run the BDD integration tests:
```bash
docker compose run test
```

To run a subset by tag:
```bash
docker compose run test npm run test:bdd -- --tags @gallery
```

## Prerequisites

- Playwright browsers installed (handled automatically in Docker)
- Site built and served (see project README)