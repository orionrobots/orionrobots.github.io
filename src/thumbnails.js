const Image = require("@11ty/eleventy-img");
const fs = require('fs');

async function make_thumbnail_for(src) {
    return await Image(src, {
        widths: [128, 256],
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

function getPostThumbnailPath(post) {
    if ("thumbnail" in post.data) {
        return post.data.thumbnail;
    }
}

function has_thumbnail(post) {
    return getPostThumbnailPath(post) != undefined;
}

async function thumbnail_for_post(post) {
    const thumbnailUrl = getPostThumbnailPath(post);
    let imageSrc;
    
    if(thumbnailUrl == undefined) {
        // Use favicon.png as fallback when no thumbnail is defined
        imageSrc = "favicon.png";
    } else {
        imageSrc = stripLeadingSlash(thumbnailUrl);
        if ( !fs.existsSync(imageSrc)) {
            // Use favicon.png as fallback when thumbnail file doesn't exist
            imageSrc = "favicon.png";
        }
    }
    
    if ( !fs.existsSync(imageSrc)) {
        // If even favicon.png doesn't exist, return empty (shouldn't happen)
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

async function thumbnail_from_path(thumbnail_path) {
    const imageSrc = stripLeadingSlash(thumbnail_path);
    if ( !fs.existsSync(imageSrc)) {
        return "";
    } else {
        // console.log("Generating thumbnail URL for " + imageSrc);
        const metadata = await make_thumbnail_for(imageSrc);
        return metadata.png[1].url;
    }
}

module.exports = {
    make_thumbnail_for: make_thumbnail_for,
    has_thumbnail: has_thumbnail,
    thumbnail_for_post: thumbnail_for_post,
    thumbnail_from_path: thumbnail_from_path
}