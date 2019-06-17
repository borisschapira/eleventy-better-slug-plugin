const slugify = require("slugify");
const escapeStringRegexp = require("escape-string-regexp");
const removals = "<>.~\":/?#[]{}()@!$'()*+,;=";

function betterSlug(input, options = {}) {

  // Extend default configuration
  options = {
    ...{
      extensions: {},
      removals: removals
    },
    ...options
  };

  if (options.extensions) {
    slugify.extend(options.extensions);
  }

  return slugify(input, {
    replacement: "-",
    remove: new RegExp("[" + escapeStringRegexp(options.removals) + "]", "g"),
    lower: true
  });
}

module.exports = {
  betterSlug,
  removals
};
