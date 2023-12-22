/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          electricwaala: 
          {
            50: '#efffdd',
            100: '#d8ffae',
            200: '#c1fe7d',
            300: '#a8fe4b',
            400: '#91fe1b',
            500: '#77e401',
            600: '#5cb200',
            700: '#407f00',
            800: '#254c00',
            900: '#081a00',
          }
        }
      },
    },
    plugins: [],
  }