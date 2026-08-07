/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neuro: {
          dark: '#0A1118',
          card: '#111C26',
          blue: '#1A56DB',
          teal: '#0F766E',
        }
      }
    },
  },
  plugins: [],
}