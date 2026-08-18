import type { MouseEventHandler, ReactNode } from "react";
import ArrowUpRight from "./ArrowUpRight";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-300 cursor-pointer select-none whitespace-nowrap";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-deep active:bg-ink",
  secondary:
    "border border-ink/20 text-ink bg-transparent hover:border-ink/60 active:bg-ink/5",
  inverse:
    "bg-paper text-ink hover:bg-white active:bg-line",
};

const sizes = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

/**
 * Brand button — pill silhouette with the ↗ arrow, preserved from the
 * current site. Rendered as an anchor (all CTAs navigate).
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = true,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}
