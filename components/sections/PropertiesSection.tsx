"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BedDouble, Bath, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { getProperties } from "@/utils/propertyutils";
import type { Property } from "@/types";

// ─── 3D tile entrance config ──────────────────────────────────────────────────

const TILE_3D = [
  { rotY: -58, rotX: 3, z: -340, delay: 0.0 },
  { rotY: 62, rotX: -3, z: -300, delay: 0.1 },
  { rotY: -52, rotX: 4, z: -320, delay: 0.18 },
  { rotY: 55, rotX: -4, z: -280, delay: 0.26 },
  { rotY: -48, rotX: 3, z: -260, delay: 0.32 },
  { rotY: 45, rotX: -2, z: -240, delay: 0.38 },
];

// ─── Mosaic Grid ──────────────────────────────────────────────────────────────

function MosaicGrid({ images, name }: { images: string[]; name: string }) {
  const count = Math.min(images.length, 6);

  const Tile = ({ i, className }: { i: number; className: string }) => (
    <div
      className={`mosaic-tile overflow-hidden ${className}`}
      style={{
        opacity: 0,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        willChange: "transform, opacity",
      }}
    >
      <img
        src={images[i % images.length]}
        alt={`${name} ${i + 1}`}
        className="mosaic-img w-full h-full object-cover"
        style={{ willChange: "transform" }}
        loading="lazy"
      />
    </div>
  );

  if (count === 1)
    return (
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        <Tile i={0} className="w-full h-full" />
      </div>
    );
  if (count === 2)
    return (
      <div
        className="absolute inset-0 flex gap-[3px] bg-black"
        style={{ perspective: "1200px" }}
      >
        <Tile i={0} className="flex-1 h-full" />
        <Tile i={1} className="flex-1 h-full" />
      </div>
    );
  if (count === 3)
    return (
      <div
        className="absolute inset-0 flex gap-[3px] bg-black"
        style={{ perspective: "1400px" }}
      >
        <Tile i={0} className="w-[58%] h-full" />
        <div className="flex flex-col gap-[3px] flex-1">
          <Tile i={1} className="flex-1" />
          <Tile i={2} className="flex-1" />
        </div>
      </div>
    );
  if (count === 4)
    return (
      <div
        className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[3px] bg-black"
        style={{ perspective: "1400px" }}
      >
        <Tile i={0} className="" />
        <Tile i={1} className="" />
        <Tile i={2} className="" />
        <Tile i={3} className="" />
      </div>
    );
  if (count === 5)
    return (
      <div
        className="absolute inset-0 flex flex-col gap-[3px] bg-black"
        style={{ perspective: "1600px" }}
      >
        <Tile i={0} className="h-[56%]" />
        <div className="flex gap-[3px] flex-1">
          <Tile i={1} className="flex-1" />
          <Tile i={2} className="flex-1" />
          <Tile i={3} className="flex-1" />
          <Tile i={4} className="flex-1" />
        </div>
      </div>
    );
  return (
    <div
      className="absolute inset-0 flex flex-col gap-[3px] bg-black"
      style={{ perspective: "1600px" }}
    >
      <div className="flex gap-[3px] flex-1">
        <Tile i={0} className="w-[55%]" />
        <Tile i={1} className="flex-1" />
        <Tile i={2} className="flex-1" />
      </div>
      <div className="flex gap-[3px] flex-1">
        <Tile i={3} className="flex-1" />
        <Tile i={4} className="flex-1" />
        <Tile i={5} className="w-[40%]" />
      </div>
    </div>
  );
}

// ─── Cover Slide (desktop) ────────────────────────────────────────────────────

function CoverSlide({
  property,
  index,
}: {
  property: Property;
  index: number;
}) {
  const words = property.name.split(" ");
  const total = getProperties().length;

  return (
    <div
      className="property-cover-slide relative w-screen h-full shrink-0 overflow-hidden"
      data-index={index}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={property.coverImage}
          alt={property.name}
          className="cover-bg-img w-full h-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Gold rule */}
      <div
        className="cover-rule absolute left-7 md:left-10 top-0 bottom-0 w-px bg-[#C9A96E]/60"
        style={{ transformOrigin: "bottom center", transform: "scaleY(0)" }}
      />

      {/* Section header — first slide only */}
      {index === 0 && (
        <div className="absolute top-0 left-0 right-0 pt-24 md:pt-28 pl-14 md:pl-20 lg:pl-24 z-10 pointer-events-none">
          <div
            className="cover-eyebrow flex items-center gap-3 mb-1.5"
            style={{ opacity: 0 }}
          >
            <span className="h-px w-6 bg-[#C9A96E] inline-block" />
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C9A96E] font-medium">
              Selected Work
            </span>
          </div>
          <h2
            className="cover-section-title font-display font-light text-3xl md:text-4xl lg:text-5xl text-white"
            style={{ opacity: 0 }}
          >
            The Exhibition
          </h2>
        </div>
      )}

      {/* Counter */}
      <div className="absolute top-24 md:top-28 right-8 md:right-14 z-10 pointer-events-none">
        <span className="font-sans text-[10px] tracking-[0.2em] text-white/40">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Metadata */}
      <div className="absolute bottom-0 left-14 md:left-20 lg:left-24 z-10 pb-12 md:pb-16 max-w-lg">
        <div
          className="cover-location flex items-center gap-2 mb-4"
          style={{ opacity: 0 }}
        >
          <MapPin size={11} className="text-[#C9A96E] shrink-0" />
          <span className="font-sans text-[10px] uppercase tracking-widest font-medium text-[#C9A96E]">
            {property.neighborhood}, Abuja
          </span>
        </div>

        <h3 className="font-display font-light leading-none mb-5">
          {words.map((word, wi) => (
            <span key={wi} className="inline-block mr-[0.22em] overflow-hidden">
              <span
                className="cover-name-word inline-block text-white"
                style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)", opacity: 0 }}
              >
                {word}
              </span>
            </span>
          ))}
        </h3>

        <p
          className="cover-tagline font-sans text-sm text-white/65 font-light leading-relaxed mb-6 max-w-sm"
          style={{ opacity: 0 }}
        >
          {property.tagline}
        </p>

        <div
          className="cover-specs flex items-center gap-5 mb-8"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-1.5">
            <Maximize2 size={12} className="text-[#C9A96E]/80" />
            <span className="font-sans text-xs text-white/75">
              {property.sqft.toLocaleString()} ft²
            </span>
          </div>
          <div className="w-px h-3 bg-white/25" />
          <div className="flex items-center gap-1.5">
            <BedDouble size={12} className="text-[#C9A96E]/80" />
            <span className="font-sans text-xs text-white/75">
              {property.beds} Beds
            </span>
          </div>
          <div className="w-px h-3 bg-white/25" />
          <div className="flex items-center gap-1.5">
            <Bath size={12} className="text-[#C9A96E]/80" />
            <span className="font-sans text-xs text-white/75">
              {property.baths} Baths
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="cover-cta inline-flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-widest text-[#C9A96E] hover:text-white transition-colors duration-300 group"
          style={{ opacity: 0 }}
        >
          <span>Inquire About Availability</span>
          <ArrowRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </a>
      </div>

      {index === 0 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
          <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-white/35">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      )}
    </div>
  );
}

// ─── Gallery Slide (desktop) ──────────────────────────────────────────────────

function GallerySlide({
  property,
  index,
}: {
  property: Property;
  index: number;
}) {
  const allImages = [property.coverImage, ...property.images].filter(
    (src, i, arr) => arr.indexOf(src) === i,
  );

  return (
    <div
      className="property-gallery-slide relative w-screen h-full shrink-0 overflow-hidden bg-black"
      data-index={index}
    >
      <MosaicGrid images={allImages} name={property.name} />

      <div className="gallery-overlay absolute inset-0 bg-black/85 pointer-events-none" />

      <div
        className="gallery-watermark absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ perspective: "800px" }}
      >
        <span
          className="gallery-watermark-text font-display font-light text-white select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(5rem, 13vw, 13rem)",
            letterSpacing: "-0.02em",
            opacity: 0,
          }}
        >
          {property.name}
        </span>
      </div>

      <div
        className="gallery-label absolute top-24 md:top-28 left-14 md:left-20 lg:left-24 z-10 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="h-px w-6 bg-[#C9A96E]" />
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C9A96E] font-medium">
            Gallery
          </span>
        </div>
        <p className="font-sans text-[10px] text-white/45 tracking-widest uppercase">
          {allImages.length} {allImages.length === 1 ? "Image" : "Images"}
        </p>
      </div>

      <div
        className="gallery-footer absolute bottom-12 right-8 md:right-14 z-10 text-right pointer-events-none"
        style={{ opacity: 0 }}
      >
        <p className="font-display font-light text-white/55 text-lg md:text-2xl mb-1">
          {property.name}
        </p>
        {index < 6 && (
          <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/35">
            Next →
          </p>
        )}
      </div>

      <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-[#C9A96E]/20 z-10" />
    </div>
  );
}

// ─── Mobile Card (replaces the entire horizontal scroll on small screens) ─────

function MobilePropertyCard({
  property,
  index,
  total,
}: {
  property: Property;
  index: number;
  total: number;
}) {
  const allImages = [property.coverImage, ...property.images].filter(
    (src, i, arr) => arr.indexOf(src) === i,
  );
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Simple image switcher for the mobile thumbnail strip
  return (
    <div
      ref={cardRef}
      className="mobile-property-card relative w-full overflow-hidden bg-black"
      style={{ height: "92vw", maxHeight: 520, minHeight: 380 }}
    >
      {/* Cover image */}
      <img
        src={allImages[active]}
        alt={property.name}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Counter */}
      <div className="absolute top-4 right-4 z-10">
        <span className="font-sans text-[10px] tracking-[0.2em] text-white/40">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Metadata */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-12">
        {/* Location */}
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={10} className="text-[#C9A96E] shrink-0" />
          <span className="font-sans text-[9px] uppercase tracking-widest font-medium text-[#C9A96E]">
            {property.neighborhood}, Abuja
          </span>
        </div>

        {/* Name */}
        <h3
          className="font-display font-light text-white leading-none mb-2"
          style={{ fontSize: "clamp(1.8rem, 7vw, 2.8rem)" }}
        >
          {property.name}
        </h3>

        {/* Specs row */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            <Maximize2 size={10} className="text-[#C9A96E]/80" />
            <span className="font-sans text-[10px] text-white/70">
              {property.sqft.toLocaleString()} ft²
            </span>
          </div>
          <div className="w-px h-2.5 bg-white/20" />
          <div className="flex items-center gap-1">
            <BedDouble size={10} className="text-[#C9A96E]/80" />
            <span className="font-sans text-[10px] text-white/70">
              {property.beds} Beds
            </span>
          </div>
          <div className="w-px h-2.5 bg-white/20" />
          <div className="flex items-center gap-1">
            <Bath size={10} className="text-[#C9A96E]/80" />
            <span className="font-sans text-[10px] text-white/70">
              {property.baths} Baths
            </span>
          </div>
        </div>

        {/* Thumbnail strip + CTA row */}
        <div className="flex items-center justify-between gap-3">
          {/* Thumbnails */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
            {allImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="shrink-0 overflow-hidden transition-all duration-300"
                style={{
                  width: 36,
                  height: 28,
                  outline:
                    active === i
                      ? "1.5px solid #C9A96E"
                      : "1.5px solid transparent",
                  outlineOffset: 1,
                  opacity: active === i ? 1 : 0.5,
                }}
                aria-label={`View image ${i + 1}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 font-sans text-[9px] font-medium uppercase tracking-widest text-[#C9A96E] hover:text-white transition-colors duration-300 group"
          >
            <span>Inquire</span>
            <ArrowRight
              size={10}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Section ───────────────────────────────────────────────────────────

function MobileSection() {
  const properties = getProperties();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(
      ".mobile-property-card",
    );
    if (!cards) return;

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="bg-black px-0 py-0" id="portfolio">
      {/* Section header */}
      <div className="px-5 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-6 bg-[#C9A96E] inline-block" />
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C9A96E] font-medium">
            Selected Work
          </span>
        </div>
        <h2 className="font-display font-light text-3xl text-white">
          The Exhibition
        </h2>
        <p className="font-sans text-sm text-white/45 mt-2">
          {properties.length} developments across Abuja
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-[3px]">
        {properties.map((property, index) => (
          <MobilePropertyCard
            key={property.id}
            property={property}
            index={index}
            total={properties.length}
          />
        ))}
      </div>

      {/* Bottom padding */}
      <div className="h-10 bg-black" />
    </section>
  );
}

// ─── Desktop Section ──────────────────────────────────────────────────────────

function DesktopSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const properties = getProperties();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalSlides = properties.length * 2;
    const getScrollAmt = () => (totalSlides - 1) * window.innerWidth;

    const hTween = gsap.to(track, {
      x: () => -getScrollAmt(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.4,
        start: "top top",
        end: () => `+=${getScrollAmt()}`,
        invalidateOnRefresh: true,
      },
    });

    // ── Cover slide animations ────────────────────────────────────────
    track
      .querySelectorAll<HTMLElement>(".property-cover-slide")
      .forEach((slide) => {
        const tc = {
          trigger: slide,
          containerAnimation: hTween,
          start: "left 55%",
          toggleActions: "play none none reverse" as const,
        };

        const bg = slide.querySelector<HTMLElement>(".cover-bg-img");
        if (bg) {
          gsap.fromTo(
            bg,
            { scale: 1.09 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        }

        const rule = slide.querySelector<HTMLElement>(".cover-rule");
        if (rule)
          gsap.to(rule, {
            scaleY: 1,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: { ...tc, start: "left 62%" },
          });

        const eyebrow = slide.querySelector<HTMLElement>(".cover-eyebrow");
        if (eyebrow)
          gsap.fromTo(
            eyebrow,
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: tc,
            },
          );

        const sTitle = slide.querySelector<HTMLElement>(".cover-section-title");
        if (sTitle)
          gsap.fromTo(
            sTitle,
            { opacity: 0, y: -8 },
            {
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: "power3.out",
              delay: 0.1,
              scrollTrigger: tc,
            },
          );

        const loc = slide.querySelector<HTMLElement>(".cover-location");
        if (loc)
          gsap.fromTo(
            loc,
            { opacity: 0, x: -22 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: tc,
            },
          );

        slide
          .querySelectorAll<HTMLElement>(".cover-name-word")
          .forEach((word, wi) => {
            gsap.fromTo(
              word,
              { opacity: 0, y: 70, rotateX: 88, transformPerspective: 700 },
              {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 1.05,
                ease: "power4.out",
                delay: wi * 0.1,
                scrollTrigger: tc,
              },
            );
          });

        const tagline = slide.querySelector<HTMLElement>(".cover-tagline");
        if (tagline)
          gsap.fromTo(
            tagline,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.3,
              scrollTrigger: tc,
            },
          );

        const specs = slide.querySelector<HTMLElement>(".cover-specs");
        if (specs)
          gsap.fromTo(
            specs,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.42,
              scrollTrigger: tc,
            },
          );

        const cta = slide.querySelector<HTMLElement>(".cover-cta");
        if (cta)
          gsap.fromTo(
            cta,
            { opacity: 0, x: -14 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.55,
              scrollTrigger: tc,
            },
          );
      });

    // ── Gallery slide animations ──────────────────────────────────────
    track
      .querySelectorAll<HTMLElement>(".property-gallery-slide")
      .forEach((slide) => {
        const tc = {
          trigger: slide,
          containerAnimation: hTween,
          start: "left 60%",
          toggleActions: "play none none reverse" as const,
        };

        // 3D tile flip-in
        slide
          .querySelectorAll<HTMLElement>(".mosaic-tile")
          .forEach((tile, ti) => {
            const cfg = TILE_3D[ti] ?? TILE_3D[TILE_3D.length - 1];
            gsap.set(tile, {
              rotateY: cfg.rotY,
              rotateX: cfg.rotX,
              z: cfg.z,
              opacity: 0,
              transformPerspective: 1000,
            });
            gsap.to(tile, {
              rotateY: 0,
              rotateX: 0,
              z: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power3.out",
              delay: cfg.delay,
              scrollTrigger: tc,
            });

            const img = tile.querySelector<HTMLElement>(".mosaic-img");
            if (img) {
              const dir = ti % 2 === 0 ? -1 : 1;
              gsap.fromTo(
                img,
                { xPercent: dir * 9, scale: 1.18 },
                {
                  xPercent: dir * -9,
                  scale: 1.18,
                  ease: "none",
                  scrollTrigger: {
                    trigger: tile,
                    containerAnimation: hTween,
                    start: "left right",
                    end: "right left",
                    scrub: true,
                  },
                },
              );
            }
          });

        const overlay = slide.querySelector<HTMLElement>(".gallery-overlay");
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0.2,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: hTween,
              start: "left right",
              end: "left left",
              scrub: true,
            },
          });
        }

        const wm = slide.querySelector<HTMLElement>(".gallery-watermark-text");
        if (wm) {
          gsap.fromTo(
            wm,
            {
              opacity: 0,
              scale: 1.45,
              rotateY: -18,
              transformPerspective: 900,
            },
            {
              opacity: 0.052,
              scale: 1,
              rotateY: 0,
              duration: 1.9,
              ease: "power3.out",
              scrollTrigger: { ...tc, start: "left 65%" },
            },
          );
        }

        [".gallery-label", ".gallery-footer"].forEach((sel, i) => {
          const el = slide.querySelector<HTMLElement>(sel);
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              delay: 0.32 + i * 0.1,
              scrollTrigger: tc,
            },
          );
        });
      });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [properties.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      id="portfolio"
    >
      <div
        ref={trackRef}
        className="flex h-full will-change-transform"
        style={{ width: `${properties.length * 2 * 100}vw` }}
      >
        {properties.map((property, index) => (
          <div key={property.id} className="flex h-full shrink-0">
            <CoverSlide property={property} index={index} />
            <GallerySlide property={property} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Root export — switches on screen size ────────────────────────────────────

export default function PropertiesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile ? <MobileSection /> : <DesktopSection />;
}
