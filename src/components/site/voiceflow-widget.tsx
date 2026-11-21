"use client";

import Script from "next/script";

const VOICEFLOW_PROJECT_ID = "6a3b933e7160b65a034a875c";

/**
 * Voiceflow chatbot widget. Loads the Voiceflow chat runtime from CDN and
 * mounts a floating chat bubble bottom-right on every page.
 *
 * `strategy="afterInteractive"` defers the script until the page is
 * interactive, so the chat widget never blocks first paint or hydration.
 *
 * The project ID is a public embed identifier — it's safe to expose in
 * client-side HTML, just like the GA4 measurement ID.
 */
export function VoiceflowWidget() {
  return (
    <Script
      id="voiceflow-widget"
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
      strategy="afterInteractive"
      onLoad={() => {
        // Voiceflow's bundle attaches `window.voiceflow` once loaded.
        /* eslint-disable @typescript-eslint/no-explicit-any */
        (window as any).voiceflow?.chat?.load({
          verify: { projectID: VOICEFLOW_PROJECT_ID },
          url: "https://general-runtime.voiceflow.com",
          voice: { url: "https://runtime-api.voiceflow.com" },
        });
      }}
    />
  );
}
