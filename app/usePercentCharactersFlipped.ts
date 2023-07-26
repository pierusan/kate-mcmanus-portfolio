'use client';
import { useContext } from 'react';
import { CharacterCountContext } from './CharacterCountContext';

// Store "selector" which computers the percentage of characters flipped
export function usePercentCharactersFlipped() {
  const { flipState } = useContext(CharacterCountContext);

  const nTotalCharacters = flipState.reduce(
    (cumSum, { nChars }) => cumSum + nChars,
    0
  );
  const nFlippedCharacters = flipState.reduce(
    (cumSum, { nChars, flipped }) => cumSum + (flipped ? nChars : 0),
    0
  );

  if (nTotalCharacters < 0) {
    console.error(
      `Total number of characters should never be negative (here ${nTotalCharacters}). Something went wrong.`
    );
    return 0;
  } else if (nTotalCharacters === 0) {
    return 0;
  } else {
    return nFlippedCharacters / nTotalCharacters;
  }
}
