'use client';

import { useContext, useEffect, useRef } from 'react';
import { CharacterCountContext } from './CharacterCountContext';
import { cn } from './helpers';

// Add a empty long scroll div on mobile which will control the characters
// flipped and the background color
export function ScrollDivTouchScreen({ className }: { className?: string }) {
  const scrollDivReference = useRef<HTMLDivElement>(null);

  const { forceFlipPercentage, isPointerCoarse } = useContext(
    CharacterCountContext
  );

  // Sync scroll state with react when touch screen
  useEffect(() => {
    const scrollDivElement = scrollDivReference.current;
    if (isPointerCoarse && scrollDivElement) {
      const handleScroll = () => {
        forceFlipPercentage(
          scrollDivElement.scrollTop /
            (scrollDivElement.scrollHeight - scrollDivElement.clientHeight)
        );
      };
      scrollDivElement.addEventListener('scroll', handleScroll, {
        // Allow scrolling even if the listener runs later
        // https://developer.chrome.com/en/docs/lighthouse/best-practices/uses-passive-event-listeners/
        passive: true,
      });

      // This is just for development when switching between touch and non-touch
      // capabilities
      return () => {
        scrollDivElement.removeEventListener('scroll', handleScroll);

        // Reset scroll since we'll remove the fake long scroll div
        forceFlipPercentage(0);
      };
    }
  }, [isPointerCoarse, forceFlipPercentage]);

  return (
    <div
      ref={scrollDivReference}
      className={cn(
        // Fixed full screen scroll container
        'fixed inset-0 overflow-y-scroll',
        // We add a small gap to the top of the page to prevent the address bar
        // from collapsing on mobile which has a bit of a jarring effect
        'top-[1px] ',
        // Hide scrollbar to keep the surprise, and for a cleaner look
        '[-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
        className
      )}
    >
      <div
        className={cn(
          // Specify height for portrait AND landscape to avoid a scroll event
          // trigger when the user rotates their device, which would mess up the
          // amount of letters flipped and the color of the background
          'portrait:h-[1000dvh] landscape:h-[1000dvw]'
        )}
      />
    </div>
  );
}
