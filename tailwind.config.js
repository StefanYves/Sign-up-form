/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "pixel-art": "url('/dist/pixel.gif')",
      },
    },
  },
  plugins: [],
};
