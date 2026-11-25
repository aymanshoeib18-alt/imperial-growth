import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import ApplyButton from "./ApplyButton";
import PhoneDemo from "./PhoneDemo";
import Sixty from "./Sixty";
import StickyCta from "./StickyCta";
import type { HeroProps } from "@/lib/heroes";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const timeline = [
  {
    time: "9:02 AM",
    text: "Homeowner submits a request on a lead site, which sends it to 4 companies.",
  },
  { time: "9:03 AM", text: "The first company calls and books the estimate.", win: true },
  { time: "11:40 AM", text: "Company 2 calls back.", quote: true },
  { time: "2:15 PM", text: "Company 3 calls back.", quote: true },
  { time: "Next day", text: "Company 4 calls back.", quote: true },
];

const steps = [
  {
    icon: "megaphone",
    title: "We build and run your ads.",
    body: "Meta ads aimed at your service area, using 1–2 short videos you film from our script.",
  },
  {
    icon: "bolt",
    title: "Every lead hears from us in 60 seconds.",
    body: "An instant text and email, then a call, booking them straight onto your calendar.",
  },
  {
    icon: "calendar",
    title: "You show up and close.",
    body: "You get an alert the moment someone books, and reminders go out before every appointment.",
  },
] as const;

const included = [
  "Ad strategy, setup and weekly optimization",
  "Scripts, shot lists and fresh ad creative every 2–3 weeks",
  "A lead follow-up system: instant reply, booking calendar, reminders, no-reply follow-ups",
  "A simple pipeline showing every lead from new to won",
  "A weekly results snapshot and a monthly strategy call",
  "Optional: our team calls and books your leads for you",
];

const comparison = [
  { row: "Who else gets the lead", them: "Several other companies", us: "Only you" },
  { row: "Who follows up", them: "You, when you can", us: "Us, within 60 seconds" },
  { row: "What you get", them: "A name and a phone number", us: "A booked appointment" },
  { row: "Where your ad money goes", them: "Their platform", us: "Your own Meta account" },
];

const fit = [
  "Run a US window & door, outdoor living or ceramic coating/PPF company",
  "Do $20K+ a month in revenue",
  "Can take on more jobs and show up to appointments fast",
];

const faqs = [
  {
    q: "Do I have to be on camera?",
    a: "Just 1–2 short videos. We send the script and a shot list, and a phone is enough.",
  },
  {
    q: "Who pays for the ads?",
    a: "You pay Meta directly on your own card. We never hold your ad money.",
  },
  { q: "How fast can we launch?", a: "About two weeks from the day you're onboarded." },
  {
    q: "What does it cost?",
    a: "It depends on your market and the plan. We'll go over it on the call.",
  },
  { q: "Do I need a CRM?", a: "No. We set up the follow-up system for you." },
];

/** Founder photos: drop files at these paths and they replace the placeholders. */
const founders = [
  { name: "Ayman", photo: "/founders/ayman.jpg" },
  { name: "Omar", photo: "/founders/omar.jpg" },
].map((f) => ({
  ...f,
  exists: fs.existsSync(path.join(process.cwd(), "public", f.photo)),
}));

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

const WRAP = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const PAD = "py-14 sm:py-20";

/** Wraps the first match of `word` in <em> for the italic serif accent. */
function withAccent(text: string, word?: string) {
  if (!word) return text;
  const i = text.search(new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <em>{text.slice(i, i + word.length)}</em>
      {text.slice(i + word.length)}
    </>
  );
}

function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-[11px] font-medium tracking-[0.16em] uppercase sm:text-xs ${
        dark ? "text-mute-dark" : "text-mute"
      }`}
    >
      {children}
    </p>
  );
}

function H2({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={`${id}-heading`}
      className={`mt-4 max-w-3xl font-serif text-[2.5rem] leading-[1.02] font-medium tracking-[-0.02em] text-balance sm:text-[3.5rem] lg:text-[4rem] ${className}`}
    >
      {children}
    </h2>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`h-4 w-4 shrink-0 ${className}`}>
      <path d="M2.5 8.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`h-3.5 w-3.5 shrink-0 ${className}`}>
      <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function StepIcon({ name }: { name: (typeof steps)[number]["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8">
      {name === "megaphone" && (
        <>
          <path {...common} d="M5 13v6h4l11 6V7L9 13H5z" />
          <path {...common} d="M9 19l2 7h3l-1.5-6" />
          <path {...common} d="M24 12.5a5 5 0 010 7" />
        </>
      )}
      {name === "bolt" && <path {...common} d="M18 3L7 18h8l-1 11 11-15h-8l1-11z" />}
      {name === "calendar" && (
        <>
          <rect {...common} x="5" y="7" width="22" height="20" rx="1.5" />
          <path {...common} d="M5 13h22M11 4v6M21 4v6" />
          <path {...common} d="M11.5 20l3 3 6-6.5" />
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function LandingPage({ eyebrow, headline, accent, demo }: HeroProps) {
  const lines = headline.split(/(?<=[.!?])\s+/);

  return (
    <>
      {/* Header floats over the hero, so the two read as one black surface. */}
      <Header overlay />
      <main id="main">
        {/* 1. Hero: black, split, live demo */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="grain bg-ink pt-16 text-paper sm:pt-20 lg:flex lg:min-h-svh lg:items-center"
        >
          <div
            className={`${WRAP} grid items-center gap-14 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:py-16`}
          >
            <div>
              <p className="hero-follow max-w-md text-[11px] font-medium tracking-[0.16em] text-mute-dark uppercase sm:text-xs [--i:-2]">
                {eyebrow}
              </p>
              <h1
                id="hero-heading"
                className={`mt-6 font-serif leading-[1.0] font-medium tracking-[-0.02em] text-balance ${
                  headline.length > 60
                    ? "text-[clamp(2.5rem,6vw,4.75rem)]"
                    : "text-[clamp(2.75rem,7.4vw,6rem)]"
                }`}
              >
                {lines.map((line, i) => (
                  <span
                    key={i}
                    className="hero-line"
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    {withAccent(line, accent)}{" "}
                  </span>
                ))}
              </h1>
              <p
                className="hero-follow mt-7 max-w-xl text-[17px] leading-relaxed text-pretty text-paper sm:text-lg"
                style={{ "--i": lines.length } as React.CSSProperties}
              >
                We run your Meta ads and reply to every new lead within 60 seconds, so you&apos;re
                the first company they talk to. You show up and close.
              </p>
              <div
                className="hero-follow mt-9"
                style={{ "--i": lines.length + 1 } as React.CSSProperties}
              >
                <ApplyButton variant="light" />
                <p className="mt-4 text-[13px] text-mute-dark">
                  Takes about a minute. US companies only.
                </p>
              </div>
            </div>
            <div
              className="hero-follow max-lg:mx-auto max-lg:w-[78%] max-lg:max-w-[280px]"
              style={{ "--i": lines.length + 2 } as React.CSSProperties}
            >
              <PhoneDemo script={demo} />
            </div>
          </div>
        </section>

        {/* 2. Problem: the race, with the 60 behind it */}
        <section
          aria-labelledby="problem-heading"
          className="relative overflow-hidden bg-off"
        >
          <Sixty
            label={false}
            className="absolute -top-6 -right-16 w-[22rem] text-ink/[0.09] sm:-right-10 sm:w-[34rem] lg:right-0 lg:w-[44rem]"
          />
          <div className={`${WRAP} ${PAD} relative`}>
            <div data-reveal>
              <Label>The problem</Label>
              <H2 id="problem">
                You don&apos;t have a lead problem. You have a <em>speed</em> problem.
              </H2>
            </div>

            <figure data-reveal className="mt-12 sm:mt-16" style={{ "--i": 1 } as React.CSSProperties}>
              <figcaption className="flex items-baseline gap-3">
                <span className="text-sm font-semibold">A typical shared lead</span>
                <span className="text-[11px] tracking-[0.16em] text-mute uppercase">
                  Illustrative
                </span>
              </figcaption>

              <ol className="relative mt-8 grid gap-0 md:grid-cols-5 md:gap-4">
                {/* the line */}
                <span
                  aria-hidden="true"
                  className="absolute top-2 bottom-2 left-[5px] w-px bg-ink/20 md:top-[5px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto"
                />
                {timeline.map((t) => (
                  <li key={t.time} className="relative pb-8 pl-8 md:pb-0 md:pl-0">
                    <span
                      aria-hidden="true"
                      className={`absolute top-1 left-0 block rounded-full md:static ${
                        t.win
                          ? "h-[11px] w-[11px] bg-ink ring-4 ring-ink/15"
                          : "h-[11px] w-[11px] border border-ink/40 bg-off"
                      }`}
                    />
                    <div
                      className={`md:mt-6 ${
                        t.win ? "bg-ink p-4 text-paper md:-mx-1 md:-mt-0 md:translate-y-4" : ""
                      }`}
                    >
                      <p
                        className={`font-serif text-2xl leading-none font-medium ${
                          t.win ? "" : "text-ink"
                        }`}
                      >
                        {t.time}
                      </p>
                      <p className={`mt-3 text-[15px] leading-snug ${t.win ? "" : "text-ink"}`}>
                        {t.text}
                      </p>
                      {t.win && (
                        <p className="mt-3 text-[11px] tracking-[0.16em] text-mute-dark uppercase">
                          Wins the job
                        </p>
                      )}
                      {t.quote && (
                        <p className="mt-2 font-serif text-lg text-ink/70 italic">
                          &ldquo;We already booked someone.&rdquo;
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </figure>
          </div>
        </section>

        {/* 3. How it works + what's included */}
        <section aria-labelledby="how-heading" className="bg-paper">
          <div className={`${WRAP} ${PAD}`}>
            <div data-reveal>
              <Label>How it works</Label>
              <H2 id="how">
                Three steps. You only handle the <em>last</em> one.
              </H2>
            </div>

            <ol className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-3 md:gap-5">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  data-reveal
                  style={{ "--i": i } as React.CSSProperties}
                  className="card relative flex flex-col overflow-hidden border border-line bg-paper p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <StepIcon name={s.icon} />
                    <span className="font-serif text-lg text-mute">0{i + 1}</span>
                  </div>
                  {/* Equal-height visual area keeps titles aligned; step 2 carries the 60. */}
                  <div className={`flex items-end ${i === 1 ? "h-36" : "h-6 md:h-36"}`}>
                    {i === 1 && (
                      <Sixty className="w-44 text-ink" labelClassName="-mt-3 text-mute" />
                    )}
                  </div>
                  <h3 className="mt-6 font-serif text-[1.65rem] leading-tight font-medium">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-ink">{s.body}</p>
                </li>
              ))}
            </ol>

            <div
              data-reveal
              className="mt-12 grid gap-8 border-t border-line pt-10 sm:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
            >
              <h3 className="font-serif text-3xl leading-tight font-medium tracking-[-0.01em] text-balance sm:text-4xl">
                Everything between the ad and the appointment.
              </h3>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-line py-4 text-[16px] leading-snug sm:text-[17px]"
                  >
                    <CheckIcon className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Comparison (dark) */}
        <section aria-labelledby="compare-heading" className="grain bg-ink text-paper">
          <div className={`${WRAP} ${PAD}`}>
            <div data-reveal>
              <Label dark>Comparison</Label>
              <H2 id="compare">
                Us <em>vs.</em> lead marketplaces
              </H2>
            </div>

            <table className="mt-12 hidden w-full border-collapse text-left md:table">
              <thead>
                <tr className="border-b border-line-dark">
                  <td className="w-[28%] pb-5" />
                  <th
                    scope="col"
                    className="w-[36%] pb-5 text-xs font-medium tracking-[0.16em] text-mute-dark uppercase"
                  >
                    Lead marketplaces
                  </th>
                  <th scope="col" className="w-[36%] pb-5 text-xs font-medium tracking-[0.16em] uppercase">
                    Imperial Growth
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr
                    key={c.row}
                    data-reveal
                    style={{ "--i": i + 1 } as React.CSSProperties}
                    className="border-b border-line-dark"
                  >
                    <th scope="row" className="py-6 pr-6 align-middle text-[15px] font-normal text-mute-dark">
                      {c.row}
                    </th>
                    <td className="py-6 pr-6 align-middle text-[17px]">
                      <span className="flex items-center gap-3 text-white/75">
                        <XIcon className="text-mute-dark" />
                        {c.them}
                      </span>
                    </td>
                    <td className="py-6 align-middle font-serif text-[1.65rem] leading-snug font-semibold">
                      <span className="flex items-center gap-3">
                        <CheckIcon />
                        {c.us}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <dl className="mt-10 md:hidden">
              {comparison.map((c, i) => (
                <div
                  key={c.row}
                  data-reveal
                  style={{ "--i": i } as React.CSSProperties}
                  className="border-t border-line-dark py-5"
                >
                  <dt className="text-[11px] font-medium tracking-[0.16em] text-mute-dark uppercase">
                    {c.row}
                  </dt>
                  <dd className="mt-3 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] tracking-[0.14em] text-mute-dark uppercase">
                        Marketplaces
                      </p>
                      <p className="mt-1.5 flex gap-2 text-[15px] leading-snug text-white/75">
                        <XIcon className="mt-1 text-mute-dark" />
                        {c.them}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.14em] uppercase">Imperial Growth</p>
                      <p className="mt-1.5 flex gap-2 font-serif text-xl leading-snug font-semibold">
                        <CheckIcon className="mt-1" />
                        {c.us}
                      </p>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 5. Who it's for */}
        <section aria-labelledby="fit-heading" className="bg-off">
          <div className={`${WRAP} ${PAD}`}>
            <div data-reveal>
              <Label>The fit</Label>
              <H2 id="fit">
                Who it&apos;s <em>for</em>
              </H2>
            </div>
            <div className="mt-10 grid gap-10 sm:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-14">
              <div data-reveal>
                <h3 className="border-b border-ink pb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                  A fit if you:
                </h3>
                <ul>
                  {fit.map((f) => (
                    <li key={f} className="flex gap-3 border-b border-line py-4 text-[17px] leading-snug">
                      <CheckIcon className="mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-reveal style={{ "--i": 1 } as React.CSSProperties}>
                <h3 className="border-b border-ink pb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                  Not a fit if you:
                </h3>
                <p className="flex gap-3 py-4 text-[17px] leading-snug">
                  <XIcon className="mt-1 text-mute" />
                  <span>Run a handyman, mobile detailing, body shop or car wash business.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Who's behind it */}
        <section aria-labelledby="founders-heading" className="bg-paper">
          <div className={`${WRAP} ${PAD} grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14`}>
            <div data-reveal>
              <Label>Who&apos;s behind it</Label>
              <h2
                id="founders-heading"
                className="mt-4 max-w-md font-serif text-3xl leading-[1.1] font-medium tracking-[-0.01em] text-balance sm:text-[2.6rem]"
              >
                We build the ads and the follow-up ourselves, and we <em>answer</em> your calls.
              </h2>
            </div>
            <ul data-reveal className="grid grid-cols-2 gap-4 sm:gap-5" style={{ "--i": 1 } as React.CSSProperties}>
              {founders.map((f) => (
                <li key={f.name}>
                  <div className="relative aspect-square overflow-hidden bg-[#e6e6e3]">
                    {f.exists ? (
                      <Image
                        src={f.photo}
                        alt={f.name}
                        fill
                        sizes="(min-width: 768px) 280px, 45vw"
                        className="object-cover grayscale"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center font-serif text-6xl text-ink/25"
                      >
                        {f.name[0]}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-[15px] font-semibold">{f.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. FAQ */}
        <section aria-labelledby="faq-heading" className="bg-off">
          <div className={`${WRAP} ${PAD} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
            <div data-reveal>
              <Label>FAQ</Label>
              <H2 id="faq">
                Frequently asked <em>questions</em>
              </H2>
            </div>
            <div data-reveal className="border-b border-line" style={{ "--i": 1 } as React.CSSProperties}>
              {faqs.map((f) => (
                <details key={f.q} className="group border-t border-line">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[17px] font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                    <h3>{f.q}</h3>
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0">
                      <path d="M1 8h14" stroke="currentColor" strokeWidth="1.25" />
                      <path
                        className="faq-icon-v origin-center transition-transform duration-200"
                        d="M8 1v14"
                        stroke="currentColor"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </summary>
                  <p className="max-w-xl pb-6 text-[17px] leading-relaxed text-ink">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 8. Final CTA + footer (sticky bar hides while these are on screen) */}
      <div id="page-end">
        <section aria-labelledby="cta-heading" className="grain bg-ink text-paper">
          <div className={`${WRAP} py-20 text-center sm:py-28`}>
            <h2
              id="cta-heading"
              data-reveal
              className="mx-auto max-w-4xl font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.0] font-medium tracking-[-0.02em] text-balance"
            >
              See if your company <em>qualifies.</em>
            </h2>
            <p data-reveal className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-pretty sm:text-lg" style={{ "--i": 1 } as React.CSSProperties}>
              Answer a few quick questions, then pick a time for a 20-minute call.
            </p>
            <div data-reveal className="mt-10" style={{ "--i": 2 } as React.CSSProperties}>
              <ApplyButton variant="light" />
              <p className="mt-4 text-[13px] text-mute-dark">Takes about a minute. US companies only.</p>
            </div>
          </div>
        </section>
        <Footer stickyPad divider />
      </div>

      <StickyCta heroId="hero" endId="page-end" />
    </>
  );
}
