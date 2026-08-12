import { engineeringStandards } from "@/content/engineering";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function Engineering() {
  return (
    <section
      id="engineering"
      data-theme="dark"
      className="scroll-mt-24 bg-ink text-paper"
    >
      <Container className="py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionLabel dark>Engineering standards</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-[15px] text-faint">
              The discipline behind the products we build — applied to every
              codebase, every week, on every engagement.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringStandards.map((standard, index) => (
            <Reveal key={standard.title} delay={(index % 4) * 80}>
              <div className="border-t border-ink-3 pt-5 transition-colors duration-300 hover:border-[#8f8fff]">
                <h3 className="text-base font-semibold tracking-tight text-paper md:text-lg">
                  {standard.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-faint">
                  {standard.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
