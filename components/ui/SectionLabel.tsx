type SectionLabelProps = {
  children: string;
  /** One-line intro, baseline-aligned to the title on large screens. */
  supporting?: string;
  /** Use on dark (ink) sections. */
  dark?: boolean;
  className?: string;
};

/**
 * Section title — a geometric slash lockup that opens every homepage
 * block. The mark is decorative; the heading text is the accessible name.
 */
export default function SectionLabel({
  children,
  supporting,
  dark = false,
  className = "",
}: SectionLabelProps) {
  const heading = (
    <h2
      className={`inline-flex items-center gap-[0.42em] text-h2 font-semibold tracking-tight ${
        dark ? "text-paper" : "text-ink"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 10 32"
        className={`h-[0.72em] w-auto shrink-0 ${
          dark ? "text-[#8f8fff]" : "text-accent"
        }`}
      >
        <path
          d="M8.2 1.2 L1.8 30.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="square"
        />
      </svg>
      {children}
    </h2>
  );

  if (!supporting) {
    return className ? <div className={className}>{heading}</div> : heading;
  }

  return (
    <div
      className={`flex flex-wrap items-end justify-between gap-x-10 gap-y-4 ${className}`}
    >
      {heading}
      <p
        className={`max-w-md text-[15px] leading-relaxed ${
          dark ? "text-faint" : "text-muted"
        }`}
      >
        {supporting}
      </p>
    </div>
  );
}
