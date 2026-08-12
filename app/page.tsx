import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Solutions from "@/components/sections/Solutions";
import Work from "@/components/sections/Work";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Engineering from "@/components/sections/Engineering";
import About from "@/components/sections/About";
import Insights from "@/components/sections/Insights";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";

/**
 * Homepage narrative: identity → capability → relevance → proof →
 * trust → process → company → conversion.
 */
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-100 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <WhoWeAre />
        <Services />
        <Industries />
        <Solutions />
        <Work />
        <Impact />
        <Testimonials />
        <Process />
        <Engineering />
        <About />
        <Insights />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
