module.exports = function (eleventyConfig) {
  // Set custom directories for input, output, includes, and data

  // Copy `src/style.css` to `dist/style.css`
  eleventyConfig.addPassthroughCopy('src/style.css');

  eleventyConfig.addPassthroughCopy('src/images');

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist',
    },
  };
};
