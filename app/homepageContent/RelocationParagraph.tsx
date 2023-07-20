import { HoverableSpan } from '../HoverableSpan';
import {
  bethEllenStyle,
  harmattanStyle,
  meieScriptStyle,
  pirataOneStyle,
  qwigleyStyle,
  staatlichesStyle,
} from '../fontSubsets';

export function RelocationParagraph() {
  return (
    <p>
      <HoverableSpan classNameOnceHovered={`${harmattanStyle}`}>
        I
      </HoverableSpan>
      &apos;m{' '}
      <HoverableSpan classNameOnceHovered={`${pirataOneStyle}`}>
        r
      </HoverableSpan>
      elocatin
      <HoverableSpan classNameOnceHovered={`${qwigleyStyle}`}>
        g
      </HoverableSpan>{' '}
      to{' '}
      <HoverableSpan classNameOnceHovered={`${bethEllenStyle}`}>
        P
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${bethEllenStyle}`}>
        a
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${bethEllenStyle}`}>
        r
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${bethEllenStyle}`}>
        i
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${bethEllenStyle}`}>
        s
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${bethEllenStyle}`}>
        ,
      </HoverableSpan>
      <br />s
      <HoverableSpan classNameOnceHovered={`${meieScriptStyle}`}>
        e
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${meieScriptStyle}`}>
        e
      </HoverableSpan>
      ki
      <HoverableSpan classNameOnceHovered={`${pirataOneStyle}`}>
        n
      </HoverableSpan>
      g{' '}
      <HoverableSpan classNameOnceHovered={`${staatlichesStyle}`}>
        f
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesStyle}`}>
        u
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesStyle}`}>
        l
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesStyle}`}>
        l
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesStyle}`}>
        -
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesStyle}`}>
        t
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesStyle}`}>
        i
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesStyle}`}>
        m
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${staatlichesStyle}`}>
        e
      </HoverableSpan>{' '}
      em
      <HoverableSpan classNameOnceHovered={`${pirataOneStyle}`}>
        p
      </HoverableSpan>
      <HoverableSpan classNameOnceHovered={`${pirataOneStyle}`}>
        l
      </HoverableSpan>
      oy
      <HoverableSpan classNameOnceHovered={`font-mono`}>m</HoverableSpan>
      en
      <HoverableSpan
        classNameOnceHovered={`${harmattanStyle}`}
        childrenOnceHovered="T!"
      >
        t.
      </HoverableSpan>
    </p>
  );
}
