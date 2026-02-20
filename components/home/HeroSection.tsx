"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import ContactModal from "@/components/shared/ContactModal";

function AnimatedHeadline({
  lines,
  delay = 0,
}: {
  lines: { text: string; gold?: boolean }[];
  delay?: number;
}) {
  return (
    <h1 className="font-display font-light text-display-xl text-luxury-cream leading-tight">
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden">
          <motion.span
            className={`block ${line.gold ? "text-gold-gradient" : ""}`}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.85,
              delay: delay + lineIdx * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Onnan Unity — Luxury Real Estate Abuja"
            fill
            className="object-cover scale-110"
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-luxury-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/85 via-luxury-charcoal/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-luxury-charcoal to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <motion.span
                className="gold-rule"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold">
                Luxury Real Estate · Abuja
              </span>
            </motion.div>

            <AnimatedHeadline
              delay={0.3}
              lines={[
                { text: "Redefining" },
                { text: "Extraordinary", gold: true },
                { text: "Living" },
              ]}
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72, ease: "easeOut" }}
              className="font-sans text-base text-luxury-muted leading-relaxed max-w-md"
            >
              Premium residential developments across Abuja&apos;s most coveted
              addresses — where craftsmanship meets contemporary living.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.88, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Button href="/portfolio" variant="gold" size="lg">
                Explore Properties
              </Button>
              <Button
                onClick={() => setModalOpen(true)}
                variant="outline"
                size="lg"
              >
                Talk To Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="flex items-center gap-6 pt-2 border-t border-white/10 w-fit"
            >
              {[
                { value: "7", label: "Estates" },
                { value: "469+", label: "Homes" },
                { value: "2k+", label: "Residents" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-display text-xl font-light text-luxury-gold leading-none">
                    {value}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-luxury-muted">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-luxury-muted/60"
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={13} />
          </motion.div>
        </motion.div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
