import Image from "next/image";
import { insights } from "@/content/insights";
import { company } from "@/content/company";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

/** News — three editorial cards. Static content, no CMS. */
export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 bg-surface">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionLabel>News & insights</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {insights.map((insight, index) => (
            <Reveal key={insight.id} delay={(index % 3) * 100}>
              <article className="group h-full">
                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent(
                    `Article request: ${insight.title}`,
                  )}`}
                  aria-label={`${insight.title} — request the article by email`}
                  className="flex h-full flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <Image
                      src={insight.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="label-mono mt-5 flex flex-wrap gap-x-4 gap-y-1 text-muted">
                    <span className="text-accent">{insight.category}</span>
                    <span>{insight.date}</span>
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                    {insight.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {insight.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 pt-1 text-sm font-medium text-ink">
                    Read article
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
