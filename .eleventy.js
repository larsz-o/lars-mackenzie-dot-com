const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
// Require filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const rssPlugin = require('@11ty/eleventy-plugin-rss');

module.exports = config => {
// Set directories to pass through to the dist folder
config.addPassthroughCopy('./src/images/');
// Add filters
config.addFilter('dateFilter', dateFilter);
config.addFilter('w3DateFilter', w3DateFilter);
// Plugins
config.addPlugin(rssPlugin);
// Returns work items, sorted by display order
config.addCollection('work', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
  });
// Returns a collection of blog posts in reverse date order
config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });
// Tell 11ty to use the .eleventyignore and ignore our .gitignore file
config.setUseGitIgnore(false);
    return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
      dir: {
        input: 'src',
        output: 'dist'
      }
    };
  };
  
