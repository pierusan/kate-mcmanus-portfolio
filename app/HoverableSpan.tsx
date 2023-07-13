'use client';

import { useCallback, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { CharacterCountContext } from './CharacterCountContext';

const charactersInReactNode = (node: ReactNode) => node?.toString().length ?? 0;

export function HoverableSpan({
  children,
  classNameOnceHovered,
  childrenOnceHovered,
}: {
  children: ReactNode;
  classNameOnceHovered: string;
  childrenOnceHovered?: ReactNode;
}) {
  const [wasEverHovered, setWasEverHovered] = useState(false);
  const { addTotalCharacters, addHoveredCharacters } = useContext(
    CharacterCountContext
  );

  // Sync number of characters in the <span> with the context keeping track of
  // all hoverable characters in the app
  useEffect(() => {
    addTotalCharacters(charactersInReactNode(children));
    return () => {
      addTotalCharacters(charactersInReactNode(children) * -1);
      // TODO: Use React Experimental's useEffectEvent to remove the number of
      // characters hovered
    };
  }, [children, addTotalCharacters]);

  // Use mousemove instead of mouseover to change the style only when the user
  // moves the mouse around, regardless of where the mouse started on page load∑
  const onMove = useCallback(() => {
    setWasEverHovered(true);
    addHoveredCharacters(charactersInReactNode(children));
  }, [children, addHoveredCharacters]);

  return wasEverHovered ? (
    <span className={classNameOnceHovered}>
      {childrenOnceHovered ?? children}
    </span>
  ) : (
    <span onMouseMove={onMove}>{children}</span>
  );
}
