const { load } = require("js-yaml");
const { readableDate, htmlDateString, getFullYear } = require("./config/filters/index.js");
const markdown = require("./config/plugins/index.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  // Process Yaml files
  eleventyConfig.addDataExtension("yaml", load);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  eleventyConfig.addPassthroughCopy("./src/assets/scripts/");

  // Filters
  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("getFullYear", getFullYear);

  // Plugins
  eleventyConfig.setLibrary("md", markdown);

  return {
    dir: {
      input: "src",
      data: "data",
      layouts: "layouts",
      includes: "includes",
    },
  };
};
