/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      "100ch": "50ch",
    },
    fontFamily: {
      monteserrat: ["Roboto", "Raleway", "Montserrat", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
