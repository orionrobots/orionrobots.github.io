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

function readBaseline () {
  try {
    return JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8'))
  } catch {
    return { maxBaselines: 4, baselines: [] }
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

// Validate that we have at least some real data before recording
if (entry.webpack.bundleSizeBytes === 0 && entry.eleventy.htmlFileCount === 0) {
  console.error('ERROR: All metrics are zero — skipping baseline update to avoid polluting history')
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
