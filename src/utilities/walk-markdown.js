const fs = require('fs')
const path = require('path')

// Recursively collect markdown (.md/.markdown) files under dir.
function walkDir (dir, results = []) {
  if (!fs.existsSync(dir)) return results
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkDir(full, results)
    } else if (entry.isFile() && /\.(md|markdown)$/.test(entry.name)) {
      results.push(full)
    }
  }
  return results
}

module.exports = { walkDir }
