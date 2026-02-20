import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Site-wide statistics shown on homepage */
export const siteStats = [
  { value: "469+", label: "Homes Delivered"  },
  { value: "7",    label: "Active Estates"   },
  { value: "2k+",  label: "Happy Residents"  },
  { value: "15+",  label: "Years of Excellence" },
];

/** Navigation links */
export const navLinks = [
  { label: "Home",       href: "/"          },
  { label: "Portfolio",  href: "/portfolio" },
  { label: "About",      href: "/about"     },
  { label: "Services",   href: "/services"  },
  { label: "Contact",    href: "/contact"   },
];

/** Services offered */
export const services = [
  {
    id:          "real-estate",
    icon:        "Building2",
    title:       "Real Estate Development",
    description: "From land acquisition through design, construction, and final handover, we deliver residential communities built to last. Every development is a reflection of our commitment to quality and innovation.",
    features:    ["Land Acquisition", "Architectural Design", "Project Management", "Quality Assurance"],
  },
  {
    id:          "construction",
    icon:        "HardHat",
    title:       "Civil Construction",
    description: "Our construction arm executes projects with precision and professionalism, leveraging experienced site teams and premium materials to bring even the most complex designs to life on schedule.",
    features:    ["Structural Works", "Interior Finishing", "Landscaping", "Infrastructure"],
  },
  {
    id:          "solar",
    icon:        "Zap",
    title:       "Solar Power Solutions",
    description: "Sustainability is at the core of how we build. Through our engineering subsidiary, every Onnan Unity development is equipped with a solar power infrastructure that reduces dependency on the national grid.",
    features:    ["Solar Installation", "Battery Storage", "Grid Integration", "Maintenance"],
  },
];
