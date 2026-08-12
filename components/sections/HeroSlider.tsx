"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { company } from "@/content/company";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const AUTO_ADVANCE_MS = 6000;

/**
 * Full-viewport rotating hero. Auto-advances with a fade/rise transition,
 * pauses for prefers-reduced-motion, and is fully keyboard operable via
 * the slide dots. Original abstract visuals — no photography.
 */
export default function HeroSlider() {
  const slides = company.hero.slides;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const timer = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      AUTO_ADVANCE_MS,
    );
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setPaused(true); // manual choice wins over autoplay
  }, []);

  return (
    <section
      id="top"
      data-theme="dark"
      aria-roledescription="carousel"
      aria-label="AccessSoft introduction"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-ink text-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient field — one composition, shared across slides */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-[-20%] right-[-10%] size-[42rem] rounded-full bg-[radial-gradient(circle_at_40%_40%,#2b2be6_0%,transparent_62%)] opacity-40 blur-2xl" />
        <div className="absolute bottom-[-25%] left-[-12%] size-[36rem] rounded-full bg-[radial-gradient(circle_at_55%_45%,#4d2bd6_0%,transparent_60%)] opacity-25 blur-2xl" />
        <svg className="absolute inset-0 h-full w-full text-paper/8" role="presentation">
          <defs>
            <pattern id="hero-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M72 0H0V72" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <svg
          viewBox="0 0 600 600"
          className="absolute top-1/2 right-[-8rem] hidden w-[36rem] -translate-y-1/2 lg:block"
        >
          <circle cx="300" cy="300" r="210" fill="none" stroke="#8f8fff" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="150" fill="none" stroke="#8f8fff" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="3 10" />
          <circle cx="300" cy="90" r="7" fill="#2b2be6" />
          <circle cx="450" cy="300" r="5" fill="#8f8fff" />
          <circle cx="300" cy="510" r="4" fill="#8f8fff" opacity="0.6" />
        </svg>
      </div>

      <Container className="relative pt-32 pb-24 md:pt-36">
        {/* Stable page H1 for assistive tech & SEO, independent of rotation */}
        <h1 className="sr-only">
          AccessSoft — we design and engineer digital products that grow
          ambitious businesses.
        </h1>

        <p className="label-mono flex items-center gap-2.5 text-faint">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-[#8f8fff]" />
          {company.hero.eyebrow}
        </p>

        {/* Slides */}
        <div className="relative mt-8 min-h-[16rem] sm:min-h-[19rem] lg:min-h-[22rem]">
          {slides.map((slide, index) => {
            const isActive = index === active;
            return (
              <div
                key={slide.statement}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}`}
                aria-hidden={!isActive}
                className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
                  isActive
                    ? "relative opacity-100 translate-y-0"
                    : "pointer-events-none absolute inset-0 opacity-0 translate-y-4"
                }`}
              >
                <p className="max-w-5xl text-display font-semibold text-paper">
                  {slide.statement}
                  <span className="accent-word text-[#b9b9ff]"> {slide.accent}</span>
                </p>
                <p className="mt-7 max-w-xl text-lead text-faint">{slide.supporting}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={company.hero.primaryCta.href} size="lg">
            {company.hero.primaryCta.label}
          </Button>
          <Button href={company.hero.secondaryCta.href} variant="inverse" size="lg">
            {company.hero.secondaryCta.label}
          </Button>
        </div>

        {/* Slide controls */}
        <div className="mt-14 flex items-center gap-3" role="tablist" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={slide.statement}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Slide ${index + 1}: ${slide.statement}`}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === active
                  ? "w-10 bg-[#8f8fff]"
                  : "w-5 bg-paper/25 hover:bg-paper/50"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
