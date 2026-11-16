// Location landing pages — 10 Florida cities for local SEO.
// Each entry mirrors the structure of `articles.ts` so it can be rendered
// by the same page-templates. Every city has unique, researched body content
// (county, surtax rate, local industries, commute notes) plus a JSON-LD
// LocalBusiness / ProfessionalService block scoped to that city.
//
// Sources for tax facts (cited inline where used):
//  - Florida Dept. of Revenue, Discretionary Sales Surtax (Form DR-15DSS, 2026 ed.)
//  - Florida Dept. of Revenue, Tax and Interest Rates page (corporate income tax 5.5%)
//  - U.S. Census Bureau, 2020/2023 population estimates
//  - Bureau of Labor Statistics, QCEW county employment data
//
// All NAP data, phone, booking URL, and geo coordinates come from site.ts and
// are reused verbatim. The physical office is in Fort Lauderdale; every other
// city page is a service-area page that states the same address and makes
// clear we serve clients remotely across the state.

export interface LocationFaq {
  q: string;
  a: string;
}

export interface Location {
  slug: string;              // URL slug, e.g. "fort-lauderdale"
  city: string;              // Display name, e.g. "Fort Lauderdale"
  county: string;           // e.g. "Broward"
  region: string;           // e.g. "South Florida"
  population: number;        // city population, latest Census estimate
  metroPopulation: number;   // metro area population (rounded)
  salesTaxRate: string;      // e.g. "7.0%" (state 6% + surtax)
  surtaxRate: string;         // e.g. "1.0%" county discretionary surtax
  topIndustries: string[];   // 3-5 dominant local industries
  title: string;             // H1 / page title
  excerpt: string;           // meta description + card blurb
  readMinutes: number;
  heroIntro: string[];       // 2-3 paragraphs introducing NexGen in this city
  body: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: LocationFaq[];
  seo: { title: string; description: string };
  // JSON-LD schema, serialized to <script type="application/ld+json"> at render.
  // Two schemas per page: a LocalBusiness/ProfessionalService block (geographic
  // scope) and a FAQPage block (Google rich-result eligibility for the FAQs).
  jsonLd: Record<string, unknown>;
  jsonLdFaq?: Record<string, unknown>;
}

// Reusable NAP constants — keep one source of truth.
const NAP = {
  phone: "+1 (954) 306-3823",
  phoneHref: "tel:+19543063823",
  whatsapp: "+1 (954) 770-1568",
  whatsappHref: "https://wa.me/19547701568",
  bookingUrl:
    "https://bookings.cloud.microsoft/book/NexGenFinancialExperts2@NexgenFinancialExperts.onmicrosoft.com/",
  street: "1975 East Sunrise Blvd",
  suite: "Suite 705",
  stateCode: "FL",
  zip: "33304",
  // ISO 3166-1 alpha-2 country code — matches the existing site JSON-LD,
  // which uses "US" (schema.org / Google recommendation), not "USA".
  country: "US",
  lat: 26.1348,
  lng: -80.1289,
} as const;

// Helper — every city shares the same professional service schema skeleton,
// scoped to that city's name. `areaServed` is set per-city so Google
// understands which landing page covers which geography.
function localBusinessSchema(city: string, county: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `https://nexgenfinancialexperts.com/locations/${city.toLowerCase().replace(/ /g, "-")}#business`,
    name: "NexGen Financial Experts",
    description: `Accounting, tax, and business advisory services for ${city}, ${county} County, Florida — bookkeeping, corporate and personal tax returns, sales tax compliance, fractional CFO, and startup structuring.`,
    url: `https://nexgenfinancialexperts.com/locations/${city.toLowerCase().replace(/ /g, "-")}`,
    telephone: NAP.phone,
    email: "paudalus@nexgenfinancialexperts.com",
    image: "https://nexgenfinancialexperts.com/images/nexgen-logo.png",
    logo: "https://nexgenfinancialexperts.com/images/nexgen-logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${NAP.street}, ${NAP.suite}`,
      addressLocality: "Fort Lauderdale",
      addressRegion: NAP.stateCode,
      postalCode: NAP.zip,
      addressCountry: NAP.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: NAP.lat, longitude: NAP.lng },
    areaServed: [
      { "@type": "City", name: city },
      { "@type": "AdministrativeArea", name: `${county} County` },
      { "@type": "State", name: "Florida" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/nexgenfinancialexperts",
      "https://www.instagram.com/nexgenfinancialexperts/",
      "https://www.linkedin.com/company/nexgenfinancialexperts/",
      "https://www.tiktok.com/@nexgenfinancialexperts",
      "https://www.yelp.com/biz/nexgen-fort-lauderdale-3",
    ],
  };
}

// Helper — builds a FAQPage JSON-LD block from the city's FAQs. Emitted as a
// second <script type="application/ld+json"> tag on each location page so the
// FAQs become eligible for Google rich-result snippets.
function faqPageSchema(faqs: LocationFaq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Shared CTA block appended to every city page — keeps the conversion path
// identical across the funnel and prevents duplication drift.
function ctaBlock(city: string): { heading: string; paragraphs: string[] } {
  return {
    heading: `Book a free consultation with a ${city} accountant`,
    paragraphs: [
      `If your business is in ${city}, schedule a no-cost 30-minute call with our team. We'll review your current books, flag any compliance gaps, and outline a fixed-fee monthly plan you can approve before any work starts. Use the booking link below, or call ${NAP.phone} during business hours.`,
      `We serve clients across ${city} and the surrounding area both in person at our Fort Lauderdale office and remotely over secure video. Most engagements start within five business days of the first call.`,
    ],
  };
}

export const locations: Location[] = [
  // 1. Fort Lauderdale (home city — physical office location)
  {
    slug: "fort-lauderdale",
    city: "Fort Lauderdale",
    county: "Broward",
    region: "South Florida",
    population: 182760,
    metroPopulation: 6166000, // Miami-Fort Lauderdale-West Palm Beach MSA
    salesTaxRate: "7.0%",
    surtaxRate: "1.0%",
    topIndustries: [
      "Marine & yachting",
      "Real estate & property management",
      "Hospitality & tourism",
      "Professional services",
      "Healthcare",
    ],
    title: "Fort Lauderdale Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "Fort Lauderdale accountant serving Broward County businesses with bookkeeping, tax returns, sales tax compliance, and fractional CFO services. Book a free consultation today.",
    readMinutes: 5,
    heroIntro: [
      "Our office at 1975 East Sunrise Blvd, Suite 705, sits in the heart of Fort Lauderdale — three blocks from the Intracoastal and ten minutes from Port Everglades. We built NexGen Financial Experts here because Broward County is where we live, work, and run our own business.",
      "If you operate a company in Fort Lauderdale — from a one-person consultancy on Las Olas to a marine-services firm servicing yachts at the marina — your books, sales tax filings, and year-end returns all have Florida-specific quirks that national tax software gets wrong. We handle those quirks every day so you do not have to.",
    ],
    body: [
      {
        heading: "Florida sales tax in Fort Lauderdale",
        paragraphs: [
          "Fort Lauderdale sits inside Broward County, where the discretionary sales surtax is 1.0% for 2026. Combined with Florida's 6% statewide rate, the total sales and use tax rate on taxable goods and services sold inside Broward is 7.0% (Source: Florida Department of Revenue, Discretionary Sales Surtax Information, Form DR-15DSS, 2026 edition).",
          "Most Broward businesses that sell tangible goods must collect this 7.0%. But the surtax has a ceiling: only the first $5,000 of any single sale of a tangible item is subject to the county surtax. If your company sells a $40,000 boat, the surtax applies only to the first $5,000; the remaining $35,000 is taxed at the 6% state rate only. We see marine and yacht-services firms in Fort Lauderdale get this wrong constantly.",
          "Broward also has a Tourist Development Tax of 6% on short-term rentals (six months or less) of living quarters. If you operate a vacation-rental business or short-term-lease property in Fort Lauderdale, this is collected on top of the 7.0% sales tax, and remitted separately to the Broward County Tax Collector.",
        ],
      },
      {
        heading: "Industries we serve in Fort Lauderdale",
        paragraphs: [
          "Fort Lauderdale's economy runs on
