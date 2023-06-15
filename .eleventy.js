module.exports = function(eleventyConfig) {
    // TODO: Make this list defined
    eleventyConfig.addLayoutAlias('autogallery', 'layouts/autogallery.html');
    eleventyConfig.addLayoutAlias('common', 'layouts/common.html');
    eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
    eleventyConfig.addLayoutAlias('gallery', 'layouts/gallery.html');
    eleventyConfig.addLayoutAlias('galleryitem', 'layouts/galleryitem.html');
    eleventyConfig.addLayoutAlias('index', 'layouts/index.html');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.html');
    eleventyConfig.addLayoutAlias('product', 'layouts/product.html');
    eleventyConfig.addLayoutAlias('subject_page', 'layouts/subject_page.html');

    eleventyConfig.ignores.add("README.md");
    eleventyConfig.ignores.add("_drafts/**");

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

    // Liquid filter to convert a date to a string
    eleventyConfig.addLiquidFilter("date_to_string", function(date) {
        return date.toDateString();
    });

    // Liquid filter for long date string
    eleventyConfig.addLiquidFilter("date_to_long_string", function(date) {
        return date.toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    });

    // Universal filter for jsonify
    eleventyConfig.addFilter("jsonify", function(value) {
        return JSON.stringify(value);
    });
};
