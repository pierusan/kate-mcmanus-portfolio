import { HoverableSpan } from '../HoverableSpan';
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
      <HoverableSpan classNameOnceHovered={`font-mono`}>K</HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesHeaderStyle}`}>
        a
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`font-mono uppercase`}>
        t
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`font-mono uppercase`}>
        e
      </HoverableSpan>{' '}
      <br className="md:hidden" />
      <HoverableSpan classNameOnceHovered={`font-mono`}>M</HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${parisienneHeaderStyle}`}>
        c
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${pirataOneHeaderStyle}`}>
        M
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${monotonHeaderStyle}`}>
        a
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesHeaderStyle}`}>
        n
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`font-mono`}>u</HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${pirataOneHeaderStyle} uppercase`}>
        s
      </HoverableSpan>
    </h1>
  );
}
