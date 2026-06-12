"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SplashScreen() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("onnan_splash_seen");
    if (!hasSeenSplash) {
      setIsMounted(true);
      sessionStorage.setItem("onnan_splash_seen", "true");
    }
  }, []);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (!isMounted) return;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              setIsMounted(false);
              document.body.style.overflow = "";

              setTimeout(() => {
                window.dispatchEvent(new Event("resize"));
                ScrollTrigger.refresh();
              }, 50);
            },
          });
        },
      });

      gsap.set(logoRef.current, { scale: 0.95, opacity: 0 });
      gsap.set(".splash-char", { opacity: 0, y: 15 });

      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          ".splash-char",
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to({}, { duration: 0.5 });
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-charcoal"
    >
      <div ref={logoRef} className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 justify-center">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden flex-shrink-0">
            <img
              src="/logo.png"
              alt="Onnan Unity Brand Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-display text-3xl font-light tracking-[0.2em] text-luxury-cream whitespace-nowrap">
            ONNAN UNITY
          </span>
        </div>

        <span className="font-sans text-[9px] tracking-[0.25em] text-luxury-gold uppercase mt-2.5">
          Est. 1999
        </span>
        <div className="h-px w-12 bg-luxury-gold/30 my-4" />
        <p className="text-[9px] font-sans tracking-[0.2em] text-luxury-muted uppercase">
          {"ENGINEERING . CONSTRUCTION . REAL ESTATE"
            .split("")
            .map((char, i) => (
              <span key={i} className="splash-char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}
