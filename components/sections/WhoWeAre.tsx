import { company } from "@/content/company";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function WhoWeAre() {
  const { whoWeAre } = company;

  return (
    <section id="who-we-are" className="scroll-mt-24 border-b border-line">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionLabel>Who we are</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-[clamp(1.5rem,2.8vw,2.3rem)] leading-[1.25] font-semibold tracking-tight text-ink">
              Most software is built to be shipped. Ours is built to be{" "}
              <span className="accent-word text-accent">kept</span>.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-relaxed text-muted md:text-base">
              {whoWeAre.supporting}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeAre.principles.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 80}>
              <div className="border-t-2 border-line pt-5 transition-colors duration-300 hover:border-accent">
                <p className="font-mono text-xs text-accent">{principle.number}</p>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
