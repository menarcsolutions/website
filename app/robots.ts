import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bytespider", "CCBot"],
        allow: "/",
      },
    ],
    sitemap: "https://menarc.in/sitemap.xml",
  };
}
