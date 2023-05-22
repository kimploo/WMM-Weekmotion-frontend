/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
};
