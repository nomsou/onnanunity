import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Onnan Unity | Real Estate Company Abuja",
    short_name: "Onnan Unity",
    description:
      "Premium residential developments across Abuja's most prestigious addresses.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F6F2",
    theme_color: "#8B7A5C",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
