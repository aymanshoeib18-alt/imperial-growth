/**
 * Results & testimonials. The section stays HIDDEN until at least one real
 * entry exists here. Only add real, verifiable results with the client's
 * permission. Never placeholder or invented numbers on the live site.
 *
 * Local design preview with clearly-labelled sample cards:
 *   PROOF_PREVIEW=1 npm run dev
 */
export type Result = { figure: string; label: string; business: string };
export type Testimonial = { quote: string; name: string; business: string };

export const results: Result[] = [];
export const testimonials: Testimonial[] = [];

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
