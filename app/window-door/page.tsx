import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

const hero = {
  eyebrow: "For window & door company owners",
  headline: "Booked in-home estimates. Not shared leads.",
};

export const metadata: Metadata = {
  title: "Window & Door Companies",
  description: hero.headline,
  alternates: { canonical: "/window-door" },
  openGraph: { url: "/window-door", title: hero.headline },
};

export default function Page() {
  return <LandingPage {...hero} />;
}
