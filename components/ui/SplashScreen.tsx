"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, HardHat } from "lucide-react";

const CHOICE_KEY = "onnan_splash_choice";

type Phase =
  | "deciding"
  | "hidden"
  | "visible"
  | "exiting-reveal"
  | "exiting-opaque"
  | "done";

export default function SplashScreen() {
  const router = useRouter();
  const pathname = usePathname();

  const eligibleRoute = pathname === "/";
  const [phase, setPhase] = useState<Phase>(
    eligibleRoute ? "deciding" : "hidden",
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!eligibleRoute) {
      setPhase("hidden");
      return;
    }
    const alreadyChosen = sessionStorage.getItem(CHOICE_KEY);
    if (!alreadyChosen) {
      setPhase("visible");
    } else {
      setPhase("hidden");
    }
  }, []);

  // Entrance animation
  useEffect(() => {
    if (phase !== "visible") return;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.set(logoRef.current, { scale: 0.95, opacity: 0 });
      gsap.set(".splash-char", { opacity: 0, y: 15 });
      gsap.set(".splash-choice", { opacity: 0, y: 24 });

      const tl = gsap.timeline();
      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          ".splash-char",
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .to(
          ".splash-choice",
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [phase]);

  // Heartbeat pulse animation for buttons
  useEffect(() => {
    if (phase !== "visible") return;

    const ctx = gsap.context(() => {
      // Create a heartbeat-style pulse on both buttons
      gsap.to(".splash-choice", {
        scale: 1.03,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.15,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [phase]);

  // Reveal-exit (Real Estate chosen)
  useEffect(() => {
    if (phase !== "exiting-reveal") return;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          document.body.style.overflow = "";
          ctx.revert();
          setPhase("done");
          requestAnimationFrame(() => {
            window.dispatchEvent(new Event("resize"));
            ScrollTrigger.refresh();
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [phase]);

  // Opaque-exit (Engineering Services chosen)
  useEffect(() => {
    if (phase !== "exiting-opaque") return;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: "power1.out",
        onComplete: () => {
          router.push("/engineering-services");
          document.body.style.overflow = "";
          ctx.revert();
          setPhase("done");
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [phase, router]);

  const handleRealEstate = () => {
    if (phase !== "visible") return;
    sessionStorage.setItem(CHOICE_KEY, "real-estate");
    setPhase("exiting-reveal");
  };

  const handleEngineering = () => {
    if (phase !== "visible") return;
    sessionStorage.setItem(CHOICE_KEY, "engineering");
    setPhase("exiting-opaque");
  };

  if (phase === "hidden" || phase === "done") {
    return null;
  }

  const isInteractive = phase === "visible";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-charcoal px-6"
      aria-hidden={!isInteractive}
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

        <div className="flex flex-col sm:flex-row gap-4 w-full mt-12">
          <button
            onClick={handleRealEstate}
            disabled={!isInteractive}
            className="splash-choice group flex-1 flex flex-col items-center gap-3 border border-border-custom/60 hover:border-luxury-gold bg-luxury-charcoal2/40 hover:bg-luxury-charcoal2 px-6 py-8 transition-all duration-300 cursor-pointer disabled:cursor-default disabled:opacity-60 rounded-lg"
            style={{ opacity: 0, transform: "translateY(24px)" }}
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
            disabled={!isInteractive}
            className="splash-choice group flex-1 flex flex-col items-center gap-3 border border-border-custom/60 hover:border-luxury-gold bg-luxury-charcoal2/40 hover:bg-luxury-charcoal2 px-6 py-8 transition-all duration-300 cursor-pointer disabled:cursor-default disabled:opacity-60 rounded-lg"
            style={{ opacity: 0, transform: "translateY(24px)" }}
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
