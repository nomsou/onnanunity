export type PropertyStatus =
  | "For Sale"
  | "Ongoing"
  | "Sold Out"
  | "Coming Soon";
export type PropertyType =
  | "Villa"
  | "Terrace"
  | "Duplex"
  | "Apartment"
  | "Penthouse";

export interface PropertyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface PropertyUnit {
  name: string;
  description: string;
  beds: number;
  baths: number;
  sqft: number;
  price?: number;
  images: string[];
}

export interface ProximityStat {
  label: string;
  value: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  neighbourhood: string;
  type: PropertyType;
  status: PropertyStatus;
  priceFrom?: number;
  beds: number;
  baths: number;
  sqft: number;
  coverImage: string;
  images: string[];
  features: PropertyFeature[];
  units?: PropertyUnit[];
  proximity?: ProximityStat[];
  isFeatured: boolean;
  yearCompleted?: number;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export interface SiteStat {
  value: string;
  label: string;
}
