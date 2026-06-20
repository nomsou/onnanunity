"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";

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

export default function BrandStorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".mission-img-frame", {
        x: -50,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      gsap.from(".mission-content-frame", {
        x: 50,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-luxury-charcoal2 py-24 px-6 md:px-12 lg:px-20 border-y border-border-custom/40"
      id="mission"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="mission-img-frame relative">
          <div className="relative h-[500px] lg:h-[580px] overflow-hidden bg-luxury-charcoal3">
            <img
              src="/images/properties/embe-terraces/gallery-1.png"
              alt="Onnan Unity — Our Mission"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-luxury-gold/30 -z-1" />
          <div className="absolute -top-4 -left-4 w-20 h-20 border border-luxury-gold/15 -z-1" />
        </div>

        <div className="mission-content-frame flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="gold-rule" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
              Our Mission
            </span>
          </div>
          <h2 className="font-display font-light text-3xl md:text-5xl text-luxury-cream leading-tight">
            Built to last. Designed to inspire.
          </h2>
          <p className="font-sans text-sm text-luxury-muted leading-relaxed max-w-lg">
            Onnan Unity delivers premium real estate across Abuja's most
            sought-after neighborhoods. Every home is crafted with precision and
            purpose.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle
                  size={16}
                  className="text-luxury-gold mt-0.5 shrink-0"
                />
                <div>
                  <h4 className="font-sans text-sm font-medium text-luxury-cream mb-0.5">
                    {pillar.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
