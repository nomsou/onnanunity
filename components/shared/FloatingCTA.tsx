"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import ContactModal from "@/components/shared/ContactModal";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-3 bg-luxury-gold text-luxury-charcoal
                         pl-5 pr-4 py-3.5 font-sans text-[11px] uppercase tracking-widest
                         shadow-2xl shadow-luxury-gold/20
                         hover:bg-luxury-gold2 active:scale-95
                         transition-all duration-300 ease-luxury"
              aria-label="Talk to us"
            >
              <span className="hidden sm:inline">Talk To Us</span>
              <div className="w-8 h-8 bg-luxury-charcoal/15 flex items-center justify-center">
                <Phone
                  size={13}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
