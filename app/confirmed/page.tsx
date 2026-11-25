import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "You're booked",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <SimplePage>
      <div className="py-10 sm:py-16">
        <h1 className="font-serif text-5xl leading-[1.05] font-medium sm:text-7xl">
          You&apos;re booked.
        </h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed">
          Check your email for the calendar invite. Before the call, have your average job
          size and roughly how many leads you get a month ready.
        </p>
      </div>
    </SimplePage>
  );
}
