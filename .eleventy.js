const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const moment = require("moment");
const slugify = require("slugify");
const Image = require("@11ty/eleventy-img");
const fs = require('fs');

module.exports = function(eleventyConfig) {
    // Configure markdown parser
    const markdownLib = markdownIt({html: true, typographer: true});
    markdownLib.use(markdownItAnchor);
    markdownLib.use(markdownItAttrs);
    eleventyConfig.setLibrary("md", markdownLib);

    //copy through assets
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("dist");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy({"htaccess": ".htaccess"});
    eleventyConfig.addPassthroughCopy("favicon.png");
    eleventyConfig.addPassthroughCopy("google5458abc1104b04dd.html");
    eleventyConfig.addPassthroughCopy("galleries/**/*.{jpg,jpeg,JPG,png,gif,svg}");

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

    eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
        let metadata = await Image(src, {
            widths: [300, 600, 900, 1200, 1800, 2400],
            formats: ["avif", "jpeg", "png"],
            urlPath: "/assets/images/",
            outputDir: "./_site/assets/images/"
        });

		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	});

    eleventyConfig.addShortcode("thumbnail_for_post", async function(post) {
        const imageSrc = stripLeadingSlash(getPostThumbnail(post));
        if (imageSrc == "assets/images/placeholder.png" || imageSrc.includes("amazon-adsystem") || !fs.existsSync(imageSrc)) {
            return "";
        } else {
            console.log("Generating thumbnail for " + imageSrc);
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
    eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));
    eleventyConfig.addFilter('excerpt', post => extractExcerpt(post));

    eleventyConfig.addFilter("with_titles", items => {
        return items.filter(item => "title" in item.data);
    });
    // Shortcode to get link to thumbnail image for a post
    // eleventyConfig.addShortcode("thumbnail", post => getPostThumbnail(post));
    eleventyConfig.addFilter("thumb", post => getPostThumbnail(post));
    // TODO: Make a bit more efficient
    eleventyConfig.addFilter("has_thumbnail", post =>
        getPostThumbnail(post) != "/assets/images/placeholder.png");

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

    eleventyConfig.addFilter("group_by_year", function(items) {
        const groups = {};
        items.forEach(item => {
            const year = item.date.getFullYear();
            if (!(year in groups)) {
                groups[year] = [];
            }
            if (!("title" in item.data)) {
                console.log("No title in item: " + item.inputPath);
            }
            groups[year].push(item);
        });
        // Convert this into a list, of objects: {year: 2020, items: [...]}
        const groupList = [];
        for (const year in groups) {
            groupList.push({year: year, items: groups[year]});
        }

        return groupList.sort((a, b) => b.year - a.year);
    });

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

// Excerpt code from https://github.com/11ty/eleventy/issues/179#issuecomment-413119342 (modified)
const excerptMinimumLength = 140;
const excerptSeparator = '\n'

/**
 * Extracts the excerpt from a document.
 *
 * @param {*} doc A real big object full of all sorts of information about a document.
 * @returns {String} the excerpt.
 */
function extractExcerpt(doc) {
    if (!'templateContent' in doc) {
        console.warn('Failed to extract excerpt: Document has no property `templateContent`.');
        return;
    }
    const content = doc.templateContent;

    if (content.includes(excerptSeparator)) {
        return content.substring(0, content.indexOf(excerptSeparator)).trim();
    }
    else if (content.length <= excerptMinimumLength) {
        return content.trim();
    }

    const excerptEnd = findExcerptEnd(content);

    return content.substring(0, excerptEnd).trim();
}

/**
 * Finds the end position of the excerpt of a given piece of content.
 * This should only be used when there is no excerpt marker in the content (e.g. no `<!--more-->`).
 *
 * @param {String} content The full text of a piece of content (e.g. a blog post)
 * @param {Number?} skipLength Amount of characters to skip before starting to look for a `</p>`
 * tag. This is used when calling this method recursively.
 * @returns {Number} the end position of the excerpt
 */
function findExcerptEnd(content, skipLength = 0) {
    if (content === '') {
        return 0;
    }

    const paragraphEnd = content.indexOf('</p>', skipLength) + 4;

    if (paragraphEnd < excerptMinimumLength) {
        return paragraphEnd + findExcerptEnd(content.substring(paragraphEnd), paragraphEnd);
    }

    return paragraphEnd;
}

function getPostThumbnail(post) {
    if ("thumbnail" in post.data) {
        return post.data.thumbnail;
    } else {
        // find the first image in the post
        const content = post.content;
        const imageRegex = /<img[^>]*src="([^"]*)"[^>]*>/g;
        const match = imageRegex.exec(content);
        if (match) {
            return match[1];
        } else {
            return "/assets/images/placeholder.png";
        }
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
