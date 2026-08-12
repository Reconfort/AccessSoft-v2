"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav } from "@/content/navigation";
import { company } from "@/content/company";
import Container from "./Container";
import Button from "@/components/ui/Button";
import Wordmark from "@/components/ui/Wordmark";

/**
 * Sticky site header. Client component only because of scroll state
 * and the mobile menu — the rest of the page stays server-rendered.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback((refocus = true) => {
    setMenuOpen(false);
    if (refocus) menuButtonRef.current?.focus();
  }, []);

  /* Scroll lock + Escape + initial focus while the mobile menu is open. */
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled && !menuOpen ? "shadow-[0_1px_12px_rgba(16,16,20,0.06)]" : ""
      }`}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          <a
            href="#top"
            aria-label="AccessSoft — back to top"
            onClick={() => closeMenu(false)}
            className="shrink-0"
          >
            <Wordmark />
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[15px] font-medium text-muted transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact">Start a project</Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            className="relative flex size-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span
              aria-hidden="true"
              className={`absolute h-px w-4.5 bg-ink transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-px w-4.5 bg-ink transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>
        </div>
      </Container>

      {/* Mobile navigation panel */}
      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!menuOpen}
        className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-surface lg:hidden"
      >
        <Container className="flex min-h-full flex-col justify-between pt-10 pb-12">
          <nav aria-label="Mobile">
            <ul className="space-y-2 border-t border-line">
              {mainNav.map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => closeMenu(false)}
                    className="group flex items-baseline gap-4 py-4 text-3xl font-semibold tracking-tight text-ink"
                  >
                    <span className="label-mono text-accent">
                      0{index + 1}
                    </span>
                    <span className="transition-colors duration-300 group-hover:text-accent">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 space-y-6">
            <Button href="#contact" size="lg" className="w-full">
              Start a project
            </Button>
            <p className="label-mono text-muted">
              {company.email} · {company.timezone}
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
}
