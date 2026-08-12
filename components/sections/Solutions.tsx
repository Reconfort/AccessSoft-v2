import { solutions } from "@/content/solutions";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";

export default function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 border-t border-line bg-paper">
      <Container className="py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionLabel>Solutions</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-[15px] text-muted">
              Services describe what we do — this is what changes in your
              business when we do it.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((solution, index) => (
            <Reveal key={solution.id} delay={Math.min(index, 4) * 60} className="h-full">
              <div className="group flex h-full flex-col bg-surface p-6 transition-colors duration-300 hover:bg-accent-soft/40 md:p-7">
                <p className="font-mono text-xs text-accent">{solution.number}</p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                  {solution.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {solution.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10">
            <ArrowLink href="#contact">Describe your problem to us</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
