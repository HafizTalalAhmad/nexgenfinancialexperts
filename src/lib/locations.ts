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
          "Fort Lauderdale's economy runs on five sectors, and we have clients in each:",
        ],
        bullets: [
          "Marine & yachting — yacht brokers, charter operators, marine repair. High-ticket transactions trigger the $5,000 surtax cap regularly; we manage the apportionment for you.",
          "Real estate & property management — multi-unit landlords, property managers, and HOA bookkeeping. We handle 1099-MISC for vendors and the Florida-specific rental exemption rules.",
          "Hospitality & tourism — restaurants, hotels, short-term rentals. We reconcile daily POS reports with monthly sales tax returns and the Broward tourist-development tax.",
          "Professional services — attorneys, architects, consultants. We help optimize entity structure (S-corp election, multi-member LLC) and Section 199A QBI planning.",
          "Healthcare — solo practitioners and small clinics. We handle payroll for clinical staff and track Florida's medical-sales-tax exemptions on prosthetics and prescription items.",
        ],
      },
      {
        heading: "Florida corporate income tax considerations",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for taxable years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). If you operate as a C-corporation in Fort Lauderdale, you owe Florida corporate income tax on Florida-apportioned income, with a $50,000 exemption that effectively removes the first ~$45,000 of net income from tax.",
          "If your business is structured as an S-corporation, partnership, or multi-member LLC, no Florida corporate income tax applies — the income passes through to your personal return. The Florida corporate filing fee for C-corps is $50 per year, plus a $5 minimum tax. We help Fort Lauderdale clients decide whether converting from LLC to S-corp mid-year is worth the payroll-tax savings once net profit exceeds roughly $80,000.",
        ],
      },
      {
        heading: "What a Fort Lauderdale monthly engagement includes",
        paragraphs: [
          "A standard NexGen engagement for a Fort Lauderdale business includes:",
        ],
        bullets: [
          "Monthly bookkeeping in QuickBooks Online or Xero, reconciled to the bank and credit-card statements.",
          "Monthly sales tax accrual and quarterly DR-15 filing for Broward County.",
          "Quarterly estimated tax projections for owners and the business.",
          "Year-end financial statements and K-1 preparation for pass-through entities.",
          "Annual federal and Florida tax return preparation, e-filed.",
          "Unlimited email and phone access to your dedicated accountant.",
        ],
      },
      ctaBlock("Fort Lauderdale"),
    ],
    faqs: [
      {
        q: "Do you meet clients in person at the Fort Lauderdale office?",
        a: "Yes. Our office at 1975 East Sunrise Blvd, Suite 705 is open Monday through Friday, 9:00 AM to 5:00 PM ET. Walk-ins are by appointment only — please book first using the consultation link or call +1 (954) 306-3823.",
      },
      {
        q: "Can you file my Broward County sales tax return?",
        a: "Yes. We file the Florida Department of Revenue DR-15 return monthly or quarterly depending on your collection volume. For 2026, the Broward surtax is 1.0%, so the combined rate is 7.0%. We also handle the Broward Tourist Development Tax for short-term-rental operators.",
      },
      {
        q: "What is the deadline to file a Florida corporate income tax return?",
        a: "Florida Form F-1120 (corporate income/franchise tax return) is due on the first day of the fifth month after the close of the tax year — May 1 for calendar-year filers. A six-month extension is automatic with IRS Form 7004, but the tax itself must still be paid by May 1 to avoid penalty.",
      },
      {
        q: "Do you work with startups and new businesses in Fort Lauderdale?",
        a: "Yes. We help founders choose between LLC, S-corp, and C-corp structures, register with the Florida Division of Corporations (Sunbiz), obtain an EIN, and set up QuickBooks from day one so the books are clean when investors or banks ask.",
      },
    ],
    seo: {
      title: "Fort Lauderdale Accountant & CPA | NexGen Financial Experts",
      description:
        "Fort Lauderdale accountant serving Broward County businesses with monthly bookkeeping, tax returns, sales tax compliance, and fractional CFO services. Free consultation.",
    },
    jsonLd: localBusinessSchema("Fort Lauderdale", "Broward"),
  },
  // 2. Miami
  {
    slug: "miami",
    city: "Miami",
    county: "Miami-Dade",
    region: "South Florida",
    population: 442241,
    metroPopulation: 6166000,
    salesTaxRate: "7.0%",
    surtaxRate: "1.0%",
    topIndustries: [
      "International trade & logistics",
      "Real estate & development",
      "Hospitality & tourism",
      "Banking & financial services",
      "Healthcare & life sciences",
    ],
    title: "Miami Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "Miami accountant serving businesses across Miami-Dade County with tax returns, sales tax compliance, international tax structuring, and fractional CFO services. Book a free consultation.",
    readMinutes: 5,
    heroIntro: [
      "Miami is the second-largest concentration of NexGen clients after our home city of Fort Lauderdale, just thirty minutes south on I-95. Our team works with Miami-Dade businesses across the spectrum — from Brickell financial-services firms to Wynwood creative agencies to Doral import-export companies.",
      "Miami's tax profile is different from the rest of Florida. International ownership, cross-border payments, foreign investors on cap tables, and FTZ (Foreign Trade Zone) activity around Miami International Airport all create compliance questions that a generic bookkeeper cannot answer. We do this work every week.",
    ],
    body: [
      {
        heading: "Florida sales tax in Miami-Dade County",
        paragraphs: [
          "Miami-Dade County's discretionary sales surtax is 1.0% for 2026, on top of Florida's 6% statewide rate — giving a combined sales and use tax rate of 7.0% (Source: Florida Department of Revenue, Form DR-15DSS, 2026 edition). The $5,000 surtax ceiling applies per item here as well, which matters for the high-ticket transactions common in Miami's luxury retail, marine, and real-estate sectors.",
          "Miami-Dade also collects a 7% tourist development tax on short-term rentals of living accommodations, plus a 2% Convention Development Tax on transient rentals in the Miami Beach Convention District. If you operate a hotel, motel, or short-term rental anywhere in Miami-Dade, both of these layer on top of the 7.0% sales tax. We file all three returns for short-term-rental clients.",
        ],
      },
      {
        heading: "Industries we serve in Miami",
        paragraphs: [
          "Miami's economy is anchored by five sectors where we have deep, specific experience:",
        ],
        bullets: [
          "International trade & logistics — importers at PortMiami, customs brokers, freight forwarders. We handle inventory valuation, FTZ duty-deferral accounting, and the BPOL-style income apportionment for multi-state logistics.",
          "Real estate & development — condo developers, multi-family landlords, commercial brokers. We track basis, 1031 exchanges, and the Florida documentary stamp tax on deeds ($0.70 per $100 of consideration statewide, $0.60 in Miami-Dade).",
          "Hospitality & tourism — hotels, restaurants, tour operators. We reconcile daily POS exports, file DR-15 plus Miami-Dade tourist taxes, and structure tip reporting correctly to keep payroll audits at bay.",
          "Banking & financial services — family offices, fintech startups, RIA firms. We handle the Florida-specific intangible-tax exemption and the federal investment-advisor compliance touchpoints.",
          "Healthcare & life sciences — medical practices in the Health District, biotech startups. We track R&D credits and the medical-sales-tax exemptions on prosthetics, prescriptions, and certain devices.",
        ],
      },
      {
        heading: "International tax and foreign-owned Miami businesses",
        paragraphs: [
          "Roughly one-third of our Miami client base has at least one foreign owner or foreign subsidiary. Common situations we resolve: a foreign investor on the cap table of a Florida LLC, withholding obligations under IRC §1446 for foreign partners, FBAR and Form 5471 reporting for U.S. persons with foreign accounts or foreign corporations, and the FIRPTA withholding rules when a foreigner sells U.S. real property.",
          "If you operate a Miami business with any foreign ownership — even a single nonresident-alien member of an LLC — you almost certainly have federal filing obligations your current preparer is missing. We review these structures free of charge during the initial consultation.",
        ],
      },
      {
        heading: "Florida corporate income tax in Miami-Dade",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). The $50,000 exemption effectively means a C-corp pays no Florida corporate tax on its first ~$45,000 of net income. For pass-through entities (S-corps, partnerships, multi-member LLCs), no Florida corporate income tax applies, but the entity still files an informational return.",
          "Miami businesses that operate in multiple states (often: a Miami HQ with a Texas warehouse and a New York sales office) need apportionment across state lines. Florida uses a three-factor formula but has moved toward a single-sales-factor approach for some industries. We compute the apportionment correctly so you do not over- or under-pay Florida.",
        ],
      },
      ctaBlock("Miami"),
    ],
    faqs: [
      {
        q: "Do you work with foreign-owned Miami businesses?",
        a: "Yes. We regularly handle Form 5471 (foreign corporations), Form 5472 (foreign-owned LLCs), FBAR, and FIRPTA withholding for foreign sellers of U.S. real estate. Many Miami businesses have at least one nonresident member and are missing these filings — we can review your structure during the consultation at no cost.",
      },
      {
        q: "What is the sales tax rate for my Miami restaurant?",
        a: "The combined sales tax rate in Miami-Dade for 2026 is 7.0% (6% state plus 1% county surtax). Prepared food for on-premises consumption is taxable; many restaurants also collect a 2% Convention Development Tax if located in the Miami Beach Convention District. We file all three returns for hospitality clients.",
      },
      {
        q: "Can you help with a 1031 exchange for Miami investment property?",
        a: "Yes. We coordinate with your qualified intermediary, track the 45-day identification and 180-day closing deadlines, and prepare the Florida documentary stamp tax calculations. We also handle the Florida intangible tax on any new mortgage of $0.002 per dollar of obligation.",
      },
      {
        q: "Do you have an office in Miami?",
        a: "Our physical office is in Fort Lauderdale, 30 minutes north of Miami on I-95. We meet Miami clients at their offices, over secure video, or at our Fort Lauderdale location — whichever you prefer. Most Miami engagements run fully remote after the initial consultation.",
      },
    ],
    seo: {
      title: "Miami Accountant & CPA | NexGen Financial Experts",
      description:
        "Miami accountant for Miami-Dade businesses — international tax, sales tax compliance, real-estate structuring, and fractional CFO services. Free 30-minute consultation.",
    },
    jsonLd: localBusinessSchema("Miami", "Miami-Dade"),
  },
  // 3. Tampa
  {
    slug: "tampa",
    city: "Tampa",
    county: "Hillsborough",
    region: "Central Florida / Gulf Coast",
    population: 384959,
    metroPopulation: 3191000, // Tampa-St. Petersburg-Clearwater MSA
    salesTaxRate: "8.5%",
    surtaxRate: "2.5%",
    topIndustries: [
      "Financial services & insurance",
      "Defense & aerospace",
      "Healthcare & life sciences",
      "Logistics & port operations",
      "Construction & real estate",
    ],
    title: "Tampa Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "Tampa accountant serving Hillsborough County businesses with tax returns, sales tax compliance, payroll, and fractional CFO services. Tampa's combined sales tax rate is 8.5%. Book a free consultation.",
    readMinutes: 5,
    heroIntro: [
      "Tampa is one of the highest-tax jurisdictions in Florida for sales tax. Hillsborough County's discretionary sales surtax sits at 2.5% for 2026 — the maximum rate authorized under Florida law — making the combined sales and use tax 8.5% inside Tampa city limits. That rate surprises almost every Tampa founder the first time they see it.",
      "We work with Tampa businesses across Hillsborough County — from MacDill-area defense contractors to Ybor City restaurants to Westshore financial-services firms. If your business collects sales tax in Tampa, the math is unforgiving: a 2.5% surtax rate on a $4,999 transaction is $125. Get this wrong for a year and the back-tax bill plus penalty can wipe out a quarter's profit.",
    ],
    body: [
      {
        heading: "Florida sales tax in Tampa (Hillsborough County)",
        paragraphs: [
          "Hillsborough County imposes a 2.5% discretionary sales surtax on top of Florida's 6% state rate for 2026, for a combined sales and use tax rate of 8.5% (Source: Florida Department of Revenue, Form DR-15DSS, 2026 edition). This 2.5% is composed of: 1.0% Community Investment Program, 0.5% transportation surtax, 0.5% school-capital surtax, and 0.5% for indigent healthcare and trauma-care services.",
          "The standard $5,000 surtax ceiling applies. If your Tampa business sells a $30,000 boat or a $15,000 server cluster, the surtax applies only to the first $5,000 of each item's price — $125 maximum — and the remaining $25,000 (or $10,000) is taxed at the 6% state rate only. Many Tampa marine, medical-equipment, and B2B hardware businesses over-collect surtax because their POS systems do not cap it automatically.",
          "Hillsborough also collects a 6% tourist development tax on short-term rentals (six months or fewer) of living accommodations. Hotels, motels, and short-term rental hosts file this through the Hillsborough County Tax Collector separately from the DR-15 sales tax return. We file both for Tampa hospitality clients.",
        ],
      },
      {
        heading: "Industries we serve in Tampa",
        paragraphs: [
          "Tampa's economy centers on five sectors where we have specific experience:",
        ],
        bullets: [
          "Financial services & insurance — Tampa is a major insurance hub (Jackson, USF&G legacy firms). We handle premiums tax filings for property & casualty agents and the Florida-specific income apportionment for multi-state insurers.",
          "Defense & aerospace — contractors serving MacDill AFB and SOCOM. We handle DCAA-compliant accounting, indirect-cost-rate proposals, and the Florida defense-related R&D credit where applicable.",
          "Healthcare & life sciences — Tampa General Hospital-adjacent practices, USF Health-affiliated clinics. We handle Medicare cost-report prep, 1099-K reconciliation for telehealth, and medical-sales-tax exemptions on prosthetics and prescription devices.",
          "Logistics & port operations — Port Tampa Bay tenants, freight forwarders. We track inventory valuation, the Florida fuel-tax refund for off-highway use, and the International Fuel Tax Agreement (IFTA) filings for motor carriers.",
          "Construction & real estate — Tampa's residential building boom. We handle percentage-of-completion accounting, retention tracking, and Florida documentary stamp tax on real-estate transfers.",
        ],
      },
      {
        heading: "Florida corporate income tax in Tampa",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). The $50,000 exemption effectively shelters the first ~$45,000 of C-corp net income from Florida corporate tax. S-corps, partnerships, and multi-member LLCs owe no Florida corporate income tax but still file informational returns.",
          "Tampa C-corps with multi-state activity — common for the defense and logistics sectors — need apportionment. Florida uses a single-sales-factor formula for most C-corps, meaning only Florida-sourced revenue counts toward the apportionment factor. We compute this correctly so you do not pay tax on out-of-state revenue Florida cannot reach.",
        ],
      },
      {
        heading: "What a Tampa monthly engagement includes",
        paragraphs: [
          "A standard NexGen engagement for a Tampa business includes:",
        ],
        bullets: [
          "Monthly bookkeeping in QuickBooks Online or Xero, reconciled to bank and credit-card statements.",
          "Monthly sales tax accrual and quarterly DR-15 filing for Hillsborough County at the 8.5% combined rate.",
          "Quarterly estimated tax projections for owners and the business.",
          "Year-end financial statements and K-1 preparation for pass-through entities.",
          "Annual federal and Florida tax return preparation, e-filed.",
          "Unlimited email and phone access to your dedicated accountant.",
        ],
      },
      ctaBlock("Tampa"),
    ],
    faqs: [
      {
        q: "Why is Tampa's sales tax rate so high?",
        a: "Hillsborough County imposes a 2.5% discretionary sales surtax — the maximum allowed under Florida law — composed of voter-approved levies for community investment, transportation, schools, and indigent healthcare. Combined with the 6% state rate, the total is 8.5% for 2026. This is the highest sales tax rate of any major Florida city.",
      },
      {
        q: "Does the $5,000 surtax cap apply to my Tampa business?",
        a: "Yes. Only the first $5,000 of any single item's price is subject to the 2.5% surtax. The remaining balance is taxed at the 6% state rate only. If you sell high-ticket items (boats, machinery, medical equipment, B2B hardware), make sure your POS or accounting system applies the cap automatically — most do not, and clients over-collect by thousands per year.",
      },
      {
        q: "Can you handle defense-contractor accounting (DCAA compliance) in Tampa?",
        a: "Yes. We work with several MacDill AFB and SOCOM contractors on indirect-cost-rate proposals, timekeeping compliance, and DCAA-audit-ready bookkeeping. The key is consistent indirect-cost pools and documented labor distribution — we set these up correctly from day one.",
      },
      {
        q: "Do you have a Tampa office?",
        a: "Our physical office is in Fort Lauderdale, about 4 hours southeast on I-75 and I-4. We meet Tampa clients at their offices, over secure video, or via courier for paper records. Most Tampa engagements run fully remote after the initial consultation.",
      },
    ],
    seo: {
      title: "Tampa Accountant & CPA | NexGen Financial Experts",
      description:
        "Tampa accountant serving Hillsborough County businesses — sales tax compliance at the 8.5% combined rate, defense-contractor accounting, payroll, and fractional CFO. Free consultation.",
    },
    jsonLd: localBusinessSchema("Tampa", "Hillsborough"),
  },
  // 4. Orlando
  {
    slug: "orlando",
    city: "Orlando",
    county: "Orange",
    region: "Central Florida",
    population: 309132,
    metroPopulation: 2752000, // Orlando-Kissimmee-Sanford MSA
    salesTaxRate: "6.5%",
    surtaxRate: "0.5%",
    topIndustries: [
      "Tourism & hospitality",
      "Theme parks & entertainment",
      "Healthcare & life sciences",
      "Aerospace & defense (Lake Nona)",
      "Convention & event services",
    ],
    title: "Orlando Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "Orlando accountant serving Orange County businesses with sales tax compliance at 6.5%, hospitality-industry payroll, and fractional CFO services. Book a free consultation.",
    readMinutes: 5,
    heroIntro: [
      "Orlando is one of the most sales-tax-friendly major cities in Florida — Orange County's discretionary surtax is just 0.5% for 2026, putting the combined sales and use tax rate at 6.5%. That is the lowest rate of any large Florida metro, which matters for theme-park vendors, convention-services businesses, and hospitality operators handling high transaction volumes.",
      "We work with Orlando businesses across Orange County — from I-Drive hotels to Lake Nona med-tech startups to Winter Park professional-services firms. Orlando's economy is unusual: a tourism-driven core surrounded by a fast-growing tech and life-sciences cluster in Lake Nona, plus aerospace primes around Orlando International Airport. The accounting needs in each segment are very different, and we serve all three.",
    ],
    body: [
      {
        heading: "Florida sales tax in Orlando (Orange County)",
        paragraphs: [
          "Orange County imposes a 0.5% discretionary sales surtax for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 6.5% (Source: Florida Department of Revenue, Form DR-15DSS, 2026 edition). The standard $5,000 surtax ceiling applies, but at 0.5% the maximum surtax per item is only $25 — a rounding error for most Orlando businesses.",
          "Orange County also collects a 6% tourist development tax on short-term rentals (six months or fewer) of living accommodations. With Orlando receiving ~75 million visitors a year, the Orange County Tourist Development Tax is one of the largest single revenue streams in the state — and a compliance trap for short-term-rental hosts and small hotel operators. We file this return for hospitality clients and reconcile it against platform statements (Airbnb, VRBO, Booking.com).",
        ],
      },
      {
        heading: "Industries we serve in Orlando",
        paragraphs: [
          "Orlando's economy centers on five sectors where we have specific experience:",
        ],
        bullets: [
          "Tourism & hospitality — I-Drive hotels, restaurant groups, attraction vendors. We handle tip reporting, FICA tip credit, and Florida's sales-tax exemption on groceries (most prepared food is taxable at 6.5%, but grocery staples are exempt).",
          "Theme parks & entertainment — vendors serving Disney, Universal, SeaWorld. We handle pass-through accounting for small vendors, contract-revenue recognition, and the Florida sales-tax exemption on machinery used directly in manufacturing/production.",
          "Healthcare & life sciences — Lake Nona med-tech firms, USF Health-adjacent practices. We track R&D payroll credits, medical-device sales-tax exemptions, and Section 174 capitalization for software-development costs.",
          "Aerospace & defense — Lake Nona and MCO-area primes. We handle DCAA-compliant accounting, indirect-cost-rate proposals, and Florida's defense-related R&D credit where applicable.",
          "Convention & event services — Orange County Convention Center vendors. We track multi-state nexus from convention sales and handle the occasional-sale exemption for trade-show transactions.",
        ],
      },
      {
        heading: "Florida corporate income tax in Orlando",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). The $50,000 exemption effectively shelters the first ~$45,000 of C-corp net income. S-corps, partnerships, and multi-member LLCs owe no Florida corporate income tax but still file informational returns.",
          "Orlando's tech sector — particularly the med-tech and simulation companies in Lake Nona — frequently qualifies for the Florida R&D tax credit. We help clients identify qualified research expenses (QREs) under IRC §41 and compute the Florida credit at 10% of QRE in excess of a base amount. The credit can offset up to $250,000 of Florida corporate income tax per year.",
        ],
      },
      {
        heading: "What an Orlando monthly engagement includes",
        paragraphs: [
          "A standard NexGen engagement for an Orlando business includes:",
        ],
        bullets: [
          "Monthly bookkeeping in QuickBooks Online or Xero, reconciled to bank and credit-card statements.",
          "Monthly sales tax accrual and quarterly DR-15 filing for Orange County at the 6.5% combined rate.",
          "Orange County Tourist Development Tax filing for hospitality and short-term-rental clients.",
          "Quarterly estimated tax projections for owners and the business.",
          "Year-end financial statements and K-1 preparation for pass-through entities.",
          "Annual federal and Florida tax return preparation, e-filed.",
          "Unlimited email and phone access to your dedicated accountant.",
        ],
      },
      ctaBlock("Orlando"),
    ],
    faqs: [
      {
        q: "What is Orlando's sales tax rate for 2026?",
        a: "Orange County's discretionary sales surtax is 0.5% for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 6.5%. This is the lowest combined rate of any major Florida city, and the lowest in Central Florida.",
      },
      {
        q: "I run a short-term rental in Orlando. What taxes do I owe?",
        a: "Two taxes on top of federal income tax. The 6.5% combined sales and use tax goes on the Florida DR-15 return, and the 6% Orange County Tourist Development Tax goes on a separate return filed with the Orange County Tax Collector. Airbnb and VRBO collect and remit both for bookings made on their platforms, but you must file the returns yourself for direct bookings.",
      },
      {
        q: "Do you work with Lake Nona med-tech startups?",
        a: "Yes. We handle the Florida R&D tax credit (10% of qualified research expenses above base), Section 174 capitalization for software and clinical-trial costs, and the medical-device sales-tax exemption. Many Lake Nona startups are losing $30-80K a year in unclaimed R&D credits — we identify these during the consultation.",
      },
      {
        q: "Do you have an Orlando office?",
        a: "Our physical office is in Fort Lauderdale, about 3.5 hours southeast on Florida's Turnpike. We meet Orlando clients at their offices, over secure video, or via courier for paper records. Most Orlando engagements run fully remote after the initial consultation.",
      },
    ],
    seo: {
      title: "Orlando Accountant & CPA | NexGen Financial Experts",
      description:
        "Orlando accountant serving Orange County businesses — sales tax compliance at 6.5%, hospitality-industry payroll, R&D credits for Lake Nona med-tech, and fractional CFO services. Free consultation.",
    },
    jsonLd: localBusinessSchema("Orlando", "Orange"),
  },
  // 5. Jacksonville
  {
    slug: "jacksonville",
    city: "Jacksonville",
    county: "Duval",
    region: "Northeast Florida",
    population: 949611,
    metroPopulation: 1642000, // Jacksonville MSA
    salesTaxRate: "7.5%",
    surtaxRate: "1.5%",
    topIndustries: [
      "Logistics & port operations",
      "Banking & financial services",
      "Healthcare",
      "Defense & military",
      "Insurance",
    ],
    title: "Jacksonville Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "Jacksonville accountant serving Duval County businesses with sales tax compliance at 7.5%, port-industry accounting, and fractional CFO services. Book a free consultation.",
    readMinutes: 5,
    heroIntro: [
      "Jacksonville is the largest city by area in the continental United States and the most populous city in Florida — over 950,000 residents spread across Duval County. The port, three Navy bases, and a deep insurance and banking sector make Jacksonville a fundamentally different tax market from South or Central Florida.",
      "We work with Jacksonville businesses across Duval County — from port logistics operators at JAXPORT to insurance firms in the downtown core to defense contractors serving NAS Jacksonville and Mayport. If your business collects sales tax or employs across multiple Jacksonville neighborhoods (San Marco, Riverside, Mandarin, the Beaches), the accounting questions are different from a South Florida firm — we know them.",
    ],
    body: [
      {
        heading: "Florida sales tax in Jacksonville (Duval County)",
        paragraphs: [
          "Duval County imposes a 1.5% discretionary sales surtax for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 7.5% (Source: Florida Department of Revenue, Form DR-15DSS, 2026 edition). The 1.5% is composed of: 0.5% school-capital surtax, 0.5% transportation surtax, and 0.5% local-government infrastructure surtax.",
          "The standard $5,000 surtax ceiling applies, capping the surtax at $75 per single item. For Jacksonville's logistics and heavy-equipment sectors — port operators, trucking firms, construction companies — this cap matters for high-ticket transactions. We see Jacksonville businesses routinely over-collect surtax on equipment purchases because their accounting software does not apply the cap.",
          "Duval also collects a 6% tourist development tax on short-term rentals of living accommodations, primarily along Jacksonville Beach. If you operate a hotel, motel, or short-term rental at the Beaches, both returns are required.",
        ],
      },
      {
        heading: "Industries we serve in Jacksonville",
        paragraphs: [
          "Jacksonville's economy centers on five sectors where we have specific experience:",
        ],
        bullets: [
          "Logistics & port operations — JAXPORT tenants, customs brokers, freight forwarders. We handle inventory valuation, FTZ duty-deferral accounting, and IFTA filings for motor carriers.",
          "Banking & financial services — downtown Jacksonville's banking hub. We handle the Florida intangible tax on notes secured by mortgages ($0.002 per dollar of obligation) and the BPOL-style income apportionment for multi-state banks.",
          "Healthcare — Baptist Health, UF Health Jacksonville-adjacent practices. We handle Medicare cost-report prep, 1099-K reconciliation, and medical-sales-tax exemptions on prosthetics and prescription devices.",
          "Defense & military — contractors serving NAS Jax, NAS Mayport, and Blount Island. We handle DCAA-compliant accounting, indirect-cost-rate proposals, and the Florida defense-related R&D credit where applicable.",
          "Insurance — Jacksonville is a major property & casualty hub. We handle premiums-tax filings for agents and brokers and the Florida-specific income apportionment for multi-state insurers.",
        ],
      },
      {
        heading: "Florida corporate income tax in Jacksonville",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). The $50,000 exemption effectively shelters the first ~$45,000 of C-corp net income. S-corps, partnerships, and multi-member LLCs owe no Florida corporate income tax but still file informational returns.",
          "Jacksonville C-corps with multi-state activity — common for logistics, banking, and insurance sectors — need apportionment. Florida uses a single-sales-factor formula for most C-corps, meaning only Florida-sourced revenue counts. We compute this correctly so you do not overpay Florida on out-of-state revenue.",
        ],
      },
      {
        heading: "What a Jacksonville monthly engagement includes",
        paragraphs: [
          "A standard NexGen engagement for a Jacksonville business includes:",
        ],
        bullets: [
          "Monthly bookkeeping in QuickBooks Online or Xero, reconciled to bank and credit-card statements.",
          "Monthly sales tax accrual and quarterly DR-15 filing for Duval County at the 7.5% combined rate.",
          "Quarterly estimated tax projections for owners and the business.",
          "Year-end financial statements and K-1 preparation for pass-through entities.",
          "Annual federal and Florida tax return preparation, e-filed.",
          "Unlimited email and phone access to your dedicated accountant.",
        ],
      },
      ctaBlock("Jacksonville"),
    ],
    faqs: [
      {
        q: "What is Jacksonville's sales tax rate for 2026?",
        a: "Duval County's discretionary sales surtax is 1.5% for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 7.5%. This is composed of three voter-approved 0.5% levies for schools, transportation, and local infrastructure.",
      },
      {
        q: "I run a JAXPORT logistics company. Can you handle IFTA and FTZ filings?",
        a: "Yes. We file the International Fuel Tax Agreement (IFTA) quarterly return for motor carriers operating across state lines, and we handle Foreign Trade Zone (FTZ) duty-deferral accounting for JAXPORT tenants importing through the zone. Most general bookkeepers cannot do either.",
      },
      {
        q: "Do you handle defense-contractor accounting for NAS Jacksonville contractors?",
        a: "Yes. We work with several NAS Jax, NAS Mayport, and Blount Island contractors on DCAA-compliant accounting, indirect-cost-rate proposals, and labor-distribution compliance. The key is consistent indirect-cost pools and documented labor distribution — we set these up correctly from day one.",
      },
      {
        q: "Do you have a Jacksonville office?",
        a: "Our physical office is in Fort Lauderdale, about 4.5 hours south on I-95. We meet Jacksonville clients at their offices, over secure video, or via courier for paper records. Most Jacksonville engagements run fully remote after the initial consultation.",
      },
    ],
    seo: {
      title: "Jacksonville Accountant & CPA | NexGen Financial Experts",
      description:
        "Jacksonville accountant serving Duval County businesses — sales tax compliance at 7.5%, port logistics accounting, defense-contractor bookkeeping, and fractional CFO. Free consultation.",
    },
    jsonLd: localBusinessSchema("Jacksonville", "Duval"),
  },
  // 6. Tallahassee
  {
    slug: "tallahassee",
    city: "Tallahassee",
    county: "Leon",
    region: "North Florida / Big Bend",
    population: 196169,
    metroPopulation: 384000, // Tallahassee MSA
    salesTaxRate: "7.5%",
    surtaxRate: "1.5%",
    topIndustries: [
      "State government & lobbying",
      "Higher education (FSU, FAMU, TCC)",
      "Healthcare",
      "Legal services",
      "Real estate",
    ],
    title: "Tallahassee Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "Tallahassee accountant serving Leon County businesses — state-government contractors, FSU/FAMU-adjacent firms, lobbyists, and law firms. Sales tax compliance at 7.5%. Book a free consultation.",
    readMinutes: 5,
    heroIntro: [
      "Tallahassee is the Florida state capital and a fundamentally different tax market from the rest of the state. The economy runs on state government, two major universities (Florida State and Florida A&M), and a deep ecosystem of lobbyists, associations, and government-relations firms. If your business sells to the state or to state-affiliated entities, your accounting questions are not the same as a Miami or Tampa firm's — and we know them.",
      "We work with Tallahassee businesses across Leon County — from state-government contractors near the Capitol complex to FSU-adjacent startups in Innovation Park to law firms along Tennessee Street. Most Leon County engagements involve some interaction with the state purchasing system or with university research-grant accounting, and we handle both.",
    ],
    body: [
      {
        heading: "Florida sales tax in Tallahassee (Leon County)",
        paragraphs: [
          "Leon County imposes a 1.5% discretionary sales surtax for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 7.5% (Source: Florida Department of Revenue, Form DR-15DSS, 2026 edition). The 1.5% is composed of: 0.5% school-capital surtax, 0.5% local-government infrastructure surtax, and 0.5% for indigent healthcare.",
          "The standard $5,000 surtax ceiling applies, capping the surtax at $75 per single item. For Tallahassee's professional-services and research-equipment sectors, this cap rarely matters because individual invoices are typically below $5,000.",
          "Sales to the State of Florida and its agencies are exempt from Florida sales tax — but only if you obtain and retain a valid Florida Consumer's Certificate of Exemption. We help Tallahassee state-government vendors set up the exemption tracking correctly so they do not over-collect sales tax on state-agency invoices (and then have to refund it back).",
        ],
      },
      {
        heading: "Industries we serve in Tallahassee",
        paragraphs: [
          "Tallahassee's economy centers on five sectors where we have specific experience:",
        ],
        bullets: [
          "State government & lobbying — lobbyists, associations, government-relations firms. We handle the federal §162(e) nondeductibility of lobbying expenses and Florida's parallel rule, plus the proper separation of lobbying and non-lobbying income.",
          "Higher education — FSU, FAMU, TCC subcontractors and spinouts. We handle the federal Uniform Guidance (2 CFR 200) cost-principle compliance for research subcontracts, indirect-cost-rate proposals, and the OMB audit requirements.",
          "Healthcare — Tallahassee Memorial-adjacent practices, urgent-care chains. We handle Medicare cost-report prep, 1099-K reconciliation for telehealth, and medical-sales-tax exemptions on prosthetics and prescription devices.",
          "Legal services — law firms along Tennessee Street and downtown. We handle trust-account (IOLTA) reconciliation, Form 1099-NEC for co-counsel, and the new IRS partnership-audit rules under BBA.",
          "Real estate — Tallahassee's stable but slower-moving market. We handle Florida documentary stamp tax on deeds ($0.70 per $100 of consideration statewide) and intangible tax on new mortgages.",
        ],
      },
      {
        heading: "Florida corporate income tax in Tallahassee",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). The $50,000 exemption effectively shelters the first ~$45,000 of C-corp net income. S-corps, partnerships, and multi-member LLCs owe no Florida corporate income tax but still file informational returns.",
          "Tallahassee C-corps doing business with the state may qualify for Florida's research-and-development tax credit and the capital-investment tax credit if they make qualifying investments in a qualifying business in a targeted industry. We help clients identify and document these credits, which can offset up to $2 million of Florida corporate income tax per year for the largest projects.",
        ],
      },
      {
        heading: "What a Tallahassee monthly engagement includes",
        paragraphs: [
          "A standard NexGen engagement for a Tallahassee business includes:",
        ],
        bullets: [
          "Monthly bookkeeping in QuickBooks Online or Xero, reconciled to bank and credit-card statements.",
          "Monthly sales tax accrual and quarterly DR-15 filing for Leon County at the 7.5% combined rate.",
          "State-agency exemption-certificate tracking for state-government contractors.",
          "Quarterly estimated tax projections for owners and the business.",
          "Year-end financial statements and K-1 preparation for pass-through entities.",
          "Annual federal and Florida tax return preparation, e-filed.",
          "Unlimited email and phone access to your dedicated accountant.",
        ],
      },
      ctaBlock("Tallahassee"),
    ],
    faqs: [
      {
        q: "Are sales to the State of Florida exempt from sales tax?",
        a: "Yes, but only when the vendor obtains and retains a valid Florida Consumer's Certificate of Exemption at the time of sale. The state is not exempt by default — you must have the certificate on file to skip the sales tax. We help state-government vendors set up the exemption tracking correctly.",
      },
      {
        q: "I am a lobbyist. Are my lobbying expenses deductible?",
        a: "Federal §162(e) disallows deductions for lobbying expenses at the federal level, and Florida follows the same rule for state corporate income tax. We help lobbying firms properly separate lobbying from non-lobbying income and expenses so you do not overstate nondeductible amounts or understate deductible business development costs.",
      },
      {
        q: "Do you handle FSU or FAMU research subcontract accounting?",
        a: "Yes. We handle the federal Uniform Guidance (2 CFR 200) cost-principle compliance for research subcontracts, indirect-cost-rate proposals, and the OMB single-audit requirements. Most Tallahassee bookkeepers do not understand cost principles — we do.",
      },
      {
        q: "Do you have a Tallahassee office?",
        a: "Our physical office is in Fort Lauderdale, about 5.5 hours south on I-75 and the Turnpike. We meet Tallahassee clients at their offices, over secure video, or via courier for paper records. Most Tallahassee engagements run fully remote after the initial consultation.",
      },
    ],
    seo: {
      title: "Tallahassee Accountant & CPA | NexGen Financial Experts",
      description:
        "Tallahassee accountant serving Leon County businesses — state-government contractor accounting, university research subcontracts, lobbying-firm tax, and fractional CFO. Free consultation.",
    },
    jsonLd: localBusinessSchema("Tallahassee", "Leon"),
  },
  // 7. St. Petersburg
  {
    slug: "st-petersburg",
    city: "St. Petersburg",
    county: "Pinellas",
    region: "Tampa Bay / Gulf Coast",
    population: 261254,
    metroPopulation: 3191000, // Tampa-St. Pete-Clearwater MSA
    salesTaxRate: "7.0%",
    surtaxRate: "1.0%",
    topIndustries: [
      "Healthcare & life sciences",
      "Marine & boating",
      "Tourism & hospitality",
      "Financial services",
      "Aviation & defense",
    ],
    title: "St. Petersburg Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "St. Petersburg accountant serving Pinellas County businesses with sales tax compliance at 7.0%, marine-industry accounting, healthcare practices, and fractional CFO. Book a free consultation.",
    readMinutes: 5,
    heroIntro: [
      "St. Petersburg — sometimes still called \"the Sunshine City\" — is the second major tax jurisdiction in the Tampa Bay area, but with a meaningfully different rate. Pinellas County's discretionary sales surtax is 1.0% for 2026, compared to Hillsborough's 2.5%. That 1.5-point gap creates real savings for businesses operating on the Pinellas side of the bay, and we help clients structure sales tax accordingly.",
      "We work with St. Petersburg businesses across Pinellas County — from marine-services firms on the Intracoastal to downtown tech companies to the dense concentration of healthcare practices around Bayfront Health. Pinellas has a uniquely coastal economy: tourism, boating, and healthcare together account for over half of private-sector employment.",
    ],
    body: [
      {
        heading: "Florida sales tax in St. Petersburg (Pinellas County)",
        paragraphs: [
          "Pinellas County imposes a 1.0% discretionary sales surtax for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 7.0% (Source: Florida Department of Revenue, Form DR-15DSS, 2026 edition). That 7.0% is meaningfully lower than the 8.5% rate across the bay in Tampa, and 1.5 points lower than the 8.5% combined rate in Hillsborough County.",
          "The standard $5,000 surtax ceiling applies, capping the surtax at $50 per single item. For St. Petersburg's marine sector — yacht brokers, charter operators, marine repair — the cap matters because marine transactions routinely exceed $5,000. We apportion the surtax correctly so marine clients neither over-collect (which refunds customers later) nor under-collect (which triggers an audit).",
          "Pinellas also collects a 6% tourist development tax on short-term rentals of living accommodations. St. Pete Beach, Treasure Island, Madeira Beach, and Clearwater Beach are the densest short-term-rental markets in the county. We file this return for hospitality clients and reconcile it against platform statements (Airbnb, VRBO, Booking.com).",
        ],
      },
      {
        heading: "Industries we serve in St. Petersburg",
        paragraphs: [
          "St. Petersburg's economy centers on five sectors where we have specific experience:",
        ],
        bullets: [
          "Healthcare & life sciences — Bayfront Health-adjacent practices, Johns Hopkins All Children's Hospital vendors. We handle Medicare cost-report prep, 1099-K reconciliation, and medical-device sales-tax exemptions.",
          "Marine & boating — yacht brokers, charter operators, marine repair. We handle the $5,000 surtax cap apportionment and the Florida sales-tax exemption on commercial fishing vessels.",
          "Tourism & hospitality — St. Pete Beach, Clearwater Beach hotels and restaurants. We reconcile daily POS reports with monthly DR-15 returns and the Pinellas tourist development tax.",
          "Financial services — downtown St. Pete's growing financial cluster. We handle the Florida intangible tax on notes secured by mortgages and BPOL-style income apportionment for multi-state financial firms.",
          "Aviation & defense — St. Pete-Clearwater International Airport-adjacent firms, Raytheon and Honeywell vendors. We handle DCAA-compliant accounting and indirect-cost-rate proposals.",
        ],
      },
      {
        heading: "Florida corporate income tax in St. Petersburg",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). The $50,000 exemption effectively shelters the first ~$45,000 of C-corp net income. S-corps, partnerships, and multi-member LLCs owe no Florida corporate income tax but still file informational returns.",
          "Pinellas C-corps with multi-state activity — common for aviation and marine — need apportionment. Florida uses a single-sales-factor formula for most C-corps, meaning only Florida-sourced revenue counts. We compute this correctly so you do not overpay Florida on out-of-state revenue.",
        ],
      },
      {
        heading: "What a St. Petersburg monthly engagement includes",
        paragraphs: [
          "A standard NexGen engagement for a St. Petersburg business includes:",
        ],
        bullets: [
          "Monthly bookkeeping in QuickBooks Online or Xero, reconciled to bank and credit-card statements.",
          "Monthly sales tax accrual and quarterly DR-15 filing for Pinellas County at the 7.0% combined rate.",
          "Pinellas Tourist Development Tax filing for hospitality and short-term-rental clients.",
          "Quarterly estimated tax projections for owners and the business.",
          "Year-end financial statements and K-1 preparation for pass-through entities.",
          "Annual federal and Florida tax return preparation, e-filed.",
          "Unlimited email and phone access to your dedicated accountant.",
        ],
      },
      ctaBlock("St. Petersburg"),
    ],
    faqs: [
      {
        q: "Why is St. Petersburg's sales tax lower than Tampa's?",
        a: "Pinellas County imposes a 1.0% discretionary sales surtax for 2026, compared to Hillsborough's 2.5%. The combined rates are 7.0% in St. Petersburg and 8.5% in Tampa — a 1.5-point gap. Businesses with operations on both sides of the bay sometimes structure sales-tax collection to favor the lower jurisdiction when the sale legally occurs there.",
      },
      {
        q: "I run a St. Pete Beach short-term rental. What taxes do I owe?",
        a: "Two taxes on top of federal income tax. The 7.0% combined sales and use tax goes on the Florida DR-15 return, and the 6% Pinellas Tourist Development Tax goes on a separate return filed with the Pinellas County Tax Collector. Airbnb and VRBO collect both for platform bookings, but you must file the returns yourself for direct bookings.",
      },
      {
        q: "I sell yachts in St. Petersburg. How does the surtax cap work?",
        a: "Only the first $5,000 of any single item's price is subject to the 1.0% Pinellas surtax, capped at $50 per item. The remaining balance is taxed at the 6% state rate only. We make sure your sales system applies the cap automatically — most do not, and marine clients routinely over-collect surtax by hundreds of dollars per transaction.",
      },
      {
        q: "Do you have a St. Petersburg office?",
        a: "Our physical office is in Fort Lauderdale, about 4 hours south on I-75. We meet St. Petersburg clients at their offices, over secure video, or via courier for paper records. Most St. Petersburg engagements run fully remote after the initial consultation.",
      },
    ],
    seo: {
      title: "St. Petersburg Accountant & CPA | NexGen Financial Experts",
      description:
        "St. Petersburg accountant serving Pinellas County businesses — sales tax at 7.0% (lower than Tampa), marine-industry accounting, healthcare practices, and fractional CFO. Free consultation.",
    },
    jsonLd: localBusinessSchema("St. Petersburg", "Pinellas"),
  },
  // 8. Hialeah
  {
    slug: "hialeah",
    city: "Hialeah",
    county: "Miami-Dade",
    region: "South Florida / Miami metro",
    population: 223109,
    metroPopulation: 6166000, // Miami-Fort Lauderdale-West Palm Beach MSA
    salesTaxRate: "7.0%",
    surtaxRate: "1.0%",
    topIndustries: [
      "Manufacturing (textile, plastics, packaging)",
      "Retail & wholesale trade",
      "Construction & trades",
      "Healthcare",
      "Logistics & distribution",
    ],
    title: "Hialeah Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "Hialeah accountant serving Miami-Dade manufacturers, distributors, and contractors with sales tax at 7.0%, payroll, R&D credits, and fractional CFO. Book a free consultation.",
    readMinutes: 5,
    heroIntro: [
      "Hialeah is the manufacturing heart of South Florida. Over 1,000 manufacturing establishments operate within city limits — textiles, plastics, packaging, food processing, and medical devices — making it the densest industrial concentration between Miami and Tampa. For accountants, Hialeah means three things: sales tax at 7.0%, heavy payroll, and frequent Florida sales-tax exemptions on machinery used directly in production.",
      "We work with Hialeah businesses across the city — from manufacturing firms in the West Hialeah industrial corridor to retail and wholesale distributors along Okeechobee Road to construction contractors serving the broader Miami-Dade market. Hialeah's bilingual, family-owned business base has specific accounting needs around payroll, sales-tax exemptions on production equipment, and the manufacturer's tax credit.",
    ],
    body: [
      {
        heading: "Florida sales tax in Hialeah (Miami-Dade County)",
        paragraphs: [
          "Hialeah sits inside Miami-Dade County, where the discretionary sales surtax is 1.0% for 2026. Combined with Florida's 6% statewide rate, the total sales and use tax rate on taxable goods and services sold inside Miami-Dade is 7.0% (Source: Florida Department of Revenue, Form DR-15DSS, 2026 edition).",
          "The standard $5,000 surtax ceiling applies, capping the surtax at $50 per single item. Hialeah manufacturers selling finished goods B2B (in packaging, plastic molding, food processing) frequently cross the cap; we apportion the surtax correctly so neither side over-collects.",
          "The biggest sales-tax lever for Hialeah manufacturers is the Florida exemption for industrial machinery and equipment used directly in production. If you buy a plastic-injection molding machine, a textile loom, a packaging line, or food-processing equipment, the purchase is exempt from Florida sales tax — but only if you file a Consumer's Certificate of Exemption (Form DR-14) at the time of purchase. We help clients obtain the certificate and audit prior purchases for refund opportunities, which can run into tens of thousands of dollars for established Hialeah manufacturers.",
        ],
      },
      {
        heading: "Industries we serve in Hialeah",
        paragraphs: [
          "Hialeah's economy centers on five sectors where we have specific experience:",
        ],
        bullets: [
          "Manufacturing — textiles, plastics, packaging, food processing, medical devices. We handle the Florida industrial-machinery exemption, the Florida R&D tax credit, and Section 174 capitalization for software and product-development costs.",
          "Retail & wholesale trade — distributors along Okeechobee Road. We handle inventory valuation (FIFO/LIFO), the Florida wholesale exemption for resale, and 1099-K reconciliation for high-volume retailers.",
          "Construction & trades — Hialeah contractors serving Miami-Dade. We handle percentage-of-completion accounting, retention tracking, and Florida documentary stamp tax on real-estate transfers.",
          "Healthcare — solo practitioners and small clinics. We handle payroll for clinical staff and track Florida's medical-sales-tax exemptions on prosthetics and prescription items.",
          "Logistics & distribution — Hialeah is a major distribution hub for South Florida. We handle inventory valuation, multi-state nexus from distribution activity, and the Florida fuel-tax refund for off-highway use.",
        ],
      },
      {
        heading: "Florida corporate income tax in Hialeah",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). The $50,000 exemption effectively shelters the first ~$45,000 of C-corp net income. S-corps, partnerships, and multi-member LLCs owe no Florida corporate income tax but still file informational returns.",
          "Hialeah manufacturers frequently qualify for the Florida Research & Development Tax Credit — 10% of qualified research expenses above a base amount, up to $250,000 of credit per year. We help manufacturers identify qualified research expenses under IRC §41 (often missed for process-improvement work in plastics, packaging, and food processing) and compute the credit.",
        ],
      },
      {
        heading: "What a Hialeah monthly engagement includes",
        paragraphs: [
          "A standard NexGen engagement for a Hialeah business includes:",
        ],
        bullets: [
          "Monthly bookkeeping in QuickBooks Online or Xero, reconciled to bank and credit-card statements.",
          "Monthly sales tax accrual and quarterly DR-15 filing for Miami-Dade County at the 7.0% combined rate.",
          "Industrial-machinery exemption-certificate tracking and prior-purchase refund audits for manufacturers.",
          "Quarterly estimated tax projections for owners and the business.",
          "Year-end financial statements and K-1 preparation for pass-through entities.",
          "Annual federal and Florida tax return preparation, e-filed.",
          "Unlimited email and phone access to your dedicated accountant.",
        ],
      },
      ctaBlock("Hialeah"),
    ],
    faqs: [
      {
        q: "I am a Hialeah manufacturer. Can I buy machinery sales-tax free?",
        a: "Yes — Florida exempts industrial machinery and equipment used directly in production from sales tax, but only if you file a Consumer's Certificate of Exemption (Form DR-14) at the time of purchase. We help you obtain the certificate and audit prior purchases for refund opportunities, which can run into tens of thousands of dollars for established manufacturers.",
      },
      {
        q: "What is Hialeah's sales tax rate for 2026?",
        a: "Hialeah is inside Miami-Dade County, where the discretionary sales surtax is 1.0% for 2026. Combined with Florida's 6% state rate, the total sales and use tax rate is 7.0%. The standard $5,000 surtax ceiling applies, capping the surtax at $50 per single item.",
      },
      {
        q: "Do you handle payroll for Spanish-speaking workforces?",
        a: "Yes. We process payroll in both English and Spanish, including W-2s, 1099-NECs, and the Florida reemployment-tax return. We handle I-9 compliance support, garnishments, and the Florida-specific new-hire reporting requirements. Bilingual payroll communication is critical for Hialeah's workforce.",
      },
      {
        q: "Do you have a Hialeah office?",
        a: "Our physical office is in Fort Lauderdale, about 45 minutes north on I-95. We meet Hialeah clients at their offices, over secure video, or at our Fort Lauderdale location. Most Hialeah engagements run fully remote after the initial consultation.",
      },
    ],
    seo: {
      title: "Hialeah Accountant & CPA | NexGen Financial Experts",
      description:
        "Hialeah accountant serving Miami-Dade manufacturers, distributors, and contractors — industrial-machinery sales-tax exemption, R&D credit, payroll, and fractional CFO. Free consultation.",
    },
    jsonLd: localBusinessSchema("Hialeah", "Miami-Dade"),
  },
  // 9. Port St. Lucie
  {
    slug: "port-st-lucie",
    city: "Port St. Lucie",
    county: "St. Lucie",
    region: "Treasure Coast",
    population: 231447,
    metroPopulation: 516000, // Port St. Lucie MSA
    salesTaxRate: "7.0%",
    surtaxRate: "1.0%",
    topIndustries: [
      "Healthcare & life sciences (Torrey Pines biotech cluster)",
      "Construction & real estate",
      "Retail & services",
      "Golf & recreation",
      "Logistics & distribution",
    ],
    title: "Port St. Lucie Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "Port St. Lucie accountant serving St. Lucie County businesses — Torrey Pines biotech, construction firms, retailers, and distributors. Sales tax at 7.0%. Book a free consultation.",
    readMinutes: 5,
    heroIntro: [
      "Port St. Lucie is one of the fastest-growing cities in Florida — population more than doubled from 2000 to 2020 — and the heart of the Treasure Coast economy. The Torrey Pines Institute for Molecular Studies anchored a small but growing biotech cluster, while construction, retail, and golf-recreation make up the bulk of the private-sector base.",
      "We work with Port St. Lucie businesses across St. Lucie County — from biotech startups at Tradition to homebuilders active in the PGA Boulevard corridor to logistics firms near the I-95/Florida's Turnpike interchange. Port St. Lucie's growth creates accounting work that the rest of Florida does not see: rapid capitalization of construction-in-progress, R&D payroll tracking for biotech, and sales-tax on residential construction materials.",
    ],
    body: [
      {
        heading: "Florida sales tax in Port St. Lucie (St. Lucie County)",
        paragraphs: [
          "St. Lucie County imposes a 1.0% discretionary sales surtax for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 7.0% (Source: Florida Department of Revenue, Form DR-15DSS, 2026 edition).",
          "The standard $5,000 surtax ceiling applies, capping the surtax at $50 per single item. For Port St. Lucie's construction sector, this matters when purchasing materials above $5,000 per line item.",
          "Construction contractors in Port St. Lucie should note: Florida generally treats contractors as the consumer of materials installed into real property — meaning the contractor pays sales tax on the materials up front and does not separately charge sales tax on the contract price. But there are exceptions (residential vs. commercial, lump-sum vs. time-and-materials contracts) and we help clients structure contracts to minimize sales-tax leakage.",
        ],
      },
      {
        heading: "Industries we serve in Port St. Lucie",
        paragraphs: [
          "Port St. Lucie's economy centers on five sectors where we have specific experience:",
        ],
        bullets: [
          "Healthcare & life sciences — Torrey Pines Institute-adjacent biotech firms and Tradition Medical Center vendors. We handle the Florida R&D tax credit, Section 174 capitalization for clinical-trial costs, and the medical-device sales-tax exemption on prosthetics and prescription devices.",
          "Construction & real estate — Port St. Lucie's residential building boom. We handle percentage-of-completion accounting, retention tracking, Florida documentary stamp tax on deeds, and the contractor-vs-subcontractor sales-tax rules.",
          "Retail & services — PGA Boulevard-area retailers, restaurants, and personal-services firms. We handle 1099-K reconciliation, sales-tax-exemption tracking for resale certificates, and the Florida grocery exemption (grocery staples are exempt; prepared food is taxable at 7.0%).",
          "Golf & recreation — Port St. Lucie is home to PGA Village. We handle the Florida sales-tax treatment of green fees (exempt if membership-based; taxable if daily-fee), merchandise, and food-and-beverage operations.",
          "Logistics & distribution — I-95/Turnpike interchange distribution firms. We handle inventory valuation, multi-state nexus from distribution activity, and Florida fuel-tax refund for off-highway use.",
        ],
      },
      {
        heading: "Florida corporate income tax in Port St. Lucie",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). The $50,000 exemption effectively shelters the first ~$45,000 of C-corp net income. S-corps, partnerships, and multi-member LLCs owe no Florida corporate income tax but still file informational returns.",
          "Port St. Lucie biotech firms at the Torrey Pines cluster frequently qualify for the Florida R&D tax credit (10% of qualified research expenses above a base amount, up to $250,000 of credit per year). We help biotech clients identify qualified research expenses under IRC §41 — often missed for preclinical research, lab-development work, and clinical-trial protocol design — and compute the credit.",
        ],
      },
      {
        heading: "What a Port St. Lucie monthly engagement includes",
        paragraphs: [
          "A standard NexGen engagement for a Port St. Lucie business includes:",
        ],
        bullets: [
          "Monthly bookkeeping in QuickBooks Online or Xero, reconciled to bank and credit-card statements.",
          "Monthly sales tax accrual and quarterly DR-15 filing for St. Lucie County at the 7.0% combined rate.",
          "Contractor-vs-subcontractor sales-tax structuring for construction firms.",
          "Quarterly estimated tax projections for owners and the business.",
          "Year-end financial statements and K-1 preparation for pass-through entities.",
          "Annual federal and Florida tax return preparation, e-filed.",
          "Unlimited email and phone access to your dedicated accountant.",
        ],
      },
      ctaBlock("Port St. Lucie"),
    ],
    faqs: [
      {
        q: "What is Port St. Lucie's sales tax rate for 2026?",
        a: "St. Lucie County's discretionary sales surtax is 1.0% for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 7.0%. The standard $5,000 surtax ceiling applies, capping the surtax at $50 per single item.",
      },
      {
        q: "I am a Port St. Lucie homebuilder. Do I charge sales tax on the house?",
        a: "Generally no — Florida treats the contractor as the consumer of materials installed into real property. You pay sales tax on materials purchased (lumber, fixtures, etc.) and do not separately charge sales tax on the contract price. But there are exceptions based on contract type (lump-sum vs. time-and-materials) and use (residential vs. commercial). We help structure contracts to minimize sales-tax leakage.",
      },
      {
        q: "Do you work with Torrey Pines biotech startups?",
        a: "Yes. We handle the Florida R&D tax credit (10% of qualified research expenses above base), Section 174 capitalization for clinical-trial and lab-development costs, and the medical-device sales-tax exemption. Many Port St. Lucie biotech firms are losing $30-80K a year in unclaimed R&D credits — we identify these during the consultation.",
      },
      {
        q: "Do you have a Port St. Lucie office?",
        a: "Our physical office is in Fort Lauderdale, about 1.5 hours south on Florida's Turnpike. We meet Port St. Lucie clients at their offices, over secure video, or at our Fort Lauderdale location. Most Port St. Lucie engagements run fully remote after the initial consultation.",
      },
    ],
    seo: {
      title: "Port St. Lucie Accountant & CPA | NexGen Financial Experts",
      description:
        "Port St. Lucie accountant serving St. Lucie County businesses — Torrey Pines biotech R&D credits, construction sales-tax structuring, and fractional CFO. Free consultation.",
    },
    jsonLd: localBusinessSchema("Port St. Lucie", "St. Lucie"),
  },
  // 10. Cape Coral
  {
    slug: "cape-coral",
    city: "Cape Coral",
    county: "Lee",
    region: "Southwest Florida / Gulf Coast",
    population: 204510,
    metroPopulation: 792000, // Cape Coral-Fort Myers MSA
    salesTaxRate: "6.5%",
    surtaxRate: "0.5%",
    topIndustries: [
      "Real estate & construction",
      "Healthcare",
      "Retail & hospitality",
      "Marine & boating",
      "Retirement & senior services",
    ],
    title: "Cape Coral Accountant & CPA — NexGen Financial Experts",
    excerpt:
      "Cape Coral accountant serving Lee County businesses with sales tax at 6.5%, real-estate and construction accounting, marine-industry expertise, and fractional CFO. Book a free consultation.",
    readMinutes: 5,
    heroIntro: [
      "Cape Coral is the second-lowest-tax major city in Florida — Lee County's discretionary sales surtax is just 0.5% for 2026, giving a combined sales and use tax rate of 6.5%. That rate matches Orlando's and beats Tampa's 8.5% by a full two percentage points. For high-volume retailers and construction-materials buyers, the 2-point gap is real money.",
      "We work with Cape Coral businesses across Lee County — from homebuilders in the fast-growing northeast Cape to marine-services firms along the Caloosahatchee to retail and hospitality along Cape Coral Parkway. Cape Coral's economy is anchored by residential construction and a growing retiree-services sector, plus a marine industry that takes advantage of the city's 400 miles of canals.",
    ],
    body: [
      {
        heading: "Florida sales tax in Cape Coral (Lee County)",
        paragraphs: [
          "Lee County imposes a 0.5% discretionary sales surtax for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 6.5% (Source: Florida Department of Revenue, Form DR-15DSS, 2026 edition). The 0.5% rate makes Lee County one of the lowest-tax jurisdictions in Florida — only Citrus, Collier, and a handful of rural counties match or beat it.",
          "The standard $5,000 surtax ceiling applies, capping the surtax at $25 per single item. At 0.5%, the cap is rarely a meaningful dollar amount, but construction firms buying materials in large lots should still ensure their accounting system applies the cap correctly.",
          "Lee County also collects a 5% tourist development tax on short-term rentals (six months or fewer) of living accommodations. Cape Coral's canal-front vacation rentals and Fort Myers Beach hotels are the densest short-term-rental markets in the county. We file this return for hospitality clients and reconcile it against platform statements (Airbnb, VRBO, Booking.com).",
        ],
      },
      {
        heading: "Industries we serve in Cape Coral",
        paragraphs: [
          "Cape Coral's economy centers on five sectors where we have specific experience:",
        ],
        bullets: [
          "Real estate & construction — Cape Coral's residential building boom. We handle percentage-of-completion accounting, retention tracking, Florida documentary stamp tax on deeds ($0.70 per $100 of consideration), and the contractor-vs-subcontractor sales-tax rules.",
          "Healthcare — Cape Coral Hospital-adjacent practices and senior-care providers. We handle Medicare cost-report prep, 1099-K reconciliation for telehealth, and medical-device sales-tax exemptions on prosthetics and prescription items.",
          "Retail & hospitality — Cape Coral Parkway retailers and restaurants. We handle 1099-K reconciliation, sales-tax-exemption tracking for resale certificates, and the Florida grocery exemption (grocery staples are exempt; prepared food is taxable at 6.5%).",
          "Marine & boating — Cape Coral's 400-mile canal network supports a large marine-services industry. We handle the $5,000 surtax cap apportionment, the Florida sales-tax exemption on commercial fishing vessels, and the tourist-development tax on charter boat rentals.",
          "Retirement & senior services — Cape Coral's retiree population drives demand for senior-living facilities, home-health agencies, and fiduciary services. We handle payroll for clinical staff and the Florida sales-tax exemption on prescription drugs and medical equipment.",
        ],
      },
      {
        heading: "Florida corporate income tax in Cape Coral",
        paragraphs: [
          "Florida's corporate income tax rate is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates). The $50,000 exemption effectively shelters the first ~$45,000 of C-corp net income. S-corps, partnerships, and multi-member LLCs owe no Florida corporate income tax but still file informational returns.",
          "Cape Coral C-corps with multi-state activity — common for marine and construction sectors serving snowbird clients from out of state — need apportionment. Florida uses a single-sales-factor formula for most C-corps, meaning only Florida-sourced revenue counts. We compute this correctly so you do not overpay Florida on out-of-state revenue.",
        ],
      },
      {
        heading: "What a Cape Coral monthly engagement includes",
        paragraphs: [
          "A standard NexGen engagement for a Cape Coral business includes:",
        ],
        bullets: [
          "Monthly bookkeeping in QuickBooks Online or Xero, reconciled to bank and credit-card statements.",
          "Monthly sales tax accrual and quarterly DR-15 filing for Lee County at the 6.5% combined rate.",
          "Lee County Tourist Development Tax filing for hospitality and short-term-rental clients.",
          "Contractor-vs-subcontractor sales-tax structuring for construction firms.",
          "Quarterly estimated tax projections for owners and the business.",
          "Year-end financial statements and K-1 preparation for pass-through entities.",
          "Annual federal and Florida tax return preparation, e-filed.",
          "Unlimited email and phone access to your dedicated accountant.",
        ],
      },
      ctaBlock("Cape Coral"),
    ],
    faqs: [
      {
        q: "What is Cape Coral's sales tax rate for 2026?",
        a: "Lee County's discretionary sales surtax is 0.5% for 2026, on top of Florida's 6% state rate, for a combined sales and use tax rate of 6.5%. This is one of the lowest rates in Florida — only Citrus, Collier, and a few rural counties match or beat it. Tampa's rate, by comparison, is 8.5%.",
      },
      {
        q: "I run a Cape Coral canal-front vacation rental. What taxes do I owe?",
        a: "Two taxes on top of federal income tax. The 6.5% combined sales and use tax goes on the Florida DR-15 return, and the 5% Lee County Tourist Development Tax goes on a separate return filed with the Lee County Tax Collector. Airbnb and VRBO collect both for platform bookings, but you must file the returns yourself for direct bookings.",
      },
      {
        q: "I am a Cape Coral homebuilder. How does sales tax apply to construction?",
        a: "Florida treats the contractor as the consumer of materials installed into real property — meaning you pay sales tax on materials (lumber, fixtures) up front and do not separately charge sales tax on the contract price. But there are exceptions based on contract type (lump-sum vs. time-and-materials) and use (residential vs. commercial). We help structure contracts to minimize sales-tax leakage.",
      },
      {
        q: "Do you have a Cape Coral office?",
        a: "Our physical office is in Fort Lauderdale, about 2.5 hours southeast on I-75. We meet Cape Coral clients at their offices, over secure video, or via courier for paper records. Most Cape Coral engagements run fully remote after the initial consultation.",
      },
    ],
    seo: {
      title: "Cape Coral Accountant & CPA | NexGen Financial Experts",
      description:
        "Cape Coral accountant serving Lee County businesses — sales tax at 6.5% (Florida's lowest for major cities), real-estate and construction accounting, marine-industry expertise, and fractional CFO. Free consultation.",
    },
    jsonLd: localBusinessSchema("Cape Coral", "Lee"),
  },
];

// Post-process: compute the FAQ JSON-LD block for each location from its
// `faqs` array. Done after the array literal so we can reference each
// entry's `faqs` field (the array literal cannot self-reference).
for (const loc of locations) {
  loc.jsonLdFaq = faqPageSchema(loc.faqs);
}
