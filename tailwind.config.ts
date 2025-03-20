import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        title: "var(--title)",
        card: "var(--card)",
        primaryColor: "var(--primaryColor)",
      },
    },
  },
  plugins: [
    require("daisyui"), // DaisyUI for component styling
    require("@tailwindcss/typography"), // For markdown content styling
  ],
} satisfies Config;
