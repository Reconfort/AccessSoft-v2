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

  /* Scroll lock, Escape, initial focus, and focus trap while open. */
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ??
          [],
      );

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      // Keep Tab cycling inside the panel (plus the toggle button).
      const items = [...focusables(), menuButtonRef.current].filter(
        Boolean,
      ) as HTMLElement[];
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-surface/95 backdrop-blur-md transition-shadow duration-300 ${
          menuOpen ? "border-transparent" : "border-line"
        } ${scrolled && !menuOpen ? "shadow-[0_1px_12px_rgba(16,16,20,0.06)]" : ""}`}
      >
      <Container>
        <div className="relative z-50 flex h-18 items-center justify-between gap-6">
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

          {/* Hamburger toggle — morphs into a close (×) when open */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            className="relative flex size-11 cursor-pointer items-center justify-center border border-ink/15 transition-colors duration-300 hover:border-ink/40 lg:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span
              aria-hidden="true"
              className={`absolute h-px w-4.5 bg-ink transition-transform duration-300 ease-[var(--ease-soft)] ${
                menuOpen ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-px w-4.5 bg-ink transition-[transform,opacity] duration-300 ease-[var(--ease-soft)] ${
                menuOpen ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>
          </div>
        </Container>
      </header>

      {/*
        Rendered as a sibling of <header>, not inside it: the header's
        backdrop-blur creates a containing block for fixed-position
        descendants, which would collapse this panel to the header's height.
      */}
      <div
        id="mobile-nav"
        ref={panelRef}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto overscroll-contain bg-surface transition-[opacity,transform] duration-400 ease-[var(--ease-soft)] motion-reduce:transition-none lg:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <Container className="flex min-h-full flex-col justify-between pt-8 pb-12">
          <nav aria-label="Mobile">
            <ul className="border-t border-line">
              {mainNav.map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => closeMenu(false)}
                    style={{
                      transitionDelay: menuOpen ? `${100 + index * 55}ms` : "0ms",
                    }}
                    className={`group flex items-baseline gap-4 py-5 text-3xl font-semibold text-ink transition-[opacity,transform] duration-500 ease-[var(--ease-soft)] motion-reduce:transition-none ${
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    <span className="label-mono text-accent">0{index + 1}</span>
                    <span className="transition-colors duration-300 group-hover:text-accent">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            style={{
              transitionDelay: menuOpen ? `${100 + mainNav.length * 55}ms` : "0ms",
            }}
            className={`mt-12 space-y-6 transition-[opacity,transform] duration-500 ease-[var(--ease-soft)] motion-reduce:transition-none ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <Button
              href="#contact"
              size="lg"
              className="w-full"
              onClick={() => closeMenu(false)}
            >
              Start a project
            </Button>
            <p className="label-mono text-muted">
              {company.email} · {company.timezone}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
