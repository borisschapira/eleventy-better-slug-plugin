# A Better Slug Filter for Eleventy (plugin)

In Eleventy v0.8.3, the `slug` filter don't remove reserved characters for URL and HTML ids. This plugin aims at fixing that, replacing the standard `slug` filter by a new one.

## Use Cases

Uses the enhanced `slug` filter to convert a string into a URL slug. Can be used in pagination or permalinks.

Removed characters: `.~\:,;/?=#[]{}()@!'*+`

Examples:

* `John's car` => `johns-car`
* `10 O'Clock Live` => `10-oclock-live`
* `E!` => `e`
* `Me, Myself & I` => `me-myself-and-i`

## Installation

Add the plugin to your project with:

`npm add @borisschapira/eleventy-plugin-better-slug --save`

Then, in you `.eleventy.js` file:

```js
// At the begining of the file
const pluginBetterSlug = require("@borisschapira/eleventy-plugin-better-slug");
…

module.exports = function(eleventyConfig) {
  …
  eleventyConfig.addPlugin(pluginBetterSlug);
  …
}
```

## Configuration

By design, this `slug' filter deletes all reserved characters but you can use a custom configuration to modify the characters to be deleted and even replace some characters.

```js
const pluginBetterSlug = require("@borisschapira/eleventy-plugin-better-slug");
…

module.exports = function(eleventyConfig) {
  …
  const options = {
    extensions: {
      "'": "-"
    }
  }
  eleventyConfig.addPlugin(pluginBetterSlug, {});
  …
}
```

The `options` object is defined as follows:

- `removals` (optional): a string containing the characters to remove (any value overwrites the default value)
- `extensions` (optional): a charset of all the characters replacements (any new key-value pair is added to the default library)
