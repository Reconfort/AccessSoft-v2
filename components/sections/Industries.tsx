import Image from "next/image";
import { industries } from "@/content/industries";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

/**
 * Industries — a row of full-height photographic columns that expand on
 * hover/focus to reveal their description. Stacks into rows on mobile.
 */
export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-surface">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionLabel supporting="Technology shaped around the realities of your business — its regulations, workflows, and customers.">
            Industries
          </SectionLabel>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:h-[34rem] lg:flex-row">
            {industries.map((industry) => (
              <li
                key={industry.id}
                className="group relative aspect-[16/10] overflow-hidden rounded-lg transition-[flex-grow] duration-500 ease-out sm:aspect-[4/3] lg:aspect-auto lg:min-h-44 lg:flex-1 lg:hover:grow-[2.4] lg:focus-within:grow-[2.4] motion-reduce:transition-none"
              >
                <a
                  href="#contact"
                  aria-label={`${industry.name} — ${industry.description}`}
                  className="absolute inset-0 flex flex-col justify-end"
                >
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                  />
                  {/* Scrim — heavier below lg, where copy sits over busy photography */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,14,0.94)_0%,rgba(8,8,14,0.7)_45%,rgba(8,8,14,0.35)_100%)] lg:bg-[linear-gradient(to_top,rgba(8,8,14,0.75)_0%,rgba(8,8,14,0.2)_45%,rgba(8,8,14,0.08)_100%)]"
                  />
                  <div className="relative p-5 sm:p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                      {industry.name}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-sm leading-snug text-white/80 sm:leading-relaxed lg:mt-2 lg:leading-relaxed lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-32 lg:group-hover:opacity-100 lg:group-focus-within:max-h-32 lg:group-focus-within:opacity-100">
                      {industry.description}
                    </p>
                    <span className="mt-2.5 inline-flex items-center gap-2 text-sm font-medium text-white lg:mt-3 lg:text-[#b9b9ff] lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-8 lg:group-hover:opacity-100 lg:group-focus-within:max-h-8 lg:group-focus-within:opacity-100">
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
