import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  const completedDevelopments = [
    { label: "Askia I", href: "/projects/askia-i" },
    { label: "Askia II", href: "/projects/askia-ii" },
    { label: "Gana Villas", href: "/projects/gana-villas" },
    { label: "Mansa", href: "/projects/mansa" },
    { label: "Samori Villas", href: "/projects/samori" },
    { label: "Sonni Villas", href: "/projects/sonni" },
    { label: "Embe Terraces", href: "/projects/embe-terraces" },
  ];

  const inProgressDevelopments = [
    { label: "Ganges Apartments", href: "/projects/ganges-apartments" },
    { label: "The Madeira", href: "/projects/the-madeira" },
    { label: "Bangui Place", href: "/projects/bangui-place" },
    { label: "Neo-Classic Villas", href: "/projects/neo-classic-villas" },
    { label: "Elbe Vista", href: "/projects/elbe-vista" },
    { label: "Ziva Villas", href: "/projects/ziva-villas" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/onnanunityco",
      icon: Instagram,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/onnan-unity-company-limited/",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="bg-luxury-charcoal2 border-t border-luxury-charcoal3">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="hidden lg:flex lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-5 w-[30%]">
            <Link href="/" className="flex flex-col leading-none w-fit">
              <span className="font-display text-2xl font-medium tracking-wide text-luxury-cream">
                ONNAN UNITY
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-luxury-gold uppercase mt-1">
                Est. 1999
              </span>
            </Link>

            <p className="font-sans text-sm text-luxury-muted leading-relaxed max-w-sm">
              Engineering, procurement, construction and real estate
              development. Delivering infrastructure and high-value real estate
              assets across Nigeria.
            </p>

            <div className="flex flex-col gap-2 mt-1">
              <a
                href="https://maps.app.goo.gl/d4RX2a8rptS7myxEA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span className="font-sans text-xs leading-relaxed">
                  2B Samuel A Ogedengbe Crescent,
                  <br />
                  Jabi, Abuja, Nigeria
                </span>
              </a>
              <a
                href="tel:+2349138453033"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Phone size={14} className="shrink-0" />
                <span className="font-sans text-xs">+234 9 138 453 033</span>
              </a>
              <a
                href="mailto:info@onnanunity.com"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Mail size={14} className="shrink-0" />
                <span className="font-sans text-xs">info@onnanunity.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[12%]">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 w-[20%]">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
              Completed
            </h4>
            <nav className="flex flex-col gap-2">
              {completedDevelopments.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 w-[20%]">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
              In Progress
            </h4>
            <nav className="flex flex-col gap-2">
              {inProgressDevelopments.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 w-[12%]">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
              Socials
            </h4>
            <nav className="flex flex-col gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
                >
                  <Icon size={14} />
                  <span className="font-sans text-sm">{label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex flex-col leading-none w-fit">
              <span className="font-display text-2xl font-medium tracking-wide text-luxury-cream">
                ONNAN UNITY
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-luxury-gold uppercase mt-1">
                Est. 1999
              </span>
            </Link>

            <p className="font-sans text-sm text-luxury-muted leading-relaxed max-w-sm">
              Engineering, procurement, construction and real estate
              development. Delivering infrastructure and high-value real estate
              assets across Nigeria.
            </p>

            <div className="flex flex-col gap-2 mt-1">
              <a
                href="https://maps.app.goo.gl/d4RX2a8rptS7myxEA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span className="font-sans text-xs leading-relaxed">
                  2B Samuel A Ogedengbe Crescent,
                  <br />
                  Jabi, Abuja, Nigeria
                </span>
              </a>
              <a
                href="tel:+2349138453033"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Phone size={14} className="shrink-0" />
                <span className="font-sans text-xs">+234 9 138 453 033</span>
              </a>
              <a
                href="mailto:info@onnanunity.com"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Mail size={14} className="shrink-0" />
                <span className="font-sans text-xs">info@onnanunity.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
              Completed
            </h4>
            <nav className="flex flex-col gap-2">
              {completedDevelopments.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
              In Progress
            </h4>
            <nav className="flex flex-col gap-2">
              {inProgressDevelopments.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-luxury-muted hover:text-luxury-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
              Socials
            </h4>
            <nav className="flex flex-col gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
                >
                  <Icon size={14} />
                  <span className="font-sans text-sm">{label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-luxury-charcoal3">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 py-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="font-sans text-xs text-luxury-muted">
            © {year} Onnan Unity Co. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
