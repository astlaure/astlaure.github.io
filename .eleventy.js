/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets');
  eleventyConfig.addPassthroughCopy({'./src/favicon.ico': 'favicon.ico'});

  eleventyConfig.addFilter('formatDate', dateObj => {
    return dateObj.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: '2-digit', timeZone: 'utc' });
  });

  eleventyConfig.addCollection('latest', (collections) => {
    return collections.getFilteredByTag('posts')
      .reverse()
      .slice(0, 5);
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/",

    dir: {
      input: 'src/views',
      output: '_site',
    }
  }
}
