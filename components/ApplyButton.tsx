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

  const colors =
    variant === "dark"
      ? "bg-ink text-paper border-ink hover:bg-paper hover:text-ink"
      : "bg-paper text-ink border-paper hover:bg-ink hover:text-paper";
  const sizing =
    size === "small"
      ? "h-10 px-4 text-[12px] sm:px-5 sm:text-[13px]"
      : "h-14 px-8 text-[15px] w-full sm:w-auto";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border font-medium tracking-[0.02em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${colors} ${sizing} ${className}`}
    >
      {children}
    </Link>
  );
}
