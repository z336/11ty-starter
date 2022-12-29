const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
// const { slugify } = require("../../utils/index.js");

const anchorSlugify = (s) =>
  encodeURIComponent(
    String(s)
      .trim()
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=_`~()]/g, "")
      .replace(/\s+/g, "-")
  );

// Markdown parsing
const markdown = markdownIt({
  html: true,
  breaks: false,
  typographer: true,
})
  .disable("code")
  .use(markdownItAnchor, {
    slugify: anchorSlugify,
    level: [2, 3],
    tabIndex: false,
    permalink: markdownItAnchor.permalink.headerLink({
      class: "heading-anchor",
    }),
  });

module.exports = markdown;
