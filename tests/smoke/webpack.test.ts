import * as path from 'path'
import * as fs from 'fs'
import { createRequire } from 'module'
import webpack from 'webpack'
import { formatDuration, formatFileSize } from './utils'

const ROOT = path.resolve(__dirname, '..', '..')
const requireModule = createRequire(__filename)
const webpackConfig = requireModule(path.join(ROOT, 'webpack.config.js')) as webpack.Configuration

interface Asset {
  name: string
  size: number
}

interface BuildResult {
  buildTimeMs: number
  errors: string[]
  warnings: string[]
  assets: Asset[]
}

function writeOutput (name: string, value: string): void {
  const outputFile = process.env.GITHUB_OUTPUT
  if (outputFile !== undefined && outputFile !== '') {
    fs.appendFileSync(outputFile, `${name}=${value}\n`)
  }
}

async function runBuild (): Promise<BuildResult> {
  const startTime = Date.now()

  const config: webpack.Configuration = {
    ...webpackConfig,
    mode: 'production'
  }

  return await new Promise((resolve) => {
    webpack(config).run((err, stats) => {
      const buildTimeMs = Date.now() - startTime

      if (err != null) {
        resolve({ buildTimeMs, errors: [err.message], warnings: [], assets: [] })
        return
      }

      if (stats == null) {
        resolve({
          buildTimeMs,
          errors: ['No stats returned from webpack'],
          warnings: [],
          assets: []
        })
        return
      }

      const info = stats.toJson({
        assets: true,
        errors: true,
        warnings: true,
        modules: false
      })

      resolve({
        buildTimeMs,
        errors: info.errors?.map((e) => e.message) ?? [],
        warnings: info.warnings?.map((w) => w.message) ?? [],
        assets: info.assets?.map((a) => ({ name: a.name, size: a.size })) ?? []
      })
    })
  })
}

async function main (): Promise<void> {
  console.log('Running webpack dist bundle smoke test…')

  const result = await runBuild()

  const errors = [...result.errors]

  // Verify bundle.js was emitted — catches silent skips
  const bundleAsset = result.assets.find((a) => a.name === 'bundle.js')
  if (bundleAsset == null) {
    errors.push('bundle.js was not emitted — build may have silently skipped output')
  }

  // Verify bundle is not empty — catches silent zero-byte outputs
  if ((bundleAsset != null) && bundleAsset.size === 0) {
    errors.push('bundle.js has zero size — this indicates a silent build failure')
  }

  const bundleSize =
    bundleAsset !== undefined ? formatFileSize(bundleAsset.size) : 'N/A'

  const passed = errors.length === 0
  const buildTime = formatDuration(result.buildTimeMs)

  // Write outputs for the GitHub Actions workflow to consume in the PR comment
  writeOutput('status', passed ? 'success' : 'failure')
  writeOutput('build_time', buildTime)
  writeOutput('bundle_size', bundleSize)

  console.log('\nResults:')
  console.log(`  Status:      ${passed ? '✅ passed' : '❌ failed'}`)
  console.log(`  Build time:  ${buildTime}`)
  console.log(`  Bundle size: ${bundleSize}`)

  if (errors.length > 0) {
    console.error('\nErrors:')
    for (const e of errors) {
      console.error(`  - ${e}`)
    }
  }

  if (result.warnings.length > 0) {
    console.warn('\nWarnings:')
    for (const w of result.warnings) {
      console.warn(`  - ${w}`)
    }
  }

  process.exit(passed ? 0 : 1)
}

main().catch((err: unknown) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
