import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { joinClassNames } from "@/lib/class-names";

export type TextLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function TextLink({ className, ...props }: TextLinkProps) {
  return <Link className={joinClassNames("text-link", className)} {...props} />;
}
