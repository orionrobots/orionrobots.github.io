const thumbnails = require("../thumbnails.js");
const Image = require("@11ty/eleventy-img");
const { minify } = require("terser");
const fs = require("fs");
const CleanCSS = require("clean-css");

// Example structure for image list:
example_images = [
    {
        "src": "source_file_within_site",
        "alt": "Alt text and description",
    }
];

async function make_gallery_image(src) {
    return await Image(src, {
        widths: [900],
        formats: ["jpeg"],
        urlPath: "/assets/images/",
        outputDir: "./_site/assets/images/"
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

async function make_gallery(id, images) {
    // Generate thumbnails (and metadata) for each image.
    images_with_metadata = await Promise.all( images.map (async image => ({
        "thumb_metadata": await thumbnails.make_thumbnail_for(image.src),
        "metadata": await make_gallery_image(image.src),
        "alt": image.alt
    })));
    // Now we have a list of images with metadata. We can generate the HTML.
    // Outer div, div for the tabs, div for the current image, div below the image for the description.
    // The tabs are a list of images with alt text.
    // The current image is an image with alt text.
    // The description is a div with the alt text.
    // The current image is the first image.

    // We cannot use document parts, as we are not in the browser.
    const description_element = '<div class="image-tab-gallery-description row"></div>';
    const current_image_element = '<div class="image-tab-gallery-current-image col-md-5"></div>';

    const tabs = images_with_metadata.map(image => {
        let thumbnailUrl = '';
        let mainImageUrl = '';
        const thumbnailAlt = image.alt || '';
        if (image.thumb_metadata?.jpeg?.[1]?.url) {
            thumbnailUrl = image.thumb_metadata.jpeg[1].url;
        } else {
            console.warn(`Tab Gallery: Missing thumbnail for image alt='${thumbnailAlt}'. Falling back to empty src.`);
        }
        if (image.metadata?.jpeg?.[0]?.url) {
            mainImageUrl = image.metadata.jpeg[0].url;
        } else {
            console.warn(`Tab Gallery: Missing main image for image alt='${thumbnailAlt}'. Falling back to empty src.`);
        }
        return '<div class="image-tab-gallery-tab" title="' + thumbnailAlt + '" data-src="' + mainImageUrl + '">' +
            '<img src="' + thumbnailUrl + '" loading="lazy" decoding="async" width="128" height="112" alt="' + thumbnailAlt + '">' +
            '</div>';
    });
    // put the joined tabs in the tabs element.

    const tabs_element = '<div class="image-tab-gallery-tabs col-md-3">' + tabs.join("\n") + '</div>';
    const minified_jquery = fs.readFileSync("./node_modules/jquery/dist/jquery.min.js", "utf8");
    const script = fs.readFileSync("src/tab_gallery.js", "utf8")
    const minified_script = await minify(script);
    const script_element = '<script>' + minified_jquery +  minified_script.code + '; setup_gallery("' + id + '");</script>';
    const style = "<style>" + new CleanCSS({}).minify(fs.readFileSync("src/tab_gallery.css", "utf8")).styles + "</style>";

    const gallery_element = '<div class="image-tab-gallery row" id="' + id + '">' + tabs_element + 
            current_image_element + description_element + script_element + '</div>' + style;
    
    return gallery_element;
}

module.exports = make_gallery;
