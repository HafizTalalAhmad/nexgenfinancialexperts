import type { MetadataRoute } from "next";

// App Router robots.txt generator. Produces /robots.txt at build time.
//
// If your project already has a `public/robots.txt` file OR an existing
// `src/app/robots.ts`, DELETE THIS FILE — keeping two will cause a build
// conflict. This is here as a safe default in case neither exists.

// Required for Next.js 16 with `output: "export"` — without this, the
// robots.txt route is treated as dynamic and the static export fails.
export const dynamic = "force-static";

const BASE = "https://nexgenfinancialexperts.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow the Next.js internal chunks and Cloudflare email-decode script
        disallow: ["/_next/", "/cdn-cgi/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
