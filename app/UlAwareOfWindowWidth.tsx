'use client';

import { useLayoutEffect, type ReactNode, useRef, useState } from 'react';
import { cn } from './helpers';

/**
 * To interpolate project card rotation degree values based on the width, we
 * need to have the window width as a unitless value (due to limitations of calc
 * function). We can't use 100vw so we decided to get the value in JS and pass
 * is as a css custom property.
 *
 * We could have also used postcss-strip-units but that would mean an additional
 * plugin and writing the css in a css module instead of co-located Tailwind
 */
export function UlAwareOfWindowWidth({
  className,
  windowWidthCSSCustomProperty,
  children,
}: {
  className?: string;
  windowWidthCSSCustomProperty: string;
  children: ReactNode;
}) {
  const ulReference = useRef<HTMLUListElement>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      setWindowWidth(null);
    };
  }, []);

  useLayoutEffect(() => {
    if (windowWidth === null) return;

    const ulElement = ulReference.current;
    ulElement?.style.setProperty(
      windowWidthCSSCustomProperty,
      `${windowWidth}`
    );

    return () => {
      ulElement?.style.removeProperty(windowWidthCSSCustomProperty);
    };
  }, [windowWidth, windowWidthCSSCustomProperty]);

  return (
    <ul ref={ulReference} className={cn(className)}>
      {children}
    </ul>
  );
}
