# CI build performance

Findings and decisions from issue #541 (CI/site build time). Numbers are from
single GitHub Actions runs, so treat differences under ~100 s as runner noise.

## Where the time goes

`build_site` is dominated by one step: the 11ty build inside
`docker compose run --build build` (~325-440 s cold). Everything else in the
job (checkout, buildx, base image, tarball, artifact upload) is ~80 s combined.
Locally a clean 11ty build takes ~317 s (1422 files written, 342 MB site); a
second local build takes ~12 s because the generated images already exist.

## What we changed

| PR | Change | Effect |
| --- | --- | --- |
| #543 | Eleventy smoke test runs against the `build_site` `_site` artifact (`SMOKE_SKIP_BUILD=1`) instead of doing its own `npm ci` + webpack + full 11ty build | smoke job ~7 min -> ~30-45 s; one full site build per PR |
| #545 | `actions/cache` restores/saves `_site/assets/images` and `_site/assets/thumbnails` in `on_call_build_site.yaml` | compose step 438 s -> 35 s warm; `On PR Test` open-to-green 13m41s -> 4m46s |

## How the image cache works

- `@11ty/eleventy-img` skips an output file if it already exists on disk (no
  mtime comparison) and output names embed a content hash. So restoring last
  run's outputs is safe: an edited photo gets a new filename and is
  regenerated; untouched photos are skipped.
- The cache is ~85 MB and takes ~4 s to save.
- Key: `eleventy-img-<hash of src/shortcodes/**, src/thumbnails.js,
  src/fetch_image.js, package-lock.json>-<run id>`. The run id makes every run
  save a fresh cache; `restore-keys` (the same prefix without the run id)
  restores the newest one. Changing the image code or the `eleventy-img`
  version changes the prefix and starts cold, which is deliberate.
- GitHub scopes caches by ref: a PR can restore its own caches and the default
  branch's, but master cannot restore a PR's. The first master build after a
  cache-key change is therefore cold; it then saves the cache every later PR
  falls back to.
- Cache eviction (7 days unused, 10 GB per repo, least-recently-used first)
  just means an occasional cold build, not a failure.

## Reference timings

| Run | `build_site` | Compose step | Open to green |
| --- | --- | --- | --- |
| Baseline (#538) | ~11 min | ~5+ min | not recorded |
| Cold (#545 first run) | 9m02s | 438 s | 13m41s |
| Warm (#545 second run) | 1m55s | 35 s | 4m46s |
| Master deploy, cold (first after #545) | 7m00s | 324 s | 10m10s (includes deploy) |

## Not done / ideas

- Remaining fixed `build_site` overhead is ~80 s (base image build ~30 s,
  artifact upload ~10 s). The base image build already uses layer caching.
- A PR that adds many new photos only pays for those photos; not yet measured.
- Path filters to skip the full build for docs-only or workflow-only PRs were
  considered but not needed once the warm build is under 2 minutes.
- Measuring step durations: `gh api repos/<owner>/<repo>/actions/jobs/<job id>`
  returns per-step `started_at`/`completed_at`.
