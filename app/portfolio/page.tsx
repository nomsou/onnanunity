import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyFilter from "@/components/portfolio/PropertyFilter";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse all Onnan Unity residential developments across Abuja. Filter by status and find your ideal home.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Developments"
        heading="Every Home, a Statement"
        subheading="Explore our full portfolio of residential developments across Abuja's most prestigious neighbourhoods."
      />

      <SectionWrapper id="properties">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="All Properties" heading="Find Your Home" />
        </div>
        <PropertyFilter />
      </SectionWrapper>

      {/* <NewsletterSection /> */}
    </>
  );
}
