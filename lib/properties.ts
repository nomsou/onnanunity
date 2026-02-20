import type { Property } from "@/types";

export const properties: Property[] = [
  {
    id: "1",
    slug: "askia-i",
    name: "Askia I",
    tagline: "Architectural Excellence on Askia Road",
    description:
      "Askia I is a landmark development along one of Abuja's most prestigious addresses. " +
      "Meticulously designed with a focus on space, light, and premium finishes, each unit " +
      "delivers a living experience that balances contemporary aesthetics with enduring quality. " +
      "Situated in the heart of Katampe, residents enjoy immediate proximity to diplomatic " +
      "missions, fine dining, and Abuja's central business district.",
    location: "No. 7 Ibrahim Gambari Crescent, Katampe Extension, Abuja",
    neighborhood: "Katamape Extension",
    type: "Villa",
    status: "For Sale",
    priceFrom: 180000000,
    beds: 5,
    baths: 3,
    sqft: 4200,
    coverImage: "/images/properties/askia-i/cover.jpg",
    images: [
      "/images/properties/askia-i/gallery-1.jpg",
      "/images/properties/askia-i/gallery-2.jpg",
      "/images/properties/askia-i/gallery-3.jpg",
      "/images/properties/askia-i/gallery-4.jpg",
    ],
    features: [
      {
        icon: "Zap",
        title: "Solar Power",
        description: "24/7 backup solar grid ensuring uninterrupted power.",
      },
      {
        icon: "ShieldCheck",
        title: "Smart Security",
        description: "CCTV surveillance and 24-hour security personnel.",
      },
      {
        icon: "Waves",
        title: "Smart Home",
        description: "Pre-wired for home automation and high-speed fibre.",
      },
      {
        icon: "Trees",
        title: "Green Spaces",
        description: "Landscaped gardens and outdoor leisure areas.",
      },
    ],
    proximity: [
      { label: "To CBD", value: "8 mins" },
      { label: "To Airport", value: "30 mins" },
      { label: "To Maitama", value: "2 mins" },
    ],
    isFeatured: true,
    yearCompleted: 2023,
  },

  {
    id: "2",
    slug: "askia-ii",
    name: "Askia II",
    tagline: "The Next Chapter of Refined Living",
    description:
      "Building on the success of Askia I, Askia II raises the benchmark with upgraded specifications, and an expanded suite of estate amenities. Each home is crafted " +
      "to provide generous, light-filled interiors that feel both grand and intimately comfortable. " +
      "The estate's gated perimeter and controlled access offer residents complete peace of mind.",
    location: "No. 7 Ibrahim Gambari Crescent, Katampe Extension, Abuja",
    neighborhood: "Katampe Extension",
    type: "Villa",
    status: "For Sale",
    priceFrom: 220000000,
    beds: 5,
    baths: 4,
    sqft: 5100,
    coverImage: "/images/properties/askia-ii/cover.jpg",
    images: [
      "/images/properties/askia-ii/gallery-1.jpg",
      "/images/properties/askia-ii/gallery-2.jpg",
      "/images/properties/askia-ii/gallery-3.jpg",
    ],
    features: [
      {
        icon: "Zap",
        title: "Solar Power",
        description: "Dedicated solar installation with battery backup.",
      },
      {
        icon: "ShieldCheck",
        title: "AI Security",
        description: "Facial recognition entry and ANPR gate system.",
      },
      {
        icon: "Wifi",
        title: "FTTH Internet",
        description: "Fibre-to-the-home broadband infrastructure.",
      },
      {
        icon: "Car",
        title: "Parking",
        description: "Covered double garage per unit.",
      },
    ],
    proximity: [
      { label: "To CBD", value: "8 mins" },
      { label: "To Airport", value: "30 mins" },
      { label: "To Maitama", value: "3 mins" },
    ],
    isFeatured: true,
    yearCompleted: 2024,
  },

  {
    id: "3",
    slug: "gana-villas",
    name: "Gana Villas",
    tagline: "Luxury Redefined on Gana Street",
    description:
      "Nestled along the iconic Gana Street in Maitama, Gana Villas is a collection of exclusive " +
      "residences that redefine what luxury living means in Abuja. With expansive open-plan " +
      "living areas, floor-to-ceiling windows, and premium imported finishes, every home is a " +
      "statement of understated elegance. The estate's intimate scale — with only a select number " +
      "of homes — ensures exclusivity and genuine seclusion.",
    location: "194 Gana Street, Maitama, Abuja",
    neighborhood: "Maitama",
    type: "Villa",
    status: "For Sale",
    priceFrom: 250000000,
    beds: 5,
    baths: 5,
    sqft: 5800,
    coverImage: "/images/properties/gana-villas/cover.jpg",
    images: [
      "/images/properties/gana-villas/gallery-1.jpg",
      "/images/properties/gana-villas/gallery-2.jpg",
      "/images/properties/gana-villas/gallery-3.jpg",
      "/images/properties/gana-villas/gallery-4.jpg",
    ],
    features: [
      {
        icon: "Zap",
        title: "Solar Grid",
        description: "Full estate solar power with generator backup.",
      },
      {
        icon: "ShieldCheck",
        title: "24/7 Security",
        description: "Round-the-clock manned security and CCTV.",
      },
      {
        icon: "Droplets",
        title: "Swimming Pool",
        description: "Private infinity-edge pool per unit.",
      },
      {
        icon: "Dumbbell",
        title: "Gym",
        description: "Fully equipped private gymnasium.",
      },
    ],
    proximity: [
      { label: "To Hilton", value: "5 mins" },
      { label: "To Airport", value: "28 mins" },
      { label: "To CBD", value: "10 mins" },
    ],
    isFeatured: true,
    yearCompleted: 2024,
  },

  {
    id: "4",
    slug: "mansa",
    name: "Mansa",
    tagline: "Sovereign Living in Abuja",
    description:
      "Mansa is named for greatness — and it delivers on that promise in every detail. " +
      "This estate offers a collection of generously proportioned homes within a masterfully " +
      "planned community. Wide tree-lined internal roads, manicured communal gardens, and a " +
      "clubhouse set the tone for a neighbourhood that prioritises quality of life above all else.",
    location: "Mansa, Abuja",
    neighborhood: "Abuja",
    type: "Villa",
    status: "Ongoing",
    priceFrom: 150000000,
    beds: 5,
    baths: 4,
    sqft: 4500,
    coverImage: "/images/properties/mansa/cover.jpg",
    images: [
      "/images/properties/mansa/gallery-1.jpg",
      "/images/properties/mansa/gallery-2.jpg",
      "/images/properties/mansa/gallery-3.jpg",
    ],
    features: [
      {
        icon: "Zap",
        title: "Solar Power",
        description: "Sustainable energy powering the entire community.",
      },
      {
        icon: "ShieldCheck",
        title: "Gated Access",
        description: "Perimeter fencing with manned entry gates.",
      },
      {
        icon: "Trees",
        title: "Landscaping",
        description: "Professionally landscaped communal gardens.",
      },
      {
        icon: "Droplets",
        title: "Water Supply",
        description: "Borehole and treated water supply.",
      },
    ],
    proximity: [
      { label: "To Airport", value: "25 mins" },
      { label: "To CBD", value: "15 mins" },
      { label: "To Jabi", value: "10 mins" },
    ],
    isFeatured: false,
  },

  {
    id: "5",
    slug: "samori",
    name: "Samori Villas",
    tagline: "Elegance Woven Into Every Corner",
    description:
      "Samori Villas is a refined collection of contemporary homes built for those who " +
      "appreciate thoughtful design and high-specification living. Each villa features " +
      "open-plan layouts that blur the boundary between indoor comfort and outdoor living, " +
      "with private terraces and beautifully landscaped gardens completing the picture.",
    location: "Samori Street, Abuja",
    neighborhood: "Abuja",
    type: "Villa",
    status: "For Sale",
    priceFrom: 165000000,
    beds: 5,
    baths: 3,
    sqft: 4000,
    coverImage: "/images/properties/samori/cover.jpg",
    images: [
      "/images/properties/samori/gallery-1.jpg",
      "/images/properties/samori/gallery-2.jpg",
      "/images/properties/samori/gallery-3.jpg",
    ],
    features: [
      {
        icon: "Zap",
        title: "Solar Backup",
        description: "Solar inverter system for uninterrupted power.",
      },
      {
        icon: "ShieldCheck",
        title: "Security",
        description: "24-hour security with CCTV coverage.",
      },
      {
        icon: "Car",
        title: "Parking",
        description: "Private driveway and covered parking.",
      },
      {
        icon: "Wifi",
        title: "Connectivity",
        description: "High-speed broadband infrastructure.",
      },
    ],
    proximity: [
      { label: "To Airport", value: "22 mins" },
      { label: "To CBD", value: "12 mins" },
      { label: "To Maitama", value: "8 mins" },
    ],
    isFeatured: false,
  },

  {
    id: "6",
    slug: "sonni",
    name: "Sonni Villas",
    tagline: "Timeless Design, Contemporary Living",
    description:
      "Sonni Villas delivers an exceptional residential experience that blends timeless " +
      "architectural language with the demands of modern family living. Spacious interiors, " +
      "premium finishes, and a strong community ethos make Sonni a place where families " +
      "put down roots and build lasting memories.",
    location: "194 Sonni Street, Abuja",
    neighborhood: "Abuja",
    type: "Villa",
    status: "For Sale",
    priceFrom: 175000000,
    beds: 5,
    baths: 3,
    sqft: 4100,
    coverImage: "/images/properties/sonni/cover.jpg",
    images: [
      "/images/properties/sonni/gallery-1.jpg",
      "/images/properties/sonni/gallery-2.jpg",
    ],
    features: [
      {
        icon: "Zap",
        title: "Power Backup",
        description: "Solar-assisted generator backup system.",
      },
      {
        icon: "ShieldCheck",
        title: "Security",
        description: "Gated estate with 24-hour manned security.",
      },
      {
        icon: "Trees",
        title: "Green Spaces",
        description: "Landscaped private gardens per unit.",
      },
      {
        icon: "Droplets",
        title: "Water",
        description: "Dedicated borehole and treatment plant.",
      },
    ],
    proximity: [
      { label: "To Airport", value: "27 mins" },
      { label: "To CBD", value: "14 mins" },
    ],
    isFeatured: false,
  },

  {
    id: "7",
    slug: "embe-terraces",
    name: "Embe Terraces",
    tagline: "Contemporary Terrace Living in Jahi",
    description:
      "Embe Terraces brings a fresh typology to Abuja's residential landscape — contemporary " +
      "terrace homes that combine the efficiency of compact urban living with the quality and " +
      "finish of a luxury estate. Located in the fast-growing Jahi district, the development " +
      "is ideally positioned for professionals and young families seeking premium living " +
      "without compromise.",
    location: "28 Jahi District, Abuja",
    neighborhood: "Jahi",
    type: "Terrace",
    status: "Ongoing",
    priceFrom: 95000000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    coverImage: "/images/properties/embe-terraces/cover.jpg",
    images: [
      "/images/properties/embe-terraces/gallery-1.jpg",
      "/images/properties/embe-terraces/gallery-2.jpg",
      "/images/properties/embe-terraces/gallery-3.jpg",
    ],
    features: [
      {
        icon: "Zap",
        title: "Solar Power",
        description: "Rooftop solar panels with battery storage.",
      },
      {
        icon: "ShieldCheck",
        title: "Security",
        description: "Perimeter fencing, CCTV and security booth.",
      },
      {
        icon: "Car",
        title: "Parking",
        description: "Allocated parking bays per unit.",
      },
      {
        icon: "Wifi",
        title: "Smart-Ready",
        description: "Pre-wired for smart home and fibre internet.",
      },
    ],
    proximity: [
      { label: "To Airport", value: "20 mins" },
      { label: "To CBD", value: "18 mins" },
      { label: "To Jabi", value: "5 mins" },
    ],
    isFeatured: true,
  },
];
