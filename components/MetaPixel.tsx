"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { META_PIXEL_ID } from "@/lib/config";
import { STRIP_PII_INLINE, stripPiiFromUrl } from "@/lib/pii";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    /** Path of the last PageView sent, or null on a page without the pixel. */
    __igPvPath?: string | null;
  }
}

/**
 * Pages where the pixel never loads or fires.
 * /book carries name/email/phone in its URL on arrival; Schedule is sent
 * server-side from GoHighLevel, so the pixel isn't needed there.
 */
const NO_PIXEL_PATHS = new Set(["/book"]);

/**
 * Meta Pixel: base code + PageView only.
 * Lead and Schedule are sent server-side from GoHighLevel (Conversions API),
 * so they are intentionally NOT fired here.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);
  const excluded = NO_PIXEL_PATHS.has(pathname);

  // PageView on client-side route changes. The base snippet below counts the
  // page it boots on, so skip the first load and any page it has just counted.
  useEffect(() => {
    const first = isFirstLoad.current;
    isFirstLoad.current = false;
    if (excluded) {
      window.__igPvPath = null;
      return;
    }
    if (first || window.__igPvPath === pathname) return;
    stripPiiFromUrl(); // belt and braces: never report a URL with contact details
    window.fbq?.("track", "PageView");
    window.__igPvPath = pathname;
  }, [pathname, excluded]);

  // Never load the pixel on an excluded page. If it already loaded on an
  // earlier page, the effect above simply sends nothing here.
  if (!META_PIXEL_ID || excluded) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`if(!window.__igPixelInit){window.__igPixelInit=1;
${STRIP_PII_INLINE}
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq.disablePushState=true;
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
window.__igPvPath=location.pathname;}`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
