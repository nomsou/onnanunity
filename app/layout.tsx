import type { Metadata } from "next";
import "./globals.css";
import SplashScreen from "@/components/ui/SplashScreen";
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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <OrganizationSchema />
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
