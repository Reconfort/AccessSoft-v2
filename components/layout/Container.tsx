import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** Single site-wide content container: 1440px max, responsive gutters. */
export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1440px] px-6 md:px-12 xl:px-20 ${className}`}>
      {children}
    </Tag>
  );
}
