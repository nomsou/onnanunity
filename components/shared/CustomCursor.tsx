"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer,  setIsPointer]  = useState(false);
  const [isHidden,   setIsHidden]   = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Slightly lagged follower for the outer ring
  const springConfig = { stiffness: 200, damping: 28, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on devices with a fine pointer (desktop)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onLeave  = () => setIsHidden(true);
    const onEnter  = () => setIsHidden(false);

    // Detect when hovering interactive elements
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, select, textarea, label");
      setIsPointer(!!interactive);
    };

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseover",  onOver,  { passive: true });

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseover",  onOver);
    };
  }, [mouseX, mouseY]);

  // Only render on client (no SSR)
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot — snaps exactly to cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHidden ? 0 : 1,
          scale:   isPointer ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </motion.div>

      {/* Ring — springs behind the cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHidden ? 0 : 1,
          scale:   isPointer ? 1.8 : 1,
          width:   isPointer ? 36 : 28,
          height:  isPointer ? 36 : 28,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="rounded-full border border-luxury-gold/60"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </>
  );
}
