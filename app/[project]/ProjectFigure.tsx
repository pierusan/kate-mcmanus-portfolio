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
    <figure className={cn(className)}>
      {children}
      {caption && (
        <figcaption className="border border-black bg-white p-3 text-xs font-bold">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
