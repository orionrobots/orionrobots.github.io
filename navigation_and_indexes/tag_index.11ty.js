const slugify = require("slugify");

function tag_item(tag_name, tags) {
    const tag_slug = slugify(tag_name);
    const count = tags[tag_name]?.length || 0;
    return `<li><a href="/tags/${tag_slug}">${tag_name} <span class="badge tag-badge rounded-pill">${count}</span></a></li>`;
}

function tag_list(tags) {
    const keys = Object.keys(tags).sort();
    return `<ul>${keys.map(tag => tag_item(tag, tags)).join("")}</ul>`;
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
