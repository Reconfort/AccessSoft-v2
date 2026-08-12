type SectionLabelProps = {
  children: string;
  /** Use on dark (ink) sections. */
  dark?: boolean;
  className?: string;
};

/**
 * Slash section heading — the "/ Section" treatment that opens
 * every block of the homepage.
 */
export default function SectionLabel({
  children,
  dark = false,
  className = "",
}: SectionLabelProps) {
  return (
    <h2
      className={`text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold tracking-tight ${
        dark ? "text-paper" : "text-ink"
      } ${className}`}
    >
      <span aria-hidden="true" className={dark ? "text-[#8f8fff]" : "text-accent"}>
        /{" "}
      </span>
      {children}
    </h2>
  );
}
