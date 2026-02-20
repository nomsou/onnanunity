import { cn } from "@/lib/utils";
import type { PropertyStatus } from "@/types";

interface BadgeProps {
  status: PropertyStatus;
  className?: string;
}

const statusStyles: Record<PropertyStatus, string> = {
  "For Sale": "bg-luxury-gold/15 text-luxury-gold border-luxury-gold/30",
  Ongoing: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "Sold Out": "bg-white/10 text-luxury-muted border-white/20",
  "Coming Soon": "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

export default function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block border px-3 py-1 text-[10px] font-sans font-medium uppercase tracking-widest",
        statusStyles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
