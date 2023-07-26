import type { ReactNode } from 'react';
import './globals.css';
import { manrope, majorMonoDisplay } from './fonts';

export const metadata = {
  title: 'Kate McManus',
  description: "Kate McManus' portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${majorMonoDisplay.variable} text-base`}
    >
      {children}
    </html>
  );
}
