import { processPhases } from "@/content/process";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

/**
 * How we work — five phases on a horizontal progression rail
 * (01 ─ 02 ─ 03 ─ 04 ─ 05); stacks vertically on smaller screens.
 */
export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-paper">
      <Container className="py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionLabel>How we work</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-[15px] text-muted">
              Five phases, each ending in something you can see, test, and
              sign off on — no chaos, no mystery, no disappearing after launch.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          {processPhases.map((phase, index) => (
            <li key={phase.number} className="relative lg:px-4 lg:first:pl-0 lg:last:pr-0">
              <Reveal delay={Math.min(index, 4) * 80}>
                {/* Rail node */}
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface font-mono text-xs font-semibold text-accent"
                  >
                    {phase.number}
                  </span>
                  {index < processPhases.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-line lg:block"
                    />
                  )}
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                  {phase.title}
                </h3>
                <p className="mt-2.5 pr-2 text-sm leading-relaxed text-muted">
                  {phase.description}
                </p>
                <p className="mt-3.5 pr-2 font-mono text-xs leading-relaxed text-accent">
                  → {phase.outcome}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
