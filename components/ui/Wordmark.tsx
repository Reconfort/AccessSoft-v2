type WordmarkProps = {
  dark?: boolean;
  className?: string;
};

/** AccessSoft wordmark — name plus the brand-accent full stop. */
export default function Wordmark({ dark = false, className = "" }: WordmarkProps) {
  return (
    <span
      className={`text-xl font-semibold tracking-tight ${
        dark ? "text-paper" : "text-ink"
      } ${className}`}
    >
      AccessSoft<span className="text-accent">.</span>
    </span>
  );
}
