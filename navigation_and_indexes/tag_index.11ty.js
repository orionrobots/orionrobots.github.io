const slugify = require("slugify");

function tag_item(tag_name) {
    tag_slug = slugify(tag_name);
    return `<li><a href="/tags/${tag_slug}">${tag_name}</a></li>`;
}

function tag_list(tags) {
    const keys = Object.keys(tags).sort();
    return `<ul>${keys.map(tag_item).join("")}</ul>`;
}

class TagIndex {
    data() {
        return {
            permalink: "/tags/index.html",
            eleventyExcludeFromCollections: true,
            layout: "page",
            title: "Tags"
        };
    }

    render({ collections }) {
        return `<h1>All Tags</h1><ul>${ tag_list(collections.tagList) }</ul>`;
    }
}

module.exports = TagIndex;
