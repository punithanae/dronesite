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
        gold: {
          50: "#FBF7EF",
          100: "#F5EBD5",
          200: "#ECD5AA",
          300: "#E2BD7A",
          400: "#D4A24C",
          500: "#C48A2A",
          600: "#A36D1F",
          700: "#7D521C",
          800: "#5E3E1A",
          900: "#3F2A15",
        },
        brand: {
          navy: "#1a1a2e",
          blue: "#16213e",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #D4A24C 0%, #E2BD7A 50%, #D4A24C 100%)",
        "gradient-hero": "linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)",
        "gradient-section": "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "slide-up": "slideInUp 0.5s ease-out",
        "slide-left": "slideInLeft 0.5s ease-out",
        "slide-right": "slideInRight 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
        "propeller": "propeller-spin 0.08s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(1deg)" },
          "50%": { transform: "translateY(-20px) rotate(0deg)" },
          "75%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 162, 76, 0.4)" },
          "50%": { boxShadow: "0 0 0 20px rgba(212, 162, 76, 0)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "gold": "0 4px 30px rgba(212, 162, 76, 0.25)",
        "gold-lg": "0 10px 50px rgba(212, 162, 76, 0.35)",
        "soft": "0 2px 15px rgba(0, 0, 0, 0.08)",
        "soft-lg": "0 10px 40px rgba(0, 0, 0, 0.1)",
        "card": "0 4px 20px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 10px 40px rgba(0, 0, 0, 0.12)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
