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
        "primary-color-1": "rgba(235, 0, 0, .3)",
        "primary-color-2": "rgba(235, 0, 0, .5)",
      },
    },
  },
  plugins: [],
};
export default config;
