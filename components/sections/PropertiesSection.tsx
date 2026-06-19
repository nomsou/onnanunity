"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getProperties } from "@/utils/propertyutils";
import type { Property } from "@/types";

// ─── Desktop Gallery ──────────────────────────────────────────────────────────

function DesktopGallery() {
  const properties = getProperties();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentProperty = properties[currentIndex];
  const allImages = currentProperty
    ? [currentProperty.coverImage, ...currentProperty.images]
    : [];

  // Initialize Lenis and GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    // Connect GSAP ScrollTrigger to Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Animation frame loop for Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // GSAP Animations
    const section = sectionRef.current;
    const content = contentRef.current;
    if (section && content) {
      // Section entrance animation
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

      // Image reveal animation
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

      // Info panel animation
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

      // Navigation buttons animation
      const navButtons = section.querySelectorAll(".nav-button");
      if (navButtons.length) {
        gsap.fromTo(
          navButtons,
          { x: (i) => (i === 0 ? -30 : 30), opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.6,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Thumbnails animation
      const thumbnails = section.querySelectorAll(".thumbnail");
      if (thumbnails.length) {
        gsap.fromTo(
          thumbnails,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.05,
            delay: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const nextImage = () => {
    const nextImageIndex = currentImageIndex + 1;

    // If we have more images in current property
    if (nextImageIndex < allImages.length) {
      setCurrentImageIndex(nextImageIndex);
    } else {
      // Go to next property, reset to first image
      const nextPropertyIndex = (currentIndex + 1) % properties.length;
      setCurrentIndex(nextPropertyIndex);
      setCurrentImageIndex(0);
    }
  };

  const prevImage = () => {
    const prevImageIndex = currentImageIndex - 1;

    // If we have previous images in current property
    if (prevImageIndex >= 0) {
      setCurrentImageIndex(prevImageIndex);
    } else {
      // Go to previous property, go to its last image
      const prevPropertyIndex =
        (currentIndex - 1 + properties.length) % properties.length;
      const prevProperty = properties[prevPropertyIndex];
      const prevPropertyImages = [
        prevProperty.coverImage,
        ...prevProperty.images,
      ];
      setCurrentIndex(prevPropertyIndex);
      setCurrentImageIndex(prevPropertyImages.length - 1);
    }
  };

  const goToProperty = (index: number) => {
    setCurrentIndex(index);
    setCurrentImageIndex(0);
  };

  if (!currentProperty) return null;

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      <div ref={contentRef} className="relative w-full h-full">
        {/* Main Image */}
        <div className="relative w-full h-full">
          <img
            src={allImages[currentImageIndex]}
            alt={currentProperty.name}
            className="gallery-image w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Lighter gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>

        {/* Property Info - Bottom Left */}
        <div className="property-info absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={14} className="text-[#C9A96E] shrink-0" />
              <span className="font-sans text-xs uppercase tracking-widest font-medium text-[#C9A96E]">
                {currentProperty.neighborhood}, Abuja
              </span>
            </div>

            <h2
              className="font-display font-light text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {currentProperty.name}
            </h2>

            <p className="font-sans text-white/70 font-light leading-relaxed mb-6 max-w-xl text-sm md:text-base">
              {currentProperty.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Maximize2 size={16} className="text-[#C9A96E]/80" />
                <span className="font-sans text-sm text-white/80">
                  {currentProperty.sqft.toLocaleString()} ft²
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble size={16} className="text-[#C9A96E]/80" />
                <span className="font-sans text-sm text-white/80">
                  {currentProperty.beds} Beds
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath size={16} className="text-[#C9A96E]/80" />
                <span className="font-sans text-sm text-white/80">
                  {currentProperty.baths} Baths
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

        {/* Navigation Buttons - Vertically centered */}
        <button
          onClick={prevImage}
          className="nav-button absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 border border-white/10 hover:border-[#C9A96E]/30 backdrop-blur-sm"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextImage}
          className="nav-button absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 border border-white/10 hover:border-[#C9A96E]/30 backdrop-blur-sm"
        >
          <ChevronRight size={28} />
        </button>

        {/* Counters - Top right */}
        <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">
          <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <span className="font-sans text-sm tracking-[0.2em] text-white/60">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(properties.length).padStart(2, "0")}
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

        {/* Thumbnails - Property navigation */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-2 px-4 max-w-[80%] overflow-x-auto pb-2">
          {properties.map((property, index) => (
            <button
              key={property.id}
              onClick={() => goToProperty(index)}
              className={`thumbnail relative w-16 h-12 overflow-hidden rounded-lg transition-all duration-300 flex-shrink-0 ${
                index === currentIndex
                  ? "ring-2 ring-[#C9A96E] scale-110"
                  : "opacity-50 hover:opacity-75"
              }`}
            >
              <img
                src={property.coverImage}
                alt={property.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Image dots */}
        {allImages.length > 1 && (
          <div className="absolute bottom-48 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 px-4">
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
            Navigate
          </span>
          <div className="flex gap-1">
            {properties.map((_, index) => (
              <div
                key={index}
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#C9A96E]"
                    : "w-4 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mobile Version ──────────────────────────────────────────────────────────

function MobileGallery() {
  const properties = getProperties();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for mobile too
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Animate mobile cards
    const cards = sectionRef.current?.querySelectorAll(".mobile-card");
    if (cards) {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="bg-black min-h-screen px-4 py-8"
    >
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8 pt-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-6 bg-[#C9A96E]" />
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C9A96E] font-medium">
              Featured Properties
            </span>
          </div>
          <h2 className="font-display font-light text-3xl text-white">
            The Collection
          </h2>
          <p className="font-sans text-sm text-white/40 mt-2">
            {properties.length} luxury developments across Abuja
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {properties.map((property) => {
            const allImages = [property.coverImage, ...property.images];
            const [currentImg, setCurrentImg] = useState(0);

            return (
              <div
                key={property.id}
                className="mobile-card bg-white/5 rounded-xl overflow-hidden border border-white/5"
              >
                <div className="relative h-64">
                  <img
                    src={allImages[currentImg]}
                    alt={property.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Image navigation for mobile */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImg(
                            (prev) =>
                              (prev - 1 + allImages.length) % allImages.length,
                          );
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 border border-white/10"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImg(
                            (prev) => (prev + 1) % allImages.length,
                          );
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 border border-white/10"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}

                  {/* Image counter */}
                  {allImages.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                      <span className="font-sans text-[8px] tracking-[0.2em] text-white/40">
                        {String(currentImg + 1).padStart(2, "0")} /{" "}
                        {String(allImages.length).padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={10} className="text-[#C9A96E]" />
                      <span className="font-sans text-[9px] uppercase tracking-widest font-medium text-[#C9A96E]">
                        {property.neighborhood}
                      </span>
                    </div>

                    <h3
                      className="font-display font-light text-white leading-tight mb-2"
                      style={{ fontSize: "clamp(1.4rem, 5vw, 2rem)" }}
                    >
                      {property.name}
                    </h3>

                    <div className="flex items-center gap-4 text-white/50 text-xs">
                      <div className="flex items-center gap-1.5">
                        <Maximize2 size={10} />
                        <span>{property.sqft.toLocaleString()} ft²</span>
                      </div>
                      <div className="w-px h-2.5 bg-white/10" />
                      <div className="flex items-center gap-1.5">
                        <BedDouble size={10} />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="w-px h-2.5 bg-white/10" />
                      <div className="flex items-center gap-1.5">
                        <Bath size={10} />
                        <span>{property.baths} Baths</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-sans text-sm text-white/50 leading-relaxed mb-3">
                    {property.tagline}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-widest text-[#C9A96E] hover:text-white transition-colors duration-300 group"
                  >
                    <span>Inquire</span>
                    <ArrowRight
                      size={10}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="h-12" />
      </div>
    </section>
  );
}

// ─── Root Export ─────────────────────────────────────────────────────────────

export default function PropertiesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile ? <MobileGallery /> : <DesktopGallery />;
}
