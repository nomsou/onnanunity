// src/components/sections/PropertiesSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BedDouble, Bath, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { getProperties } from "@/utils/propertyutils";
import type { Property } from "@/types";

// ─── Mosaic layout helpers ───────────────────────────────────────────────────

function MosaicGrid({ images, name }: { images: string[]; name: string }) {
  const count = images.length;
  if (count === 0) return null;

  if (count === 1) {
    return (
      <div className="mosaic-grid absolute inset-0">
        <div className="mosaic-tile w-full h-full overflow-hidden">
          <img
            src={images[0]}
            alt={name}
            className="mosaic-img w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="mosaic-grid absolute inset-0 flex">
        {images.map((src, i) => (
          <div
            key={i}
            className="mosaic-tile relative w-1/2 h-full overflow-hidden"
          >
            <img
              src={src}
              alt={`${name} ${i + 1}`}
              className="mosaic-img w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="mosaic-grid absolute inset-0 flex gap-px bg-black">
        <div className="mosaic-tile relative w-[58%] h-full overflow-hidden">
          <img
            src={images[0]}
            alt={`${name} 1`}
            className="mosaic-img w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-px w-[42%]">
          {images.slice(1).map((src, i) => (
            <div
              key={i}
              className="mosaic-tile relative flex-1 overflow-hidden"
            >
              <img
                src={src}
                alt={`${name} ${i + 2}`}
                className="mosaic-img w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (count === 4) {
    return (
      <div className="mosaic-grid absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px bg-black">
        {images.map((src, i) => (
          <div key={i} className="mosaic-tile relative overflow-hidden">
            <img
              src={src}
              alt={`${name} ${i + 1}`}
              className="mosaic-img w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  if (count === 5) {
    return (
      <div className="mosaic-grid absolute inset-0 flex flex-col gap-px bg-black">
        <div className="mosaic-tile relative h-[55%] overflow-hidden">
          <img
            src={images[0]}
            alt={`${name} 1`}
            className="mosaic-img w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-px h-[45%]">
          {images.slice(1).map((src, i) => (
            <div
              key={i}
              className="mosaic-tile relative flex-1 overflow-hidden"
            >
              <img
                src={src}
                alt={`${name} ${i + 2}`}
                className="mosaic-img w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const half = Math.ceil(count / 2);
  const row1 = images.slice(0, half);
  const row2 = images.slice(half);
  return (
    <div className="mosaic-grid absolute inset-0 flex flex-col gap-px bg-black">
      {[row1, row2].map((row, ri) => (
        <div key={ri} className="flex gap-px flex-1">
          {row.map((src, i) => (
            <div
              key={i}
              className="mosaic-tile relative flex-1 overflow-hidden"
            >
              <img
                src={src}
                alt={`${name} detail`}
                className="mosaic-img w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Cover Slide ─────────────────────────────────────────────────────────────

function CoverSlide({
  property,
  index,
}: {
  property: Property;
  index: number;
}) {
  const words = property.name.split(" ");
  return (
    <div
      className="property-cover-slide relative w-screen h-full shrink-0 overflow-hidden"
      data-slide-type="cover"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={property.coverImage}
          alt={property.name}
          className="cover-bg-img w-full h-full object-cover will-change-transform"
          style={{ transformOrigin: "center center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Vertical gold rule — animated */}
      <div
        className="cover-gold-rule absolute left-7 md:left-11 top-0 bottom-0 w-px bg-luxury-gold/60 origin-bottom"
        style={{ transform: "scaleY(0)" }}
      />

      {/* Section header — only on first property */}
      {index === 0 && (
        <div className="absolute top-0 left-0 right-0 pt-24 md:pt-28 pl-14 md:pl-20 lg:pl-24 z-10 pointer-events-none">
          <div
            className="cover-eyebrow flex items-center gap-3 mb-1"
            style={{ opacity: 0 }}
          >
            <span className="h-px w-6 bg-luxury-gold inline-block" />
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
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

      {/* Counter top-right */}
      <div className="absolute top-24 md:top-28 right-8 md:right-14 z-10 pointer-events-none">
        <span className="font-sans text-[10px] tracking-[0.2em] text-white/35">
          {String(index + 1).padStart(2, "0")} / 07
        </span>
      </div>

      {/* Metadata — bottom left */}
      <div className="cover-meta absolute bottom-0 left-14 md:left-20 lg:left-24 z-10 pb-12 md:pb-16 max-w-lg">
        {/* Location */}
        <div
          className="cover-location flex items-center gap-1.5 mb-4"
          style={{ opacity: 0, transform: "translateX(-24px)" }}
        >
          <MapPin size={11} className="text-luxury-gold shrink-0" />
          <span className="font-sans text-[10px] uppercase tracking-widest font-medium text-luxury-gold">
            {property.neighborhood}, Abuja
          </span>
        </div>

        {/* Property name — word by word */}
        <h3 className="font-display font-light leading-none mb-5 overflow-hidden">
          {words.map((word, wi) => (
            <span key={wi} className="inline-block mr-[0.25em]">
              <span
                className="cover-name-word inline-block text-white"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 6rem)",
                  opacity: 0,
                  transform: "translateY(60px)",
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </h3>

        {/* Tagline */}
        <p
          className="cover-tagline font-sans text-sm text-white/65 font-light leading-relaxed mb-6 max-w-sm"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          {property.tagline}
        </p>

        {/* Specs */}
        <div
          className="cover-specs flex items-center gap-5 mb-8"
          style={{ opacity: 0, transform: "translateY(16px)" }}
        >
          <div className="flex items-center gap-1.5">
            <Maximize2 size={12} className="text-luxury-gold/70" />
            <span className="font-sans text-xs text-white/75">
              {property.sqft.toLocaleString()} ft²
            </span>
          </div>
          <div className="w-px h-3 bg-white/20" />
          <div className="flex items-center gap-1.5">
            <BedDouble size={12} className="text-luxury-gold/70" />
            <span className="font-sans text-xs text-white/75">
              {property.beds} Beds
            </span>
          </div>
          <div className="w-px h-3 bg-white/20" />
          <div className="flex items-center gap-1.5">
            <Bath size={12} className="text-luxury-gold/70" />
            <span className="font-sans text-xs text-white/75">
              {property.baths} Baths
            </span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="cover-cta inline-flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-widest text-luxury-gold hover:text-white transition-colors duration-300 group"
          style={{ opacity: 0, transform: "translateX(-16px)" }}
        >
          <span>Inquire About Availability</span>
          <ArrowRight
            size={12}
            className="transform transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </a>
      </div>

      {/* Scroll hint — first slide only */}
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

// ─── Gallery Slide ────────────────────────────────────────────────────────────

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
      data-slide-type="gallery"
    >
      <MosaicGrid images={allImages} name={property.name} />

      <div className="gallery-overlay absolute inset-0 bg-black/55 pointer-events-none" />

      <div
        className="gallery-watermark absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-light text-white select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(5rem, 14vw, 14rem)",
            opacity: 0,
            transform: "scale(1.35)",
            letterSpacing: "-0.02em",
          }}
        >
          {property.name}
        </span>
      </div>

      <div
        className="gallery-label absolute top-24 md:top-28 left-14 md:left-20 lg:left-24 z-10 pointer-events-none"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="h-px w-6 bg-luxury-gold inline-block" />
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
            Gallery
          </span>
        </div>
        <p className="font-sans text-[10px] text-white/40 tracking-widest uppercase">
          {allImages.length} {allImages.length === 1 ? "Image" : "Images"}
        </p>
      </div>

      <div
        className="gallery-footer absolute bottom-12 right-8 md:right-14 z-10 text-right pointer-events-none"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      >
        <p className="font-display font-light text-white/50 text-lg md:text-2xl mb-1">
          {property.name}
        </p>
        {index < 6 && (
          <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/30">
            Next ↓
          </p>
        )}
      </div>

      <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-luxury-gold/20" />
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function PropertiesSection() {
  const scrollSectionRef = useRef<HTMLElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const hTweenRef = useRef<gsap.core.Tween | null>(null);
  const properties = getProperties();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = horizontalTrackRef.current;
      const section = scrollSectionRef.current;
      if (!track || !section) return;

      const totalSlides = properties.length * 2;
      const getScrollAmount = () => (totalSlides - 1) * window.innerWidth;

      // ── NEW SECTION IMMERSIVE ENTRANCE TIMELINE ──────────────────────
      // This sequence triggers immediately when the component rolls into view
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Triggers slightly before it hits the top viewport edge
          toggleActions: "play none none reverse",
        },
      });

      // Initially hide the master track elements slightly below the fold
      gsap.set(track, { y: 60, opacity: 0 });

      entranceTl.to(track, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "luxury", // Uses your premium cubic-bezier preset
      });

      // ── Master horizontal track mapping ──────────────────────────────
      hTweenRef.current = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.4,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });

      const hTween = hTweenRef.current;

      // Per cover-slide animations
      gsap.utils
        .toArray<HTMLElement>(".property-cover-slide")
        .forEach((slide) => {
          const bgImg = slide.querySelector<HTMLElement>(".cover-bg-img");
          const goldRule = slide.querySelector<HTMLElement>(".cover-gold-rule");
          const eyebrow = slide.querySelector<HTMLElement>(".cover-eyebrow");
          const sectionTitle = slide.querySelector<HTMLElement>(
            ".cover-section-title",
          );
          const location = slide.querySelector<HTMLElement>(".cover-location");
          const nameWords =
            slide.querySelectorAll<HTMLElement>(".cover-name-word");
          const tagline = slide.querySelector<HTMLElement>(".cover-tagline");
          const specs = slide.querySelector<HTMLElement>(".cover-specs");
          const cta = slide.querySelector<HTMLElement>(".cover-cta");

          // Ken Burns parallax background
          if (bgImg) {
            gsap.fromTo(
              bgImg,
              { scale: 1.07 },
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

          // Gold layout rule line
          if (goldRule) {
            gsap.to(goldRule, {
              scaleY: 1,
              duration: 1.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 55%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // Section Titles (Intro Card Only)
          if (eyebrow) {
            gsap.to(eyebrow, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 50%",
                toggleActions: "play none none reverse",
              },
            });
          }
          if (sectionTitle) {
            gsap.to(sectionTitle, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              delay: 0.1,
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 50%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // Neighborhood location card info
          if (location) {
            gsap.to(location, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 50%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // Brand Title Typographic Stagger
          if (nameWords.length) {
            gsap.to(nameWords, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 50%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // Tagline text elements
          if (tagline) {
            gsap.to(tagline, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.25,
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 50%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // Technical Specs
          if (specs) {
            gsap.to(specs, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.35,
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 50%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // Action Link Callouts
          if (cta) {
            gsap.to(cta, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.5,
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 50%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });

      gsap.utils
        .toArray<HTMLElement>(".property-gallery-slide")
        .forEach((slide) => {
          const overlay = slide.querySelector<HTMLElement>(".gallery-overlay");
          const watermark = slide.querySelector<HTMLElement>(
            ".gallery-watermark span",
          );
          const label = slide.querySelector<HTMLElement>(".gallery-label");
          const footer = slide.querySelector<HTMLElement>(".gallery-footer");
          const tiles = slide.querySelectorAll<HTMLElement>(".mosaic-tile");

          if (overlay) {
            gsap.to(overlay, {
              opacity: 0.25,
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

          if (watermark) {
            gsap.to(watermark, {
              opacity: 0.055,
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 60%",
                toggleActions: "play none none reverse",
              },
            });
          }

          if (tiles.length) {
            gsap.set(tiles, { clipPath: "inset(0 100% 0 0)" });
            gsap.to(tiles, {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.1,
              ease: "power3.inOut",
              stagger: 0.12,
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 55%",
                toggleActions: "play none none reverse",
              },
            });
          }

          slide.querySelectorAll<HTMLElement>(".mosaic-img").forEach((img) => {
            gsap.fromTo(
              img,
              { xPercent: -6 },
              {
                xPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: img.closest(".mosaic-tile"),
                  containerAnimation: hTween,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              },
            );
          });

          [label, footer].forEach((el, i) => {
            if (!el) return;
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: i * 0.1 + 0.3,
              scrollTrigger: {
                trigger: slide,
                containerAnimation: hTween,
                start: "left 55%",
                toggleActions: "play none none reverse",
              },
            });
          });
        });
    }, scrollSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scrollSectionRef}
      className="relative w-full h-screen overflow-hidden"
      id="portfolio"
    >
      <div
        ref={horizontalTrackRef}
        className="flex h-full will-change-transform opacity-0"
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
