import { type ReactNode } from 'react';
import { cn } from '@/helpers';

export function ProjectFigure({
  caption,
  className,
  children,
}: {
  caption?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <figure
      className={cn(
        'lg:shadow-drop',
        // There is sometimes a small gap between the image and the caption
        // (likely due to the image aspect ratio)
        'bg-black',
        className
      )}
    >
      {children}
      {caption && (
        <figcaption
          className={cn(
            'border border-black bg-white p-3 text-caption font-bold'
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
