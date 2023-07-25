'use client';
import { useState, useCallback, useEffect, type ReactNode } from 'react';
import { useIsPointerCoarse } from './useIsPointerCoarse';
import {
  type FlipState,
  type FlipID,
  CharacterCountContext,
} from './CharacterCountContext';

export function CharacterCountProvider({ children }: { children: ReactNode }) {
  const [flipState, setFlipState] = useState<FlipState>([]);

  const addFlippableElement = useCallback((id: FlipID, nChars: number) => {
    setFlipState((previous) => [...previous, { id, nChars, flipped: false }]);
  }, []);

  const removeFlippableElement = useCallback((id: FlipID) => {
    setFlipState((previous) =>
      previous.filter(({ id: currentId }) => id !== currentId)
    );
  }, []);

  const forceFlip = useCallback((id: FlipID, flip: boolean) => {
    setFlipState((previous) =>
      previous.map((element) =>
        element.id === id ? { ...element, flipped: flip } : element
      )
    );
  }, []);

  const forceFlipPercentage = useCallback((percentToFlip: number) => {
    setFlipState((previous) => {
      const sumChars = previous.reduce(
        (cumSum, { nChars }) => cumSum + nChars,
        0
      );

      let cumSum = 0;
      const newState = previous.map((element) => {
        const { nChars } = element;
        cumSum += nChars;
        const shouldBeFlipped = cumSum <= percentToFlip * sumChars;
        return { ...element, flipped: shouldBeFlipped };
      });

      return newState;
    });
  }, []);

  // Our way to finding whether this is a touchscreen, using the same media
  // query as CSS to avoid discrepancies
  const isPointerCoarse = useIsPointerCoarse();

  // Reset flip state when switching between desktop and touch screen. This is
  // especially useful for development
  useEffect(() => {
    setFlipState((previous) =>
      previous.map((element) => ({ ...element, flipped: false }))
    );
  }, [isPointerCoarse]);

  return (
    <CharacterCountContext.Provider
      value={{
        addFlippableElement,
        removeFlippableElement,
        forceFlip,
        flipState,
        isPointerCoarse,
        forceFlipPercentage,
      }}
    >
      {children}
    </CharacterCountContext.Provider>
  );
}
