import type { ReactNode } from 'react';
import './globals.css';
import { manrope } from './fonts';
import { Nav } from './Nav';
import { CharacterHoverReactiveBody } from './CharacterHoverReactiveBody';

export const metadata = {
  title: 'Kate McManus',
  description: "Kate McManus' portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.className} text-base`}>
      <CharacterHoverReactiveBody
        className={'flex flex-col gap-14 px-24 pt-20'}
      >
        <Nav />
        {children}
      </CharacterHoverReactiveBody>
    </html>
  );
}
