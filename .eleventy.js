const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const moment = require("moment");

module.exports = function(eleventyConfig) {
    // Configure markdown parser
    const markdownLib = markdownIt({html: true, typographer: true});
    markdownLib.use(markdownItAnchor);
    eleventyConfig.setLibrary("md", markdownLib);

    // TODO: Make this list defined
    // eleventyConfig.addLayoutAlias('autogallery', 'layouts/autogallery.html');
    // eleventyConfig.addLayoutAlias('common', 'layouts/common.html');
    // eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
    // eleventyConfig.addLayoutAlias('gallery', 'layouts/gallery.html');
    // eleventyConfig.addLayoutAlias('galleryitem', 'layouts/galleryitem.html');
    // eleventyConfig.addLayoutAlias('index', 'layouts/index.html');
    // eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
    // eleventyConfig.addLayoutAlias('post', 'layouts/post.html');
    // eleventyConfig.addLayoutAlias('product', 'layouts/product.html');
    // eleventyConfig.addLayoutAlias('subject_page', 'layouts/subject_page.njk');

    eleventyConfig.ignores.add("README.md");
    eleventyConfig.ignores.add("_drafts/**");
    eleventyConfig.ignores.add("src/**");

    //copy through assets
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("dist");
    eleventyConfig.addPassthroughCopy("galleries/**/*.{jpg,JPG,png,gif,svg}");

    let $collectionApi = null;

    eleventyConfig.addCollection("posts", function(collectionApi) {
        $collectionApi = collectionApi;
        return collectionApi.getFilteredByGlob("_posts/*.md");
    });

    eleventyConfig.addCollection("galleries", function(collectionApi) {
        $collectionApi = collectionApi;
        return collectionApi.getFilteredByGlob("galleries/**");
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

    // Defines shortcode for generating post excerpts
    eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));
    eleventyConfig.addFilter('excerpt', post => extractExcerpt(post));

    eleventyConfig.addFilter("with_titles", items => {
        return items.filter(item => "title" in item.data);
    });
    // Shortcode to get link to thumbnail image for a post
    eleventyConfig.addShortcode("thumbnail", post => getPostThumbnail(post));
    eleventyConfig.addFilter("thumb", post => getPostThumbnail(post));
    // TODO: Make a bit more efficient
    eleventyConfig.addFilter("has_thumbnail", post =>
        getPostThumbnail(post) != "/assets/images/placeholder.png");

    eleventyConfig.addFilter("strip_images", value=> value.replace(/<img[^>]*>/g,""));
    eleventyConfig.addFilter("strip_links", value=> value.replace(/<a[^>]*>([^<]*)<\/a>/g,"$1"));
    eleventyConfig.addFilter("strip_decorators", value=> value.replace(/\{: (class|style)=.*\}/g,""));

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

    // Read the menu data from _config.yml and add it to the global data
    eleventyConfig.addGlobalData("menu", () => getDataFromConfigYaml("menu"));
    eleventyConfig.addGlobalData("site_title",  () => getDataFromConfigYaml("title"));
    eleventyConfig.addGlobalData("site_tagline",  () => getDataFromConfigYaml("tagline"));



    // Ordered most recent 6 posts
    eleventyConfig.addCollection("recent_posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("_posts/*.md").reverse().slice(0, 6);
    });

    // Ordered posts by date
    eleventyConfig.addFilter("posts_by_date", function(posts) {
        return posts.sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addNunjucksFilter("date", function(date, format) {
        return moment(date).format(format);
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
    if(doc.url.includes("category")) {
        return;
    }
    if (!doc.hasOwnProperty('templateContent')) {
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
        if(post.url.includes("category")) {
            return "/assets/images/placeholder.png";
        }
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
