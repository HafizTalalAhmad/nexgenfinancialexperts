"use client";  
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  ClipboardList,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Bitcoin,
  Target,
  Users,
  PhoneCall,
  CalendarCheck,
  FolderCheck,
  TrendingUp,
  Award,
  Clock,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, CtaBanner } from "@/components/site/section-blocks";
import { Testimonials, FaqSection } from "@/components/site/testimonials";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { articles } from "@/lib/articles"; 
import { useTrackContactClick } from "@/hooks/use-track-click";

const serviceHighlights = [
  {
    icon: BookOpenCheck,
    title: "Accounting",
    text: "Comprehensive bookkeeping, detailed management accounts, sales tax compliance, and budgeting & forecasting to help businesses plan effectively for the future.",
    href: "/services/business-accounting-bookkeeping",
    image: "/images/tax-documents.jpg",
  },
  {
    icon: Landmark,
    title: "Taxation",
    text: "Personal and corporate tax returns handled with precision, efficient payroll management, and expert advice on choosing the right business structures.",
    href: "/services/tax-advisory-planning-services",
    image: "/images/entrepreneur.jpg",
  },
  {
    icon: Rocket,
    title: "Startups",
    text: "End-to-end business planning - the right structure for long-term success, finance and registration support, and seamless compliance solutions.",
    href: "/services/financial-advisory-for-startups",
    image: "/images/business-meeting.jpg",
  },
  {
    icon: Target,
    title: "Business Advisory",
    text: "Strategic goal-setting and customized insights, with a focus on cost efficiency, sustainable growth, and a trusted partnership that adds value.",
    href: "/services/startup-fractional-cfo-services",
    image: "/images/handshake.jpg",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Benchmarking and advisory, partnership tax expertise, and compliance support - for healthcare organizations.",
    href: "/services/tax-accounting",
    image: "/images/office-building.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Reporting",
    text: "Stay ahead of regulatory requirements with proactive compliance management, accurate financial reporting, and timely filings across all jurisdictions.",
    href: "/services/business-tax-filing-preparation",
    image: "/images/hero-professional.jpg",
  },
];

const stats = [
  { icon: Award, value: "15+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: ThumbsUp, value: "98%", label: "Client Retention" },
  { icon: MapPin, value: "50+", label: "States Served" },
];

const industries = [
  { icon: Building2, label: "Real Estate", href: "/services/real-estate-accounting-bookkeeping" },
  { icon: ShoppingCart, label: "eCommerce", href: "/services/ecommerce-tax-accounting" },
  { icon: Bitcoin, label: "Crypto & Digital Assets", href: "/services/crypto-tax-advisory-services" },
  { icon: Rocket, label: "Startups", href: "/services/financial-advisory-for-startups" },
  { icon: TrendingUp, label: "Growing Companies", href: "/services/startup-fractional-cfo-services" },
  { icon: Users, label: "Professional Practices", href: "/services/business-accounting-bookkeeping" },
];

const reasons = [
  {
    icon: ClipboardList,
    title: "Customized Plans",
    text: "We create customized plans tailored to your organization's unique needs. Our team focuses on targeted advice that supports compliance and growth.",
  },
  {
    icon: ShieldCheck,
    title: "Experience You Can Rely On",
    text: "With years of combined experience, our professionals bring deep industry knowledge across accounting, tax, and advisory engagements.",
  },
  {
    icon: Handshake,
    title: "Focused on Long-Term Success",
    text: "We are dedicated to helping your business achieve long-term success - practical solutions designed to stimulate growth and maximize potential.",
  },
];

const process = [
  {
    icon: PhoneCall,
    title: "1. Initial Consultation",
    text: "Tell us about your business, your goals, and your challenges - by phone, WhatsApp, or the contact form.",
  },
  {
    icon: CalendarCheck,
    title: "2. Scope & Proposal",
    text: "We review your situation and propose a clear scope of work, timeline, and pricing - no surprises.",
  },
  {
    icon: FolderCheck,
    title: "3. Onboarding",
    text: "We gather records, set up secure file sharing, and map your existing systems so work starts smoothly.",
  },
  {
    icon: LineChart,
    title: "4. Ongoing Support",
    text: "You receive reliable deliverables and proactive communication - and a team that answers when you call.",
  },
];

const homeFaqs = [
  {
    q: "What types of businesses does NexGen Financial Experts work with?",
    a: "We work with small and mid-sized businesses, startups, professional practices, e-commerce sellers, real estate investors, and healthcare organizations - across Fort Lauderdale, Florida, and multiple states.",
  },
  {
    q: "Where is your office located?",
    a: "Our office is at 1975 East Sunrise Blvd, Suite 705, Fort Lauderdale, FL 33304. We also serve clients remotely across Florida and beyond.",
  },
  {
    q: "How do I get started?",
    a: "Call +1 (954) 306-3823, message us on WhatsApp at +1 (954) 770-1568, or submit the contact form. We'll schedule an initial consultation to understand your needs and propose a clear plan.",
  },
  {
    q: "Can you help if my books are behind or messy?",
    a: "Yes. Catch-up bookkeeping and cleanup engagements are among our most common projects. We reconstruct records, reconcile accounts, and bring your books current so you can move forward with confidence.",
  },
  {
    q: "Do you handle multi-state tax filings?",
    a: "Yes. We prepare federal, state, and local filings for businesses that operate in multiple jurisdictions, including Florida sales tax and out-of-state income tax obligations.",
  },
  {
    q: "How do you protect my financial information?",
    a: "We collect only the information needed to respond to your inquiry, never ask for passwords, bank credentials, or tax ID numbers through the public form, and share files through secure channels after we connect.",
  },
];

export default function HomePage() {
  const trackSocial = useTrackContactClick("social");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: "+19543063823",
    email: site.email,
    image: `${site.url}/images/nexgen-logo.png`,
    logo: `${site.url}/images/nexgen-logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1975 East Sunrise Blvd, Suite 705",
      addressLocality: "Fort Lauderdale",
      addressRegion: "FL",
      postalCode: "33304",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      { "@type": "City", name: "Fort Lauderdale" },
      { "@type": "State", name: "Florida" },
    ],
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.tiktok,
      site.social.yelp,
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden bg-brand-navy" aria-labelledby="hero-title">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-professional.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/30"
            aria-hidden="true"
          />
        </div>

        <div className="container-site relative grid min-h-[600px] items-center gap-10 py-20 md:py-28 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-brand-blue" aria-hidden="true" />
              Fort Lauderdale, Florida
            </p>
            <h1 id="hero-title" className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-white md:text-5xl lg:text-6xl">
              Transforming Your <span className="text-brand-blue">Financial</span> Future
            </h1>
            <p className="mt-5 text-lg font-medium text-white/90 md:text-xl">
              Expert Financial Guidance for Every Business
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              At {site.name}, we tailor strategies to ensure compliance while fostering your
              business growth in a complex financial landscape - accounting, tax, and
              advisory support you can rely on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-brand-magenta-dark">
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white">
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1 h-4 w-4" aria-hidden="true" /> WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
              </a>
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" /> {site.hours}
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative ml-auto max-w-md">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  Why Choose NexGen
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                  Trusted Financial Expertise
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  A Fort Lauderdale firm delivering accounting, tax, and advisory services with
                  precision and care - for businesses across Florida and beyond.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="font-display text-3xl font-bold text-brand-blue">15+</p>
                    <p className="mt-1 text-xs text-white/70">Years Experience</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="font-display text-3xl font-bold text-brand-blue">500+</p>
                    <p className="mt-1 text-xs text-white/70">Clients Served</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="font-display text-3xl font-bold text-brand-blue">98%</p>
                    <p className="mt-1 text-xs text-white/70">Client Retention</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="font-display text-3xl font-bold text-brand-blue">50+</p>
                    <p className="mt-1 text-xs text-white/70">States Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white" aria-label="Company at a glance">
        <div className="container-site grid grid-cols-2 gap-6 py-10 md:grid-cols-4 md:py-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center md:flex-row md:gap-4 md:text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="mt-3 md:mt-0">
                <p className="font-display text-2xl font-bold text-brand-navy md:text-3xl">{s.value}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground md:text-sm">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Key facts" className="border-b border-border bg-secondary/40">
        <div className="container-site grid gap-4 py-5 text-sm text-muted-foreground sm:grid-cols-3">
          <p className="flex items-center justify-center gap-2 text-center">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            Based in Fort Lauderdale, serving Florida &amp; multi-state clients
          </p>
          <p className="flex items-center justify-center gap-2 text-center">
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            Listed on <a onClick={trackSocial} className="underline hover:text-primary" href={site.social.yelp} target="_blank" rel="noopener noreferrer">Yelp</a> &amp;{" "}
            <a onClick={trackSocial} className="underline hover:text-primary" href={site.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <p className="flex items-center justify-center gap-2 text-center">
            <MessageCircle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            Direct access: call or WhatsApp the team
          </p>
        </div>
      </section>

      <section id="services" className="section-pad" aria-labelledby="services-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="Services We Provide"
            title="Comprehensive Financial Solutions"
            subtitle="We deliver a comprehensive range of accounting and financial services through experienced accountants trusted for their reliability and exceptional standards. Every client holds great value to us, and we ensure they receive personalized care and attention."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-primary shadow-md backdrop-blur-sm">
                    <s.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-6 text-muted-foreground">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/40" aria-labelledby="about-teaser">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/images/office-building.jpg"
                alt="NexGen Financial Experts office in Fort Lauderdale, Florida"
                width={1280}
                height={853}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-brand-navy p-6 text-white shadow-2xl md:block">
              <p className="font-display text-3xl font-bold text-brand-blue">15+</p>
              <p className="mt-1 text-sm text-white/80">Years serving<br />South Florida</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 id="about-teaser" className="mt-2 font-display text-3xl font-semibold text-brand-navy md:text-4xl">
              Discover Our Journey and Commitment to Your Success
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              {site.name} is a finance firm in Fort Lauderdale dedicated to providing customized tax, accounting, and advisory solutions that drive compliance and growth for businesses
              of all sizes. We don&apos;t just balance books - we build confidence.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              {[
                "Experienced professionals with a deep understanding of local and multi-state regulations",
                "Customized strategies built around your business goals",
                "End-to-end solutions - from accounting and tax planning to consulting and compliance",
                "Transparent communication and reliable reporting",
              ].map((li) => (
                <li key={li} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {li}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-primary hover:bg-brand-magenta-dark">
              <Link href="/about">
                Read More About Us <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="process-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="How We Work"
            title="A Clear, Proven Process"
            subtitle="From first call to ongoing support, here's what working with us looks like - transparent, structured, and built around your needs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.title} className="relative rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white shadow-md">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl font-bold text-secondary">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-navy">{p.title.replace(/^\d+\.\s*/, "")}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.text}</p>
                {i < process.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center lg:flex">
                    <ArrowRight className="h-4 w-4 text-border" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/40" aria-labelledby="industries-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="Focused Solutions for Your Business"
            title="Specialized Support for Your Industry"
            subtitle="Different industries face different financial challenges. We bring focused solutions to the sectors that drive South Florida's economy."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((i) => (
              <Link
                key={i.label}
                href={i.href}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <i.icon className="h-7 w-7 text-brand-blue" aria-hidden="true" />
                <span className="text-sm font-semibold text-brand-navy">{i.label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm md:flex">
            <div className="relative h-48 w-full md:h-auto md:w-1/3">
              <Image
                src="/images/handshake.jpg"
                alt="Business partnership and professional commitment"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 p-6 md:p-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-brand-navy">Swift and Efficient Financial Assistance</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  At NexGen, we understand the urgency of financial challenges. Our quick service
                  solutions deliver expert guidance to help you address immediate financial needs
                  while positioning your business for long-term success.
                </p>
              </div>
              <Button asChild className="self-start bg-primary hover:bg-brand-magenta-dark">
                <a href={site.phoneHref}>
                  <Phone className="mr-1 h-4 w-4" aria-hidden="true" /> {site.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="why-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why People Choose Us"
            title="A Partner Invested in Your Success"
            subtitle="We strongly believe that your success is the foundation of our success."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <r.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-navy">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-navy-deep" aria-labelledby="featured-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="Popular Engagements"
            title="Explore Our Expert Financial Services"
            subtitle="Tailored strategies to enhance compliance and drive growth for your organization."
            dark
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["business-accounting-bookkeeping", "tax-advisory-planning-services", "startup-fractional-cfo-services"].map((slug, idx) => {
              const svc = services.find((s) => s.slug === slug)!;
              const images = ["/images/tax-documents.jpg", "/images/entrepreneur.jpg", "/images/business-meeting.jpg"];
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-white/10"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={images[idx]}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-brand-navy-deep/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-white">{svc.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-white/70">{svc.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section-pad" aria-labelledby="insights-preview">
        <div className="container-site">
          <SectionHeading
            eyebrow="Insights & Updates"
            title="Helpful Resources for Business Owners"
            subtitle="Practical guides on bookkeeping, cash flow, and compliance readiness - written by our team."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">{a.category}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-brand-navy">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={homeFaqs} />

      <CtaBanner />
    </>
  );
}
