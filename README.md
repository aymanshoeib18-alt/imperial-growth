# Imperial Growth: landing site

Next.js (App Router) + TypeScript + Tailwind CSS v4. Every page is static. There is no database and no auth.
It deploys on Vercel at **imperialgrowth.co**.

## Pages

| Route | What it is |
|---|---|
| `/` | Main landing page (niche-neutral hero) |
| `/window-door`, `/outdoor-living`, `/ppf` | Same page with a different eyebrow and headline (`components/LandingPage.tsx`, hero props set in each `app/<route>/page.tsx`) |
| `/apply` | Tally form embed |
| `/book` | GoHighLevel calendar embed |
| `/confirmed` | "You're booked" page |
| `/not-a-fit` | Polite decline |
| `/privacy-policy`, `/sms-terms` | **Placeholders.** Edit `app/privacy-policy/page.tsx` and `app/sms-terms/page.tsx` |

Every CTA uses `components/ApplyButton.tsx` and goes to `/apply`.

## Environment variables

Copy `.env.example` to `.env.local` for local work. In Vercel, add them under **Project → Settings → Environment Variables**.

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | `2257800188334287` |
| `NEXT_PUBLIC_TALLY_FORM_URL` | Your Tally form, e.g. `https://tally.so/r/abc123` or `https://tally.so/embed/abc123` (either works) |
| `NEXT_PUBLIC_GHL_CALENDAR_URL` | Your GHL booking widget URL, e.g. `https://api.leadconnectorhq.com/widget/booking/XXXX` |
| `NEXT_PUBLIC_SITE_URL` | `https://imperialgrowth.co` |

Defaults live in `lib/config.ts`. The pixel ID and site URL have the values above built in. The Tally and calendar URLs are placeholders until you set them. While they are placeholders, `/apply` and `/book` show a "not connected yet" note instead of a broken embed.

`NEXT_PUBLIC_*` values are baked in at build time. **After changing one in Vercel, redeploy.**

## Changing the Tally or calendar URL

Use either of these:

1. **Recommended:** update `NEXT_PUBLIC_TALLY_FORM_URL` / `NEXT_PUBLIC_GHL_CALENDAR_URL` in Vercel, then redeploy.
2. Change the fallback strings in `lib/config.ts` and push.

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, go to **Add New → Project** and import the repo. The framework is detected as Next.js, so leave the defaults.
3. Add the environment variables above, then **Deploy**.
4. Under **Settings → Domains**, add `imperialgrowth.co` (and `www.imperialgrowth.co` redirecting to it). Then set the DNS records Vercel shows you at your registrar.

Local commands:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Tracking

**Meta Pixel** (`components/MetaPixel.tsx`, rendered once in `app/layout.tsx`)
- Loads the base pixel, then fires `init` + `PageView` on first load.
- Fires `PageView` on client-side route changes (via `usePathname`). It skips the first load, so a page is never counted twice.
- Includes the `<noscript>` image fallback. There is no consent, geo or GPC gating.
- **Lead and Schedule are NOT fired in the browser.** They are sent server-side from GoHighLevel via the Conversions API.

**Attribution pass-through** (`lib/attribution.ts`)
- When a visitor lands, `fbclid`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` are saved to sessionStorage. A new ad click with fresh params replaces the old set.
- Every `/apply` button carries them, e.g. `/apply?fbclid=…&utm_source=…`.
- `/apply` adds them to the Tally embed URL. Tally hidden fields with **exactly those names** receive the values.
- `/book` passes `name`, `email` and `phone` from its own URL into the calendar embed. It also passes `first_name` / `last_name`, split from `name`, plus the attribution params. This attaches the booking to the same GHL contact.

To test, open `/?fbclid=test123&utm_source=test` and click a CTA. The `/apply` URL and the Tally iframe `src` should both include the params.

## Brand

- The colours are only `#0A0A0A`, `#FFFFFF` and one grey `#6B6B6B` (secondary text, white backgrounds only). They are defined in `app/globals.css`.
- Headlines use Cormorant Garamond and body text uses Inter, both loaded with `next/font`.
- The logo is `/public/logo.png`. It appears in the header and footer and is used for the Open Graph image (`app/opengraph-image.tsx`). To change the logo, replace that file and keep the same name. A wide image with a black background works best.
