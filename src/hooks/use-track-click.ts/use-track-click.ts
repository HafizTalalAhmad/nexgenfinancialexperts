"use client";

import { useCallback } from "react";
import { trackContactClick, trackCtaClick } from "@/lib/analytics";

export function useTrackContactClick(channel: "phone" | "whatsapp" | "email" | "map") {
  return useCallback(() => {
    trackContactClick(channel);
  }, [channel]);
}

export function useTrackCtaClick(ctaLocation: string) {
  return useCallback(() => {
    trackCtaClick(ctaLocation);
  }, [ctaLocation]);
}
