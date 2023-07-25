'use client';

import { useCallback, useContext, useEffect, useId } from 'react';
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
  const spanId = useId();

  const {
    addFlippableElement,
    removeFlippableElement,
    forceFlip,
    isPointerCoarse,
    flipState,
  } = useContext(CharacterCountContext);

  // Sync number of characters in the <span> with the context keeping track of
  // all flippable characters in the app
  useEffect(() => {
    addFlippableElement(spanId, charactersInReactNode(children));
    return () => {
      removeFlippableElement(spanId);
    };
  }, [children, addFlippableElement, removeFlippableElement, spanId]);

  // Use mousemove instead of mouseover to change the style only when the user
  // moves the mouse around, regardless of where the mouse started on page load∑
  const onMove = useCallback(() => {
    forceFlip(spanId, true);
  }, [forceFlip, spanId]);

  const isFlipped = flipState.find(({ id }) => id === spanId)?.flipped ?? false;

  return isFlipped ? (
    <span className={classNameOnceFlipped}>
      {childrenOnceFlipped ?? children}
    </span>
  ) : (
    // Only add mouse move event handler on desktop devices for performance
    <span onMouseMove={isPointerCoarse ? undefined : onMove}>{children}</span>
  );
}
