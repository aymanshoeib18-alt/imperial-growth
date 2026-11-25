import type { DemoScript } from "@/components/PhoneDemo";

export type HeroProps = {
  eyebrow: string;
  headline: string;
  /** One word in the headline set in italic serif as the accent. */
  accent: string;
  demo: DemoScript;
};

const windowDemo: DemoScript = {
  service: "Window replacement",
  lead: "Sarah M.",
  message:
    "Hi Sarah, it's Mike from Summit Windows. Saw your request. Got 2 minutes for a quick call?",
  reply: "Yes, call me now.",
  booked: "In-home estimate · Thu 10:00 AM",
};

export const HEROES = {
  main: {
    eyebrow: "For window & door, outdoor living and ceramic coating companies",
    headline: "Booked appointments on your calendar. Not shared leads.",
    accent: "shared",
    demo: windowDemo,
  },
  windowDoor: {
    eyebrow: "For window & door company owners",
    headline: "Booked in-home estimates. Not shared leads.",
    accent: "shared",
    demo: windowDemo,
  },
  outdoorLiving: {
    eyebrow: "For deck, patio & pergola builders",
    headline: "Your spring schedule is being booked right now. Make sure it's with you.",
    accent: "you",
    demo: {
      service: "Deck & patio quote",
      lead: "Jenna R.",
      message:
        "Hi Jenna, it's Dave from Cedar Outdoor Co. Saw your request. Got 2 minutes for a quick call?",
      reply: "Yes, call me now.",
      booked: "On-site quote · Sat 9:30 AM",
    },
  },
  ppf: {
    eyebrow: "For ceramic coating & PPF installers",
    headline: "Booked installs from local car owners. Not price shoppers from a lead site.",
    accent: "local",
    demo: {
      service: "Ceramic coating · 2024 Model Y",
      lead: "Chris T.",
      message:
        "Hi Chris, it's Alex from Northside Coatings. Saw your request for the Model Y. Got 2 minutes for a quick call?",
      reply: "Yes, call me now.",
      booked: "Install consult · Tue 2:00 PM",
    },
  },
} satisfies Record<string, HeroProps>;
