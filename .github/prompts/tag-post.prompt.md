---
description: Add or extend tags on a blog post using existing site tags as a reference
---

# Tag a blog post

## Goal

Add or extend the `tags` array in the active post's frontmatter so it accurately reflects the post's content, while staying consistent with the site's existing tag vocabulary.

## Steps

### 1. Get the current site tag list

Run the following command and capture the JSON output:

```bash
docker compose run --rm dist node src/utilities/list-tags.js
```

This returns a JSON object mapping every tag used across the site to its occurrence count, sorted by frequency.

### 2. Read the post

Read the active post's full content including its frontmatter.
Note the existing tags (if any) so you don't duplicate them.

### 3. Identify candidate tags from the content

Based on the post's content and any attached context (YAML info, subtitles, images, etc.), list the concepts, technologies, audiences, and activities the post covers.

For each concept, pick **the most specific accurate term** — e.g. prefer `raspberry pi pico` over just `raspberry pi` if the post is specifically about the Pico.

### 4. Map candidates to existing tags (adjacency rule)

For each candidate concept, scan the site tag list from step 1:

- If an existing tag **matches or is clearly adjacent** (same concept, slight wording variation, parent/child topic), **use the existing tag** rather than coining a new one.
  - Example: candidate "RP2040" → existing tag `rp2040` → use `rp2040`
  - Example: candidate "children's robotics" → existing tags `robotics for kids`, `code club` → prefer those
- Only introduce a **new tag** when no existing tag is close enough. Keep new tags lowercase, short, and hyphen-free where possible.

### 5. Apply the tags

Merge the new tags with any existing tags in the post frontmatter. Write the combined list as an inline YAML array:

```yaml
tags: [existing tag, new tag one, new tag two]
```

Keep the list to a sensible size (roughly 5–12 tags). Drop any tag that is too vague to add value (e.g. avoid adding `post` or `content`).

## Tag style rules

The canonical tag style in this project is **lowercase words separated by spaces**:

- ✅ `robot building`, `raspberry pi pico`, `micropython`, `3d printing`
- ❌ `robot-building` (no hyphens)
- ❌ `robot_building` (no underscores)
- ❌ `Robot Building` (no capitalisation, even for proper nouns)

When matching an existing tag from the site list:
- If the existing tag uses hyphens (e.g. `coder-dojo`) but a space-separated equivalent also exists (`coder dojo`), prefer the space-separated form.
- Always normalise any new tag you introduce to lowercase-with-spaces before writing it.
