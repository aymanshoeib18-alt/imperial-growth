import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { GENERAL_HERO } from "@/lib/heroes";

const hero = GENERAL_HERO;

export const metadata: Metadata = {
  title: "Window & Door Companies",
  description: hero.headline,
  alternates: { canonical: "/window-door" },
  openGraph: { url: "/window-door", title: hero.headline },
};

export default function Page() {
  return <LandingPage {...hero} />;
}
