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
const lekton = Lekton({ subsets: ['latin'], weight: ['400', '700'] });
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

export {
  bangers,
  bethEllen,
  graduate,
  harmattan,
  lekton,
  meieScript,
  monoton,
  parisienne,
  pirataOne,
  qwigley,
  rubikMonoOne,
  staatliches,
  tourney,
  vT323,
};
