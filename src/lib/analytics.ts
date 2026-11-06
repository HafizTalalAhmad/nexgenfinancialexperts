declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = "G-GWE8D86HWX";

type GA4EventName = "page_view" | "generate_lead" | "select_content" | "select_item" | "custom_event";

interface GA4EventParams {
  [key: string]: string | number | boolean | undefined;
}

function isClient(): boolean {
  return typeof window !== "undefined";
}

function isGtagLoaded(): boolean {
  return isClient() && typeof window.gtag === "function";
}

export function trackEvent(eventName: GA4EventName | string, params?: GA4EventParams): void {
  try {
    if (!isGtagLoaded()) return;
    window.gtag!("event", eventName, params ?? {});
  } catch {}
}

export function trackLead(service: string): void {
  trackEvent("generate_lead", { service, currency: "USD", value: 50 });
}

export function trackContactClick(channel: "phone" | "whatsapp" | "email" | "map"): void {
  trackEvent("select_content", { content_type: "contact_channel", content_id: channel });
}

export function trackServiceClick(serviceSlug: string): void {
  trackEvent("select_item", { item_list_name: "services", item_id: serviceSlug });
}

export function trackCtaClick(ctaLocation: string): void {
  trackEvent("select_content", { content_type: "cta", content_id: ctaLocation });
}
