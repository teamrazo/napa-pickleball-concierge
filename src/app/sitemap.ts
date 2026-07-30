import type { MetadataRoute } from "next";
import { services } from "@/lib/site-data";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/book", "/privacy", "/terms"];
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];

  return entries;
}
