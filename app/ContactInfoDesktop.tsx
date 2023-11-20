import { FlippableSpan } from './FlippableSpan';
import {
  lektonStyle,
  parisienneStyle,
  staatlichesStyle,
  vT323Style,
} from './fontSubsets';
import { cn } from './helpers';

export const contactItems = [
  {
    name: 'Resume',
    url: 'https://storage.googleapis.com/pierre-portfolio-assets/kate-portfolio-v2/Kate_Resume_2023_06_28.pdf',
    width: '185px',
    classNameOnceFlipped: `${staatlichesStyle}`,
    mobileFontSizeClassName: 'text-[1.375rem]',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kate-mcmanus-9440944a/',
    width: '205px',
    classNameOnceFlipped: `${lektonStyle}`,
    mobileFontSizeClassName: 'text-[1.5rem]',
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/katestrykermcm',
    width: '200px',
    classNameOnceFlipped: `${vT323Style}`,
    mobileFontSizeClassName: 'text-[1.625rem]',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/katemcmanus.design/',
    width: '245px',
    classNameOnceFlipped: `${parisienneStyle}`,
    mobileFontSizeClassName: 'text-[1.625rem]',
  },
] as const;

export function ContactInfoDesktop({ className }: { className?: string }) {
  return (
    <address
      className={cn(
        'absolute right-5 top-5 z-50 ',
        'text-4xl font-bold not-italic ',
        // Rotate vertically
        '[transform-origin:left_top] [transform:translateX(100%)_rotate(90deg)] ',
        className
      )}
    >
      <ul className="flex gap-5">
        {contactItems.map(({ name, url, width, classNameOnceFlipped }) => (
          <li className="flex" key={name}>
            <a
              target="_blank"
              rel="noreferrer"
              href={url}
              className={cn(
                'border border-black py-5 text-center ',
                // Reveal border on hover
                'border-opacity-0 hover:border-opacity-100',
                // Set explicit line height to prevent layout shift when changing
                // font on flip
                '[line-height:1.8056em] [&>*]:[line-height:0]'
              )}
              style={{ width }}
            >
              {/* eslint-disable-next-line unicorn/prefer-spread */}
              {name.split('').map((char, index) => (
                <FlippableSpan
                  key={index}
                  classNameOnceFlipped={classNameOnceFlipped}
                  flickerOnStartOnDesktop={
                    (name === 'LinkedIn' && index === 3) ||
                    (name === 'Instagram' && index === 0)
                  }
                >
                  {char}
                </FlippableSpan>
              ))}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
}
