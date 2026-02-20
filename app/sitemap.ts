import { MetadataRoute } from "next";
import { getProperties }  from "@/lib/properties";

const BASE_URL = "https://onnanunity.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const properties = getProperties();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url:              BASE_URL,
      lastModified:     new Date(),
      changeFrequency:  "weekly",
      priority:         1.0,
    },
    {
      url:              `${BASE_URL}/portfolio`,
      lastModified:     new Date(),
      changeFrequency:  "weekly",
      priority:         0.9,
    },
    {
      url:              `${BASE_URL}/about`,
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         0.7,
    },
    {
      url:              `${BASE_URL}/services`,
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         0.7,
    },
    {
      url:              `${BASE_URL}/contact`,
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         0.6,
    },
  ];

  // Dynamic property pages
  const propertyPages: MetadataRoute.Sitemap = properties.map((property) => ({
    url:             `${BASE_URL}/projects/${property.slug}`,
    lastModified:    new Date(),
    changeFrequency: "monthly" as const,
    priority:        0.85,
  }));

  return [...staticPages, ...propertyPages];
}
