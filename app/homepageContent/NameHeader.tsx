import { HoverableSpan } from '../HoverableSpan';
import { monoton, parisienne, pirataOne, staatliches } from '../fontSubsets';

export function NameHeader({ className }: { className?: string }) {
  return (
    // Tweak first gap
    <h1 className={`${className}`}>
      <HoverableSpan classNameOnceHovered={`font-mono`}>K</HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatliches.className}`}>
        a
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`font-mono uppercase`}>
        t
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`font-mono uppercase`}>
        e
      </HoverableSpan>{' '}
      <HoverableSpan classNameOnceHovered={`font-mono`}>M</HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${parisienne.className}`}>
        c
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${pirataOne.className}`}>
        M
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${monoton.className}`}>
        a
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatliches.className}`}>
        n
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`font-mono`}>u</HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${pirataOne.className} uppercase`}>
        s
      </HoverableSpan>
    </h1>
  );
}
