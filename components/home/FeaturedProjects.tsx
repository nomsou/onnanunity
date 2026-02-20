"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/portfolio/PropertyCard";
import Button from "@/components/ui/Button";
import { getFeaturedProperties } from "@/utils/propertyutils";
import { staggerContainerVariants, scaleInVariants } from "@/hooks/useScrollAnimation";

export default function FeaturedProjects() {
  const featured = getFeaturedProperties();

  return (
    <SectionWrapper id="featured-projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <SectionHeading
          eyebrow="Our Portfolio"
          heading={`Featured\nDevelopments`}
          subheading="A curated selection of our most prestigious residential estates across Abuja."
        />
        <Button href="/portfolio" variant="outline" size="sm" className="shrink-0">
          View All Properties
        </Button>
      </div>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {featured.map((property) => (
          <motion.div key={property.id} variants={scaleInVariants}>
            <PropertyCard property={property} variant="featured" className="h-full" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
