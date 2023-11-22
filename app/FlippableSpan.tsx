'use client';

import { useCallback, useContext, useEffect, useId, useState } from 'react';
import type { ReactNode } from 'react';
import { characterCountContext } from '@configs/app/characterCountContext';
import { cn } from '@/helpers';

const charactersInReactNode = (node: ReactNode) => node?.toString().length ?? 0;

export function FlippableSpan({
  children,
  classNameOnceFlipped,
  childrenOnceFlipped,
  flickerOnStartOnDesktop = false,
}: {
  children: ReactNode;
  classNameOnceFlipped: string;
  childrenOnceFlipped?: ReactNode;
  flickerOnStartOnDesktop?: boolean;
}) {
  const spanId = useId();

  const {
    addFlippableElement,
    removeFlippableElement,
    forceFlip,
    isPointerCoarse,
    flipState,
  } = useContext(characterCountContext);

  // Have some of the text flip back and forth (aka flicker) on page load for
  // desktop screens
  const [isFlickering, setIsFlickering] = useState(flickerOnStartOnDesktop);
  const [flickerFlipped, setFlickerFlipped] = useState(false); // Flip state during flicker

  useEffect(() => {
    if (!flickerOnStartOnDesktop || isPointerCoarse) return;

    // Flip the text every 200ms during flicker
    const intervalID = setInterval(() => {
      setFlickerFlipped((wasFlipped) => !wasFlipped);
    }, 150);

    // Stop the flickering after 10seconds
    const flickerTimeout = setTimeout(() => {
      setIsFlickering(false);
      clearInterval(intervalID);
    }, 1200);

    return () => {
      clearTimeout(flickerTimeout);
      clearInterval(intervalID);
    };
  }, [flickerOnStartOnDesktop, isPointerCoarse]);

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

  const showFlippedSpan =
    isFlickering && !isPointerCoarse ? flickerFlipped : isFlipped;

  return showFlippedSpan ? (
    // Elevate the 'flippable' text above the project illustration so they can
    // be flipped even when they overlap with the illustration
    <span className={cn('relative z-[5]', classNameOnceFlipped)}>
      {childrenOnceFlipped ?? children}
    </span>
  ) : (
    // Only add mouse move event handler on desktop devices for performance
    <span
      onMouseMove={isPointerCoarse ? undefined : onMove}
      className={cn('relative z-[5]')}
    >
      {children}
    </span>
  );
}
