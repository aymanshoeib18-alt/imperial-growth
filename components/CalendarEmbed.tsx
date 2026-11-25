"use client";

import Script from "next/script";
import { useClientValue } from "@/lib/useClientValue";
import { appendParams, getAttribution } from "@/lib/attribution";
import { GHL_CALENDAR_URL, isPlaceholder } from "@/lib/config";

function buildSrc(): string | null {
  if (isPlaceholder(GHL_CALENDAR_URL)) return null;
  const q = new URLSearchParams(window.location.search);
  const get = (...keys: string[]) =>
    keys.map((k) => q.get(k)?.trim()).find(Boolean) || undefined;

  const name = get("name", "full_name");
  let first = get("first_name");
  let last = get("last_name");
  if (name && !first) {
    const [f, ...rest] = name.split(/\s+/);
    first = f;
    last = last || rest.join(" ") || undefined;
  }

  return appendParams(GHL_CALENDAR_URL, {
    name: name || [first, last].filter(Boolean).join(" ") || undefined,
    first_name: first,
    last_name: last,
    email: get("email"),
    phone: get("phone"),
    ...getAttribution(),
  });
}

/**
 * GoHighLevel calendar. Passes name / email / phone from this page's URL
 * (sent by the Tally redirect) so the booking attaches to the same contact.
 */
export default function CalendarEmbed() {
  const src = useClientValue<string | null>(buildSrc, null);

  if (isPlaceholder(GHL_CALENDAR_URL)) {
    return (
      <p className="border border-line p-6 text-mute">
        Calendar not connected yet. Set NEXT_PUBLIC_GHL_CALENDAR_URL.
      </p>
    );
  }

  return (
    <>
      {src ? (
        <iframe
          src={src}
          title="Book your call with Imperial Growth"
          scrolling="no"
          className="min-h-[760px] w-full overflow-hidden border-0"
          id="ig-booking-widget"
        />
      ) : (
        <div className="min-h-[760px]" aria-hidden="true" />
      )}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
