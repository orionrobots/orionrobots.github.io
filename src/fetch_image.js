const Image = require("@11ty/eleventy-img");
module.exports = async function (src) {
    return await Image(src, {
        widths: [300, 400, 600, 900, 1200, 1800, 2400],
        formats: ["jpeg", "png"],
        urlPath: "/assets/images/",
        outputDir: "./_site/assets/images/"
    });
};
