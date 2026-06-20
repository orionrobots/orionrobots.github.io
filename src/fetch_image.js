const Image = require("@11ty/eleventy-img");
module.exports = async function (src, widths = [300, 720, 940]) {
    return await Image(src, {
        widths,
        formats: ["avif", "webp", "jpeg"],
        urlPath: "/assets/images/",
        outputDir: "./_site/assets/images/"
    });
};
