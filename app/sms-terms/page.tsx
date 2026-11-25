import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "SMS Terms",
  alternates: { canonical: "/sms-terms" },
};

// PLACEHOLDER — replace the content below with your final SMS Terms.
export default function Page() {
  return (
    <SimplePage width="wide">
      <h1 className="font-serif text-4xl font-medium sm:text-5xl">SMS Terms</h1>
      <p className="mt-4 text-sm text-mute">Last updated: [DATE]</p>
      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>[Placeholder — SMS Terms content goes here.]</p>
      </div>
    </SimplePage>
  );
}
