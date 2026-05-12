import { MetadataRoute } from "next";
import { getProgrammaticRoutes } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://menarc.in";
  const now = new Date();
  
  const programmaticRoutes = getProgrammaticRoutes().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#how-it-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...programmaticRoutes,
  ];
}
