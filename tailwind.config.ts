import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#0B0F14",
          surface: "#131820",
          raised: "#1B212C",
        },
        text: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
        accent: {
          DEFAULT: "#38BDF8",
          deep: "#0EA5E9",
          soft: "#7DD3FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(56, 189, 248, 0.18)",
        glow: "0 0 40px rgba(56, 189, 248, 0.28)",
        "glow-lg": "0 0 80px rgba(56, 189, 248, 0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up-slow": "fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
