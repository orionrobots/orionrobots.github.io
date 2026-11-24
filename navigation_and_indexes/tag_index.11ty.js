const slugify = require('slugify')

function tagItem (tagName, tags) {
  const tagSlug = slugify(tagName, { lower: true })
  const count = tags[tagName]?.length || 0
  return `<li><a href="/tags/${tagSlug}/">${tagName} <span class="badge tag-badge rounded-pill">${count}</span></a></li>`
}

function tagList (tags) {
  const keys = Object.keys(tags).sort()
  return `<ul>${keys.map(tag => tagItem(tag, tags)).join('')}</ul>`
}

class TagIndex {
  data () {
    return {
      permalink: '/tags/index.html',
      eleventyExcludeFromCollections: true,
      layout: 'page',
      title: 'Tags'
    }
  }

  render ({ collections }) {
    return `<h1>All Tags</h1><ul>${tagList(collections.tagList)}</ul>`
  }
}

module.exports = TagIndex
