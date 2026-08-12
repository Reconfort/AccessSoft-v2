export type ProcessPhase = {
  number: string;
  title: string;
  description: string;
  outcome: string;
};

/** Five-phase philosophy preserved from the current site — a brand strength. */
export const processPhases: ProcessPhase[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We interrogate the problem before proposing solutions — users, market, constraints, and the metric that defines success.",
    outcome: "A shared definition of done.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture and interface take shape together. Prototypes go in front of real users early, so opinions lose and evidence wins.",
    outcome: "A validated product blueprint.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Weekly shippable increments, typed codebases, automated tests, and reviews on every merge. You watch it grow in staging, not in slides.",
    outcome: "Production-grade software, visibly progressing.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Performance budgets enforced, observability wired, rollback rehearsed. Launch day is a checklist, not a gamble.",
    outcome: "A calm, measured release.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "We stay through the growth curve — measuring, optimizing, and extending the product as your business compounds.",
    outcome: "A partner, not a hand-off.",
  },
];
