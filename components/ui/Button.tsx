"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-widest uppercase text-xs transition-all duration-300 ease-luxury cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/50 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  gold: "bg-luxury-gold text-luxury-charcoal hover:bg-luxury-gold2 active:scale-[0.98]",
  outline:
    "border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal active:scale-[0.98]",
  ghost:
    "text-luxury-gold hover:text-luxury-gold2 underline-offset-4 hover:underline",
};

const sizes = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-7 py-3.5",
  lg: "px-10 py-4 text-[11px]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "gold",
  size = "md",
  className,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
