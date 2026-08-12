import { company } from "@/content/company";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "./ContactForm";

/**
 * Contact — form beside the "Where are we? / How can you reach us?"
 * information columns.
 */
export default function Contact() {
  const { finalCta } = company;

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-2xl text-[clamp(1.3rem,2.4vw,1.9rem)] leading-snug font-semibold tracking-tight text-ink">
            {finalCta.headlineBefore}
            <span className="accent-word text-accent">{finalCta.headlineAccent}</span>
            {finalCta.headlineAfter}
          </p>
          <p className="mt-4 max-w-xl text-[15px] text-muted">{finalCta.supporting}</p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <Reveal delay={150} className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={200} className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
              <div>
                <h3 className="label-mono text-muted">Where are we?</h3>
                <p className="mt-3 text-lg font-medium tracking-tight text-ink">
                  {company.location}
                </p>
                <p className="label-mono mt-2 text-faint">{company.timezone}</p>
              </div>

              <div>
                <h3 className="label-mono text-muted">How can you reach us?</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Send us an e-mail at{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-300 hover:text-accent"
                  >
                    {company.email}
                  </a>{" "}
                  — or use the form. We reply within two business days.
                </p>
              </div>

              <div>
                <h3 className="label-mono text-muted">What happens next?</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  A short call to understand your goals, then a clear written
                  proposal — scope, timeline, and the metric that defines done.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
