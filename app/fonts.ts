import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  // Prefer no font than a wrong font. TODO: Might want to change this to follow
  // best practices
  display: 'block',
});

export { manrope };
