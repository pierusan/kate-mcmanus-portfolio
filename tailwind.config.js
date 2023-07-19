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
    extend: {
      colors: {
        'border-action-subtle': '#d7d7d7',
      },
      fontFamily: {
        sans: ['var(--font-manrope)'],
        mono: ['var(--font-major-mono-display)'],
      },
    },
  },
  plugins: [],
};
