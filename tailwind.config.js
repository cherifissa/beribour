/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./views/partials/**/*.ejs",
    "./public/**/*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
