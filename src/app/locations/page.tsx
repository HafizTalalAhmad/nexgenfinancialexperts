import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Florida Locations | NexGen Financial Experts",
  description:
    "Accounting, tax, and CFO services across 10 Florida cities — Fort Lauderdale, Miami, Tampa, Orlando, Jacksonville, Tallahassee, St. Petersburg, Hialeah, Port St. Lucie, and Cape Coral. Local sales tax rates and industry-specific expertise for each market.",
  alternates: {
    canonical: "https://nexgenfinancialexperts.com/locations/",
  },
  openGraph: {
    title: "Florida Locations | NexGen Financial Experts",
    description:
      "Accounting, tax, and CFO services across 10 Florida cities — with local sales tax rates and industry-specific expertise for each market.",
    url: "https://nexgenfinancialexperts.com/locations/",
    type: "website",
  },
};

// Combine the city-level LocalBusiness schemas into a single ItemList so the
// index page itself carries structured data for all 10 cities.
const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NexGen Financial Experts — Florida Locations",
  itemListElement: locations.map((l, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Place",
      name: `NexGen Financial Experts — ${l.city}`,
      url: `https://nexgenfinancialexperts.com/locations/${l.slug}/`,
      address: {
        "@type": "PostalAddress",
        addressLocality: l.city,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
  })),
};

export default function LocationsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Serving Florida
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-brand-navy sm:text-5xl">
            Florida Locations
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            NexGen Financial Experts provides accounting, tax, and fractional
            CFO services across 10 Florida cities. Our office is in Fort
            Lauderdale; we serve clients in person there and remotely across
            the state. Each city page below lists the local sales tax rate,
            the industries we serve there, and a free-consultation link.
          </p>
        </section>

        {/* City grid */}
        <section className="mt-12">
          <h2 className="sr-only">All Florida cities served</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-brand-blue hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-brand-navy group-hover:text-brand-blue">
                    {loc.city}
                  </h3>
                  <span className="rounded-full bg-brand-navy/5 px-3 py-1 text-xs font-medium text-brand-navy">
                    {loc.county} County
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {loc.region}
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Combined sales tax</dt>
                    <dd className="font-semibold text-brand-navy">
                      {loc.salesTaxRate}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">County surtax</dt>
                    <dd className="font-medium text-brand-navy">
                      {loc.surtaxRate}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Population</dt>
                    <dd className="font-medium text-brand-navy">
                      {loc.population.toLocaleString("en-US")}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                  {loc.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-blue">
                  View {loc.city} page
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ-style closer */}
        <section className="mx-auto mt-16 max-w-3xl rounded-xl border border-border bg-brand-navy/5 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-brand-navy">
            Not sure which location applies to your business?
          </h2>
          <p className="mt-3 text-muted-foreground">
            If you operate in a city we don&apos;t have a dedicated page for,
            we still serve you — most engagements run fully remote after the
            first call. Schedule a free 30-minute consultation and we will
            tell you which local tax rules apply to your business.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://bookings.cloud.microsoft/book/NexGenFinancialExperts2@NexgenFinancialExperts.onmicrosoft.com/"
              className="inline-flex items-center rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-navy"
            >
              Book a Free Consultation
            </a>
            <a
              href="tel:+19543063823"
              className="inline-flex items-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-all hover:border-brand-blue"
            >
              Call +1 (954) 306-3823
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
