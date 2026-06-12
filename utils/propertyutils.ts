import { properties } from "@/lib/properties";
import { Property } from "@/types";

export function getProperties(): Property[] {
  return properties;
}

export function getPropertiesByNeighborhood(neighborhood: string): Property[] {
  return properties.filter(
    (p) => p.neighborhood.toLowerCase() === neighborhood.toLowerCase(),
  );
}
