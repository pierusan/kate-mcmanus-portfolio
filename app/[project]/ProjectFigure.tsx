import { type ReactNode } from 'react';
import { cn } from '../helpers';

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
    <figure className={cn('lg:shadow-drop', className)}>
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
