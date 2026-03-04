import * as path from 'path';
import * as fs from 'fs';
import webpack from 'webpack';
import { formatDuration } from './utils';

const ROOT = path.resolve(__dirname, '..', '..');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const webpackConfig = require(path.join(ROOT, 'webpack.config.js')) as webpack.Configuration;

interface Asset {
  name: string;
  size: number;
}

interface BuildResult {
  buildTimeMs: number;
  errors: string[];
  warnings: string[];
  assets: Asset[];
}

function writeOutput(name: string, value: string): void {
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${value}\n`);
  }
}

async function runBuild(): Promise<BuildResult> {
  const startTime = Date.now();

  const config: webpack.Configuration = {
    ...webpackConfig,
    mode: 'production',
  };

  return new Promise((resolve) => {
    webpack(config).run((err, stats) => {
      const buildTimeMs = Date.now() - startTime;

      if (err) {
        resolve({ buildTimeMs, errors: [err.message], warnings: [], assets: [] });
        return;
      }

      if (!stats) {
        resolve({
          buildTimeMs,
          errors: ['No stats returned from webpack'],
          warnings: [],
          assets: [],
        });
        return;
      }

      const info = stats.toJson({
        assets: true,
        errors: true,
        warnings: true,
        modules: false,
      });

      resolve({
        buildTimeMs,
        errors: info.errors?.map((e) => e.message) ?? [],
        warnings: info.warnings?.map((w) => w.message) ?? [],
        assets: info.assets?.map((a) => ({ name: a.name, size: a.size })) ?? [],
      });
    });
  });
}

async function main(): Promise<void> {
  console.log('Running webpack dist bundle smoke test…');

  const result = await runBuild();

  const errors = [...result.errors];

  // Verify bundle.js was emitted — catches silent skips
  const bundleAsset = result.assets.find((a) => a.name === 'bundle.js');
  if (!bundleAsset) {
    errors.push('bundle.js was not emitted — build may have silently skipped output');
  }

  // Verify bundle is not empty — catches silent zero-byte outputs
  if (bundleAsset && bundleAsset.size === 0) {
    errors.push('bundle.js has zero size — this indicates a silent build failure');
  }

  const bundleSizeKb =
    bundleAsset !== undefined ? (bundleAsset.size / 1024).toFixed(1) : 'N/A';

  const passed = errors.length === 0;
  const buildTime = formatDuration(result.buildTimeMs);

  // Write outputs for the GitHub Actions workflow to consume in the PR comment
  writeOutput('status', passed ? 'success' : 'failure');
  writeOutput('build_time', buildTime);
  writeOutput('bundle_size_kb', bundleSizeKb);

  console.log('\nResults:');
  console.log(`  Status:      ${passed ? '✅ passed' : '❌ failed'}`);
  console.log(`  Build time:  ${buildTime}`);
  console.log(`  Bundle size: ${bundleSizeKb} KB`);

  if (errors.length > 0) {
    console.error('\nErrors:');
    for (const e of errors) {
      console.error(`  - ${e}`);
    }
  }

  if (result.warnings.length > 0) {
    console.warn('\nWarnings:');
    for (const w of result.warnings) {
      console.warn(`  - ${w}`);
    }
  }

  process.exit(passed ? 0 : 1);
}

main().catch((err: unknown) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
