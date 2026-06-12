// src/components/sections/ServicesSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, HardHat, Zap } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Real Estate Development",
    description:
      "From land acquisition through design, construction, and final handover, we deliver residential communities built to last. Every development is a reflection of our commitment to quality.",
    features: [
      "Land Acquisition",
      "Architectural Design",
      "Project Management",
      "Quality Assurance",
    ],
  },
  {
    icon: HardHat,
    title: "Civil Construction",
    description:
      "Our construction arm executes projects with precision and professionalism, leveraging experienced site teams and premium materials to bring layouts to life on schedule.",
    features: [
      "Structural Works",
      "Interior Finishing",
      "Landscaping",
      "Infrastructure",
    ],
  },
  {
    icon: Zap,
    title: "Solar Power Solutions",
    description:
      "Sustainability is at the core of how we build. Through our engineering subsidiary, every development is equipped with localized solar power networks that minimize grid dependency.",
    features: [
      "Solar Installation",
      "Battery Storage",
      "Grid Integration",
      "Maintenance",
    ],
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".services-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });

      gsap.from(".service-panel-card", {
        y: 45,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-card-grid", start: "top 75%" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-luxury-charcoal py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      id="services"
    >
      <div className="services-title flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="gold-rule" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
              What We Do
            </span>
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl text-luxury-cream">
            Our Services
          </h2>
          <p className="font-sans text-base text-luxury-muted mt-2 max-w-md">
            Three core disciplines, one shared commitment to excellence.
          </p>
        </div>
      </div>

      <div className="services-card-grid grid grid-cols-1 lg:grid-cols-3 gap-px bg-border-custom/30 border border-border-custom/30">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="service-panel-card bg-luxury-charcoal p-10 flex flex-col gap-6 group hover:bg-luxury-charcoal2 transition-colors duration-300"
          >
            <div className="text-luxury-gold transition-transform duration-300 group-hover:scale-105 w-fit">
              <item.icon size={28} />
            </div>
            <span className="font-display text-5xl font-light text-luxury-gold/10 leading-none">
              0{idx + 1}
            </span>
            <h3 className="font-display text-2xl font-light text-luxury-cream -mt-2">
              {item.title}
            </h3>
            <p className="font-sans text-sm text-luxury-muted leading-relaxed">
              {item.description}
            </p>

            <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-border-custom/30">
              {item.features.map((feature) => (
                <li
                  key={feature}
                  className="font-sans text-xs text-luxury-muted flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-luxury-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
