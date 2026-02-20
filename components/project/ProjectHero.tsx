import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { Property } from "@/types";

interface ProjectHeroProps {
  property: Property;
}

export default function ProjectHero({ property }: ProjectHeroProps) {
  return (
    <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
      {property.coverImage ? (
        <Image
          src={property.coverImage}
          alt={property.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal2 to-luxury-charcoal" />
      )}

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-dark-gradient" />

      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-20 pb-14">
        <div className="max-w-site mx-auto">
          <Badge status={property.status} className="mb-5" />
          <h1 className="font-display font-light text-display-xl text-luxury-cream mb-3">
            {property.name}
          </h1>
          <p className="font-sans text-base text-luxury-muted max-w-lg">
            {property.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
