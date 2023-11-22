import { FlippableSpan } from '../FlippableSpan';
import {
  bethEllenStyle,
  harmattanStyle,
  meieScriptStyle,
  pirataOneStyle,
  qwigleyStyle,
  staatlichesStyle,
} from '@/fontSubsets';

export function RelocationParagraph() {
  return (
    <p>
      <FlippableSpan classNameOnceFlipped={`${harmattanStyle}`}>
        I
      </FlippableSpan>
      &apos;m{' '}
      <FlippableSpan classNameOnceFlipped={`${pirataOneStyle}`}>
        r
      </FlippableSpan>
      elocatin
      <FlippableSpan
        flickerOnStartOnDesktop
        classNameOnceFlipped={`${qwigleyStyle}`}
      >
        g
      </FlippableSpan>{' '}
      to{' '}
      <FlippableSpan classNameOnceFlipped={`${bethEllenStyle}`}>
        P
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${bethEllenStyle}`}>
        a
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${bethEllenStyle}`}>
        r
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${bethEllenStyle}`}>
        i
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${bethEllenStyle}`}>
        s
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${bethEllenStyle}`}>
        ,
      </FlippableSpan>
      <br />s
      <FlippableSpan
        flickerOnStartOnDesktop
        classNameOnceFlipped={`${meieScriptStyle}`}
      >
        e
      </FlippableSpan>
      <FlippableSpan
        flickerOnStartOnDesktop
        classNameOnceFlipped={`${meieScriptStyle}`}
      >
        e
      </FlippableSpan>
      ki
      <FlippableSpan classNameOnceFlipped={`${pirataOneStyle}`}>
        n
      </FlippableSpan>
      g{' '}
      <FlippableSpan classNameOnceFlipped={`${staatlichesStyle}`}>
        f
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesStyle}`}>
        u
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesStyle}`}>
        l
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesStyle}`}>
        l
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesStyle}`}>
        -
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesStyle}`}>
        t
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesStyle}`}>
        i
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesStyle}`}>
        m
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${staatlichesStyle}`}>
        e
      </FlippableSpan>{' '}
      em
      <FlippableSpan classNameOnceFlipped={`${pirataOneStyle}`}>
        p
      </FlippableSpan>
      <FlippableSpan classNameOnceFlipped={`${pirataOneStyle}`}>
        l
      </FlippableSpan>
      oy
      <FlippableSpan classNameOnceFlipped={`font-mono`}>m</FlippableSpan>
      en
      <FlippableSpan
        flickerOnStartOnDesktop
        classNameOnceFlipped={`${harmattanStyle}`}
        childrenOnceFlipped="T!"
      >
        t.
      </FlippableSpan>
    </p>
  );
}
