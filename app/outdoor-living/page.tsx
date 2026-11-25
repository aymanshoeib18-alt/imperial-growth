import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { HEROES } from "@/lib/heroes";

const hero = HEROES.outdoorLiving;

export const metadata: Metadata = {
  title: "Deck, Patio & Pergola Builders",
  description: hero.headline,
  alternates: { canonical: "/outdoor-living" },
  openGraph: { url: "/outdoor-living", title: hero.headline },
};

export default function Page() {
  return <LandingPage {...hero} />;
}
