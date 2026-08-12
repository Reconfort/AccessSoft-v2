export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
};

export const services: Service[] = [
  {
    id: "product-strategy",
    number: "01",
    title: "Product Strategy",
    description:
      "We turn ambiguous ideas into sharp, testable product decisions — before a line of code is written.",
    detail: "Discovery sprints, roadmaps, and validation that de-risk the build.",
  },
  {
    id: "ui-ux-design",
    number: "02",
    title: "UI / UX Design",
    description:
      "Interfaces designed around real user behavior — clear hierarchy, honest feedback, and detail that earns trust.",
    detail: "Research, prototyping, and design systems that survive handoff.",
  },
  {
    id: "software-engineering",
    number: "03",
    title: "Software Engineering",
    description:
      "Web and mobile products engineered for performance, reliability, and the next five years — not just launch day.",
    detail: "Typed codebases, automated tests, and weekly shippable increments.",
  },
  {
    id: "branding-identity",
    number: "04",
    title: "Branding & Identity",
    description:
      "Visual identities that make young companies feel established and established companies feel current.",
    detail: "Naming, identity systems, and guidelines your team can actually use.",
  },
  {
    id: "automation-ai",
    number: "05",
    title: "Automation & AI",
    description:
      "We remove repetitive work from your operations with pragmatic automation and applied AI — measured in hours saved.",
    detail: "Workflow automation, applied AI, and integrations that pay rent.",
  },
  {
    id: "cloud-devops",
    number: "06",
    title: "Cloud & DevOps",
    description:
      "Infrastructure that deploys itself, scales predictably, and pages nobody at 3 a.m.",
    detail: "CI/CD, observability, and cloud architecture tuned to your budget.",
  },
];
