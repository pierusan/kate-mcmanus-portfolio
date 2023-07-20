import {
  Bangers,
  Beth_Ellen,
  Graduate,
  Harmattan,
  Lekton,
  Meie_Script,
  Monoton,
  Parisienne,
  Pirata_One,
  Qwigley,
  Rubik_Mono_One,
  Staatliches,
  Tourney,
  VT323,
} from 'next/font/google';

// TODO: Replace the fonts with subsets once the final set has been decided
// https://fonts.googleapis.com/css?family=Major+Mono+Display&text=K
// Maybe use glyphhanger to subset
// https://github.com/zachleat/glyphhanger
// const majorMonoDisplaySubset = localFont({
//   src: './fonts/MajorMonoDisplay_K.woff2',
//   display: 'block',
// });

const bangers = Bangers({ subsets: ['latin'], weight: '400' });
const bethEllen = Beth_Ellen({ subsets: ['latin'], weight: '400' });
const graduate = Graduate({ subsets: ['latin'], weight: '400' });
const harmattan = Harmattan({ subsets: ['latin'], weight: '400' });
const lekton = Lekton({ subsets: ['latin'], weight: '400' });
const meieScript = Meie_Script({ subsets: ['latin'], weight: '400' });
const monoton = Monoton({ subsets: ['latin'], weight: '400' });
const parisienne = Parisienne({ subsets: ['latin'], weight: '400' });
const pirataOne = Pirata_One({ subsets: ['latin'], weight: '400' });
const qwigley = Qwigley({ subsets: ['latin'], weight: '400' });
const rubikMonoOne = Rubik_Mono_One({ subsets: ['latin'], weight: '400' });
const staatliches = Staatliches({ subsets: ['latin'], weight: '400' });
// Don't use Tourney's variable font to avoid a bigger font size
const tourney = Tourney({ subsets: ['latin'], weight: '400' });
const vT323 = VT323({ subsets: ['latin'], weight: '400' });

// Add common classnames used with these
const bangersStyle = `${bangers.className} text-[0.9375em] tracking-[0.031111em]`;
const bethEllenStyle = `${bethEllen.className}`;
const graduateStyle = `${graduate.className} text-[0.75em]`;
const harmattanStyle = `${harmattan.className}`;
const lektonStyle = `${lekton.className} text-[1.125em]`;
const meieScriptStyle = `${meieScript.className} text-[1.8125em]`;
const monotonStyle = `${monoton.className} text-[1.25em]`;
const parisienneStyle = `${parisienne.className} text-[1.375em]`;
const pirataOneStyle = `${pirataOne.className}`;
const qwigleyStyle = `${qwigley.className} text-[1.875em]`;
const rubikMonoOneStyle = `${rubikMonoOne.className} text-[1.25em]`;
const staatlichesStyle = `${staatliches.className} text-[1.25em]`;
const tourneyStyle = `${tourney.className} text-[1.375em]`;
const vT323Style = `${vT323.className} text-[1.375em]`;

// For headers we use different font sizes
const monotonHeaderStyle = `${monoton.className}`;
const parisienneHeaderStyle = `${parisienne.className}`;
const pirataOneHeaderStyle = `${pirataOne.className}`;
const staatlichesHeaderStyle = `${staatliches.className}`;

export {
  bangersStyle,
  bethEllenStyle,
  graduateStyle,
  harmattanStyle,
  lektonStyle,
  meieScriptStyle,
  monotonStyle,
  monotonHeaderStyle,
  parisienneStyle,
  parisienneHeaderStyle,
  pirataOneStyle,
  pirataOneHeaderStyle,
  qwigleyStyle,
  rubikMonoOneStyle,
  staatlichesStyle,
  staatlichesHeaderStyle,
  tourneyStyle,
  vT323Style,
};
