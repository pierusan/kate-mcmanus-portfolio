import { createContext } from 'react';

export type FlipID = string;
export type FlipState = {
  id: FlipID;
  nChars: number;
  flipped: boolean;
}[];

export const characterCountContext = createContext<{
  addFlippableElement: (id: FlipID, nChars: number) => void;
  removeFlippableElement: (id: FlipID) => void;
  forceFlip: (id: FlipID, flip: boolean) => void;
  forceFlipPercentage: (percentToFlip: number) => void;
  flipState: FlipState;
  isPointerCoarse: boolean;
}>({
  addFlippableElement: () => {
    throw 'Should be implemented';
  },
  removeFlippableElement: () => {
    throw 'Should be implemented';
  },
  forceFlip: () => {
    throw 'Should be implemented';
  },
  forceFlipPercentage: () => {
    throw 'Should be implemented';
  },
  flipState: [],
  isPointerCoarse: false,
});
