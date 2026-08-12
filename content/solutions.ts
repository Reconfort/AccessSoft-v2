export type Solution = {
  id: string;
  number: string;
  title: string;
  description: string;
};

/**
 * Services answer "what do we do" — solutions answer
 * "what business problems do we solve".
 */
export const solutions: Solution[] = [
  {
    id: "digital-transformation",
    number: "01",
    title: "Digital Transformation",
    description:
      "Modernize outdated processes and platforms — without stopping the business to do it.",
  },
  {
    id: "customer-experience",
    number: "02",
    title: "Customer Experience",
    description:
      "Digital experiences that measurably improve acquisition, engagement, and retention.",
  },
  {
    id: "business-automation",
    number: "03",
    title: "Business Automation",
    description:
      "Repetitive manual workflows removed with pragmatic automation — measured in hours saved per week.",
  },
  {
    id: "enterprise-platforms",
    number: "04",
    title: "Enterprise Platforms",
    description:
      "Internal platforms that unify teams, data, and operations under one coherent system.",
  },
  {
    id: "ai-enablement",
    number: "05",
    title: "AI Enablement",
    description:
      "Practical AI introduced where it earns its keep in your product and operations — and nowhere it doesn’t.",
  },
];
