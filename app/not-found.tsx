import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-luxury-charcoal">
      <span className="font-display text-[12rem] font-light leading-none text-luxury-gold/5 select-none absolute">
        404
      </span>
      <div className="relative flex flex-col items-center gap-6 max-w-md">
        <div className="flex items-center gap-3 mb-2">
          <span className="gold-rule" />
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold">
            Page Not Found
          </span>
          <span className="gold-rule" />
        </div>

        <h1 className="font-display text-display-lg font-light text-luxury-cream">
          This page doesn&apos;t exist
        </h1>

        <p className="font-sans text-sm text-luxury-muted leading-relaxed">
          The page you&apos;re looking for may have been moved or removed. Let
          us guide you back to something exceptional.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <Button href="/" variant="gold" size="lg">
            Back to Home
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Properties
          </Button>
        </div>
      </div>
    </div>
  );
}
