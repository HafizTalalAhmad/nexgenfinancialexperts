import path from "node:path";
import type { NextConfig } from "next";

// Security headers applied to every response (Node/server deployments).
// The static-export build pairs with the equivalent rules in deploy/.htaccess.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-src 'self' https://www.openstreetmap.org https://www.google.com https://maps.google.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

// Redirects preserving verified legacy URLs from the original WordPress site.
const legacyRedirects = [
  { source: "/aboutus", destination: "/about", permanent: true },
  { source: "/blog", destination: "/insights", permanent: true },
  { source: "/home", destination: "/", permanent: true },
  { source: "/sample-page", destination: "/", permanent: true },
];

// NEXT_EXPORT=1 switches to a fully static export for shared cPanel hosting
// (LiteSpeed/Apache, no Node.js runtime). trailingSlash makes every route a
// folder with index.html, which Apache serves natively. deploy/contact.php
// replaces the Node contact API in that mode.
const isStaticExport = process.env.NEXT_EXPORT === "1";

// `output: "standalone"` is a PRODUCTION build mode. Running it during
// `next dev` triggers Next's file-tracer alongside Turbopack and is a major
// cause of the "frequent file updates detected in node_modules" warning.
// Only enable it for production builds (next build / next start).
const isProdBuild = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Set Turbopack's root so it can tell your source files apart from
  // node_modules cache writes. Fixes the "turbopack.root is not set" warning.
  turbopack: {
    root: path.join(__dirname),
  },
  ...(isStaticExport
    ? { output: "export" as const, trailingSlash: true, images: { unoptimized: true } }
    : isProdBuild
      ? { output: "standalone" as const }
      : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  poweredByHeader: false,
  // Tell Next's file watcher to ignore paths that change frequently during dev
  // (logs, the .next cache, the standalone trace output, editor caches).
  // Without this on Windows, Defender re-scans those files and Turbopack
  // re-reads them, producing the "waiting for file system to stabilize" loop.
  outputFileTracingRoot: path.join(__dirname),
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [{ source: "/(.*)", headers: securityHeaders }];
        },
        async redirects() {
          return legacyRedirects;
        },
      }),
};

export default nextConfig;
