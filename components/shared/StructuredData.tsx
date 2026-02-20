export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Onnan Unity",
    url: "https://onnanunity.com",
    logo: "https://onnanunity.com/images/logo.png",
    description:
      "Premium residential real estate developer in Abuja, Nigeria. Specialising in luxury villas, terraces, and smart communities across Maitama, Jahi, and other prestigious FCT neighbourhoods.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2b Samuel A. Ogedengbe Crescent",
      addressLocality: "Jabi",
      addressRegion: "Abuja",
      addressCountry: "NG",
    },
    telephone: "+234-806-032-8758",
    email: "info@onnanunity.com",
    areaServed: "Abuja, Nigeria",
    sameAs: [
      "https://www.instagram.com/onnanunityco",
      "https://www.linkedin.com/company/onnan-unity-company-limited/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PropertySchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  price?: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
}

export function PropertySchema({
  name,
  description,
  url,
  image,
  price,
  address,
  beds,
  baths,
  sqft,
}: PropertySchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name,
    description,
    url: `https://onnanunity.com${url}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressRegion: "Abuja",
      addressCountry: "NG",
    },
    numberOfRooms: beds,
    numberOfBathroomsTotal: baths,
    floorSize: {
      "@type": "QuantitativeValue",
      value: sqft,
      unitCode: "FTK",
    },
  };

  if (image) schema.image = `https://onnanunity.com${image}`;
  if (price) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "NGN",
      price: price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Onnan Unity",
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://onnanunity.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
