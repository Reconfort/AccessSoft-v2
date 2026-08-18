import { unsplash } from "./photos";

export type Industry = {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const industries: Industry[] = [
  {
    id: "fintech",
    name: "Fintech",
    description:
      "Payments, settlement, and financial workflows that customers trust and regulators sign off on.",
    image: unsplash("photo-1611974789855-9c2a0a7236a3"),
    featured: true,
  },
  {
    id: "healthtech",
    name: "Healthtech",
    description:
      "Patient-facing experiences and clinical tools that respect urgency, privacy, and care.",
    image: unsplash("photo-1576091160399-112ba8d25d1d"),
  },
  {
    id: "logistics",
    name: "Logistics",
    description:
      "Fleet, dispatch, and supply-chain visibility unified into single operational views.",
    image: unsplash("photo-1586528116311-ad8dd3c8310d"),
  },
  {
    id: "education",
    name: "Education",
    description:
      "Learning platforms that keep students engaged and administrators informed.",
    image: unsplash("photo-1523240795612-9a054b0db644"),
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description:
      "Listing, management, and transaction platforms that move property markets online.",
    image: unsplash("photo-1486406146926-c627a92ad1ab"),
  },
  {
    id: "retail-commerce",
    name: "Retail & Commerce",
    description:
      "Storefronts, inventory, and loyalty systems built for conversion and repeat business.",
    image: unsplash("photo-1441986300917-64674bd600d8"),
  },
];
