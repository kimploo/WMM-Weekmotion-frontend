/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const content = ['./index.html', './src/**/*.{html,jsx,tsx}'];
export const theme = {
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
    grey: {
      0: 'rgba(0, 0, 0, 1)',
      1: 'rgba(41, 41, 41, 1)',
      2: 'rgba(102, 102, 102, 1)',
      3: 'rgba(172, 172, 172, 1)',
      4: 'rgba(220, 220, 220, 1)',
      5: 'rgba(238, 238, 238, 1)',
      FF: 'rgba(255, 255, 255, 1)'
    },
    emotion: {
      yellow: 'rgba(255, 213, 74, 1)',
      yellow2: '#FFE388',
      lightYellow: '#FAE5A0',
      pink: '#FF64AE',
      lightPink: '#FAACD2',
      blue: '#6889FF',
      lightBlue: '#AFBFFA'
    },
    corePlugins: {
      backdropOpacity: false,
      backgroundOpacity: false,
      borderOpacity: false,
      divideOpacity: false,
      ringOpacity: false,
      textOpacity: false
    }
  },
  extend: {}
};
export const plugins = [require('daisyui')];
