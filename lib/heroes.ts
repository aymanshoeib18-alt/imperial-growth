import type { DemoScript } from "@/components/PhoneDemo";

export type HeroProps = {
  eyebrow: string;
  headline: string;
  /** One word in the headline set in italic serif as the accent. */
  accent: string;
  demo: DemoScript;
};

/**
 * One general hero for every route while the three niche ad sets are tested.
 * /window-door, /outdoor-living and /ppf still exist (so ads can point at
 * them and stay separately measurable) but show this same page. To give a
 * niche its own hero later, add an entry here and use it in that route.
 *
 * Headline: clarity first, the differentiator (exclusive leads) stated
 * plainly, aimed at the pain the buyer already feels (shared lead sites).
 * Keep the Meta ad copy matching it word for word.
 */
export const GENERAL_HERO: HeroProps = {
  eyebrow: "Meta ads + lead system for local service businesses",
  headline: "Stop paying for leads your competitors already called.",
  accent: "already",
  demo: {
    lead: "Sarah M.",
    service: "Estimate request",
    booked: "Thu 10:00 AM",
  },
};
