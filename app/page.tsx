import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AnchorProjectSection from "@/components/sections/AnchorProjectSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import BrandStorySection from "@/components/sections/BrandstorySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AnchorProjectSection /> <StatsSection />
      <PropertiesSection />
      <BrandStorySection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
