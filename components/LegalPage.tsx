import SimplePage from "./SimplePage";

export const LEGAL_UPDATED = "November 25, 2026";
export const LEGAL_ENTITY = "[LEGAL BUSINESS NAME]";
export const LEGAL_ADDRESS = "[BUSINESS ADDRESS]";
export const SUPPORT_EMAIL = "support@imperialgrowth.co";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <SimplePage width="wide">
      <article>
        <h1 className="font-serif text-4xl leading-tight font-medium sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-mute">Last updated: {LEGAL_UPDATED}</p>
        <div className="mt-12 space-y-5 text-base leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:border-t [&_h2]:border-line [&_h2]:pt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-medium [&_h3]:mt-6 [&_h3]:font-semibold [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </article>
    </SimplePage>
  );
}

export function Mail() {
  return <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;
}
