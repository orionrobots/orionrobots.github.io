const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItAttrs = require('markdown-it-attrs')
const moment = require('moment')
const slugify = require('slugify')
const CleanCSS = require('clean-css')
const extractExcerpt = require('./src/shortcodes/extract_excerpt.js')
const groupByYear = require('./src/filters/group_by_year.js')
const thumbnails = require('./src/thumbnails.js')
const tabGallery = require('./src/shortcodes/make_tab_gallery.js')
const imgResponsive = require('./src/shortcodes/img_responsive.js')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const installMediaObjects = require('./src/media_object.js')
const {
  fortawesomeBrandsPlugin,
} = require('@vidhill/fortawesome-brands-11ty-shortcode')

const mediaFiletypes = 'jpg,jpeg,JPG,png,gif,svg,avif,webp'

module.exports = function (eleventyConfig) {
  // Configure markdown parser
  const markdownLib = markdownIt({ html: true, typographer: true })
  markdownLib.use(markdownItAnchor)
  markdownLib.use(markdownItAttrs)

  eleventyConfig.setLibrary('md', markdownLib)
  eleventyConfig.addPlugin(fortawesomeBrandsPlugin)
  eleventyConfig.addPlugin(syntaxHighlight)

  installMediaObjects(eleventyConfig)

  // copy through assets
  eleventyConfig.setServerPassthroughCopyBehavior('passthrough')
  eleventyConfig.addPassthroughCopy('admin')
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('dist')
  eleventyConfig.addPassthroughCopy('favicon.png')
  for (const ext of mediaFiletypes.split(',')) {
    eleventyConfig.addPassthroughCopy('galleries/**/*.' + ext)
  }
  eleventyConfig.addPassthroughCopy('google5458abc1104b04dd.html')
  eleventyConfig.addPassthroughCopy({ htaccess: '.htaccess' })
  // recursive-copy matches `filter` against paths relative to content/,
  // so content/foo/bar.jpg lands at _site/foo/bar.jpg with no rename needed.
  eleventyConfig.addPassthroughCopy({ content: '.' }, {
    filter: ['**/*.{' + mediaFiletypes + '}']
  })

  eleventyConfig.addWatchTarget('src/**/*')
  eleventyConfig.addWatchTarget('galleries/**/*')
  eleventyConfig.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('_posts/*.md')
  })

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
  })

  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.addShortcode('image', imgResponsive)
  eleventyConfig.addShortcode('img_responsive', imgResponsive)

  // Thumbnails
  eleventyConfig.addShortcode('thumbnail_for_post', thumbnails.thumbnailForPost)
  eleventyConfig.addFilter('has_thumbnail', thumbnails.hasThumbnail)
  eleventyConfig.addShortcode('thumbnail_from_path', thumbnails.thumbnailFromPath)

  eleventyConfig.addShortcode('tab_gallery', tabGallery)

  // Defines shortcode for generating post excerpts
  eleventyConfig.addShortcode('excerpt', extractExcerpt)
  eleventyConfig.addFilter('excerpt', extractExcerpt)

  eleventyConfig.addFilter('with_titles', items => {
    return items.filter(item => 'title' in item.data)
  })

  // Liquid filter to convert a date to a string
  eleventyConfig.addLiquidFilter('to_utc_string', date => date.toUTCString())

  // Liquid filter for long date string
  eleventyConfig.addLiquidFilter('date_to_long_string', function (date) {
    return date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  })

  // Universal filter for jsonify
  eleventyConfig.addFilter('jsonify', JSON.stringify)

  eleventyConfig.addFilter('with_explicit_date', items => items.filter(item => 'date' in item.data))

  eleventyConfig.addFilter('group_by_year', groupByYear)

  eleventyConfig.addShortcode('log', console.log)

  // Read the menu data from _config.yml and add it to the global data
  eleventyConfig.addGlobalData('menu', () => getDataFromConfigYaml('menu'))
  eleventyConfig.addGlobalData('site_title', () => getDataFromConfigYaml('title'))
  eleventyConfig.addGlobalData('site_tagline', () => getDataFromConfigYaml('tagline'))
  eleventyConfig.addGlobalData('production_url', () => getDataFromConfigYaml('production_url'))
  eleventyConfig.addGlobalData('JB', () => getDataFromConfigYaml('JB'))
  eleventyConfig.addGlobalData('author', () => getDataFromConfigYaml('author'))
  eleventyConfig.addGlobalData('now', () => new Date())

  eleventyConfig.addNunjucksFilter('date', function (date, format) {
    return moment(date).format(format)
  })

  eleventyConfig.addCollection('tagList', (collection) => {
    const tagsDict = {}

    // Iterate over all content files and collect tags
    collection.getAll().forEach((item) => {
      if (item.data.tags) {
        item.data.tags.forEach((tag) => {
          const slugTag = slugify(tag, { lower: true })
          if (!(slugTag in tagsDict)) {
            tagsDict[slugTag] = []
          }
          tagsDict[slugTag].push(item)
        })
      }
    })
    return tagsDict
  })

  return {
    dir: {
      layouts: '_includes/layouts'
    }
  }
}

function getDataFromConfigYaml (key) {
  // Load the _config.yml file
  const yaml = require('js-yaml')
  const fs = require('fs')
  const config = yaml.load(fs.readFileSync('_config.yml', 'utf-8'))
  // Return the menu data
  return config[key]
}
