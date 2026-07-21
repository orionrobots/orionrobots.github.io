#!/usr/bin/env node
/**
 * list-tags.js
 *
 * Walks all markdown files under content/ (and _posts/) recursively,
 * extracts frontmatter tags, and outputs a JSON map of tag -> occurrence count.
 *
 * Usage:
 *   node src/utilities/list-tags.js
 *   node src/utilities/list-tags.js --sort count   # sort by count desc (default)
 *   node src/utilities/list-tags.js --sort alpha    # sort alphabetically
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = path.resolve(__dirname, '../../');
const CONTENT_DIRS = ['content', '_posts'];

const args = process.argv.slice(2);
const sortFlag = args.includes('--sort') ? args[args.indexOf('--sort') + 1] : 'count';

function walkDir(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full, results);
    } else if (entry.isFile() && /\.(md|markdown)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const tagCounts = {};

for (const contentDir of CONTENT_DIRS) {
  const files = walkDir(path.join(ROOT, contentDir));
  for (const file of files) {
    try {
      const { data } = matter(fs.readFileSync(file, 'utf8'));
      if (Array.isArray(data.tags)) {
        for (const tag of data.tags) {
          const key = String(tag).trim();
          tagCounts[key] = (tagCounts[key] || 0) + 1;
        }
      }
    } catch {
      // skip unparseable files
    }
  }
}

const entries = Object.entries(tagCounts);

const sorted = sortFlag === 'alpha'
  ? entries.sort(([a], [b]) => a.localeCompare(b))
  : entries.sort(([, a], [, b]) => b - a);

const result = Object.fromEntries(sorted);
console.log(JSON.stringify(result, null, 2));
