import { HoverableSpan } from './HoverableSpan';
import {
  lektonStyle,
  parisienneStyle,
  staatlichesStyle,
  vT323Style,
} from './fontSubsets';

const contactItems = [
  {
    name: 'Email',
    // TODO: Update email treatment based on new designs
    url: '#',
    width: '140px',
    classNameOnceHovered: `${vT323Style}`,
  },
  {
    name: 'Resume',
    // TODO: Self host instead
    url: 'http://katestrykermcmanus.com/content/home/KateStrykerMcManusResume.pdf',
    width: '182px',
    classNameOnceHovered: `${staatlichesStyle}`,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/kate-mcmanus-9440944a/',
    width: '202px',
    classNameOnceHovered: `${lektonStyle}`,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/katemcmanus.design/',
    width: '221px',
    classNameOnceHovered: `${parisienneStyle}`,
  },
];

export function ContactInfoDesktop({ className }: { className?: string }) {
  return (
    <address
      className={
        'absolute right-5 top-5 z-50 ' +
        'text-4xl font-bold not-italic ' +
        // Rotate vertically
        '[transform-origin:left_top] [transform:translateX(100%)_rotate(90deg)] ' +
        `${className}`
      }
    >
      <ul className="flex gap-5">
        {contactItems.map(({ name, url, width, classNameOnceHovered }) => (
          <li className="flex" key={name}>
            <a
              target="_blank"
              rel="noreferrer"
              href={url}
              className={
                'border border-black py-5 text-center ' +
                // Reveal border on hover
                'border-opacity-0 hover:border-opacity-100'
              }
              style={{ width }}
            >
              {/* eslint-disable-next-line unicorn/prefer-spread */}
              {name.split('').map((char, index) => (
                <HoverableSpan
                  key={index}
                  classNameOnceHovered={classNameOnceHovered}
                >
                  {char}
                </HoverableSpan>
              ))}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
}
