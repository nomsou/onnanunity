import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?:   string;   // Small label above the heading e.g. "Our Portfolio"
  heading:    string;
  subheading?: string;
  align?:     "left" | "center";
  light?:     boolean;  // true = dark bg (default), false = light bg
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align     = "left",
  light     = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          {align !== "center" && <span className="gold-rule" />}
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
            {eyebrow}
          </span>
          {align === "center" && <span className="gold-rule" />}
          {align === "center" && <span className="gold-rule" />}
        </div>
      )}

      <h2
        className={cn(
          "font-display font-light leading-tight",
          "text-display-lg",
          light ? "text-luxury-charcoal" : "text-luxury-cream"
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={cn(
            "font-sans text-base leading-relaxed max-w-xl",
            light ? "text-luxury-charcoal/60" : "text-luxury-muted"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
