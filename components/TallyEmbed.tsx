"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { useClientValue } from "@/lib/useClientValue";
import { appendParams, getAttribution } from "@/lib/attribution";
import { TALLY_FORM_URL, isPlaceholder } from "@/lib/config";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

/** Accepts a tally.so/r/ID share link or a tally.so/embed/ID link. */
function toEmbedUrl(url: string) {
  return url.replace("tally.so/r/", "tally.so/embed/");
}

export default function TallyEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // fbclid + UTMs go in as query params → Tally hidden fields of the same name.
  const src = useClientValue<string | null>(
    () =>
      isPlaceholder(TALLY_FORM_URL)
        ? null
        : appendParams(toEmbedUrl(TALLY_FORM_URL), {
            alignLeft: "1",
            hideTitle: "1",
            transparentBackground: "1",
            dynamicHeight: "1",
            ...getAttribution(),
          }),
    null,
  );

  // Tally's script (auto height) normally loads the iframe. If it is slow or
  // blocked, load the iframe directly so the form always appears.
  useEffect(() => {
    if (!src) return;
    window.Tally?.loadEmbeds();
    const t = window.setTimeout(() => {
      const el = iframeRef.current;
      if (el && !el.getAttribute("src")) el.setAttribute("src", src);
    }, 2500);
    return () => window.clearTimeout(t);
  }, [src]);

  if (isPlaceholder(TALLY_FORM_URL)) {
    return (
      <p className="border border-line p-6 text-mute">
        Form not connected yet. Set NEXT_PUBLIC_TALLY_FORM_URL.
      </p>
    );
  }

  return (
    <>
      {src ? (
        <iframe
          ref={iframeRef}
          data-tally-src={src}
          title="Imperial Growth application"
          width="100%"
          height="600"
          loading="eager"
          className="min-h-[600px] w-full border-0"
        />
      ) : (
        <div className="min-h-[600px]" aria-hidden="true" />
      )}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
    </>
  );
}
