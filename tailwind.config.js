/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    future: {
      // TODO: Dive into this a bit more
      hoverOnlyWhenSupported: true,
    },
    screens: {
      md: '768px',
      lg: '1100px',
      '2xl': '2000px',
      fine: { raw: '(pointer: fine)' },
      coarse: { raw: '(pointer: coarse)' },
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
