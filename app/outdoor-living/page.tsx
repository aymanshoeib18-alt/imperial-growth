import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

const hero = {
  eyebrow: "For deck, patio & pergola builders",
  headline: "Your spring schedule is being booked right now. Make sure it's with you.",
};

export const metadata: Metadata = {
  title: "Deck, Patio & Pergola Builders",
  description: hero.headline,
  alternates: { canonical: "/outdoor-living" },
  openGraph: { url: "/outdoor-living", title: hero.headline },
};

export default function Page() {
  return <LandingPage {...hero} />;
}
