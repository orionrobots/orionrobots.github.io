const Image = require('@11ty/eleventy-img').default
const fs = require('fs')
const path = require('path')

async function makeThumbnailFor (src) {
  return await Image(src, {
    widths: [128, 256],
    formats: ['avif', 'jpeg', 'png'],
    urlPath: '/assets/thumbnails/',
    outputDir: './_site/assets/thumbnails/'
  })
}

function resolveImagePath (thumbnailPath, inputPath) {
  // Check if path starts with "//" (implied https)
  if (thumbnailPath.startsWith('//')) {
    return 'https:' + thumbnailPath
  }
  // Absolute path - strip leading slash, relative to project root
  if (thumbnailPath.startsWith('/')) {
    return thumbnailPath.substring(1)
  }
  // Bare filename (no directory separator) - resolve relative to the post's directory
  if (inputPath && !thumbnailPath.includes('/')) {
    return path.join(path.dirname(inputPath), thumbnailPath)
  }
  // Path with separators but no leading slash - treat as project-root-relative (legacy behaviour)
  return thumbnailPath
}

function getPostThumbnailPath (post) {
  if ('thumbnail' in post.data) {
    return post.data.thumbnail
  }
}

function hasThumbnail (post) {
  return getPostThumbnailPath(post) != null
}

async function thumbnailForPost (post) {
  const thumbnailUrl = getPostThumbnailPath(post)
  const inputPath = post.page?.inputPath ?? post.inputPath
  let imageSrc

  if (thumbnailUrl == null) {
    // Use favicon.png as fallback when no thumbnail is defined
    imageSrc = 'favicon.png'
  } else {
    imageSrc = resolveImagePath(thumbnailUrl, inputPath)
    if (!fs.existsSync(imageSrc)) {
      // Use favicon.png as fallback when thumbnail file doesn't exist
      imageSrc = 'favicon.png'
    }
  }

  if (!fs.existsSync(imageSrc)) {
    // If even favicon.png doesn't exist, return empty (shouldn't happen)
    return ''
  } else {
    // console.log("Generating thumbnail for " + imageSrc);
    const metadata = await makeThumbnailFor(imageSrc)
    const imageAttributes = {
      alt: post.data.title,
      sizes: '128px',
      loading: 'lazy',
      decoding: 'async',
      class: 'media-object index_post_thumb',
    }
    return Image.generateHTML(metadata, imageAttributes)
  }
}

async function thumbnailFromPath (thumbnailPath, inputPath) {
  const imageSrc = resolveImagePath(thumbnailPath, inputPath)
  if (!fs.existsSync(imageSrc)) {
    return ''
  } else {
    // console.log("Generating thumbnail URL for " + imageSrc);
    const metadata = await makeThumbnailFor(imageSrc)
    // eleventy-img omits jpeg for sources with an alpha channel (jpeg can't
    // hold transparency), so fall back to png, which is always generated.
    return (metadata.jpeg ?? metadata.png)[1].url
  }
}

module.exports = {
  makeThumbnailFor,
  hasThumbnail,
  thumbnailForPost,
  thumbnailFromPath
}
