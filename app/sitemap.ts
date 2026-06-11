import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { servicesData } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://menarc.in";
  const now = new Date();

  const locations = [
    "chennai",
    "avadi",
    "ambattur",
    "pattabiram",
    "anna-nagar",
    "mogappair",
    "porur",
    "velachery",
    "tambaram",
    "omr",
    "sholinganallur",
    "coimbatore",
    "madurai",
    "trichy",
    "salem",
    "tiruppur",
    "erode",
    "hosur",
    "vellore",
  ];

  const localLandingPages = locations.map((loc) => ({
    url: `${baseUrl}/website-development-${loc}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const servicePages = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...localLandingPages,
    ...blogPosts,
    ...servicePages,
  ];
}
