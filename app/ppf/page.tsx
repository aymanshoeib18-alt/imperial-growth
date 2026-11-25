import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

const hero = {
  eyebrow: "For ceramic coating & PPF installers",
  headline: "Booked installs from local car owners. Not price shoppers from a lead site.",
};

export const metadata: Metadata = {
  title: "Ceramic Coating & PPF Installers",
  description: hero.headline,
  alternates: { canonical: "/ppf" },
  openGraph: { url: "/ppf", title: hero.headline },
};

export default function Page() {
  return <LandingPage {...hero} />;
}
