"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { getTestimonials } from "@/lib/testimonials";
import {
  staggerContainerVariants,
  fadeUpVariants,
} from "@/hooks/useScrollAnimation";

export default function TestimonialsSection() {
  const testimonials = getTestimonials();

  return (
    <SectionWrapper background="dark2" id="testimonials">
      <SectionHeading
        eyebrow="Client Stories"
        heading="Words from our residents"
        subheading="Real experiences from people who now call an Onnan Unity development home."
        align="center"
        className="mb-14"
      />

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={fadeUpVariants}
            className="h-full"
          >
            <TestimonialCard testimonial={testimonial} className="h-full" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
