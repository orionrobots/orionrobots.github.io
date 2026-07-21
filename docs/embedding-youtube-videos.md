# Embedding YouTube Videos

There are a few patterns for YouTube in this codebase. This document establishes which is canonical for new content.

## Canonical: `youtube_responsive` (embedded player)

Use this when you want a video to play inline on the page:

```liquid
{% include youtube_responsive, src:"https://www.youtube.com/embed/VIDEO_ID" %}
```

This wraps the iframe in Bootstrap 5's `ratio ratio-16x9` container, so the player scales responsively at any screen width. It also sets the modern `referrerpolicy` and `allow` attributes.

**Example:**

```liquid
{% include youtube_responsive, src:"https://www.youtube.com/embed/dQw4w9WgXcQ" %}
```

Get the `VIDEO_ID` from the YouTube URL — it's the value of `v=` in a watch URL
(`https://www.youtube.com/watch?v=VIDEO_ID`) or the last path segment of a share
URL (`https://youtu.be/VIDEO_ID`).

---

## Secondary: `youtube_link` (thumbnail link, not a player)

Use this when you want a clickable thumbnail that takes the reader to YouTube, rather than playing inline:

```liquid
{% include youtube_link, youtube_id:"VIDEO_ID", description:"A short description" %}
```

This is intentionally not an embedded player — use it when embedding would be too heavy, or when directing the reader to a full YouTube page is more appropriate.

---

## Legacy: raw `<iframe>` tags

Older posts contain raw `<iframe>` tags with hardcoded `width` and `height` attributes. **Do not use this pattern in new content.** It is not responsive and lacks modern security attributes. Existing raw iframes can be migrated to `youtube_responsive` when a post is being edited for other reasons.
