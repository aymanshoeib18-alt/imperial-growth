/**
 * Phone mockup (HTML/CSS only) that loops the mechanism every 8s:
 * new lead → stopwatch to 0:42 → our text → their reply → booked.
 * Animation lives in globals.css (.demo). Reduced motion shows the final state.
 * Sample names and businesses are deliberately generic, never real companies.
 */
export type DemoScript = {
  service: string;
  lead: string; // e.g. "Sarah M."
  message: string;
  reply: string;
  booked: string; // e.g. "In-home estimate · Thu 10:00 AM"
};

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5">
      <path d="M2.5 8.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export default function PhoneDemo({ script }: { script: DemoScript }) {
  const first = script.lead.split(" ")[0];
  const summary = `Demo: a new ${script.service.toLowerCase()} lead from ${script.lead} gets a text within 42 seconds, replies "${script.reply}", and is booked: ${script.booked}.`;

  return (
    <figure className="mx-auto w-full max-w-[300px] sm:max-w-[320px]">
      <div role="img" aria-label={summary} className="demo relative">
        {/* Device */}
        <div
          aria-hidden="true"
          className="relative aspect-[9/18.5] w-full rounded-[2.6rem] border border-white/20 bg-[#141414] p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.04)]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-[#f4f4f2] text-ink">
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold">
              <span>9:41</span>
              <span className="h-5 w-20 rounded-full bg-ink" />
              <span className="flex gap-1">
                <span className="h-2 w-3 rounded-[2px] bg-ink" />
                <span className="h-2 w-2 rounded-full bg-ink" />
              </span>
            </div>

            {/* Stopwatch */}
            <div
              data-step="clock"
              className="absolute top-12 right-4 z-10 flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 font-mono text-[11px] text-paper tabular-nums"
            >
              <svg viewBox="0 0 16 16" className="h-3 w-3">
                <circle cx="8" cy="9" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 9V6.5M6.5 2h3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="demo-secs" />
            </div>

            {/* Notification */}
            <div className="px-3 pt-3">
              <div
                data-step="notify"
                className="rounded-2xl bg-white/95 p-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.08em] text-ink/60 uppercase">
                  <span className="flex h-4 w-4 items-center justify-center rounded bg-ink text-[9px] text-paper">
                    I
                  </span>
                  New lead · now
                </div>
                <p className="mt-1.5 text-[13px] leading-snug font-semibold">
                  {script.service} · {script.lead}
                </p>
              </div>
            </div>

            {/* Conversation */}
            <div className="mt-8 space-y-2.5 px-3 text-[12.5px] leading-snug">
              <p className="text-center text-[10px] tracking-[0.08em] text-ink/50 uppercase">
                Text message
              </p>
              <div data-step="reply" className="ml-auto w-[84%] origin-bottom-right rounded-2xl rounded-br-md bg-ink px-3 py-2 text-paper">
                {script.message}
              </div>
              <div data-step="answer" className="w-fit max-w-[70%] origin-bottom-left rounded-2xl rounded-bl-md bg-white px-3 py-2 ring-1 ring-black/5">
                {script.reply}
              </div>
            </div>

            {/* Booking card */}
            <div className="absolute inset-x-3 bottom-4">
              <div
                data-step="booked"
                className="rounded-2xl bg-ink p-3.5 text-paper shadow-[0_16px_32px_-16px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.12em] uppercase">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-paper text-ink">
                    <Check />
                  </span>
                  Booked
                </div>
                <p className="mt-2 text-[13px] leading-snug font-semibold">{script.booked}</p>
                <p className="mt-0.5 text-[11px] text-white/60">with {first} · added to your calendar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[11px] tracking-[0.16em] text-mute-dark uppercase">
        How every lead is handled
      </figcaption>
    </figure>
  );
}
