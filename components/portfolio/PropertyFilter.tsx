"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { getProperties } from "@/utils/propertyutils";
import PropertyCard from "@/components/portfolio/PropertyCard";
import type { PropertyStatus } from "@/types";

type Filter = "All" | PropertyStatus;

const FILTERS: Filter[] = ["All", "For Sale", "Ongoing", "Coming Soon"];

export default function PropertyFilter() {
  const [active, setActive] = useState<Filter>("All");
  const all = getProperties();

  const filtered =
    active === "All" ? all : all.filter((p) => p.status === active);

  return (
    <div className="flex flex-col gap-10">
      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        {FILTERS.map((filter) => {
          const isActive = active === filter;
          const count =
            filter === "All"
              ? all.length
              : all.filter((p) => p.status === filter).length;

          return (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                "relative font-sans text-[11px] uppercase tracking-widest px-5 py-2.5 border",
                "transition-all duration-300 ease-luxury",
                isActive
                  ? "bg-luxury-gold text-luxury-charcoal border-luxury-gold"
                  : "border-white/10 text-luxury-muted hover:border-luxury-gold/30 hover:text-luxury-cream"
              )}
            >
              {filter}
              <span
                className={cn(
                  "ml-2 text-[9px]",
                  isActive ? "text-luxury-charcoal/60" : "text-luxury-muted/60"
                )}
              >
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((property) => (
            <motion.div
              key={property.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <PropertyCard property={property} className="h-full" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
          <p className="font-display text-2xl text-luxury-muted font-light">
            No properties found
          </p>
          <p className="font-sans text-sm text-luxury-muted/60">
            Try a different filter or check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
