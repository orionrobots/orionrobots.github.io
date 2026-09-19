
function amazon_media(content, img_src, title, link) {
    if (img_src.startsWith("content/")) {
        img_src = img_src.replace("content/", "/");
    }
    return `
        <div class="d-flex">
            <div class="flex-shrink-0">
                <a href="${link}" target="_blank">
                <img src="${img_src}" class="index_post_thumb" alt="${title}">
            </div>
            <div class="flex-grow-1 ms-3">
                <a href="${link}" target="_blank"><h5 class="mt-0">${title}</h5></a>
                ${content}
            </div>
        </div>
    `
}

module.exports = function install_media_objects(eleventyConfig) {
    console.log("Installing media objects");
    eleventyConfig.addPairedShortcode("amazon_media", amazon_media);
};
