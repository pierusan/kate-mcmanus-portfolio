import { type ReactNode } from 'react';
import { cn } from '../helpers';

export function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <body className={cn('max-w-screen-2xl bg-white 2xl:mx-auto')}>
      {children}
    </body>
  );
}
