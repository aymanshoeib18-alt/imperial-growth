import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

/** White "IMPERIAL" wordmark on black. Swap /public/logo.png to change it. */
export default function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
    >
      <Image
        src={logo}
        alt="Imperial Growth"
        priority={priority}
        sizes="160px"
        className="h-6 w-auto sm:h-8"
      />
    </Link>
  );
}
