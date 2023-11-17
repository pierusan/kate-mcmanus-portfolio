import type { Config } from 'tailwindcss';

export default {
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
      borderColor: {
        'action-subtle': '#d7d7d7',
      },
      backgroundColor: {
        surface: '#f5f5f5',
      },
      fontFamily: {
        sans: ['var(--font-manrope)'],
        mono: ['var(--font-major-mono-display)'],
      },
      fontSize: {
        // Per Figma, for Manrope
        body: [
          '0.78125rem', // 12.5px
          {
            lineHeight: '1.125rem', // 18px
            letterSpacing: '0.0125rem', // 0.2px
          },
        ],
        caption: [
          '0.75rem', // 12px
          {
            lineHeight: '1.125rem', // 18px
          },
        ],
      },
      boxShadow: {
        drop: '4px 10px 10px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
