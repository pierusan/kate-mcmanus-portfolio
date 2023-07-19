/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1100px',
      '2xl': '200px',
    },
    extend: {},
  },
  plugins: [],
};
