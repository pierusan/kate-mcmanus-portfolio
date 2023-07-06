import type { ReactNode } from 'react';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Nav } from '@/app/Nav';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Kate McManus',
  description: "Kate McManus' portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} bg-white w-screen min-h-[100dvh] px-24 pt-20`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
