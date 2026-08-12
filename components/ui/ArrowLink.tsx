import type { ReactNode } from "react";
import ArrowUpRight from "./ArrowUpRight";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

/** Editorial text link with the travelling brand arrow. */
export default function ArrowLink({
  href,
  children,
  dark = false,
  className = "",
}: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 text-[15px] font-medium transition-colors duration-300 ${
        dark ? "text-paper hover:text-white" : "text-ink hover:text-accent"
      } ${className}`}
    >
      <span className="underline-offset-4 group-hover:underline">{children}</span>
      <ArrowUpRight className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
    </a>
  );
}
