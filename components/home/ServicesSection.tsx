"use client";

import { motion } from "framer-motion";
import { Building2, HardHat, Zap } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/lib/utils";
import {
  staggerContainerVariants,
  fadeUpVariants,
} from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={28} />,
  HardHat: <HardHat size={28} />,
  Zap: <Zap size={28} />,
};

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <SectionHeading
          eyebrow="What We Do"
          heading="Our Services"
          subheading="Three core disciplines, one shared commitment to excellence."
        />
        <Button href="/services" variant="ghost" size="sm" className="shrink-0">
          Learn More →
        </Button>
      </div>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={fadeUpVariants}
            className="bg-luxury-charcoal p-10 flex flex-col gap-6 group hover:bg-luxury-charcoal2 transition-colors duration-300"
          >
            <div className="text-luxury-gold group-hover:scale-110 transition-transform duration-300 w-fit">
              {iconMap[service.icon] ?? <Zap size={28} />}
            </div>

            <span className="font-display text-5xl font-light text-luxury-gold/10 leading-none -mt-2">
              0{services.indexOf(service) + 1}
            </span>

            <h3 className="font-display text-2xl font-light text-luxury-cream -mt-4">
              {service.title}
            </h3>

            <p className="font-sans text-sm text-luxury-muted leading-relaxed">
              {service.description}
            </p>

            <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-white/5">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="font-sans text-xs text-luxury-muted flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-luxury-gold shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
