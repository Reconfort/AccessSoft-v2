"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export type StickyScrollItem = {
  title: string;
  description: string;
  content?: React.ReactNode;
};

type StickyScrollProps = {
  content: StickyScrollItem[];
  /** className for the panel that sticks while the copy scrolls past. */
  contentClassName?: string;
  className?: string;
};

/**
 * Sticky scroll reveal driven by the page scroll — no nested scroll
 * container. The copy column scrolls with the document while the panel
 * sticks below the header and cross-fades as each item becomes active.
 */
export const StickyScroll = ({
  content,
  contentClassName,
  className,
}: StickyScrollProps) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Spread breakpoints across the full 0–1 range so the last item
    // becomes active before the section has completely scrolled past.
    const divisor = Math.max(cardLength - 1, 1);
    const cardsBreakpoints = content.map((_, index) => index / divisor);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative grid gap-x-16 lg:grid-cols-2 xl:gap-x-24",
        className,
      )}
    >
      {/* Copy column */}
      <div className="lg:py-[18vh]">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className="py-10 first:pt-0 last:pb-0 md:py-14"
          >
            <motion.h3
              initial={false}
              animate={{ opacity: activeCard === index ? 1 : 0.28 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-semibold tracking-tight text-ink md:text-3xl"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={false}
              animate={{ opacity: activeCard === index ? 1 : 0.28 }}
              transition={{ duration: 0.4 }}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-muted md:text-base"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Sticky panel — cross-fades between items */}
      <div className="hidden lg:block">
        <div
          className={cn(
            "sticky top-28 aspect-[4/3] w-full overflow-hidden",
            contentClassName,
          )}
        >
          {content.map((item, index) => (
            <div
              key={item.title + index}
              aria-hidden={activeCard !== index}
              className={cn(
                "absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none",
                activeCard === index ? "opacity-100" : "opacity-0",
              )}
            >
              {item.content ?? null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
