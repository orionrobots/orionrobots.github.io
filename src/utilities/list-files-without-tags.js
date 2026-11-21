#!/usr/bin/env node
/**
 * Lists markdown files (recursively) whose front matter has no tags.
 *
 * Usage:
 *   node src/utilities/list-files-without-tags.js [folder ...]
 * Defaults to content/ and _posts/ when no folder is given.
 */
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const yaml = require('js-yaml')
const { walkDir } = require('./walk-markdown')

// package.json overrides js-yaml to v4, which removed the safeLoad that
// gray-matter's default engine calls, so supply a v4-compatible engine.
const matterOptions = { engines: { yaml: (s) => yaml.load(s) } }

const ROOT = path.resolve(__dirname, '../../')
const folders = process.argv.length > 2
  ? process.argv.slice(2)
  : ['content', '_posts'].map((d) => path.join(ROOT, d))

for (const folder of folders) {
  for (const filePath of walkDir(folder)) {
    try {
      const { data } = matter(fs.readFileSync(filePath, 'utf8'), matterOptions)
      if (!data.tags) {
        console.log(`Missing tags in file: ${filePath}`)
      }
    } catch (err) {
      console.error(`Skipping ${filePath}: ${err.message}`)
    }
  }
}
