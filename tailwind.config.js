/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "h-xs": { 'raw': "(max-height: 390px)" },
        "h-xsm": { 'raw': "(max-height: 450px)" },
        "h-sm": { 'raw': "(max-height: 600px)" }, // Small height
        "h-md": { 'raw': "(max-height: 800px)" }, // Medium height
      },
    },
  },
  plugins: [],
};
