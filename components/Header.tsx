import Logo from "./Logo";
import ApplyButton from "./ApplyButton";

/**
 * `bare` = no background of its own: rendered inside the black hero so header
 * and hero are one continuous surface (one grain layer, no seam, and the
 * logo's blend mode sees the hero's black). role="banner" keeps the landmark.
 */
export default function Header({
  showCta = true,
  bare = false,
}: {
  showCta?: boolean;
  bare?: boolean;
}) {
  return (
    <header role="banner" className={bare ? "text-paper" : "grain bg-ink text-paper"}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Logo priority />
        {showCta && <ApplyButton variant="light" size="small" />}
      </div>
    </header>
  );
}
