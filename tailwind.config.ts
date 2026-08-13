import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070B14",
        "bg-secondary": "#0D1422",
        card: "#111A2A",
        text: {
          primary: "#F5F7FA",
          secondary: "#8994A7",
        },
        gold: {
          DEFAULT: "#C9A45C",
          dim: "#a8875339",
          bright: "#E4C083",
        },
        border: {
          DEFAULT: "#202B3D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at center, rgba(201,164,92,0.08) 0%, rgba(7,11,20,0) 70%)",
        "grid-pattern":
          "linear-gradient(rgba(32,43,61,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(32,43,61,0.4) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        drift: "drift 20s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -15px)" },
        },
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
