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
| `/privacy-policy`, `/sms-terms` | Legal text in `app/privacy-policy/page.tsx` and `app/sms-terms/page.tsx`. Fill in `[LEGAL BUSINESS NAME]` / `[BUSINESS ADDRESS]` in `components/LegalPage.tsx` and get a lawyer to review |

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

**Keeping contact details out of Meta** (`lib/pii.ts`)
- The pixel reports the page URL to Meta, so email, phone and name must never sit in a URL while it runs.
- `/book` gets `name` / `email` / `phone` from the Tally redirect. The pixel never loads or fires there. Schedule comes server-side from GHL instead. The page hands those values to the calendar and then removes them from the address bar with `history.replaceState`. `fbclid` and the `utm_*` params stay.
- Every other page removes those params as soon as it loads, before the pixel's first PageView. This covers someone who lands on, say, `/confirmed?email=…`.
- The pixel is set with `fbq.disablePushState = true`, so Meta doesn't auto-fire extra PageViews when the URL changes.
- ⚠️ **Never set a Meta Pixel ID on the GHL calendar or its booking widget** (or the GHL funnel/site the calendar sits in). The calendar iframe's URL contains the contact's name, email and phone, and a pixel there would send them to Meta in plain text. Schedule is already sent via the Conversions API.
- Don't add a Meta Pixel to the Tally form either. The site pixel plus the server-side Lead event cover it.

**Attribution pass-through** (`lib/attribution.ts`)
- When a visitor lands, `fbclid`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term` are saved to sessionStorage. A new ad click with fresh params replaces the old set.
- Every `/apply` button carries them, e.g. `/apply?fbclid=…&utm_source=…`.
- `/apply` adds them to the Tally embed URL. Tally hidden fields with **exactly those names** receive the values.
- `/book` passes `name`, `email` and `phone` from its own URL into the calendar embed. It also passes `first_name` / `last_name`, split from `name`, plus the attribution params. This attaches the booking to the same GHL contact.

To test, open `/?fbclid=test123&utm_source=test` and click a CTA. The `/apply` URL and the Tally iframe `src` should both include the params.

## Brand

- **Colours:** `#0A0A0A` black, `#FFFFFF` white and `#F5F5F3` off-white. The section backgrounds alternate between them.
- **Grey:** used only for small labels: `#6B6B6B` on light backgrounds, `#9A9A9A` on black. Tokens live in `app/globals.css`.
- **Fonts:** headlines use Cormorant Garamond (one italic accent word per headline), and body text uses Inter at 17–18px. Both load through `next/font`.
- **Black sections** get a subtle film grain from `public/grain.png`, a 16 KB tile.

### Files you can drop in (no code changes needed)

| File | What it is | Notes |
|---|---|---|
| `public/logo.png` | Wordmark (white on black) | Header, footer and OG image. Wide format, ~5:1. It is blended so its black background disappears into the page. |
| `public/icon.png` | Square mark (the "I" with the arrow) | Favicon, Apple touch icon and OG image. 512×512 or larger, on black. |

**Placeholders today:** the logo and icon are stand-ins generated for the build. Replace them with the real files, push, and Vercel redeploys.

### Landing page structure

`components/LandingPage.tsx` is a single general page. `/`, `/window-door`, `/outdoor-living` and `/ppf` all show it, while the three niche ad sets are tested. The niche URLs still exist so each ad set can point at its own URL and be measured separately.

- **Hero:** the eyebrow, headline, italic accent word and phone-demo sample are in `lib/heroes.ts` (`GENERAL_HERO`). Keep the Meta ad copy matching the headline word for word. To give a niche its own hero later, add an entry there and use it in that route.
- **Positioning:** we script and run the Meta ads, and set up the system that alerts the owner, tracks every lead and sends reminders. The owner calls the leads and closes. Nothing on the site should say we contact leads.
- **Phone demo** (`components/PhoneDemo.tsx`): HTML/CSS only, on a 10-second loop defined in `app/globals.css` (`.demo`). It shows a new lead with an instant alert, the call, the booking, an automatic reminder and "won", with the pipeline bar advancing. The sample name is generic.
- **Results & testimonials** (`lib/proof.ts`): the section stays hidden until you add real entries, with client permission. Never use placeholder numbers on the live site. To preview the design locally with labelled sample cards, run `PROOF_PREVIEW=1 npm run dev`.
- **The "60" mark:** `components/Sixty.tsx`. It sits behind the problem timeline.
- **Scroll reveals:** `[data-reveal]` + `components/RevealObserver.tsx`. They run once.
- **Mobile sticky CTA:** `components/StickyCta.tsx`. It appears after the hero button scrolls away.
- **Reduced motion:** every animation respects `prefers-reduced-motion`.

### Legal entity

The legal details are in `components/LegalPage.tsx`: Imperial Growth by AM Consulting, operated by Ayman & Mzyan Consulting Inc. (Ontario Corporation No. 1001447662), 46 Bradbury Road, Hamilton, ON L8J 0L1. The privacy policy, SMS terms and footer all read from there.
