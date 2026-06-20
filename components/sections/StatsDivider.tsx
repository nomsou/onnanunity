"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StatsDividerProps {
  label?: string;
  value?: string;
}

export default function StatsDivider({
  label = "Excellence",
  value = "Since 1999",
}: StatsDividerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".divider-content",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-luxury-charcoal2 border-y border-border/40 py-16 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="divider-content flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-3">
            <span className="w-12 h-px bg-luxury-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
              {label}
            </span>
            <span className="w-12 h-px bg-luxury-gold" />
          </div>
          <span className="font-display text-3xl md:text-4xl font-light text-luxury-cream">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}
