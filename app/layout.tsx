import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/shared/PageTransition";
import ScrollProgress from "@/components/shared/ScrollProgress";
import FloatingCTA from "@/components/shared/FloatingCTA";
import ScrollToTop from "@/components/shared/ScrollToTop";
import CustomCursor from "@/components/shared/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Onnan Unity | Luxury Real Estate in Abuja",
    template: "%s | Onnan Unity",
  },
  description:
    "Onnan Unity delivers exceptional luxury residential developments across Abuja's most " +
    "prestigious neighbourhoods — Maitama, Jahi, and beyond. Explore our portfolio of premium villas, " +
    "terraces, and smart communities.",
  keywords: [
    "luxury real estate Abuja",
    "property for sale Abuja",
    "Maitama houses",
    "Abuja villas",
    "Onnan Unity",
    "real estate developer Abuja",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://onnanunity.com",
    siteName: "Onnan Unity",
    title: "Onnan Unity | Luxury Real Estate in Abuja",
    description:
      "Premium residential developments in Abuja's most coveted addresses.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Onnan Unity — Luxury Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onnan Unity | Luxury Real Estate in Abuja",
    description:
      "Premium residential developments in Abuja's most coveted addresses.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <FloatingCTA />
        <ScrollToTop />
      </body>
    </html>
  );
}
