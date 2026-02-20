import Image from "next/image";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?:  string;
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "card-dark p-8 md:p-10 flex flex-col gap-6 h-full",
        "hover:border-luxury-gold/20 transition-all duration-500",
        className
      )}
    >
      {/* Gold quote mark */}
      <Quote
        size={32}
        className="text-luxury-gold/40 fill-luxury-gold/20 shrink-0"
        aria-hidden
      />

      {/* Stars */}
      {testimonial.rating && (
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-luxury-gold text-xs">★</span>
          ))}
        </div>
      )}

      {/* Quote */}
      <p className="font-sans text-sm text-luxury-muted leading-relaxed flex-1 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        {testimonial.image ? (
          <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-luxury-charcoal3">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
        ) : (
          <div className="w-11 h-11 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center shrink-0">
            <span className="font-display text-luxury-gold text-lg font-light">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-sans text-sm font-medium text-luxury-cream">
            {testimonial.name}
          </p>
          {testimonial.title && (
            <p className="font-sans text-xs text-luxury-muted">
              {testimonial.title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
