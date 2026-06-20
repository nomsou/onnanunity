import type { Metadata } from "next";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/ui/SplashScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { OrganizationSchema } from "@/components/shared/StructuredData";

export const metadata: Metadata = {
  title: "Onnan Unity | Real Estate Company Abuja",
  description:
    "Premium residential developments across Abuja's most prestigious addresses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <SmoothScroll>
          <SplashScreen />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
