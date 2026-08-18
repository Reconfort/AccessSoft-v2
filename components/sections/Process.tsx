import Image from "next/image";
import { processPhases } from "@/content/process";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

/**
 * How we work — five phases revealed on page scroll. The sticky panel
 * tracks the active phase, showing its photograph and the deliverable
 * the phase ends in.
 */
export default function Process() {
  const content = processPhases.map((phase, index) => ({
    title: `${phase.number} — ${phase.title}`,
    description: phase.description,
    content: (
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={phase.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 0px, 45vw"
          priority={index === 0}
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,14,0.9)_0%,rgba(8,8,14,0.3)_55%,rgba(8,8,14,0.1)_100%)]"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          <span className="text-5xl font-semibold tracking-tight text-white">
            {phase.number}
          </span>
          <div>
            <p className="label-mono text-white/60">Ends in</p>
            <p className="mt-2 text-xl leading-snug font-medium text-white">
              {phase.outcome}
            </p>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section id="process" className="scroll-mt-24 bg-surface">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionLabel supporting="Five phases, each ending in something you can see, test, and sign off on — no chaos, no mystery, no disappearing after launch.">
            How we work
          </SectionLabel>
        </Reveal>

        <StickyScroll content={content} className="mt-16" />
      </Container>
    </section>
  );
}
