'use client';

import { useCallback, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { CharacterCountContext } from './CharacterCountContext';

const charactersInReactNode = (node: ReactNode) => node?.toString().length ?? 0;

export function FlippableSpan({
  children,
  classNameOnceFlipped,
  childrenOnceFlipped,
}: {
  children: ReactNode;
  classNameOnceFlipped: string;
  childrenOnceFlipped?: ReactNode;
}) {
  const [wasEverHovered, setWasEverHovered] = useState(false);
  const { addFlippableCharacters, addFlippedCharacters, isPointerCoarse } =
    useContext(CharacterCountContext);

  // Sync number of characters in the <span> with the context keeping track of
  // all flippable characters in the app
  useEffect(() => {
    addFlippableCharacters(charactersInReactNode(children));
    return () => {
      addFlippableCharacters(charactersInReactNode(children) * -1);
      // TODO: Use React Experimental's useEffectEvent to remove the number of
      // characters hovered
    };
  }, [children, addFlippableCharacters]);

  // Use mousemove instead of mouseover to change the style only when the user
  // moves the mouse around, regardless of where the mouse started on page load∑
  const onMove = useCallback(() => {
    setWasEverHovered(true);
    addFlippedCharacters(charactersInReactNode(children));
  }, [children, addFlippedCharacters]);

  return wasEverHovered ? (
    <span className={classNameOnceFlipped}>
      {childrenOnceFlipped ?? children}
    </span>
  ) : (
    // Only add mouse move event handler on desktop devices for performance
    <span onMouseMove={isPointerCoarse ? undefined : onMove}>{children}</span>
  );
}
