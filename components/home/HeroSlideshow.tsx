"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import ContactModal from "@/components/shared/ContactModal";
import type { Property } from "@/types";

interface HeroSlideshowProps {
  properties: Property[];
}

const getPanDirection = (
  index: number,
): "pan-right" | "pan-left" | "pan-up" => {
  const directions: ("pan-right" | "pan-left" | "pan-up")[] = [
    "pan-right",
    "pan-left",
    "pan-up",
  ];
  return directions[index % directions.length];
};

export default function HeroSlideshow({ properties }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const startTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const SLIDE_DURATION = 2000;

  const slides = properties;
  const currentSlide = slides[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const resetTimer = () => {
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    startTimeRef.current = Date.now();
    animateProgress();
  };

  const animateProgress = () => {
    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current;
      if (elapsed >= SLIDE_DURATION) {
        nextSlide();
      } else {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };
    animationFrameRef.current = requestAnimationFrame(updateProgress);
  };

  useEffect(() => {
    startTimeRef.current = Date.now();
    animateProgress();

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const pauseTimer = () => {
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
  };

  const resumeTimer = () => {
    const elapsed = Date.now() - startTimeRef.current;
    startTimeRef.current = Date.now() - elapsed;
    animateProgress();
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    startTimeRef.current = Date.now();
    animateProgress();
  };

  return (
    <>
      <section
        className="relative h-screen min-h-[680px] overflow-hidden"
        onMouseEnter={pauseTimer}
        onMouseLeave={resumeTimer}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className={`absolute inset-0 bg-cover bg-center ${
                getPanDirection(currentIndex) === "pan-right"
                  ? "animate-ken-burns-right"
                  : getPanDirection(currentIndex) === "pan-left"
                    ? "animate-ken-burns-left"
                    : "animate-ken-burns-up"
              }`}
              style={{ backgroundImage: `url(${currentSlide.coverImage})` }}
            />
            {/* Darker overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          </motion.div>
        </AnimatePresence>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20">
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-white/90 mb-4 drop-shadow-md">
            Est. 1999 · Engineering, Procurement, Construction & Real Estate
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button href="/portfolio" variant="gold" size="lg">
              Explore Properties
            </Button>
            <Button
              onClick={() => setModalOpen(true)}
              variant="outline"
              size="lg"
            >
              Talk To Us
            </Button>
          </div>
        </div>

        {/* Estate Label — bottom left */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 z-10 flex items-center gap-3">
          <span className="font-sans text-[10px] tracking-[0.16em] text-white/60 drop-shadow">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="w-6 h-px bg-white/40" />
          <span className="font-sans text-[10px] tracking-[0.14em] uppercase text-white/80 drop-shadow">
            {currentSlide.name}
          </span>
        </div>

        {/* Dots — bottom right */}
        <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-10 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-px transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-gilt"
                  : "w-4 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-10 bg-gradient-to-b from-gilt to-transparent" />
          <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/50 drop-shadow">
            Scroll
          </span>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
