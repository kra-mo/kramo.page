import yaml from "js-yaml";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", (contents) =>
    yaml.load(contents),
  );

  eleventyConfig.ignores.add("README.md");
  ["fonts", "images", "videos", "sly", "style.css", ".well-known"].forEach(
    (path) => eleventyConfig.addPassthroughCopy(path),
  );

  eleventyConfig.addLayoutAlias("plain", "plain.liquid");
  eleventyConfig.addLayoutAlias("default", "default.liquid");
  eleventyConfig.setLayoutResolution(false);

  // Set global permalinks to resource.html style
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) =>
      `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  // Remove .html from `page.url` entries
  eleventyConfig.addUrlTransform((page) => {
    if (page.url.endsWith(".html")) {
      return page.url.slice(0, -1 * ".html".length);
    }
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: { name: "post" },
    metadata: {
      language: "en",
      title: "kramo's blog",
      subtitle: "Reflections on how things work",
      base: "https://kramo.page/",
      author: { name: "Laura Kramolis" },
    },
  });
}
