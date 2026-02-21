import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPropertyBySlug,
  getPropertySlugs,
  getFeaturedProperties,
  formatPrice,
} from "@/utils/propertyutils";
import ProjectHero from "@/components/project/ProjectHero";
import ProximityBar from "@/components/project/ProximityBar";
import FeaturesGrid from "@/components/project/FeaturesGrid";
import ProjectGallery from "@/components/project/ProjectGallery";
import HouseTypes from "@/components/project/HouseTypes";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/portfolio/PropertyCard";
import Button from "@/components/ui/Button";
import NewsletterSection from "@/components/home/NewsletterSection";
import {
  PropertySchema,
  BreadcrumbSchema,
} from "@/components/shared/StructuredData";
import {
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  CalendarCheck,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = getPropertyBySlug(params.slug);
  if (!property) return {};
  return {
    title: property.name,
    description: property.description.slice(0, 155),
    openGraph: {
      title: `${property.name} | Onnan Unity`,
      images: property.coverImage ? [{ url: property.coverImage }] : [],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();

  const related = getFeaturedProperties()
    .filter((p) => p.slug !== property.slug)
    .slice(0, 3);

  return (
    <>
      <PropertySchema
        name={property.name}
        description={property.description}
        url={`/projects/${property.slug}`}
        image={property.coverImage}
        price={property.priceFrom}
        address={property.location}
        beds={property.beds}
        baths={property.baths}
        sqft={property.sqft}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
          { name: property.name, href: `/projects/${property.slug}` },
        ]}
      />

      <ProjectHero property={property} />

      {property.proximity && property.proximity.length > 0 && (
        <ProximityBar stats={property.proximity} />
      )}

      <SectionWrapper id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <SectionHeading eyebrow="The Development" heading={property.name} />
            <div className="font-sans text-sm text-luxury-muted leading-relaxed space-y-4">
              {property.description
                .split(". ")
                .reduce<string[][]>((acc, sentence, i) => {
                  const paraIndex = Math.floor(i / 3);
                  if (!acc[paraIndex]) acc[paraIndex] = [];
                  acc[paraIndex].push(sentence);
                  return acc;
                }, [])
                .map((sentences, i) => (
                  <p key={i}>
                    {sentences.join(". ")}
                    {sentences.length > 0 &&
                    !sentences[sentences.length - 1].endsWith(".")
                      ? "."
                      : ""}
                  </p>
                ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/contact" variant="gold" size="lg">
                Request Site Visit
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Speak to an Agent
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-0 border border-white/5 h-fit">
            <div className="px-8 py-5 border-b border-white/5">
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold mb-1">
                Starting Price
              </p>
              <p className="font-display text-3xl font-light text-luxury-cream">
                {property.priceFrom
                  ? formatPrice(property.priceFrom)
                  : "Contact Us"}
              </p>
            </div>

            {[
              {
                Icon: BedDouble,
                label: "Bedrooms",
                value: `${property.beds} Bedrooms`,
              },
              {
                Icon: Bath,
                label: "Bathrooms",
                value: `${property.baths} Bathrooms`,
              },
              {
                Icon: Maximize2,
                label: "Size",
                value: `${property.sqft.toLocaleString()} ft²`,
              },
              { Icon: MapPin, label: "Location", value: property.location },
              { Icon: CalendarCheck, label: "Status", value: property.status },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 px-8 py-4 border-b border-white/5 last:border-0"
              >
                <Icon size={14} className="text-luxury-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-luxury-muted mb-0.5">
                    {label}
                  </p>
                  <p className="font-sans text-sm text-luxury-cream">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {property.images && property.images.length > 0 && (
        <SectionWrapper background="dark2" id="gallery">
          <SectionHeading
            eyebrow="Gallery"
            heading="Sights from the Estate"
            className="mb-12"
          />
          <ProjectGallery images={property.images} name={property.name} />
        </SectionWrapper>
      )}

      {property.features && property.features.length > 0 && (
        <SectionWrapper background="dark2" id="features">
          <SectionHeading
            eyebrow="Estate Features"
            heading="Built Around Your Lifestyle"
            subheading="Every amenity and feature has been thoughtfully selected to elevate daily living."
            className="mb-12"
          />
          <FeaturesGrid features={property.features} />
        </SectionWrapper>
      )}

      {property.units && property.units.length > 0 && (
        <SectionWrapper id="house-types">
          <SectionHeading
            eyebrow="Available Units"
            heading="Choose Your Home"
            subheading="A selection of unit types designed to suit different lifestyles and preferences."
            className="mb-12"
          />
          <HouseTypes units={property.units} />
        </SectionWrapper>
      )}

      <SectionWrapper id="enquire">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-luxury-gold/10 p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-luxury-gold/30" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-luxury-gold/30" />

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="gold-rule" />
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold">
                Interested?
              </span>
            </div>
            <h2 className="font-display text-display-md font-light text-luxury-cream">
              Secure Your Place at {property.name}
            </h2>
            <p className="font-sans text-sm text-luxury-muted leading-relaxed">
              Our team is ready to walk you through floor plans, pricing, and
              availability. Schedule a site visit or speak with an agent today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
            <Button
              href="/contact"
              variant="gold"
              size="lg"
              className="flex-1 justify-center"
            >
              Request Site Visit
            </Button>
            <Button
              href="tel:+2348060328758"
              variant="outline"
              size="lg"
              className="flex-1 justify-center"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {related.length > 0 && (
        <SectionWrapper background="dark2" id="related">
          <SectionHeading
            eyebrow="Explore More"
            heading="Other Developments"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
              <PropertyCard key={p.id} property={p} variant="featured" />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* <NewsletterSection /> */}
    </>
  );
}
