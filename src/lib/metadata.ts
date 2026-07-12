import type { Metadata } from "next";
import { siteConfig, seo } from "@/content/site-content";

type PageKey = keyof typeof seo.pages;

export function createMetadata(
  page?: PageKey,
  overrides?: Partial<Metadata>
): Metadata {
  const pageSeo = page ? seo.pages[page] : seo.default;

  return {
    title: pageSeo.title,
    description: pageSeo.description,
    keywords: [...seo.default.keywords],
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: pageSeo.title,
      description: pageSeo.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageSeo.title,
      description: pageSeo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}
