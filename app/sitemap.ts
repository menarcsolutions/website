import { MetadataRoute } from "next";
import {
  getServiceRoutes,
  getUiUxRoutes,
  getSeoServiceRoutes,
  getAutomationRoutes,
  getCloudRoutes,
  getSecurityRoutes,
  getIndustryRoutes,
  getTechRoutes,
  getProgrammaticRoutes,
} from "@/lib/seo-config";
import { faqData } from "@/lib/faq-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://menarc.in";
  const now = new Date();

  // Core static pages
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/technologies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Dynamic taxonomy routes
  const serviceRoutes: MetadataRoute.Sitemap = getServiceRoutes().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const uiUxRoutes: MetadataRoute.Sitemap = getUiUxRoutes().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const seoServiceRoutes: MetadataRoute.Sitemap = getSeoServiceRoutes().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const automationRoutes: MetadataRoute.Sitemap = getAutomationRoutes().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const cloudRoutes: MetadataRoute.Sitemap = getCloudRoutes().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const securityRoutes: MetadataRoute.Sitemap = getSecurityRoutes().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = getIndustryRoutes().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const techRoutes: MetadataRoute.Sitemap = getTechRoutes().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const programmaticRoutes: MetadataRoute.Sitemap = getProgrammaticRoutes().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const faqRoutes: MetadataRoute.Sitemap = faqData.map((faq) => ({
    url: `${baseUrl}/#${faq.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...corePages,
    ...serviceRoutes,
    ...uiUxRoutes,
    ...seoServiceRoutes,
    ...automationRoutes,
    ...cloudRoutes,
    ...securityRoutes,
    ...industryRoutes,
    ...techRoutes,
    ...programmaticRoutes,
    ...faqRoutes,
  ];
}
