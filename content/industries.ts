export type Industry = {
  id: string;
  name: string;
  description: string;
  /** Key for the abstract visual composition rendered for this industry. */
  visual: "fintech" | "healthtech" | "logistics" | "education" | "realestate" | "retail";
  featured?: boolean;
};

export const industries: Industry[] = [
  {
    id: "fintech",
    name: "Fintech",
    description:
      "Payments, settlement, and financial workflows that customers trust and regulators sign off on.",
    visual: "fintech",
    featured: true,
  },
  {
    id: "healthtech",
    name: "Healthtech",
    description:
      "Patient-facing experiences and clinical tools that respect urgency, privacy, and care.",
    visual: "healthtech",
  },
  {
    id: "logistics",
    name: "Logistics",
    description:
      "Fleet, dispatch, and supply-chain visibility unified into single operational views.",
    visual: "logistics",
  },
  {
    id: "education",
    name: "Education",
    description:
      "Learning platforms that keep students engaged and administrators informed.",
    visual: "education",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description:
      "Listing, management, and transaction platforms that move property markets online.",
    visual: "realestate",
  },
  {
    id: "retail-commerce",
    name: "Retail & Commerce",
    description:
      "Storefronts, inventory, and loyalty systems built for conversion and repeat business.",
    visual: "retail",
  },
];
