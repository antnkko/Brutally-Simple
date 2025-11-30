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
        'gray-10': '#EDEDED',
        'gray-20': '#CCCCCC',
        'gray-50': '#808080',
        'gray-60': '#666666',
      },
      fontFamily: {
        'serif': ['"Young Serif"', 'serif'],
        'display': ['"Inter Display"', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['67px', { lineHeight: '72px', letterSpacing: '-0.335px' }],
        'h1-mobile': ['50px', { lineHeight: '56px', letterSpacing: '-0.25px' }],
        'button': ['18px', { lineHeight: '1.55', letterSpacing: '0.18px' }],
        'label': ['18px', { lineHeight: '1.55', letterSpacing: '0.18px' }],
      },
      borderRadius: {
        'card': '56px',
        'image': '42px',
        'pill': '9999px',
      },
    },
  },
  plugins: [],
}

