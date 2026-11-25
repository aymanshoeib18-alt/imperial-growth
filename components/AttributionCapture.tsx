"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";
import { stripPiiFromUrl } from "@/lib/pii";

/**
 * Saves fbclid / UTM params from the landing URL into sessionStorage, and
 * removes any contact details (email, phone, name) from the address bar.
 * /book strips them itself, after handing them to the calendar.
 */
export default function AttributionCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureAttribution();
    if (pathname !== "/book") stripPiiFromUrl();
  }, [pathname]);
  return null;
}
