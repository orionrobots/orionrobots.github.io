# Agent Long-Term Memory

## Books / Sidebar

- The sidebar book includes are in `_includes/sidebar-book.liquid`.
- **3rd edition** (Learn Robotics Programming 3rd Edition) card now positioned **above** the Robotics at Home card. The 2nd edition card was removed.
- 3rd edition cover image: `galleries/learn-robotics-programming-3rd-edition/learn-robotics-programming-3rd-cover.png` (copied from the 2026-05-28 blog post folder).
- 3rd edition purchase link: `https://www.packtpub.com/en-us/product/learn-robotics-programming-9781803246987`
- Amazon link also exists: `https://www.amazon.com/Learn-Robotics-Programming-cutting-edge-Raspberry/dp/1803246987/`
- Robotics at Home with Raspberry Pi Pico link: `https://packt.link/5swS2`

## Site Structure

- Blog post scaffold: `.github/scripts/new_post.sh "Title"` → creates `content/YYYY/MM/DD-slug/DD-slug.md`
- Sidebar layout: `_includes/layouts/default.liquid` → `<aside class="col-md-4">` → includes `sidebar-book.liquid`
- Images in sidebar use the `{% image "path", "alt", "widths", "classes" %}` shortcode (mapped to `img_responsive` in `.eleventy.js`).

## Performance testing

- Script: `tests/perf/measure-vitals.js` — run with `docker compose run perf` or `npm run test:perf`
- Config via `.env` (see `.env.example`): `BASE_URL`, `PAGESPEED_API_KEY`, `PERF_RUNS`, `OUTPUT_JSON`
- Production URL: `https://orionrobots.co.uk`
- Baseline (2026-06-04): all Core Web Vitals GOOD; blog post image weight 3.6 MB is the main optimisation target; JS+CSS ~231 KB/page; CLS approaching 0.1 boundary
