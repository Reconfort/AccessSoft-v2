import { company } from "@/content/company";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * Company banner — full-width dark band: who AccessSoft is, in one
 * confident statement, with the facts row and a conversion CTA.
 */
export default function About() {
  const { about } = company;

  return (
    <section
      id="about"
      data-theme="dark"
      className="relative scroll-mt-24 overflow-hidden bg-ink text-paper"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-8%] size-[30rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,#2b2be6_0%,transparent_65%)] opacity-30 blur-2xl"
      />

      <Container className="relative py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-mono text-faint">
                <span className="text-[#8f8fff]">/ </span>About AccessSoft
              </p>
              <h2 className="mt-6 text-h2 font-semibold text-paper">
                A technology partner built around people, product, and{" "}
                <span className="accent-word text-[#b9b9ff]">craft</span>.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-faint md:text-lg">
                {about.paragraphs[0]}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-faint md:text-lg">
                {about.paragraphs[1]}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9">
                <Button href="#contact" variant="inverse" size="lg">
                  Meet us — start a conversation
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-ink-3 border-y border-ink-3">
              {about.facts.map((fact) => (
                <div key={fact.label} className="py-5">
                  <dt className="label-mono text-faint">{fact.label}</dt>
                  <dd className="mt-2 text-lg font-medium tracking-tight text-paper">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
