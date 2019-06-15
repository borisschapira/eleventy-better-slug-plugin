const { betterSlug } = require("./src/better-slug");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("slug", betterSlug);
};
