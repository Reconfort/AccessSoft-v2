import { statistics } from "@/content/statistics";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import StatNumber from "@/components/ui/StatNumber";

/**
 * Our numbers — oversized counting figures in brand accent on white,
 * uppercase mono labels beneath. Values are real; never inflate.
 */
export default function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 border-y border-line">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionLabel>Our numbers</SectionLabel>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="flex flex-col-reverse">
                <dt className="label-mono mt-4 text-muted">{stat.label}</dt>
                <dd className="text-stat font-semibold text-accent">
                  <StatNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    suffixClassName="text-ink/80"
                  />
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
