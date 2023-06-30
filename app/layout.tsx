import './globals.css';
import { Nav } from '@/components/Nav';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Kate McManus',
  description: "Kate McManus' portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
