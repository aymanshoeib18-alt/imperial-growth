/**
 * Results & testimonials. The section stays HIDDEN until at least one real
 * entry exists here. Only add real, verifiable results with the client's
 * permission. Never placeholder or invented numbers on the live site.
 *
 * Local design preview with clearly-labelled sample cards:
 *   PROOF_PREVIEW=1 npm run dev
 */
export type Result = {
  figure: string;
  label: string;
  business: string;
  /** Where the number comes from and the period, shown small under the card. */
  source?: string;
};
export type Testimonial = { quote: string; name: string; business: string };

// Sources (kept off the site; they show customer/payment details):
// - Ali Chaudhary: Stripe overview Oct 1–30 2026 (gross volume $72,721, +77.06% vs
//   $41,066 previous period); sales dashboard Aug 30 – Sep 16 2026 ($61,000
//   contracted, 21 sets booked, 11 closes). Imperial Growth ran his Meta ads and lead
//   system. Ali approved use of his name and quote.
// - E-commerce client: Meta Ads Manager performance overview, lifetime (421 website
//   purchases, $40.79 per purchase, 9.49 purchase ROAS). Shown without a name.
export const results: Result[] = [
  {
    figure: "9.49×",
    label: "Return on ad spend across 421 website purchases, at $40.79 each",
    business: "E-commerce client",
    source: "Meta Ads Manager · lifetime",
  },
  {
    figure: "$72.7K",
    label: "Revenue in October, up 77% on the month before",
    business: "Ali Chaudhary · Medical",
    source: "Stripe · Oct 2026",
  },
  {
    figure: "$61K",
    label: "Contracted from 21 booked sales calls in 18 days",
    business: "Ali Chaudhary · Medical",
    source: "Sales dashboard · Aug 30 – Sep 16, 2026",
  },
];

export const testimonials: Testimonial[] = [
  {
    // Trimmed from a client chat message; the ellipsis marks the cut.
    quote:
      "Dream team right here. Not far from $1m/mo… We're gonna change the entire medical industry.",
    name: "Ali Chaudhary",
    business: "Client · Medical",
  },
];

/**
 * Screenshots shown under the stat cards (files in /public/results).
 * Cropped to the part that proves the result: no customer names, refunds,
 * failed payments or internal notes. Never publish an uncropped original.
 */
export type Shot = { src: string; width: number; height: number; alt: string; tag?: string };
export type ProofImage = {
  id: "meta" | "stripe" | "dashboard" | "chat";
  shots: Shot[];
  caption: string;
};

export const gallery: ProofImage[] = [
  {
    id: "meta",
    caption: "E-commerce client · Meta Ads Manager performance overview, lifetime (recreated from the account)",
    shots: [
      {
        src: "/results/meta-overview-ecommerce.png",
        width: 1540,
        height: 804,
        alt: "Meta Ads Manager performance overview: 421 website purchases, $40.79 per purchase, 9.49 purchase ROAS",
      },
    ],
  },
  {
    id: "dashboard",
    caption: "Ali Chaudhary · Sales dashboard, Aug 30 – Sep 16, 2026",
    shots: [
      {
        src: "/results/sales-dashboard-aug-sep-2026-v2.webp",
        width: 800,
        height: 824,
        alt: "Sales dashboard: $61,000 contracted, 21 sets booked, 13 calls taken, 11 closes",
      },
    ],
  },
  {
    id: "stripe",
    caption: "Ali Chaudhary · Stripe, before and after",
    shots: [
      {
        src: "/results/stripe-aug-sep-2026-v2.webp",
        width: 512,
        height: 248,
        alt: "Stripe, Aug 30 to Sep 15 2026: gross volume $40,518, MRR $8,416.58",
        tag: "Aug 30 – Sep 15",
      },
      {
        src: "/results/stripe-oct-2026-v2.webp",
        width: 518,
        height: 247,
        alt: "Stripe, October 2026: gross volume $72,721, up 77.06% on the previous period; MRR $22,416.58, up 45.41%",
        tag: "October · +77%",
      },
    ],
  },
  {
    id: "chat",
    caption: "Ali Chaudhary · message to the team",
    shots: [
      {
        src: "/results/ali-message-v2.webp",
        width: 800,
        height: 244,
        alt: "Chat message from Ali Chaudhary: Dream team right here. Not far from $1m/mo boys. We're gonna change the entire medical industry,",
      },
    ],
  },
];

const previewResults: Result[] = [
  { figure: "00", label: "Example: booked estimates in month one", business: "Sample client" },
  { figure: "$0", label: "Example: cost per lead", business: "Sample client" },
  { figure: "0×", label: "Example: return on ad spend", business: "Sample client" },
];
const previewTestimonials: Testimonial[] = [
  {
    quote: "Example testimonial. Replace with a real quote from a client, with their permission.",
    name: "Sample Name",
    business: "Sample Company",
  },
];

export function getProof() {
  const preview = process.env.PROOF_PREVIEW === "1";
  return {
    results: results.length ? results : preview ? previewResults : [],
    testimonials: testimonials.length ? testimonials : preview ? previewTestimonials : [],
    gallery: results.length || testimonials.length ? gallery : [],
    isPreview: preview && !results.length && !testimonials.length,
  };
}
