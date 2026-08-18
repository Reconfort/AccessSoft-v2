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
