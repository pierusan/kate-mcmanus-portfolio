import { FlippableSpan } from './FlippableSpan';
import { contactItems } from '@/contactItems';
import { cn } from '@/helpers';

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
        {contactItems.map(
          ({ name, url, homeDesktopWidth, classNameOnceFlipped }) => (
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
                style={{ width: homeDesktopWidth }}
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
          )
        )}
      </ul>
    </address>
  );
}
