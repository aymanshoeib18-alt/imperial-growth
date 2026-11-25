import LandingPage from "@/components/LandingPage";
import { HEROES } from "@/lib/heroes";

export default function Home() {
  return <LandingPage {...HEROES.main} />;
}
