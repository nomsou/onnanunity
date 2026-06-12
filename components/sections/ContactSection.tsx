"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export default function ContactSection() {
  const rootRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim-node", {
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const onFormSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const inputClasses =
    "w-full bg-luxury-charcoal border border-border-custom/80 text-luxury-cream placeholder-luxury-muted font-sans text-sm px-4 py-3.5 outline-none transition-colors focus:border-luxury-gold";

  return (
    <section
      ref={rootRef}
      className="bg-luxury-charcoal py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="contact-anim-node lg:col-span-5 space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="gold-rule" />
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
                Contact Details
              </span>
            </div>
            <h2 className="font-display font-light text-4xl text-luxury-cream">
              We'd love to hear from you
            </h2>
          </div>

          <div className="space-y-6 font-sans text-sm text-luxury-muted">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border-custom/60 flex items-center justify-center text-luxury-gold shrink-0">
                <MapPin size={14} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold mb-0.5">
                  Visit Us
                </p>
                <span className="text-luxury-cream">
                  2b Samuel A. Ogedengbe Crescent, Jabi, Abuja
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border-custom/60 flex items-center justify-center text-luxury-gold shrink-0">
                <Phone size={14} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold mb-0.5">
                  Call Us
                </p>
                <a
                  href="tel:+2348060328758"
                  className="text-luxury-cream hover:text-luxury-gold transition-colors"
                >
                  +234 806 032 8758
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border-custom/60 flex items-center justify-center text-luxury-gold shrink-0">
                <Mail size={14} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold mb-0.5">
                  Email Us
                </p>
                <a
                  href="mailto:info@onnanunity.com"
                  className="text-luxury-cream hover:text-luxury-gold transition-colors"
                >
                  info@onnanunity.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border-custom/60 flex items-center justify-center text-luxury-gold shrink-0">
                <Clock size={14} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold mb-0.5">
                  Office Hours
                </p>
                <span className="text-luxury-cream">
                  Mon – Fri: 8am – 6pm / Sat: 10am – 4pm
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-48 bg-luxury-charcoal2 border border-border-custom/40 overflow-hidden filter grayscale opacity-60 hover:opacity-100 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9238287201615!2d7.4280377!3d9.0707041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0be0aaeaf397%3A0x8540baf30cf3c7dc!2sOnnan%20Unity%20Company%20Limited!5e0!3m2!1sen!2sng!4v1771593772525!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Coordinates"
            />
          </div>
        </div>

        <div className="contact-anim-node lg:col-span-7 bg-luxury-charcoal2 border border-border-custom/40 p-8 md:p-10">
          <div className="flex flex-col gap-1 mb-6">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold">
              Send a Message
            </p>
            <h3 className="font-display text-2xl text-luxury-cream">
              How can we help you?
            </h3>
          </div>

          {success ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <div className="w-12 h-12 border border-luxury-gold/30 text-luxury-gold flex items-center justify-center text-xl font-light">
                ✓
              </div>
              <h4 className="font-display text-xl text-luxury-cream">
                Message Successfully Sent
              </h4>
              <p className="font-sans text-xs text-luxury-muted max-w-xs leading-relaxed">
                A member of our property advisory or technical team will follow
                up on this query within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  {...register("firstName", { required: true })}
                  placeholder="First Name *"
                  className={inputClasses}
                />
                <input
                  {...register("lastName", { required: true })}
                  placeholder="Last Name *"
                  className={inputClasses}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email Address *"
                  className={inputClasses}
                />
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder="Phone Number"
                  className={inputClasses}
                />
              </div>
              <select
                {...register("interest", { required: true })}
                className={inputClasses}
                defaultValue=""
              >
                <option value="" disabled>
                  I'm enquiring about... *
                </option>
                <option value="askia">Askia Portfolio Communities</option>
                <option value="gana">Gana Street Luxury Villas</option>
                <option value="embe">Embe Terraces Framework</option>
                <option value="construction">Civil Construction Arm</option>
                <option value="solar">Solar Energy Engineering</option>
              </select>
              <textarea
                {...register("message", { required: true })}
                placeholder="Your Message *"
                rows={4}
                className={`${inputClasses} resize-none`}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-luxury-gold text-luxury-charcoal font-sans font-medium tracking-widest uppercase text-xs py-4 transition-colors hover:bg-luxury-gold2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
