import { createContext } from 'react';

export const CharacterCountContext = createContext<{
  addTotalCharacters: (previousCount: number) => void;
  addHoveredCharacters: (previousCount: number) => void;
  percentHovered: number;
}>({
  addTotalCharacters: () => {
    throw 'Should be implemented';
  },
  addHoveredCharacters: () => {
    throw 'Should be implemented';
  },
  percentHovered: 0,
});
