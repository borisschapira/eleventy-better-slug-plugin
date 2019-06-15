const slugify = require("slugify");

function betterSlug (input) {
    const options = {
      replacement: "-",
      remove: /[<>.~":\/?#\[\]{}\(\)@\!$\&'()*\+,;=]/g,
      lower: true
    };
    return slugify(input, options);
}

module.exports = {
  betterSlug
};
