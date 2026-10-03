/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-lime': '#CCFF00',
        'neo-lavender': '#EADCFE',
        'neo-coral': '#FF5757',
        'neo-blue': '#7DD3FC',
        'neo-cream': '#FAF8F5',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
