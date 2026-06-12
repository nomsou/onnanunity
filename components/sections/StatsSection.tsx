// src/components/sections/StatsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const metrics = [
  { value: 469, suffix: "+", label: "Homes Delivered" },
  { value: 7, suffix: "", label: "Active Estates" },
  { value: 2000, suffix: "+", label: "Happy Residents" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
];

export default function StatsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Create a unified master timeline for the whole block layout
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. First grow the decorative, immersive bottom rules outward
      masterTl
        .fromTo(
          ".stat-line-rule",
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 1.2,
            ease: "luxury", // Uses your custom cubic-bezier from tailwind.config
          },
        )
        // 2. Safely slide up the individual counter metric columns
        .fromTo(
          ".stat-counter-box",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.8", // Overlap animations smoothly
        );

      // 3. Immersive, flicker-free odometer roll up using generic proxy tracking values
      gsap.utils.toArray<HTMLElement>(".counter-digit").forEach((digit) => {
        const targetValue = parseInt(
          digit.getAttribute("data-target") || "0",
          10,
        );

        // Proxy tracking variable prevents the text gradient from drawing jagged steps
        const countProxy = { value: 0 };

        gsap.to(countProxy, {
          value: targetValue,
          duration: 2.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: digit,
            start: "top 80%",
          },
          onUpdate: () => {
            // Snaps numbers seamlessly and prints thousands commas beautifully (e.g., 2,000)
            digit.innerText = Math.floor(countProxy.value).toLocaleString();
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-luxury-charcoal2 border-y border-border/40 py-24 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-0 md:divide-x md:divide-border/60">
          {metrics.map((stat, i) => (
            <div
              key={i}
              className="stat-counter-box flex flex-col justify-between h-28 md:px-10 first:pl-0 last:pr-0"
            >
              <div className="flex flex-col gap-1 items-center md:items-start">
                {/* Fixed Layout: Wraps text gradient safely inside a block container */}
                <span className="font-display text-4xl md:text-5xl bg-gold-gradient bg-clip-text text-transparent leading-none font-medium select-none tracking-tight">
                  <span className="counter-digit" data-target={stat.value}>
                    0
                  </span>
                  {stat.suffix}
                </span>

                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-muted font-medium mt-2 text-center md:text-left">
                  {stat.label}
                </span>
              </div>

              {/* Dynamic Rule: Immersive micro-interaction strip below metric elements */}
              <div className="w-12 h-[1px] bg-luxury-gold/30 hidden md:block mt-auto">
                <div className="stat-line-rule w-full h-full bg-luxury-gold origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
