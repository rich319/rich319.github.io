export default function (eleventyConfig) {
  // Static assets copied as-is into _site
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("uploads");
  eleventyConfig.addPassthroughCopy("design-system");

  // Don't render docs/notes as site pages
  eleventyConfig.ignores.add("**/*.md");
  eleventyConfig.ignores.add("design-system/**");
  eleventyConfig.ignores.add("uploads/**");

  return {
    dir: { input: ".", output: "_site" },
  };
}
