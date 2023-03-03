module.exports = function (eleventyConfig) {
  // Set custom directories for input, output, includes, and data

  // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy('src/style.css');

  eleventyConfig.addPassthroughCopy('src/images');

  // Favicon
  eleventyConfig.addPassthroughCopy('src/favicon.svg', '/');

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
