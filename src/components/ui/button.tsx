import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
} from "react";

import { joinClassNames } from "@/lib/class-names";

const variantClasses = {
  primary: "button--primary",
  secondary: "button--secondary",
  quiet: "button--quiet",
} as const;

export type ButtonVariant = keyof typeof variantClasses;

type ButtonStyleProps = {
  variant?: ButtonVariant;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleProps;

export type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> &
  ButtonStyleProps;

function getButtonClassName(
  variant: ButtonVariant,
  className?: string,
): string {
  return joinClassNames("button", variantClasses[variant], className);
}

export function Button({
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName(variant, className)}
      type={type}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={getButtonClassName(variant, className)} {...props} />
  );
}
