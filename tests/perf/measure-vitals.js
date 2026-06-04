#!/usr/bin/env node
/**
 * Orionrobots Web Performance Reporter
 *
 * Measures Core Web Vitals using Playwright with a fresh, uncached browser
 * context per run — simulating a first-time visitor with no browser cache.
 *
 * Usage:
 *   docker compose run perf
 *   BASE_URL=http://serve:8081 docker compose run perf
 *   node tests/perf/measure-vitals.js
 *
 * Environment variables (can be placed in .env — see .env.example):
 *   BASE_URL           Target site base URL (default: https://orionrobots.github.io)
 *   PAGESPEED_API_KEY  Google Cloud API key for PageSpeed Insights (optional)
 *   PERF_RUNS          Playwright measurement runs per page (default: 3)
 *   OUTPUT_JSON        File path to write JSON report (optional)
 */

'use strict';

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

// ─── Configuration ────────────────────────────────────────────────────────────

const BASE_URL = (process.env.BASE_URL || 'https://orionrobots.co.uk').replace(/\/$/, '');
const PAGESPEED_API_KEY = process.env.PAGESPEED_API_KEY || '';
const PERF_RUNS = Math.max(1, parseInt(process.env.PERF_RUNS || '3', 10));
const OUTPUT_JSON = process.env.OUTPUT_JSON || '';
const IS_PRODUCTION = BASE_URL.includes('orionrobots.co.uk');

// Pages to measure. Add or remove entries to customise the test suite.
const PAGES = [
  {
    name: 'Homepage',
    path: '/',
  },
  {
    name: 'Blog Post – Comparing Anker Power Packs (2025)',
    path: '/2025/07/08/08-comparing-anker-power-packs.html',
  },
  {
    name: 'Tags Page – Arduino',
    path: '/tags/arduino/',
  },
];

// ─── Core Web Vitals thresholds (Google recommendations) ─────────────────────
//  https://web.dev/vitals/

const THRESHOLDS = {
  ttfb: { good: 800,  poor: 1800  }, // ms – Time to First Byte
  fcp:  { good: 1800, poor: 3000  }, // ms – First Contentful Paint
  lcp:  { good: 2500, poor: 4000  }, // ms – Largest Contentful Paint
  cls:  { good: 0.1,  poor: 0.25  }, // score – Cumulative Layout Shift
  tbt:  { good: 200,  poor: 600   }, // ms – Total Blocking Time
};

// ─── ANSI colour helpers ──────────────────────────────────────────────────────

const C = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  red:    '\x1b[31m',
  cyan:   '\x1b[36m',
};

function gradeColor(value, thresholds) {
  if (value <= thresholds.good) return C.green;
  if (value <= thresholds.poor) return C.yellow;
  return C.red;
}

function gradeLabel(value, thresholds) {
  if (value <= thresholds.good) return 'GOOD';
  if (value <= thresholds.poor) return 'NEEDS IMPROVEMENT';
  return 'POOR';
}

// ─── Formatters ───────────────────────────────────────────────────────────────

function fmtMs(ms) {
  if (ms == null || isNaN(ms)) return 'N/A';
  return ms >= 1000 ? `${(ms / 1000).toFixed(2)}s` : `${Math.round(ms)}ms`;
}

function fmtCls(v) {
  if (v == null || isNaN(v)) return 'N/A';
  return v.toFixed(3);
}

function fmtBytes(bytes) {
  if (!bytes) return 'N/A';
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

// ─── Statistics ───────────────────────────────────────────────────────────────

function median(arr) {
  const sorted = [...arr].filter((v) => v != null && !isNaN(v)).sort((a, b) => a - b);
  if (!sorted.length) return 0;
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

// ─── Browser init script injected before page load ────────────────────────────
// Sets up PerformanceObservers to capture LCP, CLS, and TBT (long tasks).

const PERF_INIT_SCRIPT = `
(function () {
  window.__orionPerf = { lcp: 0, cls: 0, tbt: 0 };

  if (typeof PerformanceObserver === 'undefined') return;

  // Largest Contentful Paint
  try {
    new PerformanceObserver(function (list) {
      var entries = list.getEntries();
      if (entries.length) {
        window.__orionPerf.lcp = entries[entries.length - 1].startTime;
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {}

  // Cumulative Layout Shift
  try {
    var clsVal = 0;
    new PerformanceObserver(function (list) {
      list.getEntries().forEach(function (entry) {
        if (!entry.hadRecentInput) clsVal += entry.value;
      });
      window.__orionPerf.cls = clsVal;
    }).observe({ type: 'layout-shift', buffered: true });
  } catch (e) {}

  // Total Blocking Time (long tasks exceeding 50 ms threshold)
  try {
    new PerformanceObserver(function (list) {
      list.getEntries().forEach(function (entry) {
        window.__orionPerf.tbt += Math.max(0, entry.duration - 50);
      });
    }).observe({ type: 'longtask', buffered: true });
  } catch (e) {}
})();
`;

// ─── Measurement ─────────────────────────────────────────────────────────────

async function measureSingleRun(url) {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // A completely fresh context gives us an uncached load every time.
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.addInitScript(PERF_INIT_SCRIPT);

    const response = await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 60000,
    });

    // Allow observers to settle after network idle.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const httpStatus = response ? response.status() : 0;

    const metrics = await page.evaluate(() => {
      /* global performance, window */
      const nav = performance.getEntriesByType('navigation')[0] || {};
      const paint = performance.getEntriesByType('paint');
      const fcpEntry = paint.find((e) => e.name === 'first-contentful-paint');
      const data = window.__orionPerf || {};

      // Sum transferSize by resource type across all sub-resources.
      // transferSize is 0 for cached resources, so we fall back to encodedBodySize.
      const resources = performance.getEntriesByType('resource');
      const resourceWeight = { js: 0, css: 0, img: 0, other: 0, total: 0 };
      resources.forEach(function (r) {
        const bytes = r.transferSize || r.encodedBodySize || 0;
        resourceWeight.total += bytes;
        const type = r.initiatorType;
        if (type === 'script') { resourceWeight.js += bytes; }
        else if (type === 'css' || r.name.match(/\.css(\?|$)/)) { resourceWeight.css += bytes; }
        else if (type === 'img' || r.name.match(/\.(png|jpg|jpeg|gif|webp|svg|avif)(\?|$)/i)) { resourceWeight.img += bytes; }
        else { resourceWeight.other += bytes; }
      });

      return {
        ttfb:            nav.responseStart            || 0,
        fcp:             fcpEntry ? fcpEntry.startTime : 0,
        lcp:             data.lcp                     || 0,
        cls:             data.cls                     || 0,
        tbt:             data.tbt                     || 0,
        domLoad:         nav.domContentLoadedEventEnd || 0,
        pageLoad:        nav.loadEventEnd             || 0,
        transferSize:    nav.transferSize             || 0,
        encodedBodySize: nav.encodedBodySize          || 0,
        decodedBodySize: nav.decodedBodySize          || 0,
        resourceWeight,
      };
    });

    return { httpStatus, ...metrics };
  } finally {
    await context.close();
    await browser.close();
  }
}

async function measurePage(pageConfig) {
  const url = BASE_URL + pageConfig.path;
  const runs = [];

  for (let i = 1; i <= PERF_RUNS; i++) {
    process.stdout.write(`  Run ${i}/${PERF_RUNS} ...`);
    try {
      const result = await measureSingleRun(url);
      runs.push(result);
      process.stdout.write(
        ` FCP=${fmtMs(result.fcp)}  LCP=${fmtMs(result.lcp)}  CLS=${fmtCls(result.cls)}\n`
      );
    } catch (err) {
      process.stdout.write(` ${C.red}ERROR: ${err.message}${C.reset}\n`);
    }
  }

  if (!runs.length) {
    throw new Error(`All ${PERF_RUNS} run(s) failed for ${url}`);
  }

  return {
    url,
    name: pageConfig.name,
    path: pageConfig.path,
    runs,
    summary: {
      ttfb:            median(runs.map((r) => r.ttfb)),
      fcp:             median(runs.map((r) => r.fcp)),
      lcp:             median(runs.map((r) => r.lcp)),
      cls:             median(runs.map((r) => r.cls)),
      tbt:             median(runs.map((r) => r.tbt)),
      domLoad:         median(runs.map((r) => r.domLoad)),
      pageLoad:        median(runs.map((r) => r.pageLoad)),
      transferSize:    median(runs.map((r) => r.transferSize)),
      decodedBodySize: median(runs.map((r) => r.decodedBodySize)),
      resourceWeight: {
        js:    median(runs.map((r) => r.resourceWeight?.js    ?? 0)),
        css:   median(runs.map((r) => r.resourceWeight?.css   ?? 0)),
        img:   median(runs.map((r) => r.resourceWeight?.img   ?? 0)),
        other: median(runs.map((r) => r.resourceWeight?.other ?? 0)),
        total: median(runs.map((r) => r.resourceWeight?.total ?? 0)),
      },
    },
  };
}

// ─── Google PageSpeed Insights ────────────────────────────────────────────────

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });
        res.on('end', () => {
          try { resolve(JSON.parse(body)); }
          catch (e) { reject(new Error(`JSON parse error: ${e.message}`)); }
        });
      })
      .on('error', reject);
  });
}

async function fetchPSI(pageUrl) {
  if (!PAGESPEED_API_KEY || !IS_PRODUCTION) return null;

  const strategies = ['mobile', 'desktop'];
  const results = {};

  for (const strategy of strategies) {
    const apiUrl =
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` +
      `?url=${encodeURIComponent(pageUrl)}` +
      `&key=${PAGESPEED_API_KEY}` +
      `&strategy=${strategy}`;

    try {
      const data = await httpsGet(apiUrl);

      if (data.error) {
        console.warn(`  ${C.yellow}PSI API error (${strategy}): ${data.error.message}${C.reset}`);
        continue;
      }

      const lhr = data.lighthouseResult || {};
      const audits = lhr.audits || {};
      const score = lhr.categories?.performance?.score;
      const crux = data.loadingExperience?.metrics || {};

      results[strategy] = {
        score:  score != null ? Math.round(score * 100) : null,
        lab: {
          fcp: audits['first-contentful-paint']?.displayValue,
          lcp: audits['largest-contentful-paint']?.displayValue,
          tbt: audits['total-blocking-time']?.displayValue,
          cls: audits['cumulative-layout-shift']?.displayValue,
          si:  audits['speed-index']?.displayValue,
          tti: audits['interactive']?.displayValue,
        },
        // CrUX field data (real-user 75th percentile) — may be absent for low-traffic pages
        field: crux.FIRST_CONTENTFUL_PAINT_MS ? {
          fcp: crux.FIRST_CONTENTFUL_PAINT_MS?.percentile,
          lcp: crux.LARGEST_CONTENTFUL_PAINT_MS?.percentile,
          cls: crux.CUMULATIVE_LAYOUT_SHIFT_SCORE
            ? crux.CUMULATIVE_LAYOUT_SHIFT_SCORE.percentile / 100
            : null,
          inp: crux.INTERACTION_TO_NEXT_PAINT?.percentile,
        } : null,
      };
    } catch (err) {
      console.warn(`  ${C.yellow}Failed to fetch PSI (${strategy}): ${err.message}${C.reset}`);
    }
  }

  return Object.keys(results).length ? results : null;
}

// ─── Report printing ──────────────────────────────────────────────────────────

function printMetricRow(label, rawValue, formatted, thresholds) {
  const pad = label.padEnd(24);
  if (!thresholds) {
    console.log(`    ${pad} ${formatted}`);
    return;
  }
  const color = gradeColor(rawValue, thresholds);
  const label2 = gradeLabel(rawValue, thresholds);
  console.log(`    ${pad} ${color}${formatted}${C.reset}  ${C.dim}[${label2}]${C.reset}`);
}

function printPageReport(result) {
  const s = result.summary;

  console.log(`\n  ${C.bold}${C.cyan}${result.name}${C.reset}`);
  console.log(`  ${C.dim}${result.url}${C.reset}`);
  console.log(`  ${'─'.repeat(60)}`);

  printMetricRow('HTTP Status', null, String(result.runs[0]?.httpStatus ?? 'N/A'), null);
  printMetricRow('TTFB',        s.ttfb,  fmtMs(s.ttfb),    THRESHOLDS.ttfb);
  printMetricRow('FCP',         s.fcp,   fmtMs(s.fcp),     THRESHOLDS.fcp);
  printMetricRow('LCP',         s.lcp,   fmtMs(s.lcp),     THRESHOLDS.lcp);
  printMetricRow('CLS',         s.cls,   fmtCls(s.cls),    THRESHOLDS.cls);
  printMetricRow('TBT',         s.tbt,   fmtMs(s.tbt),     THRESHOLDS.tbt);
  printMetricRow('DOM Load',    null,    fmtMs(s.domLoad),  null);
  printMetricRow('Page Load',   null,    fmtMs(s.pageLoad), null);
  printMetricRow('Doc Transfer Size', null, fmtBytes(s.transferSize),    null);
  printMetricRow('Doc Decoded Size',  null, fmtBytes(s.decodedBodySize), null);
  const rw = s.resourceWeight;
  if (rw && rw.total > 0) {
    const totalStr = `${fmtBytes(rw.total)}  (JS: ${fmtBytes(rw.js)}, CSS: ${fmtBytes(rw.css)}, Img: ${fmtBytes(rw.img)}${rw.other ? `, Other: ${fmtBytes(rw.other)}` : ''})`;
    printMetricRow('Sub-resource Weight', null, totalStr, null);
  }

  if (PERF_RUNS > 1) {
    console.log(`  ${C.dim}  (metrics above are medians of ${result.runs.length} runs)${C.reset}`);
  }
}

function printPSIReport(psiData) {
  if (!psiData) return;

  console.log(`\n  ${C.bold}  Google PageSpeed Insights (lab + field data)${C.reset}`);

  for (const [strategy, data] of Object.entries(psiData)) {
    const scoreColor = data.score >= 90 ? C.green : data.score >= 50 ? C.yellow : C.red;
    const strategyTitle = strategy.charAt(0).toUpperCase() + strategy.slice(1);
    const scoreStr = data.score != null ? `${data.score}/100` : 'N/A';
    console.log(`    ${strategyTitle}: ${scoreColor}${C.bold}${scoreStr}${C.reset}`);

    if (Object.values(data.lab).some(Boolean)) {
      const lab = data.lab;
      console.log(`      Lab  – FCP: ${lab.fcp || 'N/A'}, LCP: ${lab.lcp || 'N/A'}, TBT: ${lab.tbt || 'N/A'}, CLS: ${lab.cls || 'N/A'}`);
      if (lab.si) console.log(`             SI: ${lab.si}, TTI: ${lab.tti || 'N/A'}`);
    }

    if (data.field) {
      const f = data.field;
      console.log(`      Field – FCP p75: ${fmtMs(f.fcp)}, LCP p75: ${fmtMs(f.lcp)}, INP p75: ${fmtMs(f.inp)}`);
      if (f.cls != null) console.log(`              CLS p75: ${fmtCls(f.cls)}`);
    } else {
      console.log(`      ${C.dim}(No CrUX field data available for this page)${C.reset}`);
    }
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n${C.bold}${C.cyan}╔══════════════════════════════════════════════════════════════╗`);
  console.log(  `║              Orionrobots Web Performance Report              ║`);
  console.log(  `╚══════════════════════════════════════════════════════════════╝${C.reset}`);

  console.log(`\n  ${C.bold}Base URL:${C.reset}  ${BASE_URL}`);
  console.log(`  ${C.bold}Date:${C.reset}      ${new Date().toISOString()}`);
  console.log(`  ${C.bold}Runs:${C.reset}      ${PERF_RUNS} per page (uncached fresh browser context)`);

  if (PAGESPEED_API_KEY && IS_PRODUCTION) {
    console.log(`  ${C.bold}PSI:${C.reset}       Enabled`);
  } else if (!IS_PRODUCTION) {
    console.log(`  ${C.dim}PSI:       Skipped (PSI only available for production URLs)${C.reset}`);
  } else {
    console.log(`  ${C.dim}PSI:       Skipped (set PAGESPEED_API_KEY to enable)${C.reset}`);
  }

  const allResults = [];
  let hasErrors = false;

  for (const pageConfig of PAGES) {
    console.log(`\n${C.bold}Measuring: ${pageConfig.name}${C.reset} (${BASE_URL}${pageConfig.path})`);

    let result;
    try {
      result = await measurePage(pageConfig);
    } catch (err) {
      console.error(`  ${C.red}Failed: ${err.message}${C.reset}`);
      allResults.push({ name: pageConfig.name, path: pageConfig.path, error: err.message });
      hasErrors = true;
      continue;
    }

    if (IS_PRODUCTION && PAGESPEED_API_KEY) {
      process.stdout.write(`  Fetching Google PageSpeed Insights ...`);
      result.psi = await fetchPSI(result.url);
      process.stdout.write(result.psi ? ' done\n' : ' no data\n');
    }

    allResults.push(result);
  }

  // ── Results ──
  console.log(`\n\n${C.bold}${C.cyan}${'═'.repeat(64)}`);
  console.log(`  RESULTS`);
  console.log(`${'═'.repeat(64)}${C.reset}\n`);
  console.log(
    `  Thresholds: ${C.green}GOOD${C.reset} / ${C.yellow}NEEDS IMPROVEMENT${C.reset} / ${C.red}POOR${C.reset}` +
    ` — per Google Web Vitals\n`
  );

  for (const result of allResults) {
    if (result.error) {
      console.log(`  ${C.red}✗ ${result.name}${C.reset}: ${result.error}`);
      continue;
    }
    printPageReport(result);
    printPSIReport(result.psi);
  }

  // ── JSON output ──
  if (OUTPUT_JSON) {
    const reportPath = path.resolve(OUTPUT_JSON);
    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl: BASE_URL,
      runs: PERF_RUNS,
      thresholds: THRESHOLDS,
      pages: allResults,
    };
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n  ${C.green}JSON report saved: ${reportPath}${C.reset}`);
  }

  console.log('');
  if (hasErrors) process.exit(1);
}

main().catch((err) => {
  console.error(`\n${C.red}Fatal: ${err.message}${C.reset}`);
  process.exit(1);
});
