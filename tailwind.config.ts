import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "menarc-dark": "#050505",
        "menarc-card": "#0A0A0A",
        "menarc-border": "#1F1F1F",
        "menarc-gold": "#D4AF37",
        "menarc-white": "#FFFFFF",
        "menarc-gray": "#A1A1AA",
        "menarc-light": "#E5E7EB",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(212,175,55,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)",
      },
      backgroundSize: {
        "grid-size": "60px 60px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(-6px)" },
          "50%": { transform: "translateY(6px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.35)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "float-delayed": "float-delayed 5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        "pulse-ring": "pulse-ring 1.5s ease-out infinite",
        "slide-in-right": "slide-in-right 0.7s ease-out forwards",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
      boxShadow: {
        "glow-gold": "0 0 30px rgba(212,175,55,0.25)",
        "glow-white": "0 0 30px rgba(255,255,255,0.15)",
        "glow-sm": "0 0 15px rgba(212,175,55,0.15)",
        card: "0 4px 40px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 60px rgba(212,175,55,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
