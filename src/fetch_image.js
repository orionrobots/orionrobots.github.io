const Image = require("@11ty/eleventy-img");
module.exports = async function (src) {
    return await Image(src, {
        widths: [null, 300, 720, 940, 1200],
        formats: ["jpeg", "png"],
        urlPath: "/assets/images/",
        outputDir: "./_site/assets/images/"
    });
};
