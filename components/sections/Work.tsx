import Image from "next/image";
import { projects } from "@/content/projects";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * Success stories — photographic case-study tiles, big client name
 * beneath, verified outcome line.
 */
export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-surface">
      <Container className="py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionLabel>Success stories</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="label-mono text-muted">All metrics — client-verified</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 3) * 100}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <article className="group">
                <a href="#contact" aria-label={`${project.client} case study — discuss a project like this`} className="block">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                    />
                  </div>

                  <p className="label-mono mt-6 text-muted">
                    <span className="text-accent">{project.number}</span>
                    <span className="mx-3 text-line" aria-hidden="true">/</span>
                    {project.industry}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                    {project.client}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {project.title}
                  </p>
                </a>

                <dl className="mt-5 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-5">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col-reverse">
                      <dt className="mt-0.5 text-xs text-muted">{metric.label}</dt>
                      <dd className="text-lg font-semibold tracking-tight text-ink">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-14 flex justify-center">
            <Button href="#contact" variant="secondary" size="lg">
              Start your success story
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
