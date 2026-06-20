const path = require("path");
const Image = require("@11ty/eleventy-img");
const fetch_image = require("../fetch_image.js");

/**
 * Responsive image shortcode for Eleventy
 * Supports both relative and absolute image paths:
 * - Relative paths (e.g., "image.jpg") are resolved relative to the page's directory
 * - Project-root paths (e.g., "galleries/...", "content/...") are used as-is
 * - Absolute paths (e.g., "/content/...", "https://...") are used as-is
 */
async function img_responsive(src, alt, sizes = "(max-width: 767px) 100vw, (max-width: 991px) 720px, 940px", class_names = "img-responsive", widths_csv = null) {
    // Resolve relative paths relative to the current page
    let resolvedSrc = src;

    // Check if path is relative (not starting with /, http://, https://, //)
    if (!src.startsWith('/') && !src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('//')) {
        // Check if it's a project-root-relative path (starts with common top-level dirs)
        // These should NOT be resolved relative to the page
        const projectRootPrefixes = ['content/', 'galleries/', 'assets/', 'products/', 'wiki/'];
        const isProjectRootPath = projectRootPrefixes.some(prefix => src.startsWith(prefix));

        if (!isProjectRootPath && this.page && this.page.inputPath) {
            // This is a truly relative path (e.g., "image.jpg", "./image.jpg", "../dir/image.jpg")
            // Resolve it relative to the page's directory
            const pageDir = path.dirname(this.page.inputPath);
            resolvedSrc = path.join(pageDir, src);
        }
        // else: it's a project-root-relative path, use as-is
    }

    const widths = widths_csv ? widths_csv.split(",").map(Number) : undefined;
    let metadata = await fetch_image(resolvedSrc, widths);
    let imageAttributes = {
        alt,
        sizes,
        class: class_names,
        loading: "lazy",
        decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = img_responsive;
