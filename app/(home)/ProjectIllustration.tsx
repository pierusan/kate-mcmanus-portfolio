import { CSSProperties, type ReactElement } from 'react';
import { cn } from '@/helpers';

/**
 * Different versions of a same illustration for a project: default, highlight,
 * outline, and click area. All illustrations are svg files stacked on each
 * other and shown/hidden based on some hover css logic on the parent container.
 *
 * The position and rotation of the illustration is interpolated based on the
 * width of the viewport
 */
export function ProjectIllustration({
  className,
  children,
  positionPxAt769px,
  positionPxAt1099px,
  positionPxAt1100px,
  positionPxAt1800px,
  rotationDegAt769px,
  rotationDegAt1099px,
  rotationDegAt1100px,
  rotationDegAt1800px,
}: {
  className?: string;
  children: [ReactElement, ReactElement, ReactElement, ReactElement]; // expect 4 versions of the illustration
  positionPxAt769px: [number, number];
  positionPxAt1099px: [number, number];
  rotationDegAt769px: number;
  rotationDegAt1099px: number;
  positionPxAt1100px: [number, number];
  positionPxAt1800px: [number, number];
  rotationDegAt1100px: number;
  rotationDegAt1800px: number;
}) {
  return (
    <div
      // We use tailwind here for easy media queries and pass the values to css
      // using css vars. We have to hardcode the breakpoint values (e.g. 1100
      // instead of theme(screens.md)) because of calc limitations with units
      className={cn(
        // Stack illustration versions on top of each other with this div the
        // same size as all their children
        'relative',
        '[&>*:not(:first-child)]:absolute [&>*:not(:first-child)]:inset-0',

        // Position and rotation values from specific Figma screens
        'md:[--x1:var(--x-at-769px)] md:[--y1:var(--y-at-769px)]',
        'md:[--x2:var(--x-at-1099px)] md:[--y2:var(--y-at-1099px)]',
        'md:[--rot1:var(--rot-at-769px)] md:[--rot2:var(--rot-at-1099px)]',
        'lg:[--x1:var(--x-at-1100px)] lg:[--y1:var(--y-at-1100px)]',
        'lg:[--x2:var(--x-at-1800px)] lg:[--y2:var(--y-at-1800px)]',
        'lg:[--rot1:var(--rot-at-1100px)] lg:[--rot2:var(--rot-at-1800px)]',

        // Normalized width to know how to interpolate. We expect --window-width
        // to be set by a parent
        'md:[--normalized-width:calc((var(--window-width)_-_769)/330)]',
        'lg:[--normalized-width:calc((var(--window-width)_-_1100)/700)]',
        '2xl:[--normalized-width:calc((2000_-_1100)/700)]',
        // Can't use the code below unfortunately because CSS can't strip units
        // '[--normalized-width:calc((100vw-1100px)/700)]',

        // Linear interpolation
        '[--translate-x:calc((var(--x1))_+_(var(--x2)_-_var(--x1))*var(--normalized-width))]',
        '[--translate-y:calc((var(--y1))_+_(var(--y2)_-_var(--y1))*var(--normalized-width))]',
        '[--rotation:calc((var(--rot1))_+_(var(--rot2)_-_var(--rot1))*var(--normalized-width))]',
        '[transform:translate(var(--translate-x),var(--translate-y))_rotate(var(--rotation))]',
        '[transform-origin:center]',
        className
      )}
      style={
        {
          '--x-at-769px': `${positionPxAt769px[0]}px`,
          '--y-at-769px': `${positionPxAt769px[1]}px`,
          '--x-at-1099px': `${positionPxAt1099px[0]}px`,
          '--y-at-1099px': `${positionPxAt1099px[1]}px`,
          '--rot-at-769px': `${rotationDegAt769px}deg`,
          '--rot-at-1099px': `${rotationDegAt1099px}deg`,

          // We need an offset for these because of the way values
          // were provided in Figma
          '--x-at-1100px': `calc(${positionPxAt1100px[0]}px - 640px)`,
          '--y-at-1100px': `calc(${positionPxAt1100px[1]}px - 40px)`,
          '--x-at-1800px': `calc(${positionPxAt1800px[0]}px - 640px)`,
          '--y-at-1800px': `calc(${positionPxAt1800px[1]}px - 40px)`,
          '--rot-at-1100px': `${rotationDegAt1100px}deg`,
          '--rot-at-1800px': `${rotationDegAt1800px}deg`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
