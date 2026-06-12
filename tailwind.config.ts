import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Force these classes to always be generated
    "bg-luxury-charcoal",
    "bg-luxury-charcoal2",
    "bg-luxury-charcoal3",
    "bg-luxury-stone",
    "bg-luxury-gold",
    "bg-luxury-gold2",
    "bg-luxury-muted",
    "bg-gilt",
    "bg-gilt-light",
    "border-luxury-gold",
    "text-luxury-cream",
    "text-luxury-muted",
    "text-luxury-gold",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          charcoal: "#F7F6F2", // Primary background — warm off-white
          charcoal2: "#EFEDE8", // Secondary background — slightly warmer
          charcoal3: "#E3DFD7", // Tertiary background — one shade darker for depth
          gold: "#8B7A5C", // Primary accent — earth/warm brown-gold
          gold2: "#C4B5A0", // Lighter accent — hover / highlights
          stone: "#EAE5DC", // Light section backgrounds
          muted: "#9A9690", // Secondary text — warm grey
          cream: "#1E1B18", // Primary text — soft charcoal
        },
        border: "#E2DFD9", // Dedicated border color for dividers, cards
        gilt: {
          DEFAULT: "#C9A96E", // Brighter gold for gradients and special cases
          light: "#E8D5A8", // Light gold for highlights
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 8vw, 7rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "display-lg": [
          "clamp(2.25rem, 5vw, 4.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "display-md": [
          "clamp(1.75rem, 3vw, 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
      },
      spacing: {
        section: "7rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        site: "1440px",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #8B7A5C 0%, #C4B5A0 50%, #8B7A5C 100%)",
        "dark-gradient":
          "linear-gradient(180deg, rgba(30,27,24,0) 0%, rgba(30,27,24,0.6) 60%, rgba(30,27,24,0.9) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "line-grow": "lineGrow 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "ken-burns-right": "kenBurnsRight 7s ease-out forwards",
        "ken-burns-left": "kenBurnsLeft 7s ease-out forwards",
        "ken-burns-up": "kenBurnsUp 7s ease-out forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(139,122,92,0)" },
          "50%": { boxShadow: "0 0 0 8px rgba(139,122,92,0.15)" },
        },
        kenBurnsRight: {
          "0%": { transform: "scale(1.07) translateX(-1%)" },
          "100%": { transform: "scale(1) translateX(0%)" },
        },
        kenBurnsLeft: {
          "0%": { transform: "scale(1.07) translateX(1%)" },
          "100%": { transform: "scale(1) translateX(0%)" },
        },
        kenBurnsUp: {
          "0%": { transform: "scale(1.07) translateY(1%)" },
          "100%": { transform: "scale(1) translateY(0%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
      },
      scale: {
        "108": "1.08",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
    },
  },
  plugins: [],
};

export default config;
