import { HoverableSpan } from '../HoverableSpan';
import {
  majorMonoDisplay,
  monoton,
  parisienne,
  pirataOne,
  staatliches,
} from '../fontSubsets';

export function NameHeader() {
  return (
    <h1>
      <HoverableSpan classNameOnceHovered={`${majorMonoDisplay.className}`}>
        K
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatliches.className}`}>
        a
      </HoverableSpan>
      <HoverableSpan
        classNameOnceHovered={`${majorMonoDisplay.className} uppercase`}
      >
        t
      </HoverableSpan>
      <HoverableSpan
        classNameOnceHovered={`${majorMonoDisplay.className} uppercase`}
      >
        e
      </HoverableSpan>
      <br />
      <HoverableSpan classNameOnceHovered={`${majorMonoDisplay.className}`}>
        M
      </HoverableSpan>
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
      <HoverableSpan classNameOnceHovered={`${majorMonoDisplay.className}`}>
        u
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${pirataOne.className} uppercase`}>
        s
      </HoverableSpan>
    </h1>
  );
}
