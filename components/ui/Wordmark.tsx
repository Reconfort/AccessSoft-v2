import Image from "next/image";

type WordmarkProps = {
  dark?: boolean;
  className?: string;
  priority?: boolean;
};

/**
 * AccessSoft mark from public/Logo.png (blue on black).
 * Sits on an ink plate so the baked-in background matches both
 * the light header and the dark footer.
 */
export default function Wordmark({
  dark = false,
  className = "",
  priority = false,
}: WordmarkProps) {
  return (
    <span className={`inline-flex ${className}`}>
      <Image
        src="/Logo.png"
        alt="AccessSoft"
        width={180}
        height={167}
        sizes="180px"
        priority={priority}
        className={`w-auto mt-4 ${dark ? "h-20" : "h-16"}`}
      />
    </span>
  );
}
