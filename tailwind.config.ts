import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#ED0000",
        "light-color": "#FAFAFA",
        "dark-color": "#101010",
        "gray-color": "#C9C9C9",
        "gray-text": "#8A8A8A",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        "11": "repeat(11, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
