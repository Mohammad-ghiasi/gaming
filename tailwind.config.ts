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
        hoverOrange: "#cd7721"
      },
      padding: {
        'smallSC-P': '12px', // Example custom padding value
        'largSC-P': '40px', // Example large custom padding value
      },
    },
  },
  plugins: [],
};
export default config;
