import HeroSlideshow from "@/components/home/HeroSlideshow";
import { getProperties } from "@/utils/propertyutils";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import MissionSection from "@/components/home/MissionSection";
import ServicesSection from "@/components/home/ServicesSection";
import PartnersSection from "@/components/home/PartnersSection";
import { OrganizationSchema } from "@/components/shared/StructuredData";

export default function HomePage() {
  const properties = getProperties();

  return (
    <>
      <OrganizationSchema />
      <HeroSlideshow properties={properties} />
      <StatsSection />
      <FeaturedProjects />
      <MissionSection />
      <ServicesSection />
      <PartnersSection />
    </>
  );
}
