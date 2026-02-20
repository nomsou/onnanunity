import Image from "next/image";
import { BedDouble, Bath, Maximize2 } from "lucide-react";
import { formatPrice } from "@/utils/propertyutils";
import type { PropertyUnit } from "@/types";

interface HouseTypesProps {
  units: PropertyUnit[];
}

export default function HouseTypes({ units }: HouseTypesProps) {
  if (!units || units.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {units.map((unit) => (
        <div
          key={unit.name}
          className="card-dark overflow-hidden group hover:border-luxury-gold/20 transition-all duration-500"
        >
          {/* Unit Image */}
          {unit.images?.[0] && (
            <div className="relative h-48 overflow-hidden bg-luxury-charcoal3">
              <Image
                src={unit.images[0]}
                alt={unit.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          )}

          <div className="p-6 flex flex-col gap-3">
            <h4 className="font-display text-xl font-light text-luxury-cream">
              {unit.name}
            </h4>
            <p className="font-sans text-xs text-luxury-muted leading-relaxed">
              {unit.description}
            </p>

            {/* Specs */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/5 mt-auto">
              <span className="flex items-center gap-1.5 text-luxury-muted font-sans text-xs">
                <BedDouble size={12} /> {unit.beds} Beds
              </span>
              <span className="flex items-center gap-1.5 text-luxury-muted font-sans text-xs">
                <Bath size={12} /> {unit.baths} Baths
              </span>
              <span className="flex items-center gap-1.5 text-luxury-muted font-sans text-xs">
                <Maximize2 size={12} /> {unit.sqft.toLocaleString()} ft²
              </span>
            </div>

            {unit.price && (
              <p className="font-sans text-xs text-luxury-muted">
                From{" "}
                <span className="text-luxury-gold font-medium">
                  {formatPrice(unit.price)}
                </span>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
