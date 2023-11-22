'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import styles from './scrollCTAAnimation.module.css';
import { characterCountContext } from '@configs/app/characterCountContext';
import { cn } from '@/helpers';

function ScrollCTA({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'h-[5.75rem] w-[5.75rem] rounded-full pt-[1.375rem]',
        'border border-action-subtle bg-white',
        'flex flex-col items-center gap-[0.375rem]',
        className
      )}
    >
      <p className={cn('text-xs font-bold [line-height:1em]')}>SCROLL</p>
      <svg
        className={styles['animated-arrow']}
        width="15"
        height="31"
        viewBox="0 0 15 31"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.5 0v1" />
        <path d="M14.5 -7L7.5 0L0.5 -7" />
      </svg>
    </div>
  );
}

// Add a empty long scroll div on mobile which will control the characters
// flipped and the background color
export function ScrollDivTouchScreen({ className }: { className?: string }) {
  const scrollDivReference = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showScrollCTA, setShowScrollCTA] = useState(false);

  // Reveal scroll CTA after a 1s delay when page loads
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowScrollCTA(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  // Hide scroll CTA 2s after the user scrolled. They probably understood the
  // interaction at that point
  useEffect(() => {
    let timeoutID: NodeJS.Timeout;
    if (hasScrolled) {
      timeoutID = setTimeout(() => {
        setShowScrollCTA(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutID);
    };
  }, [hasScrolled]);

  const { forceFlipPercentage, isPointerCoarse } = useContext(
    characterCountContext
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
        setHasScrolled(true);
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
      <ScrollCTA
        className={cn(
          'fixed bottom-[156px] left-1/2 -translate-x-1/2 transition-opacity duration-500',
          showScrollCTA ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  );
}
