import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { SectionHeading } from "@/components/site/section-blocks";
import { ContactForm } from "@/components/site/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Schedule a Consultation",
  description:
    "Contact NexGen Financial Experts in Fort Lauderdale: call +1 (954) 306-3823, WhatsApp +1 (954) 770-1568, email paudalus@nexgenfinancialexperts.com, or send a message through our secure form.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    hint: "Fastest response during business hours",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsapp,
    href: site.whatsappHref,
    hint: "Message us anytime — we reply during business hours",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    hint: "For inquiries and document coordination",
  },
  {
    icon: MapPin,
    label: "Office",
    value: site.address.full,
    href: "https://www.google.com/maps/search/?api=1&query=1975+East+Sunrise+Blvd+Suite+705+Fort+Lauderdale+FL+33304",
    hint: "Meetings by appointment",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="relative isolate overflow-hidden bg-brand-navy" aria-labelledby="contact-hero">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/handshake.jpg" alt="" fill priority sizes="100vw" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/60" aria-hidden="true" />
        </div>
        <div className="container-site relative py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-brand-blue" aria-hidden="true" />
              Reply within 1 business day
            </p>
            <p className="eyebrow text-brand-blue mt-4">Need Help?</p>
            <h1 id="contact-hero" className="mt-2 font-display text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              Contact NexGen Financial Experts Today
            </h1>
            <p className="mt-5 text-base leading-7 text-white/80 md:text-lg md:leading-8">
              Need expert advice? We&apos;re here to answer your questions and guide your financial
              journey.
            </p>
          </div>
        </div>
      </section>
      <section className="section-pad" aria-labelledby="form-section">
        <div className="container-site grid items-start gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 id="form-section" className="font-display text-2xl font-semibold text-brand-navy md:text-3xl">
              Tell Us How We Can Help
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Fill out the form below and a member of our team will respond promptly.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-brand-navy md:text-3xl">
              Reach Us Directly
            </h2>
            <ul className="mt-6 space-y-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</span>
                      <span className="block text-sm font-semibold text-brand-navy">{c.value}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{c.hint}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-border bg-secondary/60 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" /> Business Hours
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{site.hours}</p>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                For urgent matters during off hours, leave a WhatsApp message or voicemail and
                we&apos;ll respond on the next business day.
              </p>
            </div>

                        <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                title={`Map showing the location of ${site.name} at ${site.address.full}`}
                src="https://maps.google.com/maps?q=1975%20East%20Sunrise%20Blvd%20Suite%20705%20Fort%20Lauderdale%20FL%2033304&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              <MapPin className="inline h-3 w-3" aria-hidden="true" /> Plus Code:{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=4VQJ%2B67+Fort+Lauderdale+FL"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                4VQJ+67 Fort Lauderdale, Florida, USA
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="section-pad bg-secondary/60" aria-labelledby="explore-services">
        <div className="container-site">
          <SectionHeading
            eyebrow="Explore Our Services"
            title="What We Can Do for You"
            subtitle="At NexGen Financial Experts, we provide a full suite of tax, accounting, and advisory services designed to streamline your finances and boost your success."
          />
          <div className="mt-8 grid gap-4 text-center sm:grid-cols-3">
            <a href={site.phoneHref} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <Phone className="mx-auto h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-3 font-semibold text-brand-navy">{site.phone}</p>
              <p className="mt-1 text-xs text-muted-foreground">Call us directly</p>
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <MessageCircle className="mx-auto h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-3 font-semibold text-brand-navy">{site.whatsapp}</p>
              <p className="mt-1 text-xs text-muted-foreground">WhatsApp us</p>
            </a>
            <a href="mailto:paudalus@nexgenfinancialexperts.com" className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <Mail className="mx-auto h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-3 break-all text-sm font-semibold text-brand-navy">{site.email}</p>
              <p className="mt-1 text-xs text-muted-foreground">Email us</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
