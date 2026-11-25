import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import CalendarEmbed from "@/components/CalendarEmbed";

export const metadata: Metadata = {
  title: "Book your call",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <SimplePage width="wide">
      <h1 className="font-serif text-4xl leading-[1.08] font-medium sm:text-5xl">
        Pick a time for your call.
      </h1>
      <p className="mt-4 text-mute">20 minutes.</p>
      <div className="mt-10">
        <CalendarEmbed />
      </div>
    </SimplePage>
  );
}
