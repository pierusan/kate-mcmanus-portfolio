'use client';
import { useState, type ReactNode, useEffect } from 'react';
import { CharacterCountContext } from './CharacterCountContext';

export function CharacterCountProvider({ children }: { children: ReactNode }) {
  const [nTotalCharacters, setNTotalCharacters] = useState(0);

  // Our way to finding whether this is a touchscreen, in sync with CSS media
  // queries used
  const [isPointerCoarse, setIsPointerCoarse] = useState(false);

  // Only for desktop, where characters are flipped manually based on hover
  const [nFlippedCharacters, setNFlippedCharacters] = useState(0);

  // Only for touch devices, where characters are flipped based on scroll
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Sync pointer coarse capability with React. Helpful in development where we
  // might switch between desktop and mobile devices
  useEffect(() => {
    const mql = window.matchMedia('(pointer: coarse)');

    setIsPointerCoarse(mql.matches);
    const handlePointerChange = (event: MediaQueryListEvent) => {
      setIsPointerCoarse(event.matches);
    };
    mql.addEventListener('change', handlePointerChange);

    return () => {
      mql.removeEventListener('change', handlePointerChange);
    };
  }, []);

  // Sync scroll state with react when touch screen
  useEffect(() => {
    if (isPointerCoarse) {
      const handleScroll = () => {
        setScrollPercentage(
          window.scrollY /
            (document.documentElement.scrollHeight -
              document.documentElement.clientHeight)
        );
      };
      window.addEventListener('scroll', handleScroll, { passive: true });

      // This is just for development when switching between touch and non-touch
      // capabilities
      return () => {
        window.removeEventListener('scroll', handleScroll);

        // Reset scroll since we'll remove the fake long scroll div
        setScrollPercentage(0);
      };
    }
  }, [isPointerCoarse]);

  if (nTotalCharacters < 0) {
    console.error(
      `Total number of characters should never be negative (here ${nTotalCharacters}). Something went wrong.`
    );
  }
  if (nFlippedCharacters < 0) {
    console.error(
      `Total number of flipped characters should never be negative (here ${nFlippedCharacters}). Something went wrong.`
    );
  }

  let percentFlipped = 0;
  if (nTotalCharacters === 0) {
    // do nothing at the start
  } else if (isPointerCoarse) {
    // on touch screens characters are flipped based on scroll
    percentFlipped = scrollPercentage;
  } else {
    // On desktop characters are flipped manually based on hover
    percentFlipped = nFlippedCharacters / nTotalCharacters;
  }

  return (
    <CharacterCountContext.Provider
      value={{
        addFlippableCharacters: (newChars) =>
          setNTotalCharacters((previous) => previous + newChars),
        addFlippedCharacters: (newChars) =>
          setNFlippedCharacters((previous) => previous + newChars),
        percentFlipped,
        isPointerCoarse,
      }}
    >
      {children}
    </CharacterCountContext.Provider>
  );
}
