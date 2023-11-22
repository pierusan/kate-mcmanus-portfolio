'use client';

import { type CSSProperties } from 'react';
import { FlippableSpan } from '../FlippableSpan';
import { usePercentCharactersFlipped } from '../usePercentCharactersFlipped';
import {
  monotonHeaderStyle,
  parisienneHeaderStyle,
  pirataOneHeaderStyle,
  staatlichesHeaderStyle,
} from '@/fontSubsets';
import { cn } from '@/helpers';

export function NameTitle({ className }: { className?: string }) {
  // Control rotation on touch screen based on how many characters have been
  // flipped
  // TODO: Check if we really need a re-render when pointer is not coarse
  const percentFlipped = usePercentCharactersFlipped();
  const rotation = percentFlipped * 360;

  return (
    <h1
      className={cn(
        'leading-[1] coarse:origin-center coarse:rotate-[var(--rotation)] coarse:self-start',
        className
      )}
      style={{ '--rotation': `${rotation}deg` } as CSSProperties}
    >
      <FlippableSpan classNameOnceFlipped={`font-mono`}>K</FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesHeaderStyle}`}>
        a
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`font-mono uppercase`}>
        t
      </FlippableSpan>
      <FlippableSpan
        flickerOnStartOnDesktop
        classNameOnceFlipped={`font-mono uppercase`}
      >
        e
      </FlippableSpan>{' '}
      <br className="md:hidden" />
      <FlippableSpan classNameOnceFlipped={`font-mono`}>M</FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${parisienneHeaderStyle}`}>
        c
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${pirataOneHeaderStyle}`}>
        M
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${monotonHeaderStyle}`}>
        a
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesHeaderStyle}`}>
        n
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`font-mono`}>u</FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${pirataOneHeaderStyle} uppercase`}>
        s
      </FlippableSpan>
    </h1>
  );
}
