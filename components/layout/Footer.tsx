"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const rootRef = useRef<HTMLElement>(null);
  const year = new Date().getFullYear();

  const completedDevelopments = [
    { label: "Askia I", href: "#portfolio" },
    { label: "Askia II", href: "#portfolio" },
    { label: "Gana Villas", href: "#portfolio" },
    { label: "Mansa", href: "#portfolio" },
    { label: "Samori Villas", href: "#portfolio" },
    { label: "Sonni Villas", href: "#portfolio" },
    { label: "Embe Terraces", href: "#portfolio" },
  ];

  const inProgressDevelopments = [
    { label: "The Madeira ★", href: "#anchor" }, // Add star to highlight anchor
    { label: "Ganges Apartments", href: "#portfolio" },
    { label: "Bangui Place", href: "#portfolio" },
    { label: "Neo-Classic Villas", href: "#portfolio" },
    { label: "Elbe Vista", href: "#portfolio" },
    { label: "Ziva Villas", href: "#portfolio" },
  ];

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".footer-fade-up", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handleSectionScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    if (target.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      ref={rootRef}
      className="bg-luxury-charcoal2 border-t border-luxury-charcoal3"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Desktop Columns Alignment */}
        <div className="hidden lg:flex lg:justify-between lg:gap-8">
          <div className="footer-fade-up flex flex-col gap-5 w-[30%]">
            <Link href="/" className="flex flex-col leading-none w-fit">
              <span className="font-display text-2xl font-medium tracking-wide text-luxury-cream">
                ONNAN UNITY
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-luxury-gold uppercase mt-1">
                Est. 1999
              </span>
            </Link>
            <p className="font-sans text-sm text-luxury-muted leading-relaxed max-w-sm">
              Engineering, construction and real estate development. Delivering
              infrastructure and high-value real estate assets across Nigeria.
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <a
                href="https://maps.app.goo.gl/d4RX2a8rptS7myxEA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-luxury-gold"
                />
                <span className="font-sans text-xs leading-relaxed">
                  2B Samuel A Ogedengbe Crescent,
                  <br />
                  Jabi, Abuja, Nigeria
                </span>
              </a>
              <a
                href="tel:+2349138453033"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Phone size={14} className="shrink-0 text-luxury-gold" />
                <span className="font-sans text-xs">+234 913 845 3033</span>
              </a>
              <a
                href="mailto:info@onnanunity.com"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Mail size={14} className="shrink-0 text-luxury-gold" />
                <span className="font-sans text-xs">info@onnanunity.com</span>
              </a>
            </div>
          </div>

          <div className="footer-fade-up flex flex-col gap-4 w-[12%]">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSectionScroll(e, link.href)}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-fade-up flex flex-col gap-4 w-[20%]">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
              Completed
            </h4>
            <nav className="flex flex-col gap-2">
              {completedDevelopments.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionScroll(e, link.href)}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-fade-up flex flex-col gap-4 w-[20%]">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
              In Progress
            </h4>
            <nav className="flex flex-col gap-2">
              {inProgressDevelopments.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionScroll(e, link.href)}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-fade-up flex flex-col gap-4 w-[12%]">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
              Socials
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/onnanunityco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Instagram size={14} />
                <span className="font-sans text-sm">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/onnan-unity-company-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Linkedin size={14} />
                <span className="font-sans text-sm">LinkedIn</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Tablet and Mobile Adaptations */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="footer-fade-up md:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex flex-col leading-none w-fit">
              <span className="font-display text-2xl font-medium tracking-wide text-luxury-cream">
                ONNAN UNITY
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-luxury-gold uppercase mt-1">
                Est. 1999
              </span>
            </Link>
            <p className="font-sans text-sm text-luxury-muted leading-relaxed max-w-sm">
              Engineering, construction and real estate development. Delivering
              infrastructure and high-value real estate assets across Nigeria.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="https://maps.app.goo.gl/d4RX2a8rptS7myxEA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-luxury-gold"
                />
                <span className="font-sans text-xs leading-relaxed">
                  2B Samuel A Ogedengbe Crescent, Jabi, Abuja, Nigeria
                </span>
              </a>
              <a
                href="tel:+2349138453033"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Phone size={14} className="shrink-0 text-luxury-gold" />
                <span className="font-sans text-xs">+234 913 845 3033</span>
              </a>
              <a
                href="mailto:info@onnanunity.com"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Mail size={14} className="shrink-0 text-luxury-gold" />
                <span className="font-sans text-xs">info@onnanunity.com</span>
              </a>
            </div>
          </div>

          <div className="footer-fade-up flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSectionScroll(e, link.href)}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-fade-up flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
              Completed
            </h4>
            <nav className="flex flex-col gap-2">
              {completedDevelopments.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionScroll(e, link.href)}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-fade-up flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
              In Progress
            </h4>
            <nav className="flex flex-col gap-2">
              {inProgressDevelopments.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionScroll(e, link.href)}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-fade-up flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
              Socials
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/onnanunityco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Instagram size={14} />
                <span className="font-sans text-sm">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/onnan-unity-company-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Linkedin size={14} />
                <span className="font-sans text-sm">LinkedIn</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-luxury-charcoal3">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-sans text-xs text-black">
            © {year} Onnan Unity Co. Ltd. All rights reserved.
          </p>
          <p className="font-sans text-xs text-black invisible sm:visible">
            Engineering integrity built to endure.
          </p>
        </div>
      </div>
    </footer>
  );
}
