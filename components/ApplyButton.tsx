"use client";

import Link from "next/link";
import { useClientValue } from "@/lib/useClientValue";
import { appendParams, getAttribution } from "@/lib/attribution";

type Props = {
  children?: React.ReactNode;
  variant?: "dark" | "light";
  size?: "default" | "small";
  className?: string;
};

/** The one button on the site. Always goes to /apply, carrying fbclid/UTMs. */
export default function ApplyButton({
  children = "See if you qualify",
  variant = "dark",
  size = "default",
  className = "",
}: Props) {
  const href = useClientValue(
    () => appendParams("/apply", getAttribution()),
    "/apply",
  );

  // "dark" = solid black, for light sections. "light" = solid white, for dark sections.
  const colors =
    variant === "dark"
      ? "bg-ink text-paper hover:shadow-[0_8px_24px_-12px_rgba(10,10,10,0.6)]"
      : "bg-paper text-ink hover:shadow-[0_8px_24px_-12px_rgba(255,255,255,0.35)]";
  const sizing =
    size === "small"
      ? "h-10 gap-2 px-4 text-[12px] sm:px-5 sm:text-[13px]"
      : "h-14 gap-3 px-8 text-[15px] w-full sm:w-auto";

  return (
    <Link
      href={href}
      className={`btn inline-flex items-center justify-center font-medium tracking-[0.01em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${colors} ${sizing} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="btn-arrow">
        →
      </span>
    </Link>
  );
}
