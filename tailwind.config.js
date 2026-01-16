/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDF2F8", // Soft Pink
        secondary: "#D4AF37", // Metallic Gold
        accent: "#FBCFE8", // Lighter Pink
        "brand-pink": "#f33fc3",
        "brand-gold": "#c59d5f",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
