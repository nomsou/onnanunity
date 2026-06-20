"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  HardHat,
  Building2,
  Wrench,
  Hammer,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";
import EngineeringHeader from "@/components/layout/EngineeringHeader";

const disciplines = [
  {
    icon: Building2,
    title: "Civil Construction",
    description:
      "Full-cycle civil construction from foundation to handover, executed by experienced site teams with rigorous quality control at every stage.",
  },
  {
    icon: Wrench,
    title: "Structural Works",
    description:
      "Structural design and execution built on sound engineering principles, ensuring every build is safe, durable, and built to last.",
  },
  {
    icon: Hammer,
    title: "Interior Finishing",
    description:
      "Premium interior finishing using quality materials and skilled craftsmanship, delivered on schedule and to specification.",
  },
  {
    icon: Lightbulb,
    title: "Solar & Infrastructure",
    description:
      "Solar energy installation and supporting infrastructure works that bring reliable, sustainable power to residential and commercial sites.",
  },
];

const capabilities = [
  "Land surveying and site assessment",
  "Structural design and engineering oversight",
  "Civil and infrastructure construction",
  "Landscaping and external works",
  "Solar power installation and integration",
  "Project management and quality assurance",
];

export default function EngineeringServicesPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".eng-hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".eng-discipline-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: "#disciplines", start: "top 80%" },
      });

      gsap.from(".eng-discipline-card", {
        y: 45,
        opacity: 0,
        stagger: 0.15,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".eng-discipline-grid", start: "top 80%" },
      });

      gsap.from(".eng-capabilities-text", {
        x: -40,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".eng-capabilities", start: "top 80%" },
      });

      gsap.from(".eng-capability-item", {
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".eng-capabilities", start: "top 80%" },
      });

      gsap.from(".eng-cta-strip", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ".eng-cta-strip", start: "top 85%" },
      });

      gsap.from(".eng-contact-reveal", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#contact", start: "top 80%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-luxury-charcoal min-h-screen">
      <EngineeringHeader />

      {/* Hero */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-40 pb-24 md:pt-48 md:pb-32 max-w-7xl mx-auto">
        <div className="eng-hero-reveal flex items-center gap-3 mb-6">
          <span className="gold-rule" />
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
            Engineering & Construction
          </span>
        </div>
        <h1 className="eng-hero-reveal font-display font-light text-4xl md:text-6xl text-luxury-cream leading-tight max-w-3xl">
          Precision engineering, built to endure.
        </h1>
        <p className="eng-hero-reveal font-sans text-base text-luxury-muted leading-relaxed max-w-xl mt-6">
          Onnan Unity&apos;s engineering arm executes civil construction,
          structural works, and infrastructure projects with the same discipline
          and quality standard that defines every Onnan Unity development. Since
          1999, we&apos;ve built the foundations beneath Abuja&apos;s most
          trusted addresses.
        </p>

        <div className="eng-hero-reveal flex flex-wrap gap-4 mt-10">
          <a
            href="#disciplines"
            className="bg-luxury-gold text-luxury-charcoal font-sans font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-luxury-gold2 transition-all duration-300"
          >
            Our Disciplines
          </a>
          <a
            href="#contact"
            className="border border-luxury-gold text-luxury-gold font-sans font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Disciplines */}
      <section
        id="disciplines"
        className="bg-luxury-charcoal2 border-y border-border-custom/40 py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="eng-discipline-title">
            <div className="flex items-center gap-3 mb-3">
              <span className="gold-rule" />
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
                What We Do
              </span>
            </div>
            <h2 className="font-display font-light text-3xl md:text-5xl text-luxury-cream mb-14 max-w-2xl">
              Four disciplines, one engineering standard.
            </h2>
          </div>

          <div className="eng-discipline-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-border-custom/30 border border-border-custom/30">
            {disciplines.map((item, idx) => (
              <div
                key={idx}
                className="eng-discipline-card bg-luxury-charcoal p-10 flex flex-col gap-5 hover:bg-luxury-charcoal2 transition-colors duration-300"
              >
                <div className="text-luxury-gold w-fit">
                  <item.icon size={28} />
                </div>
                <span className="font-display text-4xl font-light text-luxury-muted leading-none">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-2xl font-light text-luxury-cream -mt-1">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-luxury-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="eng-capabilities py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="eng-capabilities-text">
            <div className="flex items-center gap-3 mb-3">
              <span className="gold-rule" />
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
                Capabilities
              </span>
            </div>
            <h2 className="font-display font-light text-3xl md:text-4xl text-luxury-cream mb-6">
              Engineering teams that deliver on schedule.
            </h2>
            <p className="font-sans text-sm text-luxury-muted leading-relaxed max-w-md">
              Our site teams combine experienced project management with premium
              materials, ensuring layouts move from drawing board to reality
              without compromise on safety or quality.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {capabilities.map((item, i) => (
              <li
                key={i}
                className="eng-capability-item flex items-start gap-4"
              >
                <ShieldCheck
                  size={16}
                  className="text-luxury-gold mt-0.5 shrink-0"
                />
                <span className="font-sans text-sm text-luxury-muted">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA strip */}
      <section className="eng-cta-strip bg-luxury-charcoal2 border-y border-border-custom/40 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <HardHat size={28} className="text-luxury-gold" />
            <p className="font-display text-xl md:text-2xl font-light text-luxury-cream">
              Have a project in mind? Let&apos;s build it together.
            </p>
          </div>
          <a
            href="https://www.instagram.com/onnanunityco"
            className="inline-flex items-center gap-2 bg-luxury-gold text-luxury-charcoal font-sans font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-luxury-gold2 transition-all duration-300 shrink-0"
          >
            Get In Touch
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <div className="eng-contact-reveal flex items-center gap-3 mb-3">
          <span className="gold-rule" />
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
            Get In Touch
          </span>
        </div>
        <h2 className="eng-contact-reveal font-display font-light text-3xl md:text-4xl text-luxury-cream mb-10">
          Speak with our engineering team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mb-12">
          <div className="eng-contact-reveal flex items-start gap-4">
            <div className="w-10 h-10 border border-border-custom/60 flex items-center justify-center text-luxury-gold shrink-0">
              <MapPin size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold mb-0.5">
                Office
              </p>
              <span className="font-sans text-xs text-luxury-cream">
                2b Samuel A. Ogedengbe Crescent, Jabi, Abuja
              </span>
            </div>
          </div>
          <div className="eng-contact-reveal flex items-start gap-4">
            <div className="w-10 h-10 border border-border-custom/60 flex items-center justify-center text-luxury-gold shrink-0">
              <Phone size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold mb-0.5">
                Call Us
              </p>
              <a
                href="tel:+2348060328758"
                className="font-sans text-xs text-luxury-cream hover:text-luxury-gold transition-colors"
              >
                +234 806 032 8758
              </a>
            </div>
          </div>
          <div className="eng-contact-reveal flex items-start gap-4">
            <div className="w-10 h-10 border border-border-custom/60 flex items-center justify-center text-luxury-gold shrink-0">
              <Mail size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold mb-0.5">
                Email Us
              </p>
              <a
                href="mailto:info@onnanunity.com"
                className="font-sans text-xs text-luxury-cream hover:text-luxury-gold transition-colors"
              >
                info@onnanunity.com
              </a>
            </div>
          </div>
        </div>

        <div className="eng-contact-reveal flex items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
            Follow Us
          </p>
          <a
            href="https://www.instagram.com/onnanunityco"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-border-custom/60 flex items-center justify-center text-luxury-muted hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300"
            aria-label="Onnan Unity on Instagram"
          >
            <Instagram size={14} />
          </a>
          <a
            href="https://www.linkedin.com/company/onnan-unity-company-limited/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-border-custom/60 flex items-center justify-center text-luxury-muted hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300"
            aria-label="Onnan Unity on LinkedIn"
          >
            <Linkedin size={14} />
          </a>
        </div>
      </section>

      <footer className="border-t border-border-custom/40 py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-sans text-xs text-luxury-muted">
            © {new Date().getFullYear()} Onnan Unity Co. Ltd. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="font-sans text-xs text-luxury-gold hover:text-luxury-gold2 transition-colors"
          >
            Visit our Real Estate site →
          </Link>
        </div>
      </footer>
    </div>
  );
}
