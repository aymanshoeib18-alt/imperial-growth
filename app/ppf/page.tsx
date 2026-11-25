import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { HEROES } from "@/lib/heroes";

const hero = HEROES.ppf;

export const metadata: Metadata = {
  title: "Ceramic Coating & PPF Installers",
  description: hero.headline,
  alternates: { canonical: "/ppf" },
  openGraph: { url: "/ppf", title: hero.headline },
};

export default function Page() {
  return <LandingPage {...hero} />;
}
