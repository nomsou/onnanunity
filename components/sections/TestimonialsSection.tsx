// src/components/sections/TestimonialsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adetunji Joseph",
    title: "Homeowner, Askia I",
    quote:
      "The estate's unique design immediately caught my attention and the promise of privacy truly won me over. With only a select few semi-detached houses on the premises, I knew I was entering a world where seclusion reigns supreme.",
  },
  {
    name: "Nkechi Duru",
    title: "Homeowner, Gana Villas",
    quote:
      "Their commitment to timely delivery transformed my vision into reality faster than I could have imagined. Onnan Unity's remarkable ability to uphold deadlines while maintaining top-notch quality truly sets them apart.",
  },
  {
    name: "Abdul Kareem",
    title: "Homeowner, Samori Villas",
    quote:
      "I have found the ultimate luxury spot with Onnan Unity Properties. It is not just about elegant living — it is about having your own private sanctuary. The attention to detail exceeded every expectation I had.",
  },
];

export default function TestimonialsSection() {
  const rootRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth / 2),
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="bg-luxury-charcoal2 py-24 border-y border-border-custom/40 overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="gold-rule" />
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
            Client Stories
          </span>
          <span className="gold-rule" />
        </div>
        <h2 className="font-display font-light text-4xl md:text-5xl text-luxury-cream">
          Words from our residents
        </h2>
        <p className="font-sans text-base text-luxury-muted max-w-xl">
          Real experiences from people who now call an Onnan Unity development
          home.
        </p>
      </div>

      <div className="w-full relative flex overflow-hidden">
        <div ref={trackRef} className="flex gap-6 w-max whitespace-nowrap py-2">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[300px] sm:w-[440px] bg-luxury-charcoal border border-border-custom/30 p-8 flex flex-col justify-between whitespace-normal shadow-xs"
            >
              <Quote
                size={28}
                className="text-luxury-gold/30 fill-luxury-gold/10 mb-4"
              />
              <p className="font-sans text-sm text-luxury-muted leading-relaxed flex-1 italic mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border-custom/30">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center font-display text-luxury-gold text-base">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-luxury-cream leading-none mb-1">
                    {item.name}
                  </p>
                  <p className="font-sans text-xs text-luxury-muted">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
