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
        "gray-color": "#A8A8A8",
        "gray-text": "#8A8A8A",
      },
    },
  },
  plugins: [],
};
export default config;
