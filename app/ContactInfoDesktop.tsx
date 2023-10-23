import { FlippableSpan } from './FlippableSpan';
import {
  lektonStyle,
  parisienneStyle,
  staatlichesStyle,
  vT323Style,
} from './fontSubsets';
import { cn } from './helpers';

const contactItems = [
  {
    name: 'Email',
    // TODO: Update email treatment based on new designs
    url: '#',
    width: '140px',
    classNameOnceFlipped: `${vT323Style}`,
  },
  {
    name: 'Resume',
    // TODO: Self host instead
    url: 'http://katestrykermcmanus.com/content/home/KateStrykerMcManusResume.pdf',
    width: '182px',
    classNameOnceFlipped: `${staatlichesStyle}`,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/kate-mcmanus-9440944a/',
    width: '202px',
    classNameOnceFlipped: `${lektonStyle}`,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/katemcmanus.design/',
    width: '221px',
    classNameOnceFlipped: `${parisienneStyle}`,
  },
];

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
                'border-opacity-0 hover:border-opacity-100'
              )}
              style={{ width }}
            >
              {/* eslint-disable-next-line unicorn/prefer-spread */}
              {name.split('').map((char, index) => (
                <FlippableSpan
                  key={index}
                  classNameOnceFlipped={classNameOnceFlipped}
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
