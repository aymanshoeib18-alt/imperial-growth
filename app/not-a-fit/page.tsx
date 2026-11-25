import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Thanks",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <SimplePage>
      <div className="py-10 sm:py-16">
        <h1 className="max-w-xl font-serif text-4xl leading-[1.1] font-medium text-balance sm:text-5xl">
          Thanks, we&apos;re not the right fit yet. We&apos;ll reach out if that changes.
        </h1>
      </div>
    </SimplePage>
  );
}
