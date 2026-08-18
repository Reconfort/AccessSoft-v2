"use client";

import {
  useCallback,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import Image from "next/image";
import { company } from "@/content/company";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { FlipWords } from "@/components/ui/flip-words";

const SWIPE_THRESHOLD_PX = 48;

export default function HeroSlider() {
  const slides = company.hero.slides;
  const [active, setActive] = useState(0);
  const pointerStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  const step = useCallback((direction: -1 | 1) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  }, [slides.length]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    step(delta < 0 ? 1 : -1);
  };

  const onPointerCancel = () => {
    pointerStartX.current = null;
  };

  return (
    <section
      id="top"
      data-theme="dark"
      aria-roledescription="carousel"
      aria-label="AccessSoft introduction"
      className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden bg-black font-sans text-paper"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ease-[var(--ease-soft)] motion-reduce:transition-none ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
      </div>

      <Container className="relative pt-28 md:pt-30">
        <h1 className="sr-only">
          AccessSoft — we design products that ambitious businesses keep.
        </h1>

        <p className="flex items-center gap-2.5 text-[0.72rem] tracking-[0.10em] text-faint uppercase">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-[#8f8fff]" />
          {company.hero.eyebrow}
        </p>
      </Container>

      {/*
        Swipe surface only — not focusable, so no full-width focus ring
        appears across the hero. Keyboard users drive the carousel with
        the arrow keys on the slide dots below.
      */}
      <div
        className="relative mt-8 [--slide-w:100%]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 xl:px-20">
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={`${active + 1} of ${slides.length}`}
          >
            <p className="max-w-4xl text-hero font-semibold text-paper">
              {company.hero.headlineBefore}{" "}
              <FlipWords
                words={[...company.hero.flipWords]}
                duration={3000}
                index={active}
                onIndexChange={setActive}
                className="text-[#b9b9ff]"
              />
              {company.hero.headlineAfter}
            </p>
            <p className="mt-5 max-w-xl text-lead text-faint">
              {slides[active].supporting}
            </p>
          </div>
        </div>
      </div>

      <Container className="relative pb-12">
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={company.hero.primaryCta.href} size="lg">
            {company.hero.primaryCta.label}
          </Button>
          <Button href={company.hero.secondaryCta.href} variant="inverse" size="lg">
            {company.hero.secondaryCta.label}
          </Button>
        </div>

        <div
          className="mt-8 flex items-center gap-3"
          role="tablist"
          aria-label="Hero slides"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              step(1);
            } else if (event.key === "ArrowLeft") {
              event.preventDefault();
              step(-1);
            }
          }}
        >
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
