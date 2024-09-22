/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  // Add Montserrat as the default sans-serif
      },
    },
  },
  plugins: [],
}

