"use client";

import { useEffect, useState } from "react";
import ApplyButton from "./ApplyButton";

/**
 * Mobile-only bottom bar. Appears once the hero has scrolled out of view,
 * and hides again while the final CTA band is on screen.
 */
export default function StickyCta({ heroId, endId }: { heroId: string; endId: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const end = document.getElementById(endId);
    if (!hero || !("IntersectionObserver" in window)) return;
    let heroVisible = true;
    let endVisible = false;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) heroVisible = e.isIntersecting;
        if (e.target === end) endVisible = e.isIntersecting;
      }
      setShow(!heroVisible && !endVisible);
    });
    io.observe(hero);
    if (end) io.observe(end);
    return () => io.disconnect();
  }, [heroId, endId]);

  return (
    <div
      data-show={show}
      aria-hidden={!show}
      inert={!show}
      className="sticky-cta fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden"
    >
      <ApplyButton variant="light" className="h-12! w-full" />
    </div>
  );
}
