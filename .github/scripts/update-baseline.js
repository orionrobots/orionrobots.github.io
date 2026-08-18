#!/usr/bin/env node
// .github/scripts/update-baseline.js
//
// Appends a new build-metrics entry to docs/build-baselines.json, then trims
// the array to the last `maxBaselines` entries.
//
// Expected environment variables (all numeric strings):
//   BASELINE_SHA              — git SHA of the commit being recorded
//   WEBPACK_BUILD_TIME_MS     — webpack bundle build time in ms
//   WEBPACK_BUNDLE_SIZE_BYTES — size of dist/bundle.js in bytes
//   ELEVENTY_BUILD_TIME_MS    — Eleventy full-site build time in ms
//   ELEVENTY_SITE_SIZE_BYTES  — total _site directory size in bytes
//   ELEVENTY_HTML_FILE_COUNT  — number of HTML files in _site

'use strict'

const fs = require('fs')
const path = require('path')

const GIT_SHA_LENGTH = 40

const ROOT = path.resolve(__dirname, '..', '..')
const BASELINE_FILE = path.join(ROOT, 'docs', 'build-baselines.json')

const DEFAULT_DESCRIPTION = 'Rolling build performance baselines for orionrobots.github.io.\n\nThis file is maintained automatically. After each successful push to master the\non_push_update_baseline workflow runs both smoke tests, records the raw metrics\nhere, and commits the result with \'[skip ci]\' so no build loop is triggered.\n\nMetrics recorded per entry:\n  webpack.buildTimeMs     — webpack production bundle build time in milliseconds\n  webpack.bundleSizeBytes — size of dist/bundle.js in bytes\n  eleventy.buildTimeMs    — Eleventy full-site build time in milliseconds\n  eleventy.siteSizeBytes  — total size of the _site output directory in bytes\n  eleventy.htmlFileCount  — number of HTML files generated in _site\n\nHow baselines are used in PRs:\n  The rolling average of all stored entries is computed for each metric and shown\n  alongside the current PR run value. A percentage delta is displayed and colour-\n  coded so reviewers can immediately tell whether a change is within normal noise\n  (🟢 ≤5%), worth noting (🟡 5–20%), or a significant regression/improvement\n  (🔴 >20%).\n\nRetention:\n  Only the most recent \'maxBaselines\' entries are kept. Older entries are dropped\n  when a new one is appended, giving a rolling window rather than unbounded growth.\n  Four entries is enough to smooth out single-run noise while staying responsive\n  to genuine trends.'

function readBaseline () {
  try {
    const data = JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8'))
    // Restore the description if it was lost (e.g. manually edited out)
    if (!data.description) data.description = DEFAULT_DESCRIPTION
    return data
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.warn(`WARNING: Could not parse ${BASELINE_FILE}: ${err.message} — starting fresh`)
    }
    return { description: DEFAULT_DESCRIPTION, maxBaselines: 4, baselines: [] }
  }
}

function safeInt (envVar) {
  const val = parseInt(process.env[envVar] || '0', 10)
  return Number.isFinite(val) ? val : 0
}

const data = readBaseline()

const entry = {
  date: new Date().toISOString(),
  sha: (process.env.BASELINE_SHA || 'unknown').slice(0, GIT_SHA_LENGTH),
  webpack: {
    buildTimeMs: safeInt('WEBPACK_BUILD_TIME_MS'),
    bundleSizeBytes: safeInt('WEBPACK_BUNDLE_SIZE_BYTES')
  },
  eleventy: {
    buildTimeMs: safeInt('ELEVENTY_BUILD_TIME_MS'),
    siteSizeBytes: safeInt('ELEVENTY_SITE_SIZE_BYTES'),
    htmlFileCount: safeInt('ELEVENTY_HTML_FILE_COUNT')
  }
}

// Validate that every required metric has a non-zero value before recording.
// A partial entry (e.g. webpack passed but eleventy failed, or vice-versa) would
// consume a slot in the limited rolling window and skew the rolling averages.
const missingMetrics = []
if (entry.webpack.buildTimeMs === 0)     missingMetrics.push('WEBPACK_BUILD_TIME_MS')
if (entry.webpack.bundleSizeBytes === 0) missingMetrics.push('WEBPACK_BUNDLE_SIZE_BYTES')
if (entry.eleventy.buildTimeMs === 0)    missingMetrics.push('ELEVENTY_BUILD_TIME_MS')
if (entry.eleventy.siteSizeBytes === 0)  missingMetrics.push('ELEVENTY_SITE_SIZE_BYTES')
if (entry.eleventy.htmlFileCount === 0)  missingMetrics.push('ELEVENTY_HTML_FILE_COUNT')

if (missingMetrics.length > 0) {
  console.error(`ERROR: The following metrics are zero or missing — skipping baseline update to avoid polluting history:\n  ${missingMetrics.join('\n  ')}`)
  process.exit(1)
}

data.baselines.push(entry)

const max = typeof data.maxBaselines === 'number' ? data.maxBaselines : 4
if (data.baselines.length > max) {
  data.baselines = data.baselines.slice(data.baselines.length - max)
}

fs.writeFileSync(BASELINE_FILE, JSON.stringify(data, null, 2) + '\n')
console.log(`Baseline updated: ${data.baselines.length} entry/entries stored (max ${max})`)
console.log(`  webpack  build: ${entry.webpack.buildTimeMs} ms, bundle: ${entry.webpack.bundleSizeBytes} bytes`)
console.log(`  eleventy build: ${entry.eleventy.buildTimeMs} ms, site: ${entry.eleventy.siteSizeBytes} bytes, html: ${entry.eleventy.htmlFileCount}`)
