import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { GENERAL_HERO } from "@/lib/heroes";

const hero = GENERAL_HERO;

export const metadata: Metadata = {
  title: "Deck, Patio & Pergola Builders",
  description: hero.headline,
  alternates: { canonical: "/outdoor-living" },
  openGraph: { url: "/outdoor-living", title: hero.headline },
};

export default function Page() {
  return <LandingPage {...hero} />;
}
