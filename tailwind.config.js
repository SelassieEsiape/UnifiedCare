/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#5B7C99',
        'brand-light': '#E8F1F5',
      }
    },
  },
  plugins: [],
}
