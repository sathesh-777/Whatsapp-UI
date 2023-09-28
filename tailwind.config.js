/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'more': '120rem', // Define your custom value here (e.g., 120rem or 1920px)
      },
    },
  },
  plugins: [],
}

