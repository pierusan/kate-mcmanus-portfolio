'use client';
import { useState, type ReactNode } from 'react';
import { CharacterCountContext } from './CharacterCountContext';

export function CharacterCountProvider({ children }: { children: ReactNode }) {
  const [nTotalCharacters, setNTotalCharacters] = useState(0);
  const [nFlippedCharacters, setNFlippedCharacters] = useState(0);

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

  const percentFlipped =
    nTotalCharacters > 0 ? nFlippedCharacters / nTotalCharacters : 0;

  return (
    <CharacterCountContext.Provider
      value={{
        addFlippableCharacters: (newChars) =>
          setNTotalCharacters((previous) => previous + newChars),
        addFlippedCharacters: (newChars) =>
          setNFlippedCharacters((previous) => previous + newChars),
        percentFlipped,
      }}
    >
      {children}
    </CharacterCountContext.Provider>
  );
}
