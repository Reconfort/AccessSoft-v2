import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import { mainNav } from "@/content/navigation";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Page not found — AccessSoft",
  description:
    "The page you were looking for doesn’t exist. Explore AccessSoft’s services, work, and process, or start a conversation.",
  robots: { index: false, follow: true },
};

/**
 * 404 — keeps the visitor inside the funnel: acknowledge, then route
 * them to the sections that matter and to the contact CTA.
 */
export default function NotFound() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-100 bg-accent px-5 py-3 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />

      <main id="main" className="flex flex-1 items-center">
        <Container className="py-28 md:py-36">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="label-mono text-accent">Error 404</p>

              <p
                aria-hidden="true"
                className="mt-6 text-[clamp(5rem,18vw,12rem)] leading-[0.85] font-semibold tracking-tight text-ink"
              >
                4<span className="text-accent">0</span>4
              </p>

              <h1 className="mt-10 max-w-xl text-h2 font-semibold tracking-tight text-ink">
                This page doesn’t exist.
              </h1>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted md:text-base">
                The link may be out of date, or the page may have moved. Everything
                we do is one click away — or tell us what you were looking for.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/" size="lg">
                  Back to home
                </Button>
                <Button href="/#contact" variant="secondary" size="lg">
                  Start a project
                </Button>
              </div>
            </div>

            {/* Section shortcuts */}
            <nav
              aria-label="Site sections"
              className="lg:col-span-4 lg:col-start-9"
            >
              <p className="label-mono text-muted">Explore</p>
              <ul className="mt-6 border-t border-line">
                {mainNav.map((item) => (
                  <li key={item.href} className="border-b border-line">
                    <a
                      href={`/${item.href}`}
                      className="group flex items-center justify-between gap-4 py-4 text-lg font-medium text-ink transition-colors duration-300 hover:text-accent"
                    >
                      {item.label}
                      <ArrowUpRight className="size-4 text-muted transition-[transform,color] duration-300 group-hover:text-accent motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[15px] leading-relaxed text-muted">
                Still stuck? Email us at{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-300 hover:text-accent"
                >
                  {company.email}
                </a>
                .
              </p>
            </nav>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
