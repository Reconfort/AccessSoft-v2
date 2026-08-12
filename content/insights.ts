export type Insight = {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  /** Key for the abstract thumbnail composition. */
  visual: "cost" | "design" | "ai";
};

/** Static editorial content — no CMS. Swap for real articles as they publish. */
export const insights: Insight[] = [
  {
    id: "hidden-cost-outdated-software",
    category: "Business Technology",
    date: "June 2026",
    title: "The hidden cost of outdated business software",
    excerpt:
      "Legacy systems rarely fail loudly. They tax every process quietly — until modernization becomes urgent.",
    visual: "cost",
  },
  {
    id: "products-people-actually-use",
    category: "Product Design",
    date: "April 2026",
    title: "Designing digital products that people actually use",
    excerpt:
      "Adoption is designed, not hoped for. What we test before a single screen ships.",
    visual: "design",
  },
  {
    id: "ai-automation-operational-value",
    category: "AI & Automation",
    date: "February 2026",
    title: "Where AI automation creates real operational value",
    excerpt:
      "Past the hype: the workflows where applied AI reliably pays for itself in hours saved.",
    visual: "ai",
  },
];
