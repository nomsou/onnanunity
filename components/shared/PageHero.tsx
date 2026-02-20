import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  heading: string;
  subheading?: string;
  eyebrow?: string;
  image?: string;
  className?: string;
}

export default function PageHero({
  heading,
  subheading,
  eyebrow,
  image,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-[50vh] flex items-end pb-16 pt-36",
        "px-6 md:px-12 lg:px-20 overflow-hidden",
        className,
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={heading}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-luxury-charcoal/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal via-luxury-charcoal2 to-luxury-charcoal" />
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="relative z-10 max-w-site mx-auto w-full">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <span className="gold-rule" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-display font-light text-display-lg text-luxury-cream max-w-3xl">
          {heading}
        </h1>
        {subheading && (
          <p className="font-sans text-base text-luxury-muted mt-4 max-w-xl leading-relaxed">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
