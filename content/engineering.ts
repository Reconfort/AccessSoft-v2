export type EngineeringStandard = {
  title: string;
  description: string;
};

/**
 * First four standards preserved verbatim from the current site;
 * the rest extend the same voice to cover the full discipline.
 */
export const engineeringStandards: EngineeringStandard[] = [
  {
    title: "Typed end to end",
    description:
      "Strict TypeScript across every codebase — refactors stay safe as products grow.",
  },
  {
    title: "Tested before merged",
    description:
      "Automated test suites and peer review gate every change to main.",
  },
  {
    title: "Performance budgets",
    description:
      "Core Web Vitals tracked in CI. Regressions fail the build, not the user.",
  },
  {
    title: "Accessible by default",
    description:
      "WCAG-conscious components, keyboard-first flows, honest contrast.",
  },
  {
    title: "Secure by design",
    description:
      "Least-privilege access, dependency audits, and threat modeling before features ship.",
  },
  {
    title: "Observable in production",
    description:
      "Structured logs, tracing, and alerting — we see issues before your users do.",
  },
  {
    title: "Architected to scale",
    description:
      "Boring, proven patterns that survive traffic spikes and team growth alike.",
  },
  {
    title: "Documented decisions",
    description:
      "Every architectural choice recorded, so the codebase outlives any one engineer.",
  },
];
