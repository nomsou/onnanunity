"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 left-8 z-40
                     w-10 h-10 border border-luxury-gold/30 bg-luxury-charcoal2/80 backdrop-blur-sm
                     flex items-center justify-center
                     text-luxury-muted hover:text-luxury-gold hover:border-luxury-gold
                     transition-all duration-300 active:scale-95"
        >
          <ArrowUp size={14} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
