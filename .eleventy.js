import { betterSlug } from "../src/better-slug";

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("slug", betterSlug);
};
