"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Madeira data with real placeholder images from the internet
const MADEIRA = {
  name: "The Madeira",
  tagline: "The Pinnacle of Premium Living",
  description:
    "The Madeira represents the pinnacle of Onnan Unity's commitment to excellence. " +
    "This anchor development sets a new benchmark for premium living in Abuja, " +
    "featuring unparalleled craftsmanship, prime location, and world-class amenities. " +
    "Every detail has been meticulously curated to offer residents an extraordinary " +
    "living experience that redefines luxury.",
  neighborhood: "Abuja",
  beds: 6,
  baths: 5,
  sqft: 6500,
  // Using picsum.photos for beautiful random images
  images: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1920&q=80",
    "https://images.unsplash.com/photo-1600607687644-aac3c3ac31b8?w=1920&q=80",
  ],
};

export default function AnchorProjectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".anchor-content",
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".anchor-reveal",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (MADEIRA.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % MADEIRA.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentImage = MADEIRA.images[currentImageIndex];
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % MADEIRA.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + MADEIRA.images.length) % MADEIRA.images.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black"
      id="anchor"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        {/* Much lighter gradient - images should be visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 via-transparent to-luxury-gold/5" />
      </div>

      {/* Main Content - Clean, no badges */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto anchor-content">
        {/* Removed Flagship Development eyebrow - felt intrusive */}

        <h1 className="anchor-reveal font-display font-light text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] mb-4">
          {MADEIRA.name}
        </h1>

        <p className="anchor-reveal font-sans text-white/80 text-sm md:text-base max-w-2xl leading-relaxed mb-6">
          {MADEIRA.tagline}
        </p>

        {/* <div className="anchor-reveal flex flex-wrap items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Maximize2 size={16} className="text-luxury-gold/80" />
            <span className="font-sans text-sm text-white/80">
              {MADEIRA.sqft.toLocaleString()} ft²
            </span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <BedDouble size={16} className="text-luxury-gold/80" />
            <span className="font-sans text-sm text-white/80">
              {MADEIRA.beds} Beds
            </span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <Bath size={16} className="text-luxury-gold/80" />
            <span className="font-sans text-sm text-white/80">
              {MADEIRA.baths} Baths
            </span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-luxury-gold/80" />
            <span className="font-sans text-sm text-white/80">
              {MADEIRA.neighborhood}
            </span>
          </div>
        </div> */}

        <div className="anchor-reveal flex flex-wrap gap-4">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-luxury-gold text-luxury-charcoal font-sans font-medium tracking-widest uppercase text-xs px-10 py-4 hover:bg-luxury-gold2 transition-all duration-300 cursor-pointer"
          >
            Enquire Now
          </button>
          <button
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white/40 text-white font-sans font-medium tracking-widest uppercase text-xs px-10 py-4 hover:bg-white hover:text-luxury-cream transition-all duration-300 cursor-pointer"
          >
            View All Properties
          </button>
        </div>
      </div>

      {/* Image Navigation Controls */}
      {MADEIRA.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 border border-white/10 hover:border-luxury-gold/30 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 border border-white/10 hover:border-luxury-gold/30 backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image Dots - cleaner, minimal */}
      {MADEIRA.images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {MADEIRA.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentImageIndex
                  ? "w-8 bg-luxury-gold"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {MADEIRA.images.length > 1 && (
        <div className="absolute bottom-8 right-8 z-10 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
          <span className="font-sans text-[10px] tracking-[0.2em] text-white/50">
            {String(currentImageIndex + 1).padStart(2, "0")} /{" "}
            {String(MADEIRA.images.length).padStart(2, "0")}
          </span>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none opacity-40">
        <span className="font-sans text-[7px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
