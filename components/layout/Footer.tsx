import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/utils";

const legalLinks = [
  { label: "Privacy Policy",    href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-luxury-charcoal border-t border-white/5">

      {/* Main Footer Grid */}
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex flex-col leading-none w-fit">
              <span className="font-display text-3xl font-light tracking-[0.15em] text-luxury-cream">
                ONNAN
              </span>
              <span className="font-sans text-[9px] tracking-[0.35em] text-luxury-gold uppercase">
                UNITY
              </span>
            </Link>

            <p className="font-sans text-sm text-luxury-muted leading-relaxed max-w-sm">
              Delivering exceptional luxury residential developments across
              Abuja's most prestigious addresses. Where craftsmanship meets
              contemporary living.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300 group"
              >
                <MapPin size={14} className="mt-0.5 shrink-0 group-hover:text-luxury-gold" />
                <span className="font-sans text-xs leading-relaxed">
                  2b Samuel A. Ogedengbe Crescent,<br />Jabi, Abuja, Nigeria
                </span>
              </a>
              <a
                href="tel:+2348060328758"
                className="flex items-center gap-3 text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Phone size={14} className="shrink-0" />
                <span className="font-sans text-xs">+234 806 032 8758</span>
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

          {/* Navigation Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
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

          {/* Developments Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold">
              Developments
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Askia I",        href: "/projects/askia-i" },
                { label: "Askia II",       href: "/projects/askia-ii" },
                { label: "Gana Villas",    href: "/projects/gana-villas" },
                { label: "Mansa",          href: "/projects/mansa" },
                { label: "Samori Villas",  href: "/projects/samori" },
                { label: "Sonni Villas",   href: "/projects/sonni" },
                { label: "Embe Terraces",  href: "/projects/embe-terraces" },
              ].map((link) => (
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-luxury-muted">
            © {year} Onnan Unity. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Facebook,  href: "#", label: "Facebook"  },
              { Icon: Linkedin,  href: "#", label: "LinkedIn"  },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs text-luxury-muted hover:text-luxury-cream transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
