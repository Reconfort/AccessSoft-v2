import { testimonials } from "@/content/testimonials";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

function Attribution({
  initials,
  name,
  role,
  company,
}: (typeof testimonials)[number]) {
  return (
    <div className="flex items-center gap-4">
      <span
        aria-hidden="true"
        className="flex size-11 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent"
      >
        {initials}
      </span>
      <div>
        <p className="text-[15px] font-semibold text-ink">{name}</p>
        <p className="text-sm text-muted">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="scroll-mt-24 border-t border-line">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionLabel>What our partners say</SectionLabel>
        </Reveal>

        {/* Featured quote */}
        <Reveal delay={100}>
          <figure className="mt-12 max-w-4xl">
            <blockquote>
              <p className="text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.35] font-medium tracking-tight text-ink">
                <span aria-hidden="true" className="accent-word mr-1 text-accent">
                  “
                </span>
                {featured.quote}
                <span aria-hidden="true" className="accent-word ml-1 text-accent">
                  ”
                </span>
              </p>
            </blockquote>
            <figcaption className="mt-7">
              <Attribution {...featured} />
            </figcaption>
          </figure>
        </Reveal>

        {/* Supporting quotes */}
        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {rest.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 120}>
              <figure className="border-t border-line pt-7">
                <blockquote>
                  <p className="text-base leading-relaxed text-muted md:text-lg">
                    “{testimonial.quote}”
                  </p>
                </blockquote>
                <figcaption className="mt-6">
                  <Attribution {...testimonial} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
