import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "dark" | "dark2" | "light" | "transparent";
  noPadding?: boolean;
}

const bgMap = {
  dark: "bg-luxury-charcoal",
  dark2: "bg-luxury-charcoal2",
  light: "bg-luxury-stone",
  transparent: "bg-transparent",
};

export default function SectionWrapper({
  children,
  className,
  id,
  background = "dark",
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        bgMap[background],
        !noPadding && "py-section px-6 md:px-12 lg:px-20",
        className,
      )}
    >
      <div className="max-w-site mx-auto w-full">{children}</div>
    </section>
  );
}
