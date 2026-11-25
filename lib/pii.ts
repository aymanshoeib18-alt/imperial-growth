/**
 * Contact details must never stay in a URL on this site: the Meta Pixel
 * reports the page URL to Meta. /book receives these from the Tally
 * redirect, reads them once, then strips them. Every other page strips them
 * on arrival, before any pixel event fires.
 */
export const PII_KEYS = [
  "name",
  "full_name",
  "first_name",
  "last_name",
  "email",
  "phone",
] as const;

/**
 * Every spelling a PII param can arrive in. "amp;email" covers a redirect URL
 * whose "&" was HTML-escaped to "&amp;" upstream (e.g. by a form builder).
 */
export const PII_PARAM_NAMES: string[] = PII_KEYS.flatMap((k) => [k, `amp;${k}`]);

/** Remove PII params from the address bar (fbclid/utm and others are kept). */
export function stripPiiFromUrl(): void {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  let changed = false;
  for (const key of PII_PARAM_NAMES) {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  }
  if (changed) {
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }
}

/** Same logic as stripPiiFromUrl, as a plain JS string for the pixel's inline script. */
export const STRIP_PII_INLINE = `(function(){try{var u=new URL(location.href),k=${JSON.stringify(
  PII_PARAM_NAMES,
)},c=false;k.forEach(function(x){if(u.searchParams.has(x)){u.searchParams.delete(x);c=true}});if(c)history.replaceState(history.state,'',u.pathname+u.search+u.hash)}catch(e){}})();`;
