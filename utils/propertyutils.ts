import { properties } from "@/lib/properties";
import { Property } from "@/types";

export function getProperties(): Property[] {
  return properties;
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.isFeatured);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getPropertySlugs(): string[] {
  return properties.map((p) => p.slug);
}

export function getPropertiesByNeighborhood(neighborhood: string): Property[] {
  return properties.filter(
    (p) => p.neighborhood.toLowerCase() === neighborhood.toLowerCase(),
  );
}

export function formatPrice(price: number): string {
  if (price >= 1_000_000_000) {
    return `₦${(price / 1_000_000_000).toFixed(1)}B`;
  }
  if (price >= 1_000_000) {
    return `₦${(price / 1_000_000).toFixed(0)}M`;
  }
  return `₦${price.toLocaleString()}`;
}
