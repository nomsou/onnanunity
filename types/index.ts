// ─── Property Types ───────────────────────────────────────────────────────────

export type PropertyStatus = "For Sale" | "Ongoing" | "Sold Out" | "Coming Soon";
export type PropertyType   = "Villa" | "Terrace" | "Duplex" | "Apartment" | "Penthouse";

export interface PropertyFeature {
  icon:  string;   // lucide-react icon name e.g. "Zap", "ShieldCheck"
  title: string;
  description: string;
}

export interface PropertyUnit {
  name:        string;   // e.g. "The Palm Suite", "The Duplex"
  description: string;
  beds:        number;
  baths:       number;
  sqft:        number;
  price?:      number;
  images:      string[];
}

export interface ProximityStat {
  label: string;   // e.g. "To Airport"
  value: string;   // e.g. "25 mins"
}

export interface Property {
  id:           string;
  slug:         string;   // URL-safe identifier e.g. "askia-i"
  name:         string;   // e.g. "Askia I"
  tagline:      string;   // Short one-liner e.g. "Where Legacy Meets Modern Living"
  description:  string;   // Full narrative paragraph(s)
  location:     string;   // e.g. "Askia Road, Maitama, Abuja"
  neighborhood: string;   // e.g. "Maitama"
  type:         PropertyType;
  status:       PropertyStatus;
  priceFrom?:   number;   // Starting price in NGN
  beds:         number;
  baths:        number;
  sqft:         number;
  coverImage:   string;   // Path to main card/hero image
  images:       string[];        // All gallery images
  features:     PropertyFeature[];
  units?:       PropertyUnit[];  // Individual house types within the estate
  proximity?:   ProximityStat[]; // Distance stats bar
  isFeatured:   boolean;         // Show on homepage featured section
  yearCompleted?: number;
}

// ─── Testimonial Types ────────────────────────────────────────────────────────

export interface Testimonial {
  id:       string;
  name:     string;
  title?:   string;   // e.g. "Homeowner, Askia I"
  image?:   string;
  quote:    string;
  rating?:  number;   // 1–5
}

// ─── Team Types ───────────────────────────────────────────────────────────────

export interface TeamMember {
  id:          string;
  name:        string;
  role:        string;
  bio:         string;
  image:       string;
  linkedin?:   string;
}

// ─── Service Types ────────────────────────────────────────────────────────────

export interface Service {
  id:          string;
  icon:        string;   // lucide-react icon name
  title:       string;
  description: string;
  features:    string[];
}

// ─── Partner Types ────────────────────────────────────────────────────────────

export interface Partner {
  id:    string;
  name:  string;
  logo:  string;
  url?:  string;
}

// ─── Site Stats ───────────────────────────────────────────────────────────────

export interface SiteStat {
  value:  string;   // e.g. "469+"
  label:  string;   // e.g. "Homes Delivered"
}
