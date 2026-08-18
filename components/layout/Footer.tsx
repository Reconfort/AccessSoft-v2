import { footerNav } from "@/content/navigation";
import { company } from "@/content/company";
import Container from "./Container";
import Wordmark from "@/components/ui/Wordmark";

/** Slim corporate footer — brand, inline sitemap, legal line. */
export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper text-ink">
      <Container className="py-12 md:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a href="#top" aria-label="AccessSoft — back to top">
              <Wordmark />
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Digital product &amp; technology partner — {company.location}.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={`mailto:${company.email}`}
            className="text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            {company.email}
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AccessSoft — Kigali, Rwanda. All rights reserved.</p>
          <p className="label-mono">{company.timezone}</p>
        </div>
      </Container>
    </footer>
  );
}
