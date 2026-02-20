import type { Metadata } from "next";
import PageHero       from "@/components/shared/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm    from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title:       "Contact",
  description: "Get in touch with Onnan Unity. Request a site visit, speak with an agent, or send us a message.",
};

const contactDetails = [
  {
    Icon:  MapPin,
    label: "Visit Us",
    lines: ["2b Samuel A. Ogedengbe Crescent,", "Jabi, Abuja, Nigeria"],
    href:  "https://maps.google.com",
  },
  {
    Icon:  Phone,
    label: "Call Us",
    lines: ["+234 806 032 8758"],
    href:  "tel:+2348060328758",
  },
  {
    Icon:  Mail,
    label: "Email Us",
    lines: ["info@onnanunity.com"],
    href:  "mailto:info@onnanunity.com",
  },
  {
    Icon:  Clock,
    label: "Office Hours",
    lines: ["Monday – Friday: 8am – 6pm", "Saturday: 10am – 4pm"],
    href:  null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Get In Touch"
        heading="Let's Start a Conversation"
        subheading="Whether you're ready to buy, just exploring, or have a construction project in mind — we're here to help."
      />

      {/* ── Main Contact Grid ──────────────────────────────────────── */}
      <SectionWrapper id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Contact Details — left 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <SectionHeading
              eyebrow="Contact Details"
              heading="We'd love to hear from you"
            />

            <div className="flex flex-col gap-8">
              {contactDetails.map(({ Icon, label, lines, href }) => (
                <div key={label} className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-luxury-gold/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-luxury-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold mb-1.5">
                      {label}
                    </p>
                    {lines.map((line, i) =>
                      href && i === 0 ? (
                        <a
                          key={i}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block font-sans text-sm text-luxury-cream hover:text-luxury-gold transition-colors duration-300"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="font-sans text-sm text-luxury-muted">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="relative h-52 bg-luxury-charcoal2 border border-white/5 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9!2d7.4!3d9.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMTIuMCJOIDfCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Onnan Unity Office Location"
              />
            </div>
          </div>

          {/* Contact Form — right 3 cols */}
          <div className="lg:col-span-3">
            <div className="card-dark p-8 md:p-10">
              <div className="flex flex-col gap-2 mb-8">
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold">
                  Send a Message
                </p>
                <h2 className="font-display text-2xl font-light text-luxury-cream">
                  How can we help you?
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Enquiry Types ──────────────────────────────────────────── */}
      <SectionWrapper background="dark2" id="enquiry-types">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
          {[
            { title: "Property Purchase",  detail: "Speak to an agent about pricing, availability, and payment plans for any of our estates.", cta: "Browse Properties", href: "/portfolio" },
            { title: "Site Visit Request", detail: "Schedule a guided tour of any of our developments at a time that suits you.", cta: "Request Visit",    href: "https://forms.gle/mZLBTr4j4X6nmYvh7" },
            { title: "Construction Enquiry", detail: "Discuss a civil construction or solar installation project with our technical team.", cta: "View Services",   href: "/services" },
          ].map(({ title, detail, cta, href }) => (
            <div key={title} className="bg-luxury-charcoal p-10 flex flex-col gap-4 group hover:bg-luxury-charcoal2 transition-colors duration-300">
              <div className="w-1 h-8 bg-luxury-gold/30 group-hover:bg-luxury-gold transition-colors duration-300" />
              <h3 className="font-display text-xl font-light text-luxury-cream">{title}</h3>
              <p className="font-sans text-xs text-luxury-muted leading-relaxed flex-1">{detail}</p>
              <a
                href={href}
                className="font-sans text-[11px] uppercase tracking-widest text-luxury-gold hover:text-luxury-gold2 transition-colors duration-300 flex items-center gap-2"
              >
                {cta} →
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
