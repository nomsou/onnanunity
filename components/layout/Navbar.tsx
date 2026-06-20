"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProperties } from "@/utils/propertyutils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const properties = getProperties();

  const links = [
    { label: "The Madeira", href: "#anchor" },
    {
      label: "Portfolio",
      href: "#portfolio",
      dropdown: true,
      items: properties.map((p) => ({ label: p.name, href: `#${p.slug}` })),
    },
    { label: "About", href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#footer" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on click outside (desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
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
      // Reset mobile dropdown when closing menu
      setMobileDropdownOpen(false);
    }
  }, [mobileOpen]);

  const handleScrollTo = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobilePropertyClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setMobileDropdownOpen(false);
    const element = document.querySelector(href);
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
                  "font-sans text-[8px] tracking-[0.25em] uppercase mt-1",
                  useTransparent ? "text-white" : "text-neutral-900",
                )}
              >
                Est. 1999
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <div ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={cn(
                        "font-sans text-[11px] tracking-widest uppercase transition-colors relative py-2 flex items-center gap-1",
                        useTransparent
                          ? "text-white/70 hover:text-white"
                          : "text-neutral-600 hover:text-neutral-900",
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-border-custom min-w-[200px] py-2 z-50">
                        {link.items.map(
                          (item: { label: string; href: string }) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                setDropdownOpen(false);
                                const element = document.querySelector(
                                  item.href,
                                );
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }
                              }}
                              className="block px-4 py-2 text-sm text-neutral-700 hover:bg-luxury-charcoal hover:text-luxury-gold transition-colors font-sans"
                            >
                              {item.label}
                            </a>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
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
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="https://www.instagram.com/onnanunityco"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center border font-sans font-medium tracking-widest uppercase text-[10px] px-5 py-2.5 transition-all duration-300",
                useTransparent
                  ? "border-white/50 text-white hover:bg-white hover:text-neutral-900"
                  : "border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white",
              )}
            >
              Inquire Now
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
        className="fixed inset-0 z-40 bg-luxury-charcoal flex flex-col justify-start pt-24 px-8 transform translate-x-full lg:hidden border-l border-border-custom overflow-y-auto"
      >
        <nav className="flex flex-col gap-1 w-full max-w-md mx-auto">
          {links.map((link) => (
            <div key={link.label} className="w-full">
              {link.dropdown ? (
                <div className="w-full">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="mob-link flex items-center justify-between w-full font-display text-3xl font-light py-3 border-b border-border-custom text-luxury-cream hover:text-luxury-gold transition-colors opacity-0"
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      size={20}
                      className={`transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown Items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileDropdownOpen
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 py-2 flex flex-col gap-1">
                      {link.items.map(
                        (item: { label: string; href: string }) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) =>
                              handleMobilePropertyClick(e, item.href)
                            }
                            className="font-sans text-base text-luxury-muted hover:text-luxury-gold transition-colors py-2 px-2 hover:bg-luxury-charcoal2 rounded"
                          >
                            {item.label}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="mob-link block font-display text-3xl font-light py-3 border-b border-border-custom text-luxury-cream hover:text-luxury-gold transition-colors opacity-0"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}

          <a
            href="https://www.instagram.com/onnanunityco"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mob-link border border-luxury-gold text-luxury-gold text-xs font-sans font-medium tracking-widest uppercase py-3.5 text-center mt-6 hover:bg-luxury-gold hover:text-luxury-charcoal transition-colors opacity-0"
          >
            Inquire Now
          </a>
        </nav>
      </div>
    </>
  );
}
