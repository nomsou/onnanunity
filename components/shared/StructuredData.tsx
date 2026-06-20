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
