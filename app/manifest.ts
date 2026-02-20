import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:             "Onnan Unity | Luxury Real Estate",
    short_name:       "Onnan Unity",
    description:      "Premium residential developments across Abuja's most prestigious addresses.",
    start_url:        "/",
    display:          "standalone",
    background_color: "#0E0E0E",
    theme_color:      "#C9A84C",
    icons: [
      {
        src:     "/icons/icon-192.png",
        sizes:   "192x192",
        type:    "image/png",
        purpose: "maskable",
      },
      {
        src:     "/icons/icon-512.png",
        sizes:   "512x512",
        type:    "image/png",
      },
    ],
  };
}
