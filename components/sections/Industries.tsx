import { industries } from "@/content/industries";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import IndustryVisual from "@/components/visuals/IndustryVisual";

/**
 * Industries — a row of full-height visual columns that expand on
 * hover/focus to reveal their description. Stacks into rows on mobile.
 */
export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 border-t border-line">
      <Container className="py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionLabel>Industries</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-[15px] text-muted">
              Technology shaped around the realities of your business —
              its regulations, workflows, and customers.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <ul className="mt-12 flex flex-col gap-3 lg:h-[34rem] lg:flex-row">
            {industries.map((industry) => (
              <li
                key={industry.id}
                className="group relative min-h-44 flex-1 overflow-hidden rounded-lg transition-[flex-grow] duration-500 ease-out lg:hover:grow-[2.4] lg:focus-within:grow-[2.4] motion-reduce:transition-none"
              >
                <a
                  href="#contact"
                  aria-label={`${industry.name} — ${industry.description}`}
                  className="absolute inset-0 flex flex-col justify-end"
                >
                  <IndustryVisual
                    visual={industry.visual}
                    dark
                    className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,16,20,0.88)_0%,rgba(16,16,20,0.2)_50%,transparent_75%)]"
                  />
                  <div className="relative p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                      {industry.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-32 lg:group-hover:opacity-100 lg:group-focus-within:max-h-32 lg:group-focus-within:opacity-100">
                      {industry.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#b9b9ff] lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-8 lg:group-hover:opacity-100 lg:group-focus-within:max-h-8 lg:group-focus-within:opacity-100">
                      Explore solutions
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
