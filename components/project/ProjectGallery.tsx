"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: string[];
  name: string;
  className?: string;
}

export default function ProjectGallery({
  images,
  name,
  className,
}: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i === null || i === 0 ? images.length - 1 : i - 1,
    );
  const next = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div
        className={cn(
          "grid gap-2",
          images.length === 1 && "grid-cols-1",
          images.length === 2 && "grid-cols-2",
          images.length >= 3 && "grid-cols-2 md:grid-cols-3",
          className,
        )}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className={cn(
              "relative overflow-hidden bg-luxury-charcoal3 group cursor-zoom-in",
              i === 0 && images.length >= 3
                ? "md:col-span-2 md:row-span-2 h-64 md:h-auto"
                : "h-48 md:h-56",
            )}
          >
            <Image
              src={src}
              alt={`${name} — image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn
                size={24}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={close}
            onKeyDown={onKey}
            tabIndex={0}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <p className="absolute top-4 left-1/2 -translate-x-1/2 font-sans text-xs text-white/40 tracking-widest">
              {lightboxIndex + 1} / {images.length}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 text-white/60 hover:text-white transition-colors z-10 p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl h-[80vh] mx-12"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`${name} — image ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 text-white/60 hover:text-white transition-colors z-10 p-2"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
