"use client";

import Script from "next/script";
import { useEffect } from "react";

const VOICEFLOW_PROJECT_ID = "6a3b933e7160b65a034a875c";

// Voiceflow's chat.load() API does not expose the launcher button text or the
// chat panel header title — those are dashboard settings in Voiceflow Studio.
// To make the widget read "Talk to NexGen" instead of the dashboard default
// ("Talk to AI"), we override the rendered text nodes after the widget mounts.
//
// We match by full trimmed text content (not class names, which Voiceflow
// minifies and changes between versions; not substring, which would risk
// replacing "Talk to AI" inside FAQ answers or body copy). Only a text node
// whose entire content is "Talk to AI" (case-insensitive) gets replaced.
const LAUNCHER_TEXT = "Talk to NexGen";
const LAUNCHER_PATTERN = /^talk\s+to\s+ai$/i;
const OVERRIDE_TIMEOUT_MS = 30_000;

function overrideLauncherText(root: ParentNode) {
  const walker = document.createTreeWalker(
    root as Node,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const text = (node.nodeValue ?? "").trim();
        return LAUNCHER_PATTERN.test(text)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    }
  );

  const targets: Text[] = [];
  let current = walker.nextNode() as Text | null;
  while (current) {
    targets.push(current);
    current = walker.nextNode() as Text | null;
  }

  for (const node of targets) {
    if (node.nodeValue && node.nodeValue.trim() !== LAUNCHER_TEXT) {
      node.nodeValue = LAUNCHER_TEXT;
    }
  }
}

/**
 * Voiceflow chatbot widget. Loads the Voiceflow chat runtime from CDN and
 * mounts a floating chat bubble bottom-right on every page.
 *
 * `strategy="afterInteractive"` defers the script until the page is
 * interactive, so the chat widget never blocks first paint or hydration.
 *
 * The project ID is a public embed identifier — it's safe to expose in
 * client-side HTML, just like the GA4 measurement ID.
 *
 * The useEffect hook overrides the launcher/header text to "Talk to NexGen"
 * after the widget mounts. See the comment above for why we can't do this
 * through chat.load() directly.
 */
export function VoiceflowWidget() {
  useEffect(() => {
    // Catch any text that's already in the DOM (unlikely on first paint, but
    // covers fast cache-restored navigations).
    overrideLauncherText(document.body);

    // Voiceflow mounts its widget asynchronously after the bundle loads. We
    // watch the body for new nodes and override text as they appear. The chat
    // panel also re-renders on open/close, so the observer catches those too.
    const observer = new MutationObserver(() => {
      overrideLauncherText(document.body);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Stop observing once the widget has had plenty of time to mount, so a
    // long-lived page session doesn't keep the observer running.
    const timeout = setTimeout(
      () => observer.disconnect(),
      OVERRIDE_TIMEOUT_MS
    );

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

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
