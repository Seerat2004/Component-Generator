/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#8e44ad',
        pink: '#e84393',
        blue: '#0984e3',
        navy: '#273c75',
        black: '#18191A',
        grey: '#636e72',
        white: '#fff',
        text: {
          light: '#000',
          dark: '#fff',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #8e44ad, #e84393, #0984e3, #18191A)',
        'gradient-light': 'linear-gradient(135deg, #8e44ad, #e84393, #273c75, #fff)',
      },
    },
  },
};

