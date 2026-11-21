function amazonMedia (content, imgSrc, title, link) {
  if (imgSrc.startsWith('content/')) {
    imgSrc = imgSrc.replace('content/', '/')
  }
  return `
        <div class="d-flex">
            <div class="flex-shrink-0">
                <a href="${link}" target="_blank">
                <img src="${imgSrc}" class="index_post_thumb" alt="${title}">
            </div>
            <div class="flex-grow-1 ms-3">
                <a href="${link}" target="_blank"><h5 class="mt-0">${title}</h5></a>
                ${content}
            </div>
        </div>
    `
}

module.exports = function installMediaObjects (eleventyConfig) {
  console.log('Installing media objects')
  eleventyConfig.addPairedShortcode('amazon_media', amazonMedia)
}
