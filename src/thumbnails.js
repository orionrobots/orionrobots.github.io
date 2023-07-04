const Image = require("@11ty/eleventy-img");
const fs = require('fs');

async function make_thumbnail_for(src) {
    return await Image(src, {
        widths: [128, 256, 512],
        formats: ["avif", "jpeg", "png"],
        urlPath: "/assets/thumbnails/",
        outputDir: "./_site/assets/thumbnails/"
    })
}

function stripLeadingSlash(path) {
    // Check if path starts with "//" (implied https)
    if (path.startsWith("//")) {
        return "https:" + path;
    }

    // Strip leading slash if present
    if (path.startsWith("/")) {
        return path.substring(1);
    }

    return path;
}

function getPostThumbnailUrl(post) {
    if ("thumbnail" in post.data) {
        return post.data.thumbnail;
    }
}

function has_thumbnail(post) {
    return getPostThumbnailUrl(post) != undefined;
}

async function thumbnail_for_post(post) {
    const thumbnailUrl = getPostThumbnailUrl(post);
    if(thumbnailUrl == undefined) {
        return "";
    }
    const imageSrc = stripLeadingSlash(thumbnailUrl);
    if ( imageSrc.includes("amazon-adsystem") || !fs.existsSync(imageSrc)) {
        return "";
    } else {
        // console.log("Generating thumbnail for " + imageSrc);
        const metadata = await make_thumbnail_for(imageSrc);
        const imageAttributes = {
            alt: post.data.title,
            sizes: "128, 256",
            loading: "lazy",
            decoding: "async",
            class: "media-object index_post_thumb",
        };
        return Image.generateHTML(metadata, imageAttributes);
    }
}

module.exports = {
    make_thumbnail_for: make_thumbnail_for,
    getPostThumbnailUrl: getPostThumbnailUrl,
    has_thumbnail: has_thumbnail,
    thumbnail_for_post: thumbnail_for_post,
}