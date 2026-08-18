import Image from "next/image";
import { services } from "@/content/services";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

/**
 * Areas of expertise — full-bleed photographic tiles with overlay titles
 * and hover zoom, arranged in a large 2/3-column showcase grid.
 */
export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionLabel>Areas of expertise</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 100}>
              <a
                href="#contact"
                aria-label={`${service.title} — start a conversation`}
                className="group relative block overflow-hidden rounded-lg"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.05]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,16,20,0.85)_0%,rgba(16,16,20,0.25)_45%,transparent_70%)]"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70 opacity-0 transition-opacity duration-500 max-lg:opacity-100 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                      {service.description}
                    </p>
                  </div>
                  <span className="mb-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 group-hover:border-accent group-hover:bg-accent">
                    <ArrowUpRight className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-6 font-mono text-xs text-white/60"
                >
                  {service.number}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
