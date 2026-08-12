"use client";

import { useEffect, useRef } from "react";

type StatNumberProps = {
  value: number;
  suffix?: string;
  suffixClassName?: string;
  className?: string;
};

/**
 * Count-up statistic. Server-renders the final value (correct without JS
 * and for crawlers); animates from zero on first view unless the user
 * prefers reduced motion.
 */
export default function StatNumber({
  value,
  suffix = "",
  suffixClassName = "text-[#8f8fff]",
  className = "",
}: StatNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          node.textContent = String(Math.round(eased * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span className={`tabular-nums ${className}`}>
      <span ref={ref}>{value}</span>
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
}
