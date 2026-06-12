// src/components/sections/StatsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const metrics = [
  { value: 469, suffix: "+", label: "Homes Delivered" },
  { value: 7, suffix: "", label: "Active Estates" },
  { value: 2000, suffix: "+", label: "Happy Residents" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
];

export default function StatsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".stat-counter-box", {
        y: 35,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.utils.toArray<HTMLElement>(".counter-digit").forEach((digit) => {
        const target = parseInt(digit.getAttribute("data-target") || "0", 10);
        gsap.to(digit, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power3.out",
          scrollTrigger: {
            trigger: digit,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-luxury-charcoal2 border-y border-border-custom/40 py-16 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border-custom">
          {metrics.map((stat, i) => (
            <div
              key={i}
              className="stat-counter-box flex flex-col gap-1 items-center md:items-start md:px-10 first:pl-0 last:pr-0"
            >
              <span className="font-display text-4xl md:text-5xl text-gold-gradient leading-none font-medium">
                <span className="counter-digit" data-target={stat.value}>
                  0
                </span>
                {stat.suffix}
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-luxury-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
