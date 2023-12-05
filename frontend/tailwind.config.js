/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#7B66FF',
        'second': '#5FBDFF',
        'third': '#96EFFF',
        'last': '#C5FFF8',
      },
    },
  },
  plugins: [],
}