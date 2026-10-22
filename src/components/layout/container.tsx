import type { HTMLAttributes } from "react";

import { joinClassNames } from "@/lib/class-names";

const widthClasses = {
  default: "",
  wide: "container--wide",
  narrow: "container--narrow",
} as const;

export type ContainerWidth = keyof typeof widthClasses;

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  width?: ContainerWidth;
};

export function Container({
  className,
  width = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={joinClassNames("container", widthClasses[width], className)}
      {...props}
    />
  );
}
