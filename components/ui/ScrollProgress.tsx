"use client";

import { useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useLenis(({ progress }) => {
    gsap.set(progressRef.current, {
      scaleX: progress,
      transformOrigin: "left",
    });
  });

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-linear-to-r from-luxury-gold via-gilt to-luxury-gold pointer-events-none scale-x-0"
      aria-hidden="true"
    />
  );
}
