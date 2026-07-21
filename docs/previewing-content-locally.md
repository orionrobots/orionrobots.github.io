# Previewing Content Locally

## Canonical method: `docker compose up serve`

```bash
docker compose up serve
```

This is the canonical way to preview the site while writing or editing content. It:

1. Builds the Webpack bundle (`dist` service) as a prerequisite
2. Starts the Eleventy development server on **http://localhost:8081**
3. Mounts the working directory into the container, so edits to content files are picked up automatically by Eleventy's file watcher

The first run takes around 3–5 minutes while Docker builds the image and Webpack compiles assets. Subsequent runs are much faster because the image is cached.

> **Do not cancel the process early.** The build must complete before Eleventy starts watching. Wait for a line like `Watching…` or `Server at http://localhost:8081/` to appear before opening the browser.

## Stopping the server

Press `Ctrl+C` in the terminal running `docker compose up serve`.

## When to do a full rebuild instead

If you've changed Webpack-managed assets (`src/`), or if the site looks stale, run:

```bash
docker compose run dist
```

before re-running `docker compose up serve`. The `serve` service depends on `dist` completing successfully, so running `docker compose up serve` fresh will also trigger a Webpack rebuild automatically.

## What the serve service does not cover

- **Apache htaccess rules** — The `serve` service uses the Eleventy dev server, not Apache. To test htaccess redirects and rewrite rules use `docker compose up staging` (see [staging docs](../README.md#staging-test-environment)).
- **Final production build** — To produce the static `_site/` output as it would be deployed, run `docker compose run build`.
