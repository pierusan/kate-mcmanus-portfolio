import { Major_Mono_Display, Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  // Prefer no font than a wrong font. TODO: Might want to change this to follow
  // best practices
  display: 'block',
});

const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major-mono-display',
  weight: '400',
  // Prefer no font than a wrong font. TODO: Might want to change this to follow
  // best practices
  display: 'block',
});

export { manrope, majorMonoDisplay };
