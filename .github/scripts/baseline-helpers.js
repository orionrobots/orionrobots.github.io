// .github/scripts/baseline-helpers.js
//
// Shared helpers used by the PR comment scripts in on_pr_webpack_smoke.yaml
// and on_pr_eleventy_smoke.yaml (via actions/github-script).
//
// Loaded at runtime with:
//   const { rollingAvg, deltaCell } = require(
//     require('path').join(process.env.GITHUB_WORKSPACE, '.github/scripts/baseline-helpers.js')
//   )

'use strict'

/**
 * Computes the rolling average of a numeric field across all baseline entries.
 * @param {Array} baselines - Array of baseline entry objects.
 * @param {Function} getter - Function that extracts the numeric field from an entry.
 * @returns {number|null} Rolling average, or null if no valid data.
 */
function rollingAvg (baselines, getter) {
  const vals = baselines.map(getter).filter(v => typeof v === 'number' && v > 0)
  if (vals.length === 0) return null
  return vals.reduce((a, b) => a + b, 0) / vals.length
}

/**
 * Formats a percentage delta between the current value and the rolling average.
 * Colour-codes the result:
 *   🟢  |delta| ≤ 5%  — normal noise
 *   🟡  |delta| ≤ 20% — worth noting
 *   🔴  |delta| > 20% — significant deviation
 * @param {number} current - The value from the current run.
 * @param {number|null} average - The rolling average from stored baselines.
 * @returns {string} Formatted delta string for use in a Markdown table cell.
 */
function deltaCell (current, average) {
  if (average === null || average === 0 || current === 0) return '—'
  const pct = ((current - average) / average) * 100
  const sign = pct >= 0 ? '+' : ''
  const label = `${sign}${pct.toFixed(1)}%`
  if (Math.abs(pct) <= 5) return `🟢 ${label}`
  if (Math.abs(pct) <= 20) return `🟡 ${label}`
  return `🔴 ${label}`
}

module.exports = { rollingAvg, deltaCell }
