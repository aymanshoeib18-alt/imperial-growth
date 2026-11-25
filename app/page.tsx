import LandingPage from "@/components/LandingPage";
import { GENERAL_HERO } from "@/lib/heroes";

export default function Home() {
  return <LandingPage {...GENERAL_HERO} />;
}
