type ArrowUpRightProps = {
  className?: string;
};

/** Brand arrow used in buttons and links. Decorative — always aria-hidden. */
export default function ArrowUpRight({ className = "size-4" }: ArrowUpRightProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.75M11.5 4.5V10.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
