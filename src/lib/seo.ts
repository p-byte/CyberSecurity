import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type SeoOptions = {
  title: string;
  description?: string;
  path?: string;
};

export function createMetadata({ title, description = siteConfig.description, path = "/" }: SeoOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
