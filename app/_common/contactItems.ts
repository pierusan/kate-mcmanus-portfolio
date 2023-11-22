import {
  lektonStyle,
  parisienneStyle,
  staatlichesStyle,
  vT323Style,
} from '@/fontSubsets';

export const contactItems = [
  {
    name: 'Resume',
    url: 'https://storage.googleapis.com/pierre-portfolio-assets/kate-portfolio-v2/Kate_Resume_2023_06_28.pdf',
    classNameOnceFlipped: `${staatlichesStyle}`,
    homeDesktopWidth: '185px',
    mobileFontSizeClassName: 'text-[1.375rem]',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kate-mcmanus-9440944a/',
    classNameOnceFlipped: `${lektonStyle}`,
    homeDesktopWidth: '205px',
    mobileFontSizeClassName: 'text-[1.5rem]',
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/katestrykermcm',
    classNameOnceFlipped: `${vT323Style}`,
    homeDesktopWidth: '200px',
    mobileFontSizeClassName: 'text-[1.625rem]',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/katemcmanus.design/',
    classNameOnceFlipped: `${parisienneStyle}`,
    homeDesktopWidth: '245px',
    mobileFontSizeClassName: 'text-[1.625rem]',
  },
] as const;
