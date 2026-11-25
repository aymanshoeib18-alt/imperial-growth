import Logo from "./Logo";
import ApplyButton from "./ApplyButton";

export default function Header({ showCta = true }: { showCta?: boolean }) {
  return (
    <header className="bg-ink text-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Logo priority />
        {showCta && (
          <ApplyButton variant="light" size="small">
            See if you qualify
          </ApplyButton>
        )}
      </div>
    </header>
  );
}
