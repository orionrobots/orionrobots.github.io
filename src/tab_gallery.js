// script to populate the gallery elements
// Assume jquery was loaded before this script.

function setup_gallery(id) {
    $(function() {
        // Find the gallery element.
        const gallery = $("#" + id);
        // Find the tabs element.
        const tabs = gallery.find(".image-tab-gallery-tabs");
        // Find the current image element.
        const current_image = gallery.find(".image-tab-gallery-current-image");
        // Find the description element.
        const description = gallery.find(".image-tab-gallery-description");
        // For each tab, add a click handler.
        tabs.find(".image-tab-gallery-tab").click(function() {
            const tab_image = $(this).data("src");
            const tab_description = $(this).attr("title");
            current_image.html('<img src="' + tab_image + '" loading="lazy" decoding="async" alt="' + tab_description + '">');
            description.html(tab_description);
        });
        
        // Setup the initial image and description.
        const initial_image = tabs.find(".image-tab-gallery-tab").first().data("src");
        const initial_description = tabs.find(".image-tab-gallery-tab").first().attr("title");
        current_image.html('<img src="' + initial_image + '" alt="' + initial_description + '">');
        description.html(initial_description);
    });
}