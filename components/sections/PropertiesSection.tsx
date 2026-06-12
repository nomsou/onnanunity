"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BedDouble, Bath, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { getProperties } from "@/utils/propertyutils";

export default function PropertiesSection() {
  const scrollSectionRef = useRef<HTMLElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const properties = getProperties();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = horizontalTrackRef.current;
      const section = scrollSectionRef.current;
      if (!track || !section) return;

      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const horizontalScroll = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".parallax-hero-img").forEach((img) => {
        gsap.fromTo(
          img,
          { xPercent: -8 },
          {
            xPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              containerAnimation: horizontalScroll,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });
    }, scrollSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scrollSectionRef}
      className="relative bg-luxury-charcoal2 w-full h-screen overflow-hidden select-none"
      id="portfolio"
    >
      <div className="absolute top-12 left-6 md:left-12 lg:left-20 z-20 pointer-events-none max-w-lg">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-8 bg-luxury-gold inline-block" />
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
            Selected Work
          </span>
        </div>
        <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-luxury-cream">
          The Exhibition
        </h2>
      </div>

      <div
        ref={horizontalTrackRef}
        className="flex h-full items-center pl-6 md:pl-12 lg:pl-20 pr-[25vw] w-max will-change-transform"
      >
        {properties.map((project) => (
          <div
            key={project.id}
            className="flex items-center h-[70vh] min-h-[480px] w-[90vw] md:w-[1150px] gap-12 lg:gap-20 border-r border-white/10 pr-12 lg:pr-20 last:border-none shrink-0"
          >
            {/* Metadata Text Details */}
            <div className="flex flex-col h-full justify-between w-[280px] sm:w-[340px] shrink-0 pt-24 pb-2">
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-luxury-gold">
                  <MapPin size={13} />
                  <span className="font-sans text-xs uppercase tracking-widest font-medium">
                    {project.neighborhood}, Abuja
                  </span>
                </div>

                <h3 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-luxury-cream leading-tight">
                  {project.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-luxury-muted font-light leading-relaxed line-clamp-5">
                  {project.description}
                </p>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-3 border-y border-white/20 py-3 gap-2">
                  <div>
                    <span className="block font-sans text-[9px] uppercase tracking-wider text-luxury-gold mb-0.5">
                      Scale
                    </span>
                    <span className="font-sans text-xs text-luxury-cream font-medium flex items-center gap-1">
                      <Maximize2 size={12} className="text-luxury-gold/60" />{" "}
                      {project.sqft.toLocaleString()} ft²
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[9px] uppercase tracking-wider text-luxury-gold mb-0.5">
                      Bedrooms
                    </span>
                    <span className="font-sans text-xs text-luxury-cream font-medium flex items-center gap-1">
                      <BedDouble size={12} className="text-luxury-gold/60" />{" "}
                      {project.beds} Beds
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[9px] uppercase tracking-wider text-luxury-gold mb-0.5">
                      Baths
                    </span>
                    <span className="font-sans text-xs text-luxury-cream font-medium flex items-center gap-1">
                      <Bath size={12} className="text-luxury-gold/60" />{" "}
                      {project.baths} Baths
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-widest text-luxury-gold hover:text-luxury-gold/80 transition-colors group"
                >
                  <span>Inquire About Availability</span>
                  <ArrowRight
                    size={13}
                    className="transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            <div className="relative h-full aspect-[14/9] overflow-hidden bg-luxury-charcoal3 shrink-0 shadow-xl border border-white/10">
              <img
                src={project.coverImage}
                alt={`${project.name} Cover`}
                className="parallax-hero-img absolute inset-0 object-cover w-[120%] h-full top-0 left-0 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/5" />
            </div>

            {project.images && project.images.length > 0 && (
              <div className="flex gap-6 h-[55vh] items-center shrink-0">
                {project.images.slice(0, 2).map((imgUrl, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative h-full aspect-[3/4] overflow-hidden bg-luxury-charcoal3 shadow-md border border-white/10 shrink-0"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.name} Detail ${imgIdx + 1}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
