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
    isPreview: preview && !results.length && !testimonials.length,
  };
}
