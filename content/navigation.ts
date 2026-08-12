export type NavItem = {
  label: string;
  href: string;
};

/**
 * Homepage anchors today; designed so these can become routes
 * (/services, /industries, …) later without refactoring.
 */
export const mainNav: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];
