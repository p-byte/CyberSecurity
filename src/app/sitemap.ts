import type { MetadataRoute } from "next";
import { navItems, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", ...navItems.map((item) => item.href), "/privacy-policy", "/terms-and-conditions"];
  return [...new Set(staticRoutes)].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
