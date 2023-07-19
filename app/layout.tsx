import type { ReactNode } from 'react';
import './globals.css';
import { manrope } from './fonts';

export const metadata = {
  title: 'Kate McManus',
  description: "Kate McManus' portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.className} text-base`}>
      <body>{children}</body>
    </html>
  );
}
