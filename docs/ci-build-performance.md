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
| #551 | Base image is built only when `push_tag` is set; `_site` artifact is an uncompressed tar (`compression-level: 0`) | tar 9 s -> 0 s, upload 10 s -> 4 s; base build (~33 s) skipped on ordinary PRs |
| #552 | `serve`, `dist` and `build` share one image (compose anchor); in CI only `dist` builds it, `build`/`serve` reuse it (`!reset`) | one image build and export per run instead of two; image build + run 41-52 s -> 34 s |

## Rules worth knowing

- **Base image build.** `build_site` runs `docker build --target base` only when
  `push_tag` is set. `on_pr_test.yaml` sets it when `Dockerfile`, `.dockerignore`,
  `docker-compose.yml`, `docker-compose.ci.yml`, `package.json`,
  `package-lock.json` or the build workflows change, and master always sets it
  (`latest`). The compose build still builds the Dockerfile on every run via the
  registry layer cache, so a broken Dockerfile fails the PR regardless. If you
  add another file that affects the image, add it to that detector list.
- **One site image in CI.** `docker-compose.ci.yml` makes `dist` the only
  service that builds the image; `build` and `serve` have `build: !reset null`.
  The workflow builds it (`build dist`) and then runs `build` without `--build`.
  Locally every service keeps its build section, so `docker compose run build`
  and `docker compose up serve` work from a clean checkout. If CI ever runs a
  service without a build section before the image step, it will fail to find
  `orionrobots-site:dev`.
- **Artifact format.** `_site.tar` (uncompressed). All consumers use
  `tar -xf _site.tar`: smoke, staging/gallery and the master deploy.

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
| Warm, restoring master's cache (#547) | 2m13s | 41 s | 5m17s |
| #551 (base rebuilt: workflow changed) | 2m29s | 52 s | 5m26s |
| #552 (base rebuilt: compose files changed) | 1m47s | 12 s image + 22 s run | 4m40s |
| **Ordinary PR, base build skipped (#553, docs only)** | **1m27s** | 20 s image + 28 s run | **4m24s** |

## Not done / ideas

- Remaining `build_site` overhead is checkout/buildx/login (~25 s), the image
  build and container starts (~34 s) and the cache save (3-22 s, variable). The
  standalone base image build had no layer cache, which is why it cost ~33 s
  before it was made conditional.
- Docker stays on the build path on purpose (local and CI parity). A possible
  next step is to tag the site image by a hash of `Dockerfile` + `package*.json`
  and pull it instead of rebuilding when unchanged; not needed yet.
- Staging and gallery tests (~2.5 min each, in parallel) are now the longest
  stage after `build_site`.
- A PR that adds many new photos only pays for those photos; not yet measured.
- Path filters to skip the full build for docs-only or workflow-only PRs were
  considered but not needed once the warm build is under 2 minutes.
- Measuring step durations: `gh api repos/<owner>/<repo>/actions/jobs/<job id>`
  returns per-step `started_at`/`completed_at`.
