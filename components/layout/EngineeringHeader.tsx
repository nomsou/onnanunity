"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EngineeringHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4 shadow-sm" : "py-6",
      )}
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E2DFD9",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <Link href="/engineering-services" className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden">
            <img
              src="/logo.png"
              alt="Onnan Unity Logo"
              className="w-full h-full object-contain"
              style={{
                filter: "none",
              }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-light tracking-[0.15em] transition-colors duration-300 text-neutral-900">
              ONNAN UNITY
            </span>
            <span className="font-sans text-[8px] tracking-[0.25em] uppercase mt-1 text-luxury-gold">
              Engineering
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest transition-colors duration-300 text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft size={14} />
          Real Estate Site
        </Link>
      </div>
    </header>
  );
}
