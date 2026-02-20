"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury",
          scrolled
            ? "bg-luxury-charcoal/95 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6",
        )}
      >
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 overflow-hidden">
              <img
                src="/logo.png"
                alt="Onnan Unity Logo"
                className="w-full h-full object-contain"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-light tracking-[0.15em] text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300">
                ONNAN UNITY
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-sans text-[11px] tracking-widest uppercase transition-colors duration-300 relative group",
                    isActive
                      ? "text-luxury-gold"
                      : "text-luxury-muted hover:text-luxury-cream",
                  )}
                >
                  {link.label}

                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-luxury-gold transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="outline" size="sm">
              Request Site Visit
            </Button>
          </div>

          <button
            className="lg:hidden text-luxury-cream hover:text-luxury-gold transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-luxury-charcoal flex flex-col"
          >
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-luxury-muted hover:text-luxury-cream transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col justify-center flex-1 px-10 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block font-display text-4xl font-light py-3 border-b border-white/5",
                      "transition-colors duration-300",
                      pathname === link.href
                        ? "text-luxury-gold"
                        : "text-luxury-cream hover:text-luxury-gold",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <Button
                  href="/contact"
                  variant="gold"
                  size="lg"
                  className="w-full justify-center"
                >
                  Request Site Visit
                </Button>
              </motion.div>
            </nav>

            <div className="px-10 pb-10 text-luxury-muted font-sans text-xs space-y-1">
              <p>2b Samuel A. Ogedengbe Crescent, Jabi, Abuja</p>
              <p>+234 806 032 8758</p>
              <p>info@onnanunity.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
