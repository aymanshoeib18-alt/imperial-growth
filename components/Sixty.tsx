/**
 * The brand's "60": a huge outlined serif numeral with a small "seconds"
 * label. Strokes draw in the first time it scrolls into view (see .sixty in
 * globals.css; RevealObserver adds .is-in).
 */
export default function Sixty({
  className = "",
  label = true,
  labelClassName = "",
}: {
  className?: string;
  label?: boolean;
  labelClassName?: string;
}) {
  return (
    <div aria-hidden="true" className={`sixty pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 300 200" className="block h-auto w-full overflow-visible">
        <text
          x="150"
          y="168"
          textAnchor="middle"
          fontSize="220"
          fontWeight="500"
          letterSpacing="-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          60
        </text>
      </svg>
      {label && (
        <span
          className={`mt-1 block text-center text-[11px] tracking-[0.32em] uppercase ${labelClassName}`}
        >
          seconds
        </span>
      )}
    </div>
  );
}
