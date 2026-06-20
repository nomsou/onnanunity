import StatsSection from "@/components/sections/StatsSection";
import AnchorProjectSection from "@/components/sections/AnchorProjectSection";
import StatsDivider from "@/components/sections/StatsDivider";
import PropertyFullscreenSection from "@/components/sections/PropertiesSection";
import BrandStorySection from "@/components/sections/BrandstorySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import { getProperties } from "@/utils/propertyutils";

export default function Home() {
  const properties = getProperties();
  const total = properties.length;

  return (
    <>
      <AnchorProjectSection />
      <StatsSection />

      {properties.map((property, index) => (
        <div key={property.id}>
          <StatsDivider label="Featured Estate" value={property.name} />
          <PropertyFullscreenSection
            property={property}
            index={index}
            total={total}
          />
        </div>
      ))}

      <BrandStorySection />
      <ServicesSection />
    </>
  );
}
