// src/components/sections/HeroSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const slides = [
  { name: "Askia I", bg: "/images/properties/askia-i/cover.jpg" },
  { name: "Gana Villas", bg: "/images/properties/gana-villas/cover.jpg" },
  { name: "Embe Terraces", bg: "/images/properties/embe-terraces/cover.png" },
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".slide-bg",
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" },
      );

      gsap.fromTo(
        ".hero-reveal",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power3.out" },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [currentIndex]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[680px] overflow-hidden bg-black"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="slide-bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentIndex].bg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-luxury-cream/80" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="hero-reveal font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-white/90 mb-4 drop-shadow-md opacity-0">
          Est. 1999 · Engineering, Construction & Real Estate
        </p>

        <h1 className="hero-reveal font-display font-light text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] mb-6 opacity-0">
          Redefining Architecture <br />
          <span className="text-gilt-light italic font-serif">
            Across Abuja
          </span>
        </h1>

        <div className="hero-reveal flex flex-wrap gap-4 mt-4 opacity-0">
          <button
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-luxury-gold text-luxury-charcoal font-sans font-medium tracking-widest uppercase text-xs px-10 py-4 hover:bg-luxury-gold2 transition-all duration-300 cursor-pointer"
          >
            Explore Properties
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white/40 text-white font-sans font-medium tracking-widest uppercase text-xs px-10 py-4 hover:bg-white hover:text-luxury-cream transition-all duration-300 cursor-pointer"
          >
            Talk To Us
          </button>
        </div>
      </div>

      {/* Slide Descriptor Label Left Corner */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 z-10 flex items-center gap-3">
        <span className="font-sans text-[10px] tracking-[0.16em] text-white/60">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <span className="w-6 h-px bg-white/40" />
        <span className="font-sans text-[10px] tracking-[0.14em] uppercase text-white/80">
          {slides[currentIndex].name}
        </span>
      </div>

      {/* Dot selectors bottom right */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-10 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-px transition-all duration-500 cursor-pointer ${
              idx === currentIndex
                ? "w-8 bg-gilt"
                : "w-4 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
