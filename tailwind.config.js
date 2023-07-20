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
      '2xl': '2000px',
    },
    extend: {
      colors: {
        'border-action-subtle': '#d7d7d7',
        'bg-surface': '#f5f5f5',
      },
      fontFamily: {
        sans: ['var(--font-manrope)'],
        mono: ['var(--font-major-mono-display)'],
      },
    },
  },
  plugins: [],
};
