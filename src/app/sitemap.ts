import type { MetadataRoute } from "next";
import { locations } from "@/lib/locations";
import { articles } from "@/lib/articles";

// App Router sitemap. Generates /sitemap.xml at build time.
//
// Pulls all location pages and all Insights articles from the canonical
// source files, so this stays in sync automatically as either list changes.
//
// Trailing-slash convention: the live site serves every URL with a trailing
// slash (next.config `trailingSlash: true`). We emit trailing-slash URLs
// here so Google indexes the canonical form from the first crawl.

const BASE = "https://nexgenfinancialexperts.com";

// Static routes that exist on the site today. Edit this list to match your
// actual routes — every URL uses a trailing slash to match the site convention.
const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
  { url: `${BASE}/about/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { url: `${BASE}/insights/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: `${BASE}/locations/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE}/contact/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  { url: `${BASE}/services/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/privacy-policy/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  { url: `${BASE}/terms-of-use/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
];

// Individual service pages — slugs taken from the homepage navigation.
// If you add or rename a service, update this list to match `services.ts`.
// (If you prefer a single source of truth, import your `services` array here
// and map over it the same way we do for articles and locations below.)
const serviceSlugs = [
  "business-accounting-bookkeeping",
  "tax-advisory-planning-services",
  "business-tax-filing-preparation",
  "llc-s-corp-tax-structuring",
  "crypto-tax-advisory-services",
  "real-estate-accounting-bookkeeping",
  "ecommerce-tax-accounting",
  "financial-advisory-for-startups",
  "startup-fractional-cfo-services",
];

const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
  url: `${BASE}/services/${slug}/`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.7,
}));

// 10 location landing pages — built from the locations data file so this
// stays in sync automatically if a city is added or removed.
const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
  url: `${BASE}/locations/${l.slug}/`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));

// All Insights articles (the existing 2 + the 8 new 2026 SEO articles), pulled
// from the canonical `articles` array in src/lib/articles.ts. The article's
// `date` field (ISO publish date) serves as `lastModified` until the article
// is updated; update the `date` field when you publish a revision.
const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
  url: `${BASE}/insights/${a.slug}/`,
  lastModified: new Date(a.date),
  changeFrequency: "monthly" as const,
  priority: 0.7,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...articleRoutes,
  ];
}
