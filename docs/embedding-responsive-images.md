# Embedding Responsive Images

There are several image patterns in this codebase. This document establishes which is canonical for new content.

## Canonical: `img_responsive` shortcode

Use this for all images in new content:

```liquid
{% img_responsive "path/to/image.jpg", "Alt text describing the image" %}
```

This uses the `@11ty/eleventy-img` plugin to generate a `<picture>` element with multiple `srcset` sizes, lazy loading, and async decoding. Images are automatically optimised at build time.

**Path rules:**

- Relative path (same folder as the post): use the filename only.
  ```liquid
  {% img_responsive "my-photo.jpg", "My photo" %}
  ```
- Content-root-relative path: prefix with `content/`.
  ```liquid
  {% img_responsive "content/2025/01/03-explorer-shield/block-diagram.png", "Explorer shield block diagram" %}
  ```
- Gallery path: prefix with `galleries/`.
  ```liquid
  {% img_responsive "galleries/book_covers/my-book.png", "My Book" %}
  ```
- Absolute site path (leading `/`) and external URLs (`https://`) are also accepted.

---

## Floating an image left or right

Pass Bootstrap 5 utility classes as the fourth argument. You must also supply the third argument (`sizes`) to reach the fourth — pass the default value if you have no custom sizes requirement.

### Float left (image sits left, text wraps right)

```liquid
{% img_responsive "my-photo.jpg", "My photo", "100vw", "img-responsive float-start me-3 mb-2 w-33" %}
```

- `float-start` — floats the image to the left (Bootstrap 5; replaces the old `float-left`).
- `me-3` — margin-end (right) so text doesn't press against the image.
- `mb-2` — margin-bottom so content below has breathing room.
- `w-33` — caps the image width at ~33% of its container (Bootstrap 5 utility).

### Float right (image sits right, text wraps left)

```liquid
{% img_responsive "my-photo.jpg", "My photo", "100vw", "img-responsive float-end ms-3 mb-2 w-33" %}
```

- `float-end` — floats the image to the right (Bootstrap 5; replaces the old `float-right`).
- `ms-3` — margin-start (left) so text doesn't press against the image.
- `mb-2` — margin-bottom so content below has breathing room.
- `w-33` — caps the image width at ~33% of its container (Bootstrap 5 utility).

> **Tip:** Add a `<div class="clearfix"></div>` after the paragraph if subsequent content should not continue to wrap around the floated image.

---

## Legacy patterns (do not use in new content)

### Raw Markdown image

```markdown
![Alt text](image.jpg)
```

Simple Markdown images render without responsive sizing or lazy loading. Acceptable for very small illustrations where the shortcode is impractical, but `img_responsive` is preferred.

### Jekyll-style class attribute

```markdown
![Alt text](image.jpg){:class="img-responsive"}
```

Bootstrap 3 era pattern. Do not use. Migrate to `img_responsive` when editing a post for other reasons.

### Liquid `figure` include

```liquid
{% include figure, url:"/galleries/...", description:"Caption text" %}
```

Wraps the image in a `<figure>` with a caption. Does not generate responsive srcsets or lazy loading. Migrate to `img_responsive` when editing a post for other reasons.

### Inline HTML with `style="float:..."` 

```html
<img src="/galleries/image.jpg" style="float: left; margin-right: 8px">
```

or

```html
<div style="float: right;"><img class="img-responsive" src="..."></div>
```

Old hand-written HTML. Not responsive, not lazy-loaded, and uses inline styles. Migrate to the `img_responsive` shortcode with Bootstrap 5 float classes when editing a post for other reasons.
