// script to populate the gallery elements
// Assume jquery was loaded before this script.
/* global $ */

// Called by the inline script that make_tab_gallery.js emits after this file.
// eslint-disable-next-line no-unused-vars
function setupGallery (id) {
  $(function () {
    // Find the gallery element.
    const gallery = $('#' + id)
    // Find the tabs element.
    const tabs = gallery.find('.image-tab-gallery-tabs')
    // Find the current image element.
    const currentImage = gallery.find('.image-tab-gallery-current-image')
    // Find the description element.
    const description = gallery.find('.image-tab-gallery-description')
    // For each tab, add a click handler.
    tabs.find('.image-tab-gallery-tab').click(function () {
      const tabImage = $(this).data('src')
      const tabDescription = $(this).attr('title')
      currentImage.empty().append($('<img>', { src: tabImage, loading: 'lazy', decoding: 'async', alt: tabDescription }))
      description.text(tabDescription)
    })

    // Setup the initial image and description.
    const initialImage = tabs.find('.image-tab-gallery-tab').first().data('src')
    const initialDescription = tabs.find('.image-tab-gallery-tab').first().attr('title')
    currentImage.empty().append($('<img>', { src: initialImage, alt: initialDescription }))
    description.text(initialDescription)
  })
}
