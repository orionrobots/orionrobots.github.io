const thumbnails = require('../thumbnails.js')
const Image = require('@11ty/eleventy-img').default
const { minify } = require('terser')
const fs = require('fs')
const CleanCSS = require('clean-css')

// Example structure for image list:
// [
//     {
//         "src": "source_file_within_site",
//         "alt": "Alt text and description",
//     }
// ]

// Escape a value for use inside a double-quoted HTML attribute.
function escapeAttr (value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

async function makeGalleryImage (src) {
  return await Image(src, {
    widths: [900],
    formats: ['jpeg'],
    urlPath: '/assets/images/',
    outputDir: './_site/assets/images/'
  })
};

// Assume the initial image is the first.
// Assume the initial alt text is the first.
// Layout:
// Tabs/thumbnails on the left, image on the right.
// Description below the image.
// Tabs have alt text as the title and alt for the thumbnail.
// Clicking the image on the left will show the image on the right.
// lazy loading for the images.

async function makeGallery (id, images) {
  // Generate thumbnails (and metadata) for each image.
  const imagesWithMetadata = await Promise.all(images.map(async image => ({
    thumb_metadata: await thumbnails.makeThumbnailFor(image.src),
    metadata: await makeGalleryImage(image.src),
    alt: image.alt
  })))
  // Now we have a list of images with metadata. We can generate the HTML.
  // Outer div, div for the tabs, div for the current image, div below the image for the description.
  // The tabs are a list of images with alt text.
  // The current image is an image with alt text.
  // The description is a div with the alt text.
  // The current image is the first image.

  // We cannot use document parts, as we are not in the browser.
  const descriptionElement = '<div class="image-tab-gallery-description row"></div>'
  const currentImageElement = '<div class="image-tab-gallery-current-image col-md-5"></div>'

  const tabs = imagesWithMetadata.map(image => {
    let thumbnailUrl = ''
    let mainImageUrl = ''
    const thumbnailAlt = image.alt || ''
    if (image.thumb_metadata?.jpeg?.[1]?.url) {
      thumbnailUrl = image.thumb_metadata.jpeg[1].url
    } else {
      console.warn(`Tab Gallery: Missing thumbnail for image alt='${thumbnailAlt}'. Falling back to empty src.`)
    }
    if (image.metadata?.jpeg?.[0]?.url) {
      mainImageUrl = image.metadata.jpeg[0].url
    } else {
      console.warn(`Tab Gallery: Missing main image for image alt='${thumbnailAlt}'. Falling back to empty src.`)
    }
    return '<div class="image-tab-gallery-tab" title="' + escapeAttr(thumbnailAlt) + '" data-src="' + escapeAttr(mainImageUrl) + '">' +
            '<img src="' + escapeAttr(thumbnailUrl) + '" loading="lazy" decoding="async" width="128" height="112" alt="' + escapeAttr(thumbnailAlt) + '">' +
            '</div>'
  })
  // put the joined tabs in the tabs element.

  const tabsElement = '<div class="image-tab-gallery-tabs col-md-3">' + tabs.join('\n') + '</div>'
  const minifiedJquery = fs.readFileSync('./node_modules/jquery/dist/jquery.min.js', 'utf8')
  const script = fs.readFileSync('src/tab_gallery.js', 'utf8')
  const minifiedScript = await minify(script)
  const scriptElement = '<script>' + minifiedJquery + minifiedScript.code + '; setupGallery(' + JSON.stringify(id).replace(/</g, '\\u003c') + ');</script>'
  const style = '<style>' + new CleanCSS({}).minify(fs.readFileSync('src/tab_gallery.css', 'utf8')).styles + '</style>'

  const galleryElement = '<div class="image-tab-gallery row" id="' + escapeAttr(id) + '">' + tabsElement +
            currentImageElement + descriptionElement + scriptElement + '</div>' + style

  return galleryElement
}

module.exports = makeGallery
