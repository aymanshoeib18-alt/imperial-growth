import Logo from "./Logo";
import ApplyButton from "./ApplyButton";

/**
 * `overlay` = transparent and absolutely positioned over the black hero, so
 * header and hero are one continuous surface (one grain layer, no seam).
 */
export default function Header({
  showCta = true,
  overlay = false,
}: {
  showCta?: boolean;
  overlay?: boolean;
}) {
  return (
    <header
      className={
        overlay ? "absolute inset-x-0 top-0 z-20 text-paper" : "grain bg-ink text-paper"
      }
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Logo priority />
        {showCta && <ApplyButton variant="light" size="small" />}
      </div>
    </header>
  );
}
