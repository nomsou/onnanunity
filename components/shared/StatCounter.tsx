"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: string;
  label: string;
  className?: string;
}

function parseValue(val: string): { number: number; suffix: string } {
  const cleaned = val.replace(/[^0-9k.]/gi, "");
  const suffix = val.replace(/[0-9.k]/gi, "");

  if (cleaned.toLowerCase().includes("k")) {
    return { number: parseFloat(cleaned) * 1000, suffix };
  }
  return { number: parseFloat(cleaned), suffix };
}

function formatDisplay(current: number, original: string): string {
  if (original.toLowerCase().includes("k")) {
    return `${(current / 1000).toFixed(0)}k${original.endsWith("+") ? "+" : ""}`;
  }
  return `${Math.round(current)}${original.endsWith("+") ? "+" : ""}`;
}

export default function StatCounter({
  value,
  label,
  className,
}: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const { number } = parseValue(value);
    const duration = 1800;
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;

      const eased = Math.min(
        number,
        current + increment * (1 - step / (steps * 1.5)),
      );
      current = eased;
      setDisplay(formatDisplay(current, value));

      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className={cn("flex flex-col gap-1", className)}>
      <span className="font-display text-display-md text-gold-gradient leading-none">
        {display}
      </span>
      <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-luxury-muted">
        {label}
      </span>
    </div>
  );
}
