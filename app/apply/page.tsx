import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import TallyEmbed from "@/components/TallyEmbed";

export const metadata: Metadata = {
  title: "See if you qualify",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <SimplePage width="wide">
      <h1 className="font-serif text-4xl leading-[1.08] font-medium sm:text-5xl">
        See if your company qualifies.
      </h1>
      <p className="mt-4 text-mute">Takes about a minute. US companies only.</p>
      <div className="mt-10">
        <TallyEmbed />
      </div>
    </SimplePage>
  );
}
