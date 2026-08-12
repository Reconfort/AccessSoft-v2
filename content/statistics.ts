export type Statistic = {
  /** Numeric target for the count-up animation. */
  value: number;
  suffix: string;
  label: string;
};

/**
 * Values carried over from the current production site (verified 2026-08).
 * Update here as the business grows — never inflate.
 */
export const statistics: Statistic[] = [
  { value: 22, suffix: "+", label: "Products shipped" },
  { value: 8, suffix: "", label: "Industries served" },
  { value: 92, suffix: "%", label: "Client retention" },
  { value: 5, suffix: "yrs", label: "Average partnership" },
];
