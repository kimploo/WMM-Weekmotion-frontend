/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px'
    },
    colors: {
      mono: {
        100: '#FFFFFF',
        200: '#EEEEEE',
        300: '#DCDCDC',
        400: '#ACACAC',
        500: '#666666',
        600: '#292929',
        700: '#000000'
      },
      emotion: {
        yellow: '#FFD54A',
        lightYellow: '#FAE5A0',
        pink: '#FF64AE',
        lightPink: '#FAACD2',
        blue: '#6889FF',
        lightBlue: '#AFBFFA'
      }
    },
    extend: {}
  },
  plugins: [require('daisyui')]
};
