import Link from "next/link";
import { ComponentProps } from "react";
import clsx from "clsx";

type Props = ComponentProps<"button"> & { asChild?: boolean; href?: string };

export default function Button({ asChild, href, className, children, ...rest }: Props) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold",
    "bg-brand-gold text-black hover:opacity-95 transition-colors gold-ring",
    className
  );

  if (asChild && href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <button className={classes} {...rest}>{children}</button>;
}
