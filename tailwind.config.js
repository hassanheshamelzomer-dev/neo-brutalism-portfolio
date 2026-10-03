/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'm3-primary': '#D0BCFF',
        'm3-primary-dark': '#6750A4',
        'm3-secondary': '#CCC2DC',
        'm3-surface': '#FEF7FF',
        'm3-surface-dark': '#141218',
        'm3-container': '#EADDFF',
        'm3-error': '#B3261E',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000',
        'brutal-hover': '2px 2px 0px 0px #000',
        'brutal-focus': '4px 4px 0px 0px #000',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Standard Material 3 font
      }
    },
  },
  plugins: [],
}
