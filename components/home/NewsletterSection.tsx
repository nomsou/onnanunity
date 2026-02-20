"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/ui/Button";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setSubmitted(true);
    } catch (err) {
      console.error("Newsletter error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper background="dark2" id="newsletter">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden border border-luxury-gold/15 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-luxury-gold/40" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-luxury-gold/40" />

        <div className="relative flex flex-col gap-3 max-w-md">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-luxury-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold">
              Stay Informed
            </span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-light text-luxury-cream">
            Are you a Home Owner?
          </h3>
          <p className="font-sans text-sm text-luxury-muted leading-relaxed">
            Enter your email address to receive updates on new developments,
            exclusive previews, and investment opportunities.
          </p>
        </div>

        <div className="relative w-full md:w-auto md:min-w-[360px]">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <div className="w-10 h-10 border border-luxury-gold/30 flex items-center justify-center">
                <span className="text-luxury-gold">✓</span>
              </div>
              <p className="font-sans text-sm text-luxury-cream">
                You&rsquo;re on the list.
              </p>
              <p className="font-sans text-xs text-luxury-muted">
                We&rsquo;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-luxury-charcoal border border-luxury-gold/20 text-luxury-cream placeholder-luxury-muted font-sans text-sm px-5 py-3.5 outline-none focus:border-luxury-gold/50 transition-colors"
              />
              <Button
                type="submit"
                variant="gold"
                size="md"
                disabled={loading}
                className="shrink-0"
              >
                {loading ? "..." : "Get Listed"}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
