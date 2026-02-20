import type { Metadata } from "next";
import Image          from "next/image";
import PageHero       from "@/components/shared/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button         from "@/components/ui/Button";
import NewsletterSection from "@/components/home/NewsletterSection";
import { services }   from "@/lib/utils";
import { Building2, HardHat, Zap, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:       "Services",
  description: "Onnan Unity offers real estate development, civil construction, and solar power solutions across Abuja.",
};

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={32} />,
  HardHat:   <HardHat   size={32} />,
  Zap:       <Zap       size={32} />,
};

const serviceImages: Record<string, string> = {
  "real-estate":  "/images/hero/service-realestate.jpg",
  "construction": "/images/hero/service-construction.jpg",
  "solar":        "/images/hero/service-solar.jpg",
};

const whyUs = [
  { title: "End-to-End Delivery",    detail: "We manage every stage of the project lifecycle, from initial concept through to resident handover." },
  { title: "In-House Expertise",     detail: "Our architecture, engineering, and solar teams work under one roof, eliminating costly coordination delays." },
  { title: "Sustainable by Design",  detail: "Solar infrastructure and energy-efficient systems are built into every project from the foundation up." },
  { title: "Transparent Pricing",    detail: "No hidden costs. We agree a clear specification and budget at the outset and hold to it." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="What We Do"
        heading="Three Disciplines. One Standard of Excellence."
        subheading="From land acquisition to solar installation, we deliver every phase of a premium residential development under one roof."
      />

      {/* ── Services Detail ────────────────────────────────────────── */}
      {services.map((service, i) => {
        const isReversed = i % 2 !== 0;
        return (
          <SectionWrapper
            key={service.id}
            id={service.id}
            background={i % 2 === 0 ? "dark" : "dark2"}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                isReversed ? "lg:flex lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden bg-luxury-charcoal3">
                <Image
                  src={serviceImages[service.id] ?? "/images/hero/hero-bg.jpg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Number overlay */}
                <div className="absolute bottom-6 right-6">
                  <span className="font-display text-8xl font-light text-white/5 leading-none select-none">
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-7">
                <div className="text-luxury-gold">
                  {iconMap[service.icon] ?? <Building2 size={32} />}
                </div>

                <SectionHeading
                  eyebrow={`Service 0${i + 1}`}
                  heading={service.title}
                />

                <p className="font-sans text-sm text-luxury-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-sans text-xs text-luxury-muted">
                      <CheckCircle size={12} className="text-luxury-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant="outline" size="md" className="w-fit group">
                  Enquire About This Service
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </SectionWrapper>
        );
      })}

      {/* ── Why Choose Us ──────────────────────────────────────────── */}
      <SectionWrapper background="dark2" id="why-us">
        <SectionHeading
          eyebrow="Why Onnan Unity"
          heading="The Difference is in the Detail"
          subheading="Four reasons why Abuja's most discerning homeowners choose us."
          align="center"
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {whyUs.map(({ title, detail }, i) => (
            <div
              key={title}
              className="bg-luxury-charcoal2 p-8 flex flex-col gap-4 hover:bg-luxury-charcoal3 transition-colors duration-300"
            >
              <span className="font-display text-4xl font-light text-luxury-gold/20 leading-none">
                0{i + 1}
              </span>
              <h3 className="font-sans text-sm font-medium text-luxury-cream">{title}</h3>
              <p className="font-sans text-xs text-luxury-muted leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <SectionWrapper id="cta">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border border-luxury-gold/15 p-12 relative">
          <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-luxury-gold/30" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-luxury-gold/30" />
          <div className="flex flex-col gap-3 max-w-lg">
            <h2 className="font-display text-3xl font-light text-luxury-cream">
              Ready to start a project?
            </h2>
            <p className="font-sans text-sm text-luxury-muted">
              Whether you&apos;re acquiring land, commissioning a build, or exploring an estate
              purchase — our team is ready to talk.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Button href="/contact" variant="gold"    size="lg">Get In Touch</Button>
            <Button href="/portfolio" variant="outline" size="lg">View Portfolio</Button>
          </div>
        </div>
      </SectionWrapper>

      <NewsletterSection />
    </>
  );
}
