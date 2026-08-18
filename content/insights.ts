import { unsplash } from "./photos";

export type Insight = {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
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
    image: unsplash("photo-1486312338219-ce68d2c6f44d"),
  },
  {
    id: "products-people-actually-use",
    category: "Product Design",
    date: "April 2026",
    title: "Designing digital products that people actually use",
    excerpt:
      "Adoption is designed, not hoped for. What we test before a single screen ships.",
    image: unsplash("photo-1581291518633-83b4ebd1d83e"),
  },
  {
    id: "ai-automation-operational-value",
    category: "AI & Automation",
    date: "February 2026",
    title: "Where AI automation creates real operational value",
    excerpt:
      "Past the hype: the workflows where applied AI reliably pays for itself in hours saved.",
    image: unsplash("photo-1677442136019-21780ecad995"),
  },
];
