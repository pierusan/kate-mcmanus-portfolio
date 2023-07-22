'use client';

import { useContext } from 'react';
import { CharacterCountContext } from '../CharacterCountContext';
import { FlippableSpan } from '../FlippableSpan';
import {
  monotonHeaderStyle,
  parisienneHeaderStyle,
  pirataOneHeaderStyle,
  staatlichesHeaderStyle,
} from '../fontSubsets';

export function NameHeader({ className }: { className?: string }) {
  // TODO: Check if we really need a re-render when pointer is not coarse

  // Control rotation on touch screen based on how many characters have been
  // flipped
  const { percentFlipped, isPointerCoarse } = useContext(CharacterCountContext);
  const rotation = percentFlipped * 360;

  return (
    <h1
      className={`leading-[1] coarse:origin-center coarse:self-start ${className}`}
      style={
        isPointerCoarse ? { transform: `rotate(${rotation}deg)` } : undefined
      }
    >
      <FlippableSpan classNameOnceFlipped={`font-mono`}>K</FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesHeaderStyle}`}>
        a
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`font-mono uppercase`}>
        t
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`font-mono uppercase`}>
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
