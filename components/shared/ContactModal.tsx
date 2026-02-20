"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface ContactModalProps {
  isOpen:   boolean;
  onClose:  () => void;
}

interface FormValues {
  name:     string;
  email:    string;
  phone?:   string;
  interest: string;
  message:  string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>();

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          firstName: data.name.split(" ")[0],
          lastName:  data.name.split(" ").slice(1).join(" ") || "-",
          email:     data.email,
          phone:     data.phone,
          interest:  data.interest,
          message:   data.message,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      reset();
    } catch (err) {
      console.error("Modal form error:", err);
    }
  };

  const inputClass = cn(
    "w-full bg-luxury-charcoal3 border border-white/10 text-luxury-cream placeholder-luxury-muted",
    "font-sans text-sm px-4 py-3 outline-none transition-all duration-300",
    "focus:border-luxury-gold/50 focus:bg-luxury-charcoal2"
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-lg bg-luxury-charcoal2 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-8 border-b border-white/5">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold mb-2">
                  Get In Touch
                </p>
                <h2 className="font-display text-3xl font-light text-luxury-cream">
                  Let&rsquo;s Talk
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-luxury-muted hover:text-luxury-cream transition-colors mt-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 flex flex-col gap-8">
              {/* Quick contact info */}
              <div className="flex flex-col gap-3">
                {[
                  { Icon: Phone, text: "+234 806 032 8758", href: "tel:+2348060328758" },
                  { Icon: Mail,  text: "info@onnanunity.com", href: "mailto:info@onnanunity.com" },
                  { Icon: MapPin, text: "2b Samuel A. Ogedengbe Crescent, Jabi, Abuja", href: "#" },
                ].map(({ Icon, text, href }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors text-sm font-sans"
                  >
                    <Icon size={14} className="shrink-0 text-luxury-gold" />
                    {text}
                  </a>
                ))}
              </div>

              <div className="h-px bg-white/5" />

              {/* Form */}
              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full border border-luxury-gold/30 flex items-center justify-center">
                    <span className="text-luxury-gold text-2xl">✓</span>
                  </div>
                  <h3 className="font-display text-2xl text-luxury-cream">Thank You</h3>
                  <p className="font-sans text-sm text-luxury-muted">
                    We&rsquo;ve received your message and will be in touch within 24 hours.
                  </p>
                  <Button onClick={onClose} variant="outline" size="sm" className="mt-4">
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div>
                    <input
                      {...register("name", { required: "Your name is required" })}
                      placeholder="Full Name *"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 font-sans">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                      })}
                      type="email"
                      placeholder="Email Address *"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 font-sans">{errors.email.message}</p>
                    )}
                  </div>

                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone Number"
                    className={inputClass}
                  />

                  <select
                    {...register("interest", { required: true })}
                    className={cn(inputClass, "appearance-none cursor-pointer")}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      I&apos;m interested in...
                    </option>
                    <option value="askia-i">Askia I</option>
                    <option value="askia-ii">Askia II</option>
                    <option value="gana-villas">Gana Villas</option>
                    <option value="mansa">Mansa</option>
                    <option value="samori">Samori Villas</option>
                    <option value="sonni">Sonni Villas</option>
                    <option value="embe-terraces">Embe Terraces</option>
                    <option value="general">General Enquiry</option>
                  </select>

                  <textarea
                    {...register("message", { required: "Please add a brief message" })}
                    placeholder="Your Message *"
                    rows={4}
                    className={cn(inputClass, "resize-none")}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 font-sans">{errors.message.message}</p>
                  )}

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="mt-2 w-full justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
