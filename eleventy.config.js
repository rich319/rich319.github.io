export default function (eleventyConfig) {
  // Images and any other static files under src/assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Design system: only the tokens and the font are deployed.
  // README, previews and tokens.json stay in the repo, not on the site.
  eleventyConfig.addPassthroughCopy({
    "design-system/tokens.css": "assets/tokens.css",
    "design-system/fonts": "assets/fonts",
  });

  // Cloudflare Pages headers
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });

  return {
    dir: { input: "src", output: "_site" },
  };
}
