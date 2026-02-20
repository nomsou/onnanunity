import HeroSection         from "@/components/home/HeroSection";
import StatsSection        from "@/components/home/StatsSection";
import FeaturedProjects    from "@/components/home/FeaturedProjects";
import MissionSection      from "@/components/home/MissionSection";
import ServicesSection     from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection     from "@/components/home/PartnersSection";
import NewsletterSection   from "@/components/home/NewsletterSection";
import { OrganizationSchema } from "@/components/shared/StructuredData";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <MissionSection />
      <ServicesSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsletterSection />
    </>
  );
}
