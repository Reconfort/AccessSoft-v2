export type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  role: string;
  company: string;
  featured?: boolean;
};

/** Authentic testimonials preserved from the current production site. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "AccessSoft works like a team that has skin in the game. They challenged our roadmap, rebuilt the risky parts, and shipped ahead of schedule. It is the first agency we have renewed twice.",
    name: "Denise Umutoni",
    initials: "DU",
    role: "COO",
    company: "Imara Finance",
    featured: true,
  },
  {
    quote:
      "The redesign paid for itself in the first quarter. What impressed us most was the engineering discipline — every decision documented, every release boring in the best way.",
    name: "Dr. Samuel Kagabo",
    initials: "SK",
    role: "Founder",
    company: "Tera Health",
  },
  {
    quote:
      "We came for a dashboard and left with an operations culture. Their automation work quietly removed a full day of manual dispatch every week.",
    name: "Aline Ingabire",
    initials: "AI",
    role: "Head of Operations",
    company: "Volt Logistics",
  },
];

/**
 * Client wordmarks for the trust strip. Rendered as monochrome text
 * until real logo assets are supplied — add `logoSrc` per client then.
 */
export const clients = [
  { name: "Imara Finance" },
  { name: "Tera Health" },
  { name: "Volt Logistics" },
] as const;
