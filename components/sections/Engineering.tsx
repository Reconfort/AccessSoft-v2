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
        <Reveal>
          <SectionLabel
            dark
            supporting="The discipline behind the products we build — applied to every codebase, every week, on every engagement."
          >
            Engineering standards
          </SectionLabel>
        </Reveal>

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
