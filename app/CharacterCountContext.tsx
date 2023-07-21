import { createContext } from 'react';

export const CharacterCountContext = createContext<{
  addFlippableCharacters: (previousCount: number) => void;
  addFlippedCharacters: (previousCount: number) => void;
  percentFlipped: number;
}>({
  addFlippableCharacters: () => {
    throw 'Should be implemented';
  },
  addFlippedCharacters: () => {
    throw 'Should be implemented';
  },
  percentFlipped: 0,
});
