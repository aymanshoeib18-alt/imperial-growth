/**
 * Site-wide settings. Each value can be overridden with an environment
 * variable in Vercel (Project → Settings → Environment Variables).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://imperialgrowth.co";

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "2257800188334287";

/** Tally embed URL, e.g. https://tally.so/embed/abc123 */
export const TALLY_FORM_URL =
  process.env.NEXT_PUBLIC_TALLY_FORM_URL || "TALLY_FORM_URL_HERE";

/** GoHighLevel booking widget URL, e.g. https://api.leadconnectorhq.com/widget/booking/XXXX */
export const GHL_CALENDAR_URL =
  process.env.NEXT_PUBLIC_GHL_CALENDAR_URL || "GHL_CALENDAR_URL_HERE";

export const isPlaceholder = (url: string) => !/^https?:\/\//.test(url);
