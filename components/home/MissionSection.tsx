"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    title: "Meticulous Craftsmanship",
    description:
      "Every detail — from structural integrity to interior finishes — is executed to the highest standards.",
  },
  {
    title: "Prime Locations",
    description:
      "All our developments are positioned in Abuja's most coveted and well-connected neighbourhoods.",
  },
  {
    title: "Trusted by Thousands",
    description:
      "A growing community of homeowners across Abuja and beyond who chose Onnan Unity.",
  },
];

export default function MissionSection() {
  return (
    <SectionWrapper background="dark2" id="mission">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image Side */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Gold wipe reveal overlay — animates away to reveal image */}
          <motion.div
            className="absolute inset-0 bg-luxury-gold z-10 origin-left"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          />
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
            <Image
              src="/images/hero/mission-image.jpg"
              alt="Onnan Unity — Our Mission"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-luxury-gold/30 -z-10" />
          <div className="absolute -top-4 -left-4 w-20 h-20 border border-luxury-gold/15 -z-10" />
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-8"
        >
          <SectionHeading
            eyebrow="Our Mission"
            heading="Redefine luxury living by delivering exceptional real estate experiences."
          />

          <p className="font-sans text-sm text-luxury-muted leading-relaxed">
            Onnan Unity is renowned for its meticulous attention to detail,
            ensuring that every aspect of a luxury property is impeccably
            crafted and maintained. From exquisite finishes and luxurious
            amenities to the seamless integration of smart home technology, we
            set the standard for what premium living in Abuja should feel like.
          </p>

          <div className="flex flex-col gap-5">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-4">
                <CheckCircle
                  size={16}
                  className="text-luxury-gold mt-0.5 shrink-0"
                />
                <div>
                  <h4 className="font-sans text-sm font-medium text-luxury-cream mb-1">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs text-luxury-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button href="/about" variant="outline" size="md" className="w-fit">
            Our Story
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
