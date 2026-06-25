import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "progress": "progress 2.4s ease-in-out forwards",
        "shimmer": "shimmer 1.4s ease-in-out infinite",
        "score-ring": "score-ring 1s ease-out forwards",
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "60%": { width: "75%" },
          "100%": { width: "95%" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "score-ring": {
          "0%": { "stroke-dashoffset": "314" },
          "100%": { "stroke-dashoffset": "var(--target-offset)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
