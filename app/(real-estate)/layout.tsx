import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
