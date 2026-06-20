"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Property } from "@/types";

interface PropertyFullscreenSectionProps {
  property: Property;
  index: number;
  total: number;
}

export default function PropertyFullscreenSection({
  property,
  index,
  total,
}: PropertyFullscreenSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [property.coverImage, ...property.images];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const content = contentRef.current;
      if (!section || !content) return;

      gsap.fromTo(
        content,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const image = section.querySelector(".gallery-image");
      if (image) {
        gsap.fromTo(
          image,
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      const info = section.querySelector(".property-info");
      if (info) {
        gsap.fromTo(
          info,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: info,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      id={property.slug}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      <div ref={contentRef} className="relative w-full h-full">
        {/* Main Image */}
        <div className="relative w-full h-full">
          <img
            src={allImages[currentImageIndex]}
            alt={property.name}
            className="gallery-image w-full h-full object-cover transition-opacity duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>

        {/* Property Info - Bottom Left */}
        <div className="property-info absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={14} className="text-[#C9A96E] shrink-0" />
              <span className="font-sans text-xs uppercase tracking-widest font-medium text-[#C9A96E]">
                {property.neighborhood}, Abuja
              </span>
            </div>

            <h2
              className="font-display font-light text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {property.name}
            </h2>

            <p className="font-sans text-white/70 font-light leading-relaxed mb-6 max-w-xl text-sm md:text-base">
              {property.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Maximize2 size={16} className="text-[#C9A96E]/80" />
                <span className="font-sans text-sm text-white/80">
                  {property.sqft.toLocaleString()} ft²
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble size={16} className="text-[#C9A96E]/80" />
                <span className="font-sans text-sm text-white/80">
                  {property.beds} Beds
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath size={16} className="text-[#C9A96E]/80" />
                <span className="font-sans text-sm text-white/80">
                  {property.baths} Baths
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-widest text-[#C9A96E] hover:text-white transition-colors duration-300 group"
            >
              <span>Inquire About Availability</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 border border-white/10 hover:border-[#C9A96E]/30 backdrop-blur-sm"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 border border-white/10 hover:border-[#C9A96E]/30 backdrop-blur-sm"
        >
          <ChevronRight size={28} />
        </button>

        {/* Counter - Top right */}
        <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">
          <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <span className="font-sans text-sm tracking-[0.2em] text-white/60">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
          {allImages.length > 1 && (
            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              <span className="font-sans text-xs tracking-[0.2em] text-white/40">
                {String(currentImageIndex + 1).padStart(2, "0")} /{" "}
                {String(allImages.length).padStart(2, "0")}
              </span>
            </div>
          )}
        </div>

        {/* Image dots */}
        {allImages.length > 1 && (
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 px-4">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "w-6 bg-[#C9A96E]"
                    : "w-3 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
          <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-white/30">
            Scroll
          </span>
          <div className="flex gap-1">
            <div className="w-8 h-0.5 rounded-full bg-[#C9A96E]" />
          </div>
        </div>
      </div>
    </section>
  );
}
