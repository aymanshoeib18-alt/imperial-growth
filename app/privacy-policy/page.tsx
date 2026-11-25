import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

// PLACEHOLDER — replace the content below with your final Privacy Policy.
export default function Page() {
  return (
    <SimplePage width="wide">
      <h1 className="font-serif text-4xl font-medium sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-mute">Last updated: [DATE]</p>
      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>[Placeholder — Privacy Policy content goes here.]</p>
      </div>
    </SimplePage>
  );
}
