import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { insightsPage, services } from "@/content/site-content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return insightsPage.articles.find((a) => a.slug === slug);
}
