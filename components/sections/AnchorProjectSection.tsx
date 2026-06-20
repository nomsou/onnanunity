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

const MADEIRA = {
  name: "The Madeira",
  tagline: "Hospitality • Serviced Apartments",
  description:
    "The Madeira represents the pinnacle of Onnan Unity's commitment to excellence. " +
    "This anchor development sets a new benchmark for premium living in Abuja, " +
    "featuring unparalleled craftsmanship, prime location, and world-class amenities. " +
    "Every detail has been meticulously curated to offer residents an extraordinary " +
    "living experience that redefines luxury.",
  neighborhood: "Maitama",
  beds: 6,
  baths: 5,
  sqm: 604,
  images: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1920&q=80",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1920&q=80",
  ],
};

export default function AnchorProjectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = MADEIRA.images;

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

  // useEffect(() => {
  //   if (allImages.length <= 1) return;
  //   const timer = setInterval(() => {
  //     setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [allImages.length]);

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
      id="anchor"
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      <div ref={contentRef} className="relative w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={allImages[currentImageIndex]}
            alt="The Madeira"
            className="gallery-image w-full h-full object-cover transition-opacity duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>

        <div className="property-info absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
          <div className="max-w-4xl">
            {/* <div className="flex items-center gap-3 mb-3">
              <span className="text-[#C9A96E] font-sans text-[10px] uppercase tracking-[0.25em] font-medium">
                ★ Anchor Project
              </span>
              <span className="w-8 h-px bg-[#C9A96E]/50" />
            </div> */}

            <div className="flex items-center gap-3 mb-3">
              <MapPin size={14} className="text-[#C9A96E] shrink-0" />
              <span className="font-sans text-xs uppercase tracking-widest font-medium text-[#C9A96E]">
                {MADEIRA.neighborhood}, Abuja
              </span>
            </div>

            <h2
              className="font-display font-light text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {MADEIRA.name}
            </h2>

            <p className="font-sans text-white/70 font-light leading-relaxed mb-6 max-w-xl text-sm md:text-base">
              {MADEIRA.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Maximize2 size={16} className="text-[#C9A96E]/80" />
                <span className="font-sans text-sm text-white/80">
                  {MADEIRA.sqm} m²
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble size={16} className="text-[#C9A96E]/80" />
                <span className="font-sans text-sm text-white/80">
                  {MADEIRA.beds} Beds
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath size={16} className="text-[#C9A96E]/80" />
                <span className="font-sans text-sm text-white/80">
                  {MADEIRA.baths} Baths
                </span>
              </div>
            </div>

            <a
              href="#footer"
              className="inline-flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-widest text-[#C9A96E] hover:text-white transition-colors duration-300 group"
            >
              <span>Enquire About The Madeira</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>
          </div>
        </div>

        <button
          onClick={prevImage}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 border border-white/10 hover:border-[#C9A96E]/30 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 border border-white/10 hover:border-[#C9A96E]/30 backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

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
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

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
