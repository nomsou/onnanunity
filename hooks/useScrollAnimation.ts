"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export function useScrollAnimation({
  threshold = 0.15,
  once = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  return { ref, isInView };
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeDownVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeLeftVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeRightVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** For tall elements that clip and rise into view — use on text lines */
export const clipUpVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Wipe reveal — gold overlay slides away to expose the element */
export const wipeRevealVariants = {
  hidden: { scaleX: 1, transformOrigin: "left" as const },
  visible: {
    scaleX: 0,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

// ─── Container / Stagger ──────────────────────────────────────────────────────

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFastVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const staggerSlowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

export const cardHoverVariants = {
  rest: { y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  hover: {
    y: -6,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const imageZoomVariants = {
  rest: {
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  hover: {
    scale: 1.06,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
