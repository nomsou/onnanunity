"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: "Home", href: "#hero" },
     { label: "The Madeira", href: "#anchor" }, 
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuOverlayRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        ".mob-link",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.1 },
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(menuOverlayRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [mobileOpen]);

  const handleScrollTo = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const useTransparent = !scrolled;

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          useTransparent ? "py-6" : "py-4 shadow-sm",
        )}
        style={{
          backgroundColor: useTransparent ? "transparent" : "#FFFFFF",
          borderBottom: useTransparent ? "none" : "1px solid #E2DFD9",
        }}
      >
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden">
              <img
                src="/logo.png"
                alt="Onnan Unity Logo"
                className="w-full h-full object-contain filter brightness-100"
                style={{
                  filter: useTransparent ? "brightness(1) invert(0)" : "none",
                }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-display text-lg md:text-xl font-light tracking-[0.15em] transition-colors duration-300",
                  useTransparent
                    ? "text-white group-hover:text-luxury-gold"
                    : "text-neutral-900 group-hover:text-luxury-gold",
                )}
              >
                ONNAN UNITY
              </span>
              <span
                className={cn(
                  "font-sans text-[8px] tracking-[0.25em] text-white uppercase mt-1",
                  useTransparent
                    ? "text-white"
                    : "text-neutral-900",
                )}
              >
                Est. 1999
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={cn(
                  "font-sans text-[11px] tracking-widest uppercase transition-colors relative group py-2",
                  useTransparent
                    ? "text-white/70 hover:text-white"
                    : "text-neutral-600 hover:text-neutral-900",
                )}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className={cn(
                "inline-flex items-center justify-center border font-sans font-medium tracking-widest uppercase text-[10px] px-5 py-2.5 transition-all duration-300",
                useTransparent
                  ? "border-white/50 text-white hover:bg-white hover:text-neutral-900"
                  : "border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white",
              )}
            >
              Request Site Visit
            </a>
          </div>

          <button
            className={cn(
              "lg:hidden transition-colors p-2",
              useTransparent
                ? "text-white hover:text-luxury-gold"
                : "text-neutral-900 hover:text-luxury-gold",
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        ref={menuOverlayRef}
        className="fixed inset-0 z-40 bg-luxury-charcoal flex flex-col justify-center px-10 transform translate-x-full lg:hidden border-l border-border-custom"
      >
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="mob-link block font-display text-4xl font-light py-3 border-b border-border-custom text-luxury-cream hover:text-luxury-gold transition-colors opacity-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="mob-link border border-luxury-gold text-luxury-gold text-xs font-sans font-medium tracking-widest uppercase py-3.5 text-center mt-8 hover:bg-luxury-gold hover:text-luxury-charcoal transition-colors opacity-0"
          >
            Request Site Visit
          </a>
        </nav>
      </div>
    </>
  );
}
