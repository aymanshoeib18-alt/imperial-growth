/**
 * Attribution pass-through.
 * Captures fbclid + UTM params on landing, keeps them in sessionStorage,
 * and re-attaches them to /apply links and the Tally / calendar embeds.
 */
export const ATTRIBUTION_KEYS = [
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type Attribution = Partial<
  Record<(typeof ATTRIBUTION_KEYS)[number], string>
>;

const STORAGE_KEY = "ig_attribution";

function readStored(): Attribution {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

/** Store any attribution params found in the current URL. Safe to call repeatedly. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  }
  const stored = readStored();
  if (Object.keys(fromUrl).length === 0) return stored;

  // A fresh ad click replaces the earlier set as one unit.
  const next = fromUrl;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage blocked: still return what's in the URL */
  }
  return next;
}

/** Current attribution (read-only): URL params first, then sessionStorage. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  }
  return Object.keys(fromUrl).length ? fromUrl : readStored();
}

/** Append attribution (and any extra params) to a URL without clobbering existing ones. */
export function appendParams(
  url: string,
  params: Record<string, string | undefined>,
): string {
  const isAbsolute = /^https?:\/\//.test(url);
  const u = new URL(url, "https://placeholder.local");
  for (const [k, v] of Object.entries(params)) {
    if (v && !u.searchParams.has(k)) u.searchParams.set(k, v);
  }
  return isAbsolute ? u.toString() : `${u.pathname}${u.search}${u.hash}`;
}
