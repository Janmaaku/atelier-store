import type { HTMLAttributes } from "react";

import { joinClassNames } from "@/lib/class-names";

const toneClasses = {
  canvas: "section--canvas",
  muted: "section--muted",
  ink: "section--ink",
} as const;

export type SectionTone = keyof typeof toneClasses;

export type SectionProps = HTMLAttributes<HTMLElement> & {
  compact?: boolean;
  tone?: SectionTone;
};

export function Section({
  className,
  compact = false,
  tone = "canvas",
  ...props
}: SectionProps) {
  return (
    <section
      className={joinClassNames(
        "section",
        compact && "section--compact",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
