import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";

// Replace with actual partner data once logos are available
const partners = [
  { name: "Partner 1", logo: "/images/partners/partner-1.png" },
  { name: "Partner 2", logo: "/images/partners/partner-2.png" },
  { name: "Partner 3", logo: "/images/partners/partner-3.png" },
  { name: "Partner 4", logo: "/images/partners/partner-4.png" },
  { name: "Partner 5", logo: "/images/partners/partner-5.png" },
  { name: "Partner 6", logo: "/images/partners/partner-6.png" },
];

export default function PartnersSection() {
  return (
    <SectionWrapper noPadding>
      <div className="border-y border-white/5 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-site mx-auto flex flex-col gap-8">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-muted text-center">
            Reliable Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="relative h-8 w-24 opacity-40 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {/* Fallback text placeholder when logo images don't exist */}
                <span className="font-sans text-xs text-luxury-muted tracking-wider">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
