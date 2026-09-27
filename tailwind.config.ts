import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0D10",
          raised: "#12151A",
          window: "#15181D",
        },
        border: {
          DEFAULT: "#242931",
          strong: "#333A45",
        },
        ink: {
          DEFAULT: "#E4E7EB",
          muted: "#9AA3B0",
          faint: "#5B6472",
        },
        // `accent` / `accent-dim` are CSS-variable-backed so the terminal's
        // `theme` command can swap them at runtime. `accent-amber` and
        // `accent-blue` are fixed — they carry a specific meaning
        // (caution / informational) independent of the chosen brand accent.
        accent: {
          DEFAULT: "var(--accent)",
          dim: "var(--accent-dim)",
          amber: "#D8A657",
          blue: "#6E9FD8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in": "fade-in 0.3s ease-out",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};

export default config;
