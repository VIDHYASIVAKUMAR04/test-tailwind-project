/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#fffffe",
       
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        navyGradiant: "linear-gradient(90deg, #a78bfa, #c026d3, #a78bfa)",
      },
      screens: {
        "custom-md": "930px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#272343", 
          secondary: "#e3f6f5", 
          accent: "#FF8C00", 
          neutral: "#1F2937",
          "base-100": "#fffffe", // Primary White
          info: "#3b82f6", // Blue
          success: "#22c55e", // Green
          warning: "#f59e0b", // Yellow
          error: "#ef4444", // Red
        },
      },
      "light", 
      "dark", 
    ],
  },
};