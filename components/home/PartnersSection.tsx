"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";

const partners = [
  { name: "Stanbic Bank", logo: "/images/partners/partner-1.jpeg" },
  { name: "Gaggenau Home Appliances", logo: "/images/partners/partner-2.jpeg" },
  { name: "Belanova Industries", logo: "/images/partners/partner-3.png" },
  { name: "Creavit", logo: "/images/partners/partner-4.jpeg" },
  { name: "ELBA Home Appliances", logo: "/images/partners/partner-5.png" },
  { name: "Dulux Paints", logo: "/images/partners/partner-6.png" },
];

const looped = [...partners, ...partners, ...partners];

function PartnerCard({ name, logo }: { name: string; logo: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 group w-32 shrink-0 cursor-pointer select-none">
      <div className="relative w-24 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {!imgError ? (
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain transition-all duration-300 group-hover:drop-shadow-md"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full border border-dashed border-luxury-gold/40 flex items-center justify-center rounded">
            <span className="font-sans text-[9px] uppercase tracking-widest text-luxury-gold/60 text-center px-1 leading-tight">
              {name}
            </span>
          </div>
        )}
      </div>
      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-muted group-hover:text-luxury-gold transition-colors duration-300 text-center">
        {name}
      </span>
    </div>
  );
}

export default function PartnersSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper noPadding>
      <div className="border-y border-black/8 dark:border-white/5 py-12">
        <div className="flex flex-col gap-8">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-muted text-center px-6">
            Reliable Partners
          </p>

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => {
              if (trackRef.current)
                trackRef.current.style.animationPlayState = "paused";
            }}
            onMouseLeave={() => {
              if (trackRef.current)
                trackRef.current.style.animationPlayState = "running";
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none
                            bg-gradient-to-r from-white dark:from-luxury-charcoal to-transparent"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none
                            bg-gradient-to-l from-white dark:from-luxury-charcoal to-transparent"
            />

            <div
              ref={trackRef}
              className="flex items-end gap-16 w-max"
              style={{ animation: "marquee 28s linear infinite" }}
            >
              {looped.map((partner, i) => (
                <PartnerCard key={`${partner.name}-${i}`} {...partner} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </SectionWrapper>
  );
}
