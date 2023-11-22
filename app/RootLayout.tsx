import type { ReactNode } from 'react';
// eslint-disable-next-line no-restricted-imports
import './globals.css';
import { manrope, majorMonoDisplay } from '@/fonts';

export const metadata = {
  title: 'Kate McManus',
  description: "Kate McManus' portfolio",
};

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      // Body overflow is set hidden to avoid illustrations going out of bounds
      // but we want users to be able to scroll the text so we set overflow
      // scroll on the html
      className={`${manrope.variable} ${majorMonoDisplay.variable} overflow-scroll text-base`}
    >
      {children}
    </html>
  );
}
