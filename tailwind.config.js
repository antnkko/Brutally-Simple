/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#030303',
        'brand-white': '#FCFCFC',
        'brand-yellow': '#FFFF02',
        'gray-10': '#EDEDED',
        'gray-20': '#CCCCCC',
        'gray-50': '#808080',
        'gray-60': '#666666',
        'gray-80': '#333333',
      },
      fontFamily: {
        'serif': ['"Young Serif"', 'serif'],
        'display': ['"Inter Display"', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['67px', { lineHeight: '72px', letterSpacing: '-0.335px' }],
        'h1-mobile': ['50px', { lineHeight: '56px', letterSpacing: '-0.25px' }],
        'h2': ['25px', { lineHeight: '1.25', letterSpacing: '-0.125px' }],
        'body': ['18px', { lineHeight: '1.55', letterSpacing: '0.45px' }],
        'button': ['18px', { lineHeight: '1.55', letterSpacing: '0.18px' }],
        'label': ['18px', { lineHeight: '1.55', letterSpacing: '0.18px' }],
      },
      borderRadius: {
        'card': '36px',
        'image': '24px',
        'pill': '9999px',
      },
    },
  },
  plugins: [],
}

