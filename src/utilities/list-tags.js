#!/usr/bin/env node
/**
 * list-tags.js
 *
 * Walks all markdown files under content/ (and _posts/) recursively,
 * extracts frontmatter tags, and outputs a JSON map of tag slug -> occurrence count.
 * Tags are grouped by slug (lowercased, spaces/hyphens equivalent), so
 * "Raspberry Pi", "raspberry pi" and "raspberry-pi" count as one.
 *
 * Usage:
 *   node src/utilities/list-tags.js
 *   node src/utilities/list-tags.js --sort count   # sort by count desc (default)
 *   node src/utilities/list-tags.js --sort alpha    # sort alphabetically
 *   node src/utilities/list-tags.js --variants      # slug -> { count, spellings } to find posts to normalise
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const yaml = require('js-yaml')
const slugify = require('slugify')
const { walkDir } = require('./walk-markdown')

// package.json overrides js-yaml to v4, which removed the safeLoad that
// gray-matter's default engine calls, so supply a v4-compatible engine.
const matterOptions = { engines: { yaml: (s) => yaml.load(s) } }

const ROOT = path.resolve(__dirname, '../../')
const CONTENT_DIRS = ['content', '_posts']

const args = process.argv.slice(2)
const sortFlag = args.includes('--sort') ? args[args.indexOf('--sort') + 1] : 'count'

const showVariants = args.includes('--variants')

// slug -> { count, spellings: { rawTag: count } }
const tagGroups = {}

for (const contentDir of CONTENT_DIRS) {
  const files = walkDir(path.join(ROOT, contentDir))
  for (const file of files) {
    try {
      const { data } = matter(fs.readFileSync(file, 'utf8'), matterOptions)
      if (Array.isArray(data.tags)) {
        for (const tag of data.tags) {
          const key = String(tag).trim()
          if (!key) continue
          const slug = slugify(key, { lower: true })
          const group = (tagGroups[slug] ||= { count: 0, spellings: {} })
          group.count++
          group.spellings[key] = (group.spellings[key] || 0) + 1
        }
      }
    } catch (err) {
      console.error(`Skipping ${path.relative(ROOT, file)}: ${err.message}`)
    }
  }
}

const entries = Object.entries(tagGroups)

const sorted = sortFlag === 'alpha'
  ? entries.sort(([a], [b]) => a.localeCompare(b))
  : entries.sort(([, a], [, b]) => b.count - a.count)

const result = Object.fromEntries(
  sorted.map(([slug, group]) => [slug, showVariants ? group : group.count])
)
console.log(JSON.stringify(result, null, 2))
