"use client";  
import Link from "next/link"; 
import { useTrackContactClick } from "@/hooks/use-track-click";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
export function SiteFooter() {
  const year = new Date().getFullYear();
  const trackSocial = useTrackContactClick("social");
  return (
    <footer className="mt-auto bg-brand-navy text-white/85">
      <div className="container-site py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex rounded-lg bg-white px-3 py-2" aria-label="NexGen Financial Experts — home">
              <Image src={site.logo} alt={site.logoAlt} width={176} height={56} className="h-9 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Practical accounting, tax, and advisory support for businesses —
              from our office in Fort Lauderdale to clients across Florida and beyond.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={site.social.facebook} onClick={trackSocial} target="_blank" rel="noopener noreferrer" aria-label="NexGen Financial Experts on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>
              <a href={site.social.instagram} onClick={trackSocial} target="_blank" rel="noopener noreferrer" aria-label="NexGen Financial Experts on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.352.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0Zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.903c-.419.164-1.049.364-2.216.42-1.272.06-1.65.072-4.857.072-3.207 0-3.585-.015-4.857-.072-1.171-.06-1.8-.257-2.217-.421a3.716 3.716 0 0 1-1.378-.903 3.744 3.744 0 0 1-.903-1.382c-.164-.422-.36-1.049-.42-2.216-.057-1.272-.072-1.65-.072-4.857s.015-3.585.072-4.857c.06-1.171.257-1.8.42-2.217a3.716 3.716 0 0 1 .903-1.378c.42-.42.819-.679 1.378-.903.417-.164 1.049-.36 2.217-.42 1.272-.06 1.65-.072 4.857-.072ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
              <a href={site.social.linkedin} onClick={trackSocial} target="_blank" rel="noopener noreferrer" aria-label="NexGen Financial Experts on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href={site.social.tiktok} onClick={trackSocial} target="_blank" rel="noopener noreferrer" aria-label="NexGen Financial Experts on TikTok" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.55-.74 3.04-1.78 4.13-1.69 1.78-4.44 2.36-6.77 1.61-2.31-.74-4.06-2.84-4.35-5.25-.05-.5-.07-1-.05-1.5.16-1.65.92-3.21 2.16-4.31 1.34-1.21 3.21-1.71 5.02-1.45.05 1.55-.13 3.09-.46 4.6-.65-.27-1.42-.42-2.11-.13-.71.27-1.24.97-1.27 1.74-.06.6.18 1.21.6 1.62.62.66 1.69.87 2.51.49.61-.27 1.06-.85 1.31-1.47.2-.62.18-1.27.18-1.92.04-2.92.02-5.83.03-8.75 0-1.55-.03-3.1-.02-4.66z" />
                </svg>
              </a>
              <a href={site.social.yelp} onClick={trackSocial} target="_blank" rel="noopener noreferrer" aria-label="NexGen Financial Experts on Yelp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M14.4 21.32c0 .41-.33.74-.74.74-.16 0-.31-.05-.44-.13l-3.62-2.4c-.21-.14-.34-.38-.34-.62V13.6c0-.41.33-.74.74-.74.14 0 .28.04.4.11l3.62 1.94c.21.11.34.34.34.58v5.83zm6.97-3.58c-.4-.04-.74-.4-.74-.81l.04-4.31c0-.41.34-.74.74-.74.04 0 .09 0 .13.01l3.41.81c.41.1.74.46.74.88 0 .04 0 .09-.01.13l-.45 4.31c-.05.41-.42.74-.83.74-.05 0-.1 0-.14-.01l-3.89-1.61zm-2.7-9.79c-.41 0-.74-.33-.74-.74l.04-5.83c0-.41.34-.74.74-.74.04 0 .09 0 .13.01l3.89.81c.41.09.74.45.74.88l-.04 5.83c0 .41-.34.74-.74.74-.04 0-.09 0-.13-.01l-3.89-.94zm-9.79-.34c-.41 0-.74-.33-.74-.74l.04-3.04c0-.41.34-.74.74-.74.04 0 .09 0 .13.01l3.04.7c.41.09.74.45.74.88l-.04 3.04c0 .41-.34.74-.74.74-.04 0-.09 0-.13-.01l-3.04-.84zm-2.45 6.94c-.41 0-.74-.33-.74-.74l.04-3.04c0-.41.34-.74.74-.74.04 0 .09 0 .13.01l3.04.7c.41.09.74.45.74.88l-.04 3.04c0 .41-.34.74-.74.74-.04 0-.09 0-.13-.01l-3.04-.84zm.85 7.51c-.41 0-.74-.33-.74-.74l.04-2.4c0-.41.34-.74.74-.74.04 0 .09 0 .13.01l2.4.55c.41.09.74.45.74.88l-.04 2.4c0 .41-.34.74-.74.74-.04 0-.09 0-.13-.01l-2.4-.69z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/70 transition-colors hover:text-white">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-semibold text-brand-blue transition-colors hover:text-white">
                  View all services →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Footer company links">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white">Services</Link></li>
              <li><Link href="/insights" className="text-white/70 hover:text-white">Insights &amp; Updates</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-white/70 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-white/70 hover:text-white">Terms of Use</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1975+East+Sunrise+Blvd+Suite+705+Fort+Lauderdale+FL+33304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  {site.address.full}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                <a href={site.phoneHref} className="text-white/70 hover:text-white">{site.phone}</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  WhatsApp {site.whatsapp}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-magenta-dark"
                >
                  Book a Consultation
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="break-all text-white/70 hover:text-white">{site.email}</a>
              </li>
            </ul>
                        <p className="mt-4 text-xs leading-5 text-white/50">{site.hours}</p>
                                                <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              <iframe
                title="Map showing NexGen Financial Experts office location in Fort Lauderdale"
                src="https://maps.google.com/maps?q=26.1380488,-80.1192751&z=14&output=embed"
                className="h-32 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href="https://maps.app.goo.gl/RrLXhNwwAAiUXgua6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-magenta-dark"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Get Directions
            </a>
            <p className="mt-2 text-xs text-white/50">
              Plus Code:{" "}
              <a
                href="https://maps.app.goo.gl/RrLXhNwwAAiUXgua6"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                4VQJ+67 Fort Lauderdale
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/55 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <span className="mx-2" aria-hidden="true">·</span>
            <Link href="/terms-of-use" className="hover:text-white">Terms</Link>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Fort Lauderdale, Florida</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
