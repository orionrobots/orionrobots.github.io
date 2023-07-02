const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const moment = require("moment");
const slugify = require("slugify");
const Image = require("@11ty/eleventy-img");
const fs = require('fs');
const CleanCSS = require("clean-css");

const extractExcerpt = require("./src/shortcodes/extract_excerpt.js");
const groupByYear = require("./src/filters/group_by_year.js");

const {
    fortawesomeBrandsPlugin,
} = require('@vidhill/fortawesome-brands-11ty-shortcode');


module.exports = function(eleventyConfig) {
    // Configure markdown parser
    const markdownLib = markdownIt({html: true, typographer: true});
    markdownLib.use(markdownItAnchor);
    markdownLib.use(markdownItAttrs);
    eleventyConfig.setLibrary("md", markdownLib);
    eleventyConfig.addPlugin(fortawesomeBrandsPlugin);

    //copy through assets
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("dist");
    eleventyConfig.addPassthroughCopy("favicon.png");
    eleventyConfig.addPassthroughCopy("galleries/**/*.{jpg,jpeg,JPG,png,gif,svg}");
    eleventyConfig.addPassthroughCopy("google5458abc1104b04dd.html");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy({"htaccess": ".htaccess"});

    let $collectionApi = null;

    eleventyConfig.addCollection("posts", function(collectionApi) {
        $collectionApi = collectionApi;
        return collectionApi.getFilteredByGlob("_posts/*.md");
    });

    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
    });

    // Setup a post_url liquid tag.
    // it takes the filename (without extension) of a post in the _posts collection, and returns the permalink.
    eleventyConfig.addLiquidTag("post_url", function(liquidEngine) {
        return {
            parse: function(tagToken, remainingTokens) {
                this.name = tagToken.args;
            },
            render: function(scope, hash) {
                const matching_posts = $collectionApi.getFilteredByGlob("_posts/" + this.name + ".md");
                if (matching_posts.length == 0) {
                    console.log("Glob is _posts/" + this.name + ".md");
                    throw new Error("Could not find post with name " + this.name);
                }
                return matching_posts[0].url;
            }
        }
    });

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    async function fetch_image(src) {
        return await Image(src, {
            widths: [300, 400, 600, 900, 1200, 1800, 2400],
            formats: ["avif", "jpeg", "png"],
            urlPath: "/assets/images/",
            outputDir: "./_site/assets/images/"
        });
    }

    eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
        let metadata = await fetch_image(src);

		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	});

    eleventyConfig.addShortcode("img_responsive", async function(src, alt) {
        let metadata = await fetch_image(src);

		let imageAttributes = {
			alt,
			sizes: "720, 940, 1140, 1280, 2048",
            class: "img-responsive",
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);        
    });

    eleventyConfig.addShortcode("image_with_class", async function(src, alt, sizes, class_names) {
        let metadata = await fetch_image(src);

        if (sizes==undefined || sizes=="_") {
            sizes="720, 940, 1140, 1280, 2048";
        }

		let imageAttributes = {
			alt,
			sizes,
            class: class_names,
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	});

    eleventyConfig.addShortcode("thumbnail_for_post", async function(post) {
        const thumbnailUrl = getPostThumbnailUrl(post);
        if(thumbnailUrl == undefined) {
            return "";
        }
        const imageSrc = stripLeadingSlash(thumbnailUrl);
        if ( imageSrc.includes("amazon-adsystem") || !fs.existsSync(imageSrc)) {
            return "";
        } else {
            // console.log("Generating thumbnail for " + imageSrc);
            const metadata = await Image(imageSrc, {
                widths: [128, 256, 512],
                formats: ["avif", "jpeg", "png"],
                urlPath: "/assets/thumbnails/",
                outputDir: "./_site/assets/thumbnails/"
            });
            const imageAttributes = {
                alt: post.data.title,
                sizes: "128, 256",
                loading: "lazy",
                decoding: "async",
                class: "media-object index_post_thumb",
            };
            return Image.generateHTML(metadata, imageAttributes);
        }
    });

    // Defines shortcode for generating post excerpts
    eleventyConfig.addShortcode('excerpt', extractExcerpt);
    eleventyConfig.addFilter('excerpt', extractExcerpt);

    eleventyConfig.addFilter("with_titles", items => {
        return items.filter(item => "title" in item.data);
    });
    // TODO: Make a bit more efficient
    eleventyConfig.addFilter("has_thumbnail", post =>
        getPostThumbnailUrl(post) != undefined);

    // Liquid filter to convert a date to a string
    eleventyConfig.addLiquidFilter("date_to_string", function(date) {
        return date.toString();
    });

    // Liquid filter for long date string
    eleventyConfig.addLiquidFilter("date_to_long_string", function(date) {
        return date.toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    });

    // Universal filter for jsonify
    eleventyConfig.addFilter("jsonify", function(value) {
        return JSON.stringify(value);
    });

    eleventyConfig.addFilter("with_explicit_date", items => items.filter(item => "date" in item.data));

    eleventyConfig.addFilter("group_by_year", groupByYear);

    eleventyConfig.addShortcode("log", (value) => console.log(value) );

    // Read the menu data from _config.yml and add it to the global data
    eleventyConfig.addGlobalData("menu", () => getDataFromConfigYaml("menu"));
    eleventyConfig.addGlobalData("site_title",  () => getDataFromConfigYaml("title"));
    eleventyConfig.addGlobalData("site_tagline",  () => getDataFromConfigYaml("tagline"));

    eleventyConfig.addNunjucksFilter("date", function(date, format) {
        return moment(date).format(format);
    });

    eleventyConfig.addCollection("tagList", (collection) => {
        const tagsSet = new Set();

        const tagsDict = {};

        // Iterate over all content files and collect tags
        collection.getAll().forEach((item) => {
            if (item.data.tags) {
                item.data.tags.forEach((tag) => {
                    const slugTag = slugify(tag);
                    if (!(slugTag in tagsDict)) {
                        tagsDict[slugTag] = [];
                    }
                    tagsDict[slugTag].push(item);
                });
            }
        });
        return tagsDict;
    });

    return {
        dir: {
            layouts: "_includes/layouts"
        }
    }
};

function getDataFromConfigYaml(key) {
    // Load the _config.yml file
    const yaml = require("js-yaml");
    const fs = require("fs");
    const config = yaml.load(fs.readFileSync("_config.yml", "utf-8"));
    // Return the menu data
    return config[key];
}

function getPostThumbnailUrl(post) {
    if ("thumbnail" in post.data) {
        return post.data.thumbnail;
    }
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
