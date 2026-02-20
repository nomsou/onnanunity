"use client";

import { motion } from "framer-motion";
import {
  Zap, ShieldCheck, Waves, Trees, Wifi, Car, Droplets,
  Dumbbell, Building2, Sun, Lock, Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainerVariants, fadeUpVariants } from "@/hooks/useScrollAnimation";
import type { PropertyFeature } from "@/types";

// Map icon name strings from data to actual Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Zap:         <Zap size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Waves:       <Waves size={22} />,
  Trees:       <Trees size={22} />,
  Wifi:        <Wifi size={22} />,
  Car:         <Car size={22} />,
  Droplets:    <Droplets size={22} />,
  Dumbbell:    <Dumbbell size={22} />,
  Building2:   <Building2 size={22} />,
  Sun:         <Sun size={22} />,
  Lock:        <Lock size={22} />,
  Flame:       <Flame size={22} />,
};

interface FeaturesGridProps {
  features:   PropertyFeature[];
  className?: string;
}

export default function FeaturesGrid({ features, className }: FeaturesGridProps) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5",
        className
      )}
    >
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          variants={fadeUpVariants}
          className={cn(
            "bg-luxury-charcoal2 p-8 flex flex-col gap-4",
            "hover:bg-luxury-charcoal3 transition-colors duration-300 group"
          )}
        >
          <div className="text-luxury-gold group-hover:scale-110 transition-transform duration-300 w-fit">
            {iconMap[feature.icon] ?? <Zap size={22} />}
          </div>
          <div>
            <h4 className="font-sans text-sm font-medium text-luxury-cream mb-1">
              {feature.title}
            </h4>
            <p className="font-sans text-xs text-luxury-muted leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
