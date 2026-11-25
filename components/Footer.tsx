import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Logo />
        <nav aria-label="Legal" className="flex gap-6 text-sm">
          <Link href="/privacy-policy" className="underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/sms-terms" className="underline-offset-4 hover:underline">
            SMS Terms
          </Link>
        </nav>
      </div>
      <div className="border-t border-line-dark">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs sm:px-8">
          © {year} Imperial Growth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
