export const company = {
  name: "AccessSoft",
  tagline: "Digital product & technology partner",
  location: "Kigali, Rwanda",
  timezone: "GMT+2 · Kigali",
  email: "hello@accesssoft.rw",
  hero: {
    eyebrow: "Digital product & technology partner — Kigali, Rwanda",
    headlineBefore: "We design",
    flipWords: ["products", "platforms", "systems", "experiences"],
    headlineAfter: "that ambitious businesses keep.",
    /** Rotating hero statements; the first carries the page H1. */
    slides: [
      {
        statement: "We design and engineer digital products that grow",
        accent: "ambitious businesses.",
        supporting:
          "Software engineering, product design, and strategy — delivered with the craft of a studio and the rigor of an engineering team.",
        image: "/hero/hero-slide-product.jpg",
      },
      {
        statement: "We drive",
        accent: "digital transformation.",
        supporting:
          "Outdated processes and platforms modernized — without stopping the business to do it.",
        image: "/hero/hero-slide-transform.jpg",
      },
      {
        statement: "We automate the work that slows",
        accent: "operations down.",
        supporting:
          "Pragmatic automation and applied AI, measured in hours saved every week.",
        image: "/hero/hero-slide-automate.jpg",
      },
      {
        statement: "We build systems that",
        accent: "scale without drama.",
        supporting:
          "Typed, tested, observable software — engineered for the next five years, not just launch day.",
        image: "/hero/hero-slide-scale.jpg",
      },
    ],
    primaryCta: { label: "Start a project", href: "#contact" },
    secondaryCta: { label: "Explore our work", href: "#work" },
  },
  whoWeAre: {
    statement: "Most software is built to be shipped. Ours is built to be kept.",
    supporting:
      "Products people rely on, interfaces they enjoy, systems that scale without drama. We partner with founders and teams who believe quality is a growth strategy — because technology should create business advantage, not complexity.",
    principles: [
      {
        number: "01",
        title: "Strategy before implementation",
        description:
          "We interrogate the problem before proposing solutions. Ambiguous ideas become sharp, testable product decisions.",
      },
      {
        number: "02",
        title: "Design with purpose",
        description:
          "Interfaces shaped around real user behavior — clear hierarchy, honest feedback, and detail that earns trust.",
      },
      {
        number: "03",
        title: "Engineering for scale",
        description:
          "Typed, tested, reviewed. Products engineered for the next five years, not just launch day.",
      },
      {
        number: "04",
        title: "Partnership beyond launch",
        description:
          "We stay through the growth curve — measuring, optimizing, and extending as your business compounds.",
      },
    ],
  },
  about: {
    heading: "A technology partner built around people, product, and craft.",
    paragraphs: [
      "AccessSoft began in Kigali as a multidisciplinary digital product studio and grew into a long-term technology partner for companies across East Africa and beyond. Strategy, design, and engineering sit in one room — so decisions get made with the whole product in view.",
      "Our culture is an engineering culture: decisions documented, releases boring in the best way, quality treated as a growth strategy rather than a cost. Clients renew because working with us feels like having a team with skin in the game.",
      "We measure ourselves in outcomes, not deliverables. The products we ship are built to be kept — and so are the relationships behind them.",
    ],
    facts: [
      { label: "Headquarters", value: "Kigali, Rwanda" },
      { label: "Working hours", value: "GMT+2, partnering worldwide" },
      { label: "Disciplines", value: "Strategy · Design · Engineering" },
      { label: "Contact", value: "hello@accesssoft.rw" },
    ],
  },
  finalCta: {
    label: "Start a conversation",
    headlineBefore: "Have a product, problem, or idea in mind? Let’s build it ",
    headlineAccent: "properly",
    headlineAfter: ".",
    supporting:
      "Tell us what you’re building, what isn’t working, or where you want to go next. We reply within two business days.",
  },
} as const;
