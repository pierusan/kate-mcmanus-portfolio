import { contactItems } from './ContactInfoDesktop';
import { cn } from './helpers';

const orderedMobileContactItems: (typeof contactItems)[number]['name'][] = [
  'Dribbble',
  'Instagram',
  'LinkedIn',
  'Resume',
];

export function ContactInfoMobile({ className }: { className?: string }) {
  return (
    <address
      className={cn(
        'flex flex-col justify-between gap-4 bg-surface p-4 not-italic',
        className
      )}
    >
      <p className={cn('text-body')}>
        I&apos;d love to connect!
        <br />
        Send me an email at:
        <br />
        <b>katestrykermcm@gmail.com</b>
      </p>
      <ul className={cn('flex flex-col gap-4')}>
        {orderedMobileContactItems.map((name) => {
          const contactItem = contactItems.find((item) => item.name === name);
          if (!contactItem) {
            console.error(`No contact item found for ${name}`);
            return null;
          }
          const { url, classNameOnceFlipped, mobileFontSizeClassName } =
            contactItem;

          return (
            <li key={name}>
              <a
                href={url}
                className={cn(
                  // Set explicit height to prevent different font line heights
                  // from influencing layout
                  'block h-16',
                  'rounded-md border border-action-subtle bg-white',
                  'grid place-items-center',
                  classNameOnceFlipped,
                  mobileFontSizeClassName
                )}
              >
                <p>{name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </address>
  );
}
