# Performance Testing

Playwright-based Core Web Vitals measurement for orionrobots pages.

Each run uses a **fresh, uncached browser context** — simulating a cold first visit
where the browser has no cached assets (no Bootstrap bundle, no images, etc.).

## Metrics collected

| Metric | What it measures | Good threshold |
|--------|-----------------|----------------|
| **TTFB** | Time to First Byte | < 800 ms |
| **FCP** | First Contentful Paint | < 1.8 s |
| **LCP** | Largest Contentful Paint | < 2.5 s |
| **CLS** | Cumulative Layout Shift | < 0.1 |
| **TBT** | Total Blocking Time (long tasks) | < 200 ms |
| DOM Load | `DOMContentLoaded` event | — |
| Page Load | `load` event | — |
| Transfer Size | Compressed bytes received | — |
| Decoded Body | Uncompressed body size | — |

Thresholds follow [Google Web Vitals](https://web.dev/vitals/).

## Pages tested

- Homepage `/`
- A recent blog post
- The Arduino tags page `/tags/arduino/`

Edit the `PAGES` array at the top of [measure-vitals.js](measure-vitals.js) to add or change URLs.

## Quick start

### Against production

```bash
docker compose run perf
```

### Against the local dev server

Start the server in one terminal (first time takes a few minutes):

```bash
docker compose up serve
```

Then in another terminal:

```bash
BASE_URL=http://serve:8081 docker compose run perf
```

> Both services share the default docker-compose network, so `serve` is reachable by hostname.

### Without Docker

```bash
npm run test:perf
# or with a local server running on port 8081:
BASE_URL=http://localhost:8081 npm run test:perf
```

## Configuration

Copy `.env.example` to `.env` and edit as needed:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `https://orionrobots.github.io` | Site to test |
| `PAGESPEED_API_KEY` | *(empty)* | Google Cloud API key for PageSpeed Insights |
| `PERF_RUNS` | `3` | Playwright runs per page (median is reported) |
| `OUTPUT_JSON` | *(empty)* | File path to save a JSON report |

## Google PageSpeed Insights (optional)

PSI provides both **lab data** (Lighthouse) and **field data** (CrUX — real-user 75th
percentile) for the production site. It is only fetched when:

1. `PAGESPEED_API_KEY` is set in `.env`
2. `BASE_URL` is the production site (`https://orionrobots.co.uk`)

Get a key from [Google Cloud Console](https://console.cloud.google.com/apis/credentials),
then enable the **PageSpeed Insights API**.

PSI is **not** fetched for local URLs because Google's servers can't reach them.

## Saving reports

```bash
OUTPUT_JSON=perf-report.json docker compose run perf
```

The JSON file is gitignored (`perf-report*.json`), so it won't be committed.
Compare runs manually, or commit specific snapshots with a meaningful name.

## Typical output

```
╔══════════════════════════════════════════════════════════════╗
║              Orionrobots Web Performance Report              ║
╚══════════════════════════════════════════════════════════════╝

  Base URL:  https://orionrobots.github.io
  Date:      2026-06-04T10:00:00.000Z
  Runs:      3 per page (uncached fresh browser context)
  PSI:       Skipped (set PAGESPEED_API_KEY to enable)

Measuring: Homepage (https://orionrobots.github.io/)
  Run 1/3 ... FCP=1.23s  LCP=2.10s  CLS=0.042
  Run 2/3 ... FCP=1.18s  LCP=2.05s  CLS=0.038
  Run 3/3 ... FCP=1.21s  LCP=2.08s  CLS=0.040

════════════════════════════════════════════════════════════════
  RESULTS
════════════════════════════════════════════════════════════════

  Homepage
  ────────────────────────────────────────────────────────────
    HTTP Status              200
    TTFB                     312ms  [GOOD]
    FCP                      1.21s  [GOOD]
    LCP                      2.08s  [GOOD]
    CLS                      0.040  [GOOD]
    TBT                      180ms  [GOOD]
    DOM Load                 1.45s
    Page Load                2.90s
    Transfer Size            145 KB
    Decoded Body Size        480 KB
    (metrics above are medians of 3 runs)
```
