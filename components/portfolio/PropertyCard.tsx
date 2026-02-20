import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Maximize2, MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/properties";
import Badge from "@/components/ui/Badge";
import type { Property } from "@/types";

interface PropertyCardProps {
  property:   Property;
  className?: string;
  variant?:   "default" | "featured";
}

export default function PropertyCard({
  property,
  className,
  variant = "default",
}: PropertyCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/projects/${property.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden bg-luxury-charcoal2 border border-white/5",
        "hover:border-luxury-gold/25 transition-all duration-500 ease-luxury",
        "hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden bg-luxury-charcoal3 shrink-0",
          isFeatured ? "h-72 md:h-80" : "h-56"
        )}
      >
        {property.coverImage ? (
          <Image
            src={property.coverImage}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-108"
            sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal3 to-luxury-charcoal flex items-center justify-center">
            <span className="font-display text-4xl text-luxury-gold/20 font-light">
              {property.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal2/80 via-transparent to-transparent" />

        {/* Hover overlay with CTA text */}
        <div className="absolute inset-0 bg-luxury-charcoal/0 group-hover:bg-luxury-charcoal/40 transition-all duration-500 flex items-center justify-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 border border-white/40 px-4 py-2">
            View Estate
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4 transition-transform duration-300 group-hover:-translate-y-0.5">
          <Badge status={property.status} />
        </div>

        {/* Arrow icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <div className="w-8 h-8 bg-luxury-gold flex items-center justify-center">
            <ArrowUpRight size={14} className="text-luxury-charcoal" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-luxury-muted">
          <MapPin size={11} className="shrink-0" />
          <span className="font-sans text-[11px] uppercase tracking-wider truncate">
            {property.neighborhood}, Abuja
          </span>
        </div>

        {/* Name */}
        <h3
          className={cn(
            "font-display font-light text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300",
            isFeatured ? "text-2xl" : "text-xl"
          )}
        >
          {property.name}
        </h3>

        {/* Tagline — featured only */}
        {isFeatured && (
          <p className="font-sans text-xs text-luxury-muted line-clamp-2 leading-relaxed">
            {property.tagline}
          </p>
        )}

        {/* Divider — grows from left on hover */}
        <div className="relative h-px bg-white/5 mt-auto overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-luxury-gold/30 transition-all duration-500 ease-luxury" />
        </div>

        {/* Specs Row */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-luxury-muted font-sans text-xs">
              <BedDouble size={12} />
              {property.beds} Beds
            </span>
            <span className="flex items-center gap-1.5 text-luxury-muted font-sans text-xs">
              <Bath size={12} />
              {property.baths} Baths
            </span>
            <span className="flex items-center gap-1.5 text-luxury-muted font-sans text-xs">
              <Maximize2 size={12} />
              {property.sqft.toLocaleString()} ft²
            </span>
          </div>
        </div>

        {/* Price */}
        {property.priceFrom && (
          <p className="font-sans text-xs text-luxury-muted">
            From{" "}
            <span className="text-luxury-gold font-medium text-sm">
              {formatPrice(property.priceFrom)}
            </span>
          </p>
        )}
      </div>

      {/* Bottom gold line — expands on hover */}
      <div className="h-[2px] bg-luxury-gold/0 group-hover:bg-luxury-gold/50 transition-all duration-500" />
    </Link>
  );
}
