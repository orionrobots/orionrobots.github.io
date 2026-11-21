# CI build performance

Findings and decisions from issue #541 (CI/site build time). Numbers are from
single GitHub Actions runs, so treat differences under ~20-30 s as runner
noise (and larger ones with care).

## Summary

PR open-to-green (`On PR Test`) went from ~13m41s on a cold run (~11 min
`build_site` plus ~2.5 min tests, and a separate ~7 min smoke build) to
**~3m45s** with warm caches. The pieces: one site build per PR (smoke test reuses
the artifact), generated images cached across runs, the base image built only
when needed, an uncompressed artifact, one shared site image, and prebuilt
test/httpd images pulled from ghcr.io instead of built in each test job. Docker
stays on the build path on purpose (local and CI parity).

## Where the time goes

`build_site` is dominated by one step: the 11ty build inside
`docker compose run --build build` (~325-440 s cold). Everything else in the
job (checkout, buildx, base image, tarball, artifact upload) is ~80 s combined.
Locally a clean 11ty build takes ~317 s (1422 files written, 342 MB site); a
second local build takes ~12 s because the generated images already exist.

Today (warm) a PR's critical path is roughly: `build_site` ~1m30-2m15, then the
staging/gallery jobs ~65-70 s (checkout ~12 s, artifact ~5 s, pull the two
prebuilt images ~22 s, start staging + run the BDD scenarios ~20-25 s). The
smoke test (~30-45 s) and lint run in parallel and are off the critical path.

## What we changed

| PR | Change | Effect |
| --- | --- | --- |
| #543 | Eleventy smoke test runs against the `build_site` `_site` artifact (`SMOKE_SKIP_BUILD=1`) instead of doing its own `npm ci` + webpack + full 11ty build | smoke job ~7 min -> ~30-45 s; one full site build per PR |
| #545 | `actions/cache` restores/saves `_site/assets/images` and `_site/assets/thumbnails` in `on_call_build_site.yaml` | compose step 438 s -> 35 s warm; `On PR Test` open-to-green 13m41s -> 4m46s |
| #551 | Base image is built only when `push_tag` is set; `_site` artifact is an uncompressed tar (`compression-level: 0`) | tar 9 s -> 0 s, upload 10 s -> 4 s; base build (~33 s) skipped on ordinary PRs |
| #552 | `serve`, `dist` and `build` share one image (compose anchor); in CI only `dist` builds it, `build`/`serve` reuse it (`!reset`) | one image build and export per run instead of two; image build + run 41-52 s -> 34 s |
| #557 | Deleted the unused `http2.conf` and `httpd.conf` staging confs and the `httpd.conf` artifact round-trip | tidy; `default.conf` is the one staging server config |
| #558 | BDD test image prebuilt and pulled from ghcr.io by input hash (fallback: compose builds it) | image build 29-39 s -> pull 16-25 s per test job (modest) |
| #559 | `httpd_serve` Docker stage bakes only the staging conf + curl; `_site` is volume-mounted (read-only for staging) instead of `COPY`d in | staging step ~100 s -> ~33 s; test jobs 152/144 s -> 92/86 s |
| #567 | httpd image also prebuilt on ghcr.io by hash (`on_call_ci_images.yaml` + `ensure_ci_image.sh`); test jobs do no Docker build and no buildx setup on the normal path | test jobs 92/86 s -> 63-68 s; `ci_images` 21 s when images exist |

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
- **Prebuilt CI images.** `on_call_ci_images.yaml` runs
  `.github/scripts/ensure_ci_image.sh` for two images on ghcr.io, each tagged by
  a sha256 of its own inputs: `orionrobots-site.test` (Dockerfile target
  `tests`; inputs `Dockerfile`, `package.json`, `package-lock.json`,
  `cucumber.js`) and `orionrobots-site.staging` (target `httpd_serve`; inputs
  `Dockerfile`, `.github/scripts/staging/default.conf`). It builds and pushes
  only on a registry miss. **If an image starts depending on another file, add
  that file to its input list in the workflow**, or a stale image will be
  pulled. `./tests` and `_site` are volume-mounted at run time, so editing tests
  or the site does not change either image.
- **Fallback is automatic.** A failed or missing pull (or a push that was not
  permitted, e.g. a token without `packages: write`) never fails CI:
  `docker-compose.ci.yml` names the `test` and `staging` services after the tag,
  the staging job runs `up -d --wait staging` without `--build`, and compose
  builds the image from the Dockerfile only if it is not present. Buildx is
  only set up in that case (registry layer cache needs it).
- **Staging serves a mounted site.** `staging` and `http_serve` share the
  `x-httpd-serve` anchor in `docker-compose.yml`. The site's own `.htaccess`
  arrives via `_site/.htaccess`, as on the hosting. Gaps between this staging
  Apache and IONOS are tracked in #554, #555 and #556.

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
| #558 (test image pulled; miss, then hit) | ~2m | - | 4m18s / 4m57s |
| #559 (staging site mounted) | 1m40s | - | 3m42s |
| #567, first run (both images a miss: rebuilt cold) | ~2m | - | 4m02s (`ci_images` 160 s) |
| **#567, second run (both images exist)** | ~2m16s | - | **3m48s** (`ci_images` 21 s) |
| #598 (throwaway; test image miss, `cucumber.js` only, after #569 fix) | - | - | `ci_images` 49 s (was ~125 s cold) |

Staging/gallery job totals: 152/144 s originally, 123-152 s after #558, 92/86 s
after #559, 63/68 s after #567.

## Test image miss cost (#569)

A miss used to rebuild cold (~125 s: apt 10 s, `npm ci` 11 s, Playwright 21 s,
export 29 s) even though the `:cache` manifest imported. `--cache-to` now sets
`image-manifest=true,oci-mediatypes=true` (#597). Measured on a `cucumber.js`-only
miss (#598): base, apt and Playwright steps `CACHED`, `ci_images` 49 s. A
`package-lock.json` change still reruns `npm ci` and later layers (not measured).

## Not done / ideas

Open tickets from this work: #548 (harden the tag-link smoke check), #549
(verify tag URLs on the live site), #550 (cold cases and cache churn), #554,
#555, #556 (staging vs IONOS: modules/version, https redirect, `AllowOverride`),
#568 (evict old prebuilt images from ghcr.io; safe because of the fallback) and
#569 (fixed; see "Test image miss cost").

- What remains on the critical path is mostly fixed overhead: `build_site`
  (~1m30-2m15), then checkout + artifact + image pulls (~40 s) and the tests.
  Merging the staging and gallery jobs would save a runner's setup but not
  wall-clock time; not worth it yet.
- Remaining `build_site` overhead: checkout/buildx/login (~25 s), image build and
  container starts (~34 s), cache save (3-22 s, variable).
- A PR that adds many new photos only pays for those photos; not yet measured.
- Path filters to skip the full build for docs-only or workflow-only PRs were
  considered but not needed.

## Gotchas

- The base-image detector (`on_pr_test.yaml`) watches the files that affect the
  image. A PR that edits them rebuilds the base image, so it cannot show the
  skip; a docs-only PR can.
- Only the default branch's caches are readable from PRs; the first master
  build after a cache-key change is cold.
- Files created by `docker compose` in a worktree (`dist`, `_site`,
  `node_modules`) are root-owned; remove them with a throwaway `docker run ... rm
  -rf`, not sudo.
- `gh run view --log` fails on escape sequences: use
  `gh api repos/<owner>/<repo>/actions/jobs/<job id>/logs --allow-escape-sequences`
  and strip ANSI with `sed 's/\x1b\[[0-9;?]*[a-zA-Z]//g'`.
- In PR bodies, "Closes #N" in prose is a closing keyword; write around it.

## Measuring

Per-step durations: `gh api repos/<owner>/<repo>/actions/jobs/<job id>` returns
`started_at`/`completed_at` for every step; job ids come from
`gh run view <run id> --json jobs`. Compare a cold and a warm run on the same
code before claiming a win, and keep in mind the run-to-run noise noted above.
