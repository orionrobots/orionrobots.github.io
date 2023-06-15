module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
    eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
    eleventyConfig.addLayoutAlias('index', 'layouts/index.html');
    eleventyConfig.addLayoutAlias('subject_page', 'layouts/subject_page.html');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.html');
    eleventyConfig.addLayoutAlias('gallery', 'layouts/gallery.html');
    eleventyConfig.addLayoutAlias('galleryitem', 'layouts/galleryitem.html');
    eleventyConfig.addLayoutAlias('product', 'layouts/product.html');
    eleventyConfig.addLayoutAlias('autogallery', 'layouts/autogallery.html');
    eleventyConfig.addLayoutAlias('common', 'layouts/common.html');
};
