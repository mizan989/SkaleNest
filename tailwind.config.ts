import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F7F6F2",
          surface: "#FFFFFF",
          subtle: "#F0EFEA",
        },
        surface: "#FFFFFF",
        card: "#FFFFFF",
        text: {
          primary: "#171715",
          secondary: "#6F706B",
          muted: "#8C8D87",
        },
        gold: {
          DEFAULT: "#C9A45C",
          hover: "#B88939",
          dim: "rgba(201, 164, 92, 0.10)",
          bright: "#D4AB59",
          border: "rgba(201, 164, 92, 0.35)",
        },
        border: {
          DEFAULT: "#E5E3DC",
          subtle: "#ECEAE4",
          strong: "#D4D2C9",
        },
        error: "#DC2626",
        success: "#15803D",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(23, 23, 21, 0.04), 0 1px 3px rgba(23, 23, 21, 0.03)",
        card: "0 10px 30px -5px rgba(23, 23, 21, 0.05), 0 4px 6px -2px rgba(23, 23, 21, 0.02)",
        lifted: "0 16px 36px -8px rgba(23, 23, 21, 0.08), 0 6px 12px -3px rgba(23, 23, 21, 0.03)",
      },
    },
  },
  plugins: [],
};
export default config;
