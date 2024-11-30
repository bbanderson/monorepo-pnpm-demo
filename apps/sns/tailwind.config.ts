import type { Config } from "tailwindcss";
import { theme } from "design-system/lib/theme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
} satisfies Config;
