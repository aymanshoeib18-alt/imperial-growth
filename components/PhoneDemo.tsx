/**
 * Phone mockup (HTML/CSS only) demoing the system on a 10s loop:
 * a lead from the ad lands with an instant alert → the owner calls →
 * booked → automatic reminder → won, with the pipeline bar advancing.
 * Animation lives in globals.css (.demo). Reduced motion shows the final
 * state. Sample name is deliberately generic.
 */
export type DemoScript = {
  lead: string; // e.g. "Sarah M."
  service: string; // e.g. "Estimate request"
  booked: string; // e.g. "Thu 10:00 AM"
};

const STAGES = ["New", "Called", "Booked", "Won"];

export default function PhoneDemo({ script }: { script: DemoScript }) {
  const first = script.lead.split(" ")[0];
  const activity = [
    { step: "a1", time: "9:02 AM", text: "New lead from your Meta ad" },
    { step: "a2", time: "9:03 AM", text: `You called ${first}` },
    { step: "a3", time: "9:09 AM", text: `Booked · ${script.booked}` },
    { step: "a4", time: "Wed", text: `Reminder sent to ${first} automatically` },
  ];
  const summary = `Demo of the lead system: a new lead from your Meta ad, ${script.lead}, triggers an instant alert. You call, the appointment is booked for ${script.booked}, a reminder goes out automatically, and the lead moves through your pipeline from new to won.`;

  return (
    <figure className="mx-auto w-full max-w-[300px] sm:max-w-[320px]">
      <div role="img" aria-label={summary} className="demo relative">
        <div
          aria-hidden="true"
          className="relative aspect-[9/18.5] w-full rounded-[2.6rem] border border-white/20 bg-[#141414] p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.04)]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-[#f4f4f2] text-left text-ink">
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold">
              <span>9:41</span>
              <span className="h-5 w-20 rounded-full bg-ink" />
              <span className="flex gap-1">
                <span className="h-2 w-3 rounded-[2px] bg-ink" />
                <span className="h-2 w-2 rounded-full bg-ink" />
              </span>
            </div>

            {/* Push alert to the owner */}
            <div className="absolute inset-x-3 top-10 z-10">
              <div
                data-step="notify"
                className="rounded-2xl bg-white p-3 shadow-[0_10px_28px_-12px_rgba(0,0,0,0.45)] ring-1 ring-black/5"
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.08em] text-ink/60 uppercase">
                  <span className="flex h-4 w-4 items-center justify-center rounded bg-ink text-[9px] text-paper">
                    I
                  </span>
                  New lead · now
                </div>
                <p className="mt-1.5 text-[13px] leading-snug font-semibold">
                  {script.lead} · {script.service}
                </p>
                <p className="text-[12px] text-ink/60">From your Meta ad · Tap to call</p>
              </div>
            </div>

            {/* Lead record */}
            <div className="mt-28 px-4">
              <p className="text-[10px] font-semibold tracking-[0.14em] text-ink/50 uppercase">
                Pipeline
              </p>
              <div className="mt-2 rounded-2xl bg-white p-3.5 ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-semibold">{script.lead}</p>
                    <p className="text-[11px] text-ink/60">{script.service}</p>
                  </div>
                  <span
                    data-step="won"
                    className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-paper uppercase"
                  >
                    Won
                  </span>
                </div>
                {/* Stage bar */}
                <div className="mt-3.5 h-1 w-full overflow-hidden rounded-full bg-ink/10">
                  <div data-step="bar" className="h-full w-full origin-left rounded-full bg-ink" />
                </div>
                <div className="mt-1.5 grid grid-cols-4 text-[9.5px] font-medium text-ink/55">
                  {STAGES.map((s, i) => (
                    <span key={s} className={i === 3 ? "text-right" : i > 0 ? "text-center" : ""}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <p className="mt-5 text-[10px] font-semibold tracking-[0.14em] text-ink/50 uppercase">
                Activity
              </p>
              <ol className="mt-2 space-y-2">
                {activity.map((a) => (
                  <li
                    key={a.step}
                    data-step={a.step}
                    className="flex items-start gap-2.5 rounded-xl bg-white px-3 py-2.5 ring-1 ring-black/5"
                  >
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    <span className="min-w-0">
                      <span className="block text-[12px] leading-snug font-medium">{a.text}</span>
                      <span className="block text-[10px] text-ink/50">{a.time}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[11px] tracking-[0.16em] text-mute-dark uppercase">
        How every lead is tracked · Sample
      </figcaption>
    </figure>
  );
}
