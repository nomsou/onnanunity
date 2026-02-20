"use client";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}

const inputClass = cn(
  "w-full bg-luxury-charcoal border border-white/10 text-luxury-cream placeholder-luxury-muted",
  "font-sans text-sm px-4 py-3.5 outline-none transition-all duration-300",
  "focus:border-luxury-gold/50 focus:bg-luxury-charcoal2",
);

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Submission failed");
      }
      reset();
    } catch (err) {
      console.error("Form error:", err);
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
        <div className="w-16 h-16 border border-luxury-gold/30 flex items-center justify-center">
          <span className="text-luxury-gold text-2xl">✓</span>
        </div>
        <h3 className="font-display text-2xl font-light text-luxury-cream">
          Message Received
        </h3>
        <p className="font-sans text-sm text-luxury-muted max-w-sm">
          Thank you for reaching out. A member of our team will be in touch
          within one business day.
        </p>
        <Button
          onClick={() => reset()}
          variant="outline"
          size="sm"
          className="mt-2"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("firstName", { required: "First name is required" })}
            placeholder="First Name *"
            className={inputClass}
          />
          {errors.firstName && (
            <p className="text-red-400 text-xs mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Last Name *"
            className={inputClass}
          />
          {errors.lastName && (
            <p className="text-red-400 text-xs mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            type="email"
            placeholder="Email Address *"
            className={inputClass}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          className={inputClass}
        />
      </div>

      <div>
        <select
          {...register("interest", {
            required: "Please select an enquiry type",
          })}
          defaultValue=""
          className={cn(inputClass, "appearance-none cursor-pointer")}
        >
          <option value="" disabled>
            I&apos;m enquiring about... *
          </option>
          <option value="askia-i">Askia I</option>
          <option value="askia-ii">Askia II</option>
          <option value="gana-villas">Gana Villas</option>
          <option value="mansa">Mansa</option>
          <option value="samori">Samori Villas</option>
          <option value="sonni">Sonni Villas</option>
          <option value="embe-terraces">Embe Terraces</option>
          <option value="construction">Construction Services</option>
          <option value="solar">Solar Solutions</option>
          <option value="general">General Enquiry</option>
        </select>
        {errors.interest && (
          <p className="text-red-400 text-xs mt-1">{errors.interest.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          {...register("message", { required: "Please add a message" })}
          placeholder="Your Message *"
          rows={5}
          className={cn(inputClass, "resize-none")}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full justify-center mt-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="font-sans text-[11px] text-luxury-muted text-center">
        We respond within one business day. Your information is kept private.
      </p>
    </form>
  );
}
