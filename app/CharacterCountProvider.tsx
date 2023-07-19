'use client';
import { useState, type ReactNode } from 'react';
import { CharacterCountContext } from './CharacterCountContext';

export function CharacterCountProvider({ children }: { children: ReactNode }) {
  const [nTotalCharacters, setNTotalCharacters] = useState(0);
  const [nHoveredCharacters, setNHoveredCharacters] = useState(0);

  if (nTotalCharacters < 0) {
    console.error(
      `Total number of characters should never be negative (here ${nTotalCharacters}). Something went wrong.`
    );
  }
  if (nHoveredCharacters < 0) {
    console.error(
      `Total number of hovered characters should never be negative (here ${nHoveredCharacters}). Something went wrong.`
    );
  }

  const percentHovered =
    nTotalCharacters > 0 ? nHoveredCharacters / nTotalCharacters : 0;

  return (
    <CharacterCountContext.Provider
      value={{
        addTotalCharacters: (newChars) =>
          setNTotalCharacters((previous) => previous + newChars),
        addHoveredCharacters: (newChars) =>
          setNHoveredCharacters((previous) => previous + newChars),
        percentHovered,
      }}
    >
      {children}
    </CharacterCountContext.Provider>
  );
}
