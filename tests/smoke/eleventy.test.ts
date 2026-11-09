import * as path from 'path'
import * as fs from 'fs'
import { spawnSync } from 'child_process'
import { formatDuration, formatFileSize } from './utils'

const ROOT = path.resolve(__dirname, '..', '..')
const SITE_DIR = path.join(ROOT, '_site')
const BUILD_TIMEOUT_MS = 10 * 60 * 1000

// Minimum expected HTML files in the built site (to detect major silent skipping)
const MIN_HTML_FILES = 50

// Key pages that must exist and be non-empty after a successful build
const REQUIRED_PAGES = ['index.html', 'construction_guide.html']

interface BuildResult {
  buildTimeMs: number
  exitCode: number | null
  timedOut: boolean
  output: string
}

function isTimeoutError (error: unknown): boolean {
  return typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === 'ETIMEDOUT'
}

function writeOutput (name: string, value: string): void {
  const outputFile = process.env.GITHUB_OUTPUT
  if (outputFile !== undefined && outputFile !== '') {
    fs.appendFileSync(outputFile, `${name}=${value}\n`)
  }
}

function getDirSizeBytes (dir: string): number {
  if (!fs.existsSync(dir)) return 0
  let size = 0
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      size += getDirSizeBytes(full)
    } else {
      size += fs.statSync(full).size
    }
  }
  return size
}

function countFiles (dir: string, ext: string): number {
  if (!fs.existsSync(dir)) return 0
  let count = 0
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      count += countFiles(full, ext)
    } else if (entry.name.endsWith(ext)) {
      count++
    }
  }
  return count
}

// CI sets this after downloading the _site artifact from build_site, so the
// smoke checks run against the real build instead of repeating a 5+ min one.
const SKIP_BUILD = process.env.SMOKE_SKIP_BUILD === '1'

function runBuild (): BuildResult {
  if (SKIP_BUILD) {
    return { buildTimeMs: 0, exitCode: 0, timedOut: false, output: '' }
  }

  const startTime = Date.now()

  const result = spawnSync('node', ['node_modules/.bin/eleventy', '--quiet'], {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: BUILD_TIMEOUT_MS,
    maxBuffer: 10 * 1024 * 1024
  })

  const buildTimeMs = Date.now() - startTime

  return {
    buildTimeMs,
    exitCode: result.status,
    timedOut: isTimeoutError(result.error),
    output: (result.stdout ?? '') + (result.stderr ?? '')
  }
}

// Pages that intentionally have no layout <head> (e.g. the CMS admin UI)
const CANONICAL_EXEMPT = ['/admin/index.html']
const PRODUCTION_URL = 'https://orionrobots.co.uk'

function listHtmlFiles (dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return listHtmlFiles(full)
    return entry.name.endsWith('.html') ? [full] : []
  })
}

// Each page needs exactly one canonical equal to its served URL (see #537)
function checkCanonicals (): string[] {
  const errors: string[] = []
  for (const file of listHtmlFiles(SITE_DIR)) {
    const rel = '/' + path.relative(SITE_DIR, file).split(path.sep).join('/')
    const html = fs.readFileSync(file, 'utf8')
    if (!html.includes('<head') || CANONICAL_EXEMPT.includes(rel)) continue
    const found = [...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map(m => m[1])
    const served = rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel
    if (found.length !== 1) {
      errors.push(`${rel}: expected 1 canonical, found ${found.length}`)
    } else if (found[0] !== PRODUCTION_URL + served) {
      errors.push(`${rel}: canonical ${found[0]} != ${PRODUCTION_URL + served}`)
    }
  }
  return errors
}

function main (): void {
  console.log(SKIP_BUILD
    ? 'Running 11ty smoke checks against the existing _site…'
    : 'Running 11ty site build smoke test…')

  const result = runBuild()
  const errors: string[] = []

  // Catch build failures
  if (result.exitCode !== 0) {
    if (result.timedOut) {
      errors.push(`Eleventy build timed out after ${formatDuration(BUILD_TIMEOUT_MS)}`)
    } else {
      const code = result.exitCode !== null ? String(result.exitCode) : 'null'
      errors.push(`Eleventy build failed with exit code ${code}`)
    }
    const trimmed = result.output.trim()
    if (trimmed !== '') {
      errors.push(`Output:\n${trimmed}`)
    }
  }

  // Catch silent failures and skipped files — required pages must exist and be non-empty
  for (const page of REQUIRED_PAGES) {
    const pagePath = path.join(SITE_DIR, page)
    if (!fs.existsSync(pagePath)) {
      errors.push(`Required page not found in _site: ${page}`)
    } else if (fs.statSync(pagePath).size === 0) {
      errors.push(`Required page has zero size (silent failure): ${page}`)
    }
  }

  // Detect large-scale silent skipping via a minimum file count threshold
  const htmlFileCount = countFiles(SITE_DIR, '.html')
  if (htmlFileCount < MIN_HTML_FILES) {
    errors.push(
      `Only ${htmlFileCount} HTML files found in _site (expected ≥ ${MIN_HTML_FILES}). Files may have been silently skipped.`
    )
  }

  errors.push(...checkCanonicals())

  // Parse eleventy's reported write count for informational output
  const wroteMatch = result.output.match(/Wrote (\d+) files? in/)
  const reportedCount = (wroteMatch != null) ? parseInt(wroteMatch[1], 10) : null

  const siteSizeBytes = getDirSizeBytes(SITE_DIR)
  const siteSize = formatFileSize(siteSizeBytes)

  const passed = errors.length === 0
  const buildTime = SKIP_BUILD ? 'reused build_site artifact' : formatDuration(result.buildTimeMs)

  // Write outputs for the GitHub Actions workflow to consume in the PR comment
  writeOutput('build_time', buildTime)
  writeOutput('site_size', siteSize)
  writeOutput('file_count', htmlFileCount.toString())

  console.log('\nResults:')
  console.log(`  Status:      ${passed ? '✅ passed' : '❌ failed'}`)
  console.log(`  Build time:  ${buildTime}`)
  console.log(`  Site size:   ${siteSize}`)
  console.log(`  HTML files:  ${htmlFileCount}`)
  if (reportedCount !== null) {
    console.log(`  11ty reported: ${reportedCount} files written`)
  }

  if (errors.length > 0) {
    console.error('\nErrors:')
    for (const e of errors) {
      console.error(`  - ${e}`)
    }
  }

  process.exit(passed ? 0 : 1)
}

main()
