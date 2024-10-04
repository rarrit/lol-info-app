import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        lol01: "url('/assets/images/bg-lol-01.jpg')",
        lol02: "url('/assets/images/bg-lol-02.jpg')",
        icon01: "url('/assets/images/icon-logo.png')",
      },
      boxShadow: {
        'custom': '0.5px 0.5px 10px rgba(0, 0, 0, 0.8)',
        'custom-white': '0.5px 0.5px 10px rgba(255, 255, 255, 0.8)',
      },      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'max-n': {'max': '1460px'}, 
        'max-t': {'max': '1260px'}, 
        'max-m': {'max': '600px'},  
      },
    },
  },
  plugins: [],
};
export default config;
