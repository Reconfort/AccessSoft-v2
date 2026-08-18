import { unsplash } from "./photos";

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "product-strategy",
    number: "01",
    title: "Product Strategy",
    description:
      "We turn ambiguous ideas into sharp, testable product decisions — before a line of code is written.",
    detail: "Discovery sprints, roadmaps, and validation that de-risk the build.",
    image: unsplash("photo-1552664730-d307ca884978"),
  },
  {
    id: "ui-ux-design",
    number: "02",
    title: "UI / UX Design",
    description:
      "Interfaces designed around real user behavior — clear hierarchy, honest feedback, and detail that earns trust.",
    detail: "Research, prototyping, and design systems that survive handoff.",
    image: unsplash("photo-1586717791821-3f44a563fa4c"),
  },
  {
    id: "software-engineering",
    number: "03",
    title: "Software Engineering",
    description:
      "Web and mobile products engineered for performance, reliability, and the next five years — not just launch day.",
    detail: "Typed codebases, automated tests, and weekly shippable increments.",
    image: unsplash("photo-1498050108023-c5249f4df085"),
  },
  {
    id: "branding-identity",
    number: "04",
    title: "Branding & Identity",
    description:
      "Visual identities that make young companies feel established and established companies feel current.",
    detail: "Naming, identity systems, and guidelines your team can actually use.",
    image: unsplash("photo-1523726491678-bf852e717f6a"),
  },
  {
    id: "automation-ai",
    number: "05",
    title: "Automation & AI",
    description:
      "We remove repetitive work from your operations with pragmatic automation and applied AI — measured in hours saved.",
    detail: "Workflow automation, applied AI, and integrations that pay rent.",
    image: unsplash("photo-1485827404703-89b55fcc595e"),
  },
  {
    id: "cloud-devops",
    number: "06",
    title: "Cloud & DevOps",
    description:
      "Infrastructure that deploys itself, scales predictably, and pages nobody at 3 a.m.",
    detail: "CI/CD, observability, and cloud architecture tuned to your budget.",
    image: unsplash("photo-1451187580459-43490279c0fa"),
  },
];
