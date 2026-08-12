import { clients } from "@/content/testimonials";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

/**
 * Our customers — centered monochrome wordmark wall. Real clients only;
 * swap in logo assets via content/testimonials.ts when available.
 */
export default function Clients() {
  return (
    <section aria-label="Our customers" className="border-t border-line bg-paper">
      <Container className="py-20 md:py-24">
        <Reveal>
          <SectionLabel className="text-center">Some of our customers</SectionLabel>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-20 gap-y-8">
            {clients.map((client) => (
              <li
                key={client.name}
                className="text-2xl font-semibold tracking-tight text-faint transition-colors duration-300 hover:text-ink"
              >
                {client.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
