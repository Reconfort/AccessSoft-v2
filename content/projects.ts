import { unsplash } from "./photos";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  number: string;
  industry: string;
  client: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: ProjectMetric[];
  image: string;
  featured?: boolean;
};

/**
 * Case studies and metrics carried over from the current production site.
 * All figures are real client outcomes — do not edit without verified data.
 */
export const projects: Project[] = [
  {
    id: "imara-finance",
    number: "01",
    industry: "Fintech",
    client: "Imara Finance",
    title: "Reconciliation engine for mobile-money settlements",
    challenge:
      "Spreadsheet-driven settlement batches couldn’t keep pace with East African mobile-money volumes — every cycle meant manual corrections and delayed funds.",
    solution:
      "We rebuilt Imara’s settlement pipeline into a real-time reconciliation platform processing mobile-money flows continuously, with every exception surfaced and traceable.",
    metrics: [
      { value: "4.2×", label: "faster settlement cycles" },
      { value: "99.98%", label: "pipeline uptime" },
      { value: "60%", label: "fewer manual corrections" },
    ],
    image: unsplash("photo-1551288049-bebda4e38f71"),
    featured: true,
  },
  {
    id: "tera-health",
    number: "02",
    industry: "Healthtech",
    client: "Tera Health",
    title: "Telehealth scheduling that patients actually finish",
    challenge:
      "A 9-step booking form was losing patients before they ever reached a doctor — abandonment was the clinic’s biggest growth leak.",
    solution:
      "A ground-up redesign and rebuild of the booking experience: a guided flow patients complete in under two minutes, on any device.",
    metrics: [
      { value: "+38%", label: "appointment completion" },
      { value: "112s", label: "median booking time" },
      { value: "4.8/5", label: "patient satisfaction" },
    ],
    image: unsplash("photo-1576091160550-2173dba999ef"),
  },
  {
    id: "volt-logistics",
    number: "03",
    industry: "Logistics",
    client: "Volt Logistics",
    title: "Fleet operations, one screen, zero guesswork",
    challenge:
      "A 200-vehicle fleet ran on radio calls and disconnected tools — dispatchers spent a full day each week reconciling routes by hand.",
    solution:
      "Live fleet telemetry, route optimization, and dispatch automation unified into a single operations dashboard the whole team works from.",
    metrics: [
      { value: "−27%", label: "average delivery time" },
      { value: "200+", label: "vehicles tracked live" },
      { value: "14hrs", label: "dispatch time saved weekly" },
    ],
    image: unsplash("photo-1601584115197-04ecc0da31d7"),
  },
];
