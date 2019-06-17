const { betterSlug } = require("./src/better-slug");

module.exports = {
  configFunction: function(eleventyConfig, options = {}) {
    eleventyConfig.addFilter("slug", item => betterSlug(item, options));
  }
};
