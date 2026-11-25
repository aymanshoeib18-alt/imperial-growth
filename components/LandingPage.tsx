import Header from "./Header";
import Footer from "./Footer";
import ApplyButton from "./ApplyButton";

export type HeroProps = {
  eyebrow: string;
  headline: string;
};

export const MAIN_HERO: HeroProps = {
  eyebrow: "For window & door, outdoor living and ceramic coating companies",
  headline: "Booked appointments on your calendar. Not shared leads.",
};

const problems = [
  "Lead sites sell the same homeowner to several companies. You're racing all of them on price.",
  "The company that calls first usually gets the appointment. When you're on a job site, leads sit for hours.",
  "By the time you call back, they've already booked someone else.",
];

const steps = [
  {
    title: "We build and run your ads.",
    body: "Meta ads aimed at your service area, using 1–2 short videos you film from our script.",
  },
  {
    title: "Every lead hears from us in 60 seconds.",
    body: "An instant text and email, then a call, booking them straight onto your calendar.",
  },
  {
    title: "You show up and close.",
    body: "You get an alert the moment someone books, and reminders go out before every appointment.",
  },
];

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
  {
    q: "How fast can we launch?",
    a: "About two weeks from the day you're onboarded.",
  },
  {
    q: "What does it cost?",
    a: "It depends on your market and the plan. We'll go over it on the call.",
  },
  {
    q: "Do I need a CRM?",
    a: "No. We set up the follow-up system for you.",
  },
];

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={`border-t border-line ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">{children}</div>
    </section>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={`${id}-heading`}
      className="max-w-3xl font-serif text-[2.25rem] leading-[1.08] font-medium tracking-[-0.01em] text-balance sm:text-5xl lg:text-[3.5rem]"
    >
      {children}
    </h2>
  );
}

export default function LandingPage({ eyebrow, headline }: HeroProps) {
  return (
    <>
      <Header />
      <main id="main">
        {/* 1. Hero */}
        <section aria-labelledby="hero-heading" className="bg-paper">
          <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-28 sm:pb-32">
            <p className="max-w-xl text-[13px] font-medium tracking-[0.14em] text-mute uppercase">
              {eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="mt-6 max-w-4xl font-serif text-[2.75rem] leading-[1.02] font-medium tracking-[-0.015em] text-balance sm:text-6xl lg:text-[5.25rem]"
            >
              {headline}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty sm:text-xl">
              We run your Meta ads and reply to every new lead within 60 seconds, so
              you&apos;re the first company they talk to. You show up and close.
            </p>
            <div className="mt-10">
              <ApplyButton />
              <p className="mt-4 text-sm text-mute">
                Takes about a minute. US companies only.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Problem */}
        <Section id="problem">
          <H2 id="problem">
            You don&apos;t have a lead problem. You have a speed problem.
          </H2>
          <ol className="mt-14 grid gap-10 sm:mt-20 md:grid-cols-3 md:gap-12">
            {problems.map((p, i) => (
              <li key={i} className="border-t border-ink pt-6">
                <span aria-hidden="true" className="font-serif text-2xl text-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-lg leading-relaxed">{p}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 3. How it works */}
        <Section id="how">
          <H2 id="how">Three steps. You only handle the last one.</H2>
          <ol className="mt-14 sm:mt-20">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="grid gap-3 border-t border-line py-8 sm:grid-cols-[6rem_1fr] sm:gap-8 sm:py-10 md:grid-cols-[8rem_1fr_1fr]"
              >
                <span aria-hidden="true" className="font-serif text-4xl leading-none sm:text-5xl">
                  {i + 1}
                </span>
                <h3 className="font-serif text-2xl leading-tight font-medium sm:text-3xl">
                  {s.title}
                </h3>
                <p className="text-lg leading-relaxed text-mute sm:col-start-2 md:col-start-3">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 4. What's included */}
        <Section id="included">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <H2 id="included">Everything between the ad and the appointment.</H2>
            <ul className="border-b border-line">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex gap-5 border-t border-line py-5 text-lg leading-snug"
                >
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-ink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 5. Comparison */}
        <Section id="compare" className="bg-ink text-paper">
          <h2
            id="compare-heading"
            className="max-w-3xl font-serif text-[2.25rem] leading-[1.08] font-medium tracking-[-0.01em] text-balance sm:text-5xl lg:text-[3.5rem]"
          >
            Us vs. lead marketplaces
          </h2>

          {/* Desktop / tablet table */}
          <table className="mt-14 hidden w-full border-collapse text-left md:table">
            <thead>
              <tr className="border-b border-line-dark">
                <td className="w-1/3 pb-5" />
                <th scope="col" className="w-1/3 pb-5 text-sm font-medium tracking-[0.14em] uppercase">
                  Lead marketplaces
                </th>
                <th scope="col" className="w-1/3 pb-5 text-sm font-medium tracking-[0.14em] uppercase">
                  Imperial Growth
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((c) => (
                <tr key={c.row} className="border-b border-line-dark">
                  <th scope="row" className="py-6 pr-6 align-top text-base font-normal">
                    {c.row}
                  </th>
                  <td className="py-6 pr-6 align-top text-lg">{c.them}</td>
                  <td className="py-6 align-top font-serif text-2xl leading-snug font-semibold">
                    {c.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile: stacked rows */}
          <dl className="mt-12 md:hidden">
            {comparison.map((c) => (
              <div key={c.row} className="border-t border-line-dark py-6">
                <dt className="text-sm font-medium tracking-[0.14em] uppercase">{c.row}</dt>
                <dd className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase">Lead marketplaces</p>
                    <p className="mt-1.5 text-base leading-snug">{c.them}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase">Imperial Growth</p>
                    <p className="mt-1.5 font-serif text-xl leading-snug font-semibold">{c.us}</p>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* 6. Who it's for */}
        <Section id="fit" className="border-t-0">
          <H2 id="fit">Who it&apos;s for</H2>
          <div className="mt-14 grid gap-12 sm:mt-20 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="border-b border-ink pb-4 text-sm font-medium tracking-[0.14em] uppercase">
                A fit if you:
              </h3>
              <ul>
                {fit.map((f) => (
                  <li key={f} className="flex gap-4 border-b border-line py-5 text-lg leading-snug">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1.5 h-4 w-4 shrink-0">
                      <path d="M2 8.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="border-b border-ink pb-4 text-sm font-medium tracking-[0.14em] uppercase">
                Not a fit if you:
              </h3>
              <p className="flex gap-4 py-5 text-lg leading-snug text-mute">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1.5 h-4 w-4 shrink-0">
                  <path d="M3 3l10 10M13 3L3 13" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>Run a handyman, mobile detailing, body shop or car wash business.</span>
              </p>
            </div>
          </div>
        </Section>

        {/* 7. FAQ */}
        <Section id="faq">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <H2 id="faq">Frequently asked questions</H2>
            <div className="border-b border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group border-t border-line">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
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
                  <p className="max-w-xl pb-7 text-lg leading-relaxed text-mute">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* 8. Final CTA */}
        <section aria-labelledby="cta-heading" className="bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-32">
            <h2
              id="cta-heading"
              className="mx-auto max-w-3xl font-serif text-[2.5rem] leading-[1.05] font-medium tracking-[-0.01em] text-balance sm:text-6xl"
            >
              See if your company qualifies.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-pretty">
              Answer a few quick questions, then pick a time for a 20-minute call.
            </p>
            <div className="mt-10">
              <ApplyButton variant="light" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
