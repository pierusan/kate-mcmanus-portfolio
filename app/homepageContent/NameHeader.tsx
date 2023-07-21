import { FlippableSpan } from '../FlippableSpan';
import {
  monotonHeaderStyle,
  parisienneHeaderStyle,
  pirataOneHeaderStyle,
  staatlichesHeaderStyle,
} from '../fontSubsets';

export function NameHeader({ className }: { className?: string }) {
  return (
    // Tweak first gap
    <h1 className={`[line-height:1] ${className}`}>
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
