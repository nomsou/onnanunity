"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, HardHat } from "lucide-react";

const CHOICE_KEY = "onnan_splash_choice";

export default function SplashScreen() {
  // Start as "not mounted" — we decide whether to show it after checking
  // sessionStorage on the client, so a refresh on an already-chosen path
  // never flashes the splash back up.
  const [isMounted, setIsMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const choicesRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only the real-estate homepage route shows the splash at all. If a
    // choice was already made this session, skip it entirely.
    const alreadyChosen = sessionStorage.getItem(CHOICE_KEY);
    if (pathname === "/" && !alreadyChosen) {
      setIsMounted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (!isMounted) return;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(logoRef.current, { scale: 0.95, opacity: 0 });
      gsap.set(".splash-char", { opacity: 0, y: 15 });
      gsap.set(".splash-choice", { opacity: 0, y: 24 });

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
        .to(
          ".splash-choice",
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2",
        );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isMounted]);

  const dismiss = (after?: () => void) => {
    if (isExiting) return;
    setIsExiting(true);

    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        setIsMounted(false);
        document.body.style.overflow = "";

        if (after) {
          after();
        } else {
          setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
            ScrollTrigger.refresh();
          }, 50);
        }
      },
    });
  };

  const handleRealEstate = () => {
    sessionStorage.setItem(CHOICE_KEY, "real-estate");
    // Real estate is the current site — simply reveal the homepage underneath.
    dismiss();
  };

  const handleEngineering = () => {
    sessionStorage.setItem(CHOICE_KEY, "engineering");
    // Engineering Services lives on its own route.
    dismiss(() => router.push("/engineering-services"));
  };

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-charcoal px-6"
    >
      <div className="flex flex-col items-center text-center max-w-lg w-full">
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

        <div
          ref={choicesRef}
          className="flex flex-col sm:flex-row gap-4 w-full mt-12"
        >
          <button
            onClick={handleRealEstate}
            className="splash-choice group flex-1 flex flex-col items-center gap-3 border border-border-custom/60 hover:border-luxury-gold bg-luxury-charcoal2/40 hover:bg-luxury-charcoal2 px-6 py-8 transition-all duration-300 cursor-pointer"
          >
            <Building2
              size={26}
              className="text-luxury-gold transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-luxury-cream">
              Real Estate
            </span>
          </button>

          <button
            onClick={handleEngineering}
            className="splash-choice group flex-1 flex flex-col items-center gap-3 border border-border-custom/60 hover:border-luxury-gold bg-luxury-charcoal2/40 hover:bg-luxury-charcoal2 px-6 py-8 transition-all duration-300 cursor-pointer"
          >
            <HardHat
              size={26}
              className="text-luxury-gold transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-luxury-cream">
              Engineering Services
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
