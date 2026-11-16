import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations } from "@/lib/locations";

// Pre-render all 10 city pages at build time. Combined with the trailing-slash
// redirects configured in next.config, this gives Google fully static HTML
// for every location URL.
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

// Per-page metadata, scoped to each city. The canonical uses a trailing slash
// to match the rest of the site's URL convention.
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) {
    return {
      title: "Location not found | NexGen Financial Experts",
    };
  }
  return {
    title: loc.seo.title,
    description: loc.seo.description,
    alternates: {
      canonical: `https://nexgenfinancialexperts.com/locations/${loc.slug}/`,
    },
    openGraph: {
      title: loc.seo.title,
      description: loc.seo.description,
      url: `https://nexgenfinancialexperts.com/locations/${loc.slug}/`,
      type: "article",
    },
  };
}

// Small inline icon set so we don't depend on a specific lucide-react export
// shape — the existing site uses lucide-react, but icon names can drift
// between versions. These are minimal stroke SVGs that match the visual.
function ArrowRightIcon() {
  return (
    <svg
      className="ml-1 h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) {
    notFound();
  }

  return (
    <>
      {/* LocalBusiness / ProfessionalService JSON-LD */}
      {loc.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(loc.jsonLd) }}
        />
      )}
      {/* FAQPage JSON-LD — gives the four city FAQs Google rich-result eligibility */}
      {loc.jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(loc.jsonLdFaq) }}
        />
      )}

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb back to the locations index */}
        <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brand-blue">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/locations/" className="hover:text-brand-blue">
                Locations
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-brand-navy" aria-current="page">
              {loc.city}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="border-b border-border pb-8">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand-blue">
            {loc.county} County · {loc.region}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-brand-navy sm:text-5xl">
            {loc.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{loc.excerpt}</p>

          {/* At-a-glance facts */}
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-brand-navy/5 p-3">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                Combined sales tax
              </dt>
              <dd className="mt-1 font-display text-xl font-bold text-brand-navy">
                {loc.salesTaxRate}
              </dd>
            </div>
            <div className="rounded-lg bg-brand-navy/5 p-3">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                County surtax
              </dt>
              <dd className="mt-1 font-display text-xl font-bold text-brand-navy">
                {loc.surtaxRate}
              </dd>
            </div>
            <div className="rounded-lg bg-brand-navy/5 p-3">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                City population
              </dt>
              <dd className="mt-1 font-display text-xl font-bold text-brand-navy">
                {loc.population.toLocaleString("en-US")}
              </dd>
            </div>
            <div className="rounded-lg bg-brand-navy/5 p-3">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                Metro population
              </dt>
              <dd className="mt-1 font-display text-xl font-bold text-brand-navy">
                {loc.metroPopulation.toLocaleString("en-US")}
              </dd>
            </div>
          </dl>
        </header>

        {/* Hero intro paragraphs */}
        <section className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
          {loc.heroIntro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Body sections */}
        {loc.body.map((section, i) => (
          <section key={i} className="mt-10">
            {section.heading && (
              <h2 className="font-display text-2xl font-bold text-brand-navy">
                {section.heading}
              </h2>
            )}
            <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/90">
              {section.paragraphs?.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-4 space-y-3">
                {section.bullets.map((b, k) => (
                  <li key={k} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-base leading-relaxed text-foreground/90">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Industries served — pulled out as a styled chip group for scannability */}
        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold text-brand-navy">
            Top industries we serve in {loc.city}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {loc.topIndustries.map((ind) => (
              <li
                key={ind}
                className="rounded-full bg-brand-navy/5 px-3 py-1 text-sm font-medium text-brand-navy"
              >
                {ind}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        {loc.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-brand-navy">
              Frequently asked questions about accounting in {loc.city}
            </h2>
            <div className="mt-6 space-y-6">
              {loc.faqs.map((f, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="font-display text-lg font-semibold text-brand-navy">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground/90">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="mt-12 rounded-2xl bg-brand-navy p-8 text-center text-white sm:p-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Ready to talk to a {loc.city} accountant?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Book a free 30-minute consultation. We&apos;ll review your books,
            flag any compliance gaps, and give you a fixed-fee monthly plan
            you can approve before any work starts.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://bookings.cloud.microsoft/book/NexGenFinancialExperts2@NexgenFinancialExperts.onmicrosoft.com/"
              className="inline-flex items-center rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
            >
              Book a Free Consultation
            </a>
            <a
              href="tel:+19543063823"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <PhoneIcon />
              +1 (954) 306-3823
            </a>
            <a
              href="https://wa.me/19547701568"
              className="inline-flex items-center rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              WhatsApp +1 (954) 770-1568
            </a>
          </div>
        </section>

        {/* Cross-link to all locations (helps Google crawl the whole set) */}
        <nav className="mt-12" aria-label="Other Florida locations">
          <h2 className="font-display text-lg font-semibold text-brand-navy">
            Other Florida cities we serve
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {locations
              .filter((l) => l.slug !== loc.slug)
              .map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}/`}
                    className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium text-brand-navy transition-all hover:border-brand-blue hover:text-brand-blue"
                  >
                    {l.city}
                    <ArrowRightIcon />
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </main>
    </>
  );
}
