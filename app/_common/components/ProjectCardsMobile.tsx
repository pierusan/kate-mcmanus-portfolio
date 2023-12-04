import Link from 'next/link';
import { type WrittenProject, projectContents } from '../projectContents';
import {
  lektonStyle,
  parisienneStyle,
  pirataOneStyle,
  tourneyStyle,
} from '../fontSubsets';
import { cn } from '@/helpers';

const projectMobileNavDescriptions = {
  interactives:
    'Data-driven, visual, and responsive, digital experiences for the Think with Google platform.',
  nasa: 'Initially built to support Artemis I, LSAIB is used across NASA to manage the documentation and approval process of rocket parts for assembly and integration at Kennedy Space Center.',
  'visual-stories':
    'New visually-rich, mobile-first, tappable articles to address the increase of users accessing Think with Google from their phones and seeking more bite-sized content.',
  'journey-finder':
    "An internal tool used by Google's marketing and sales teams to search and navigate customer journey data (purchased from a third-party).",
  branding:
    "I designed the brand identities for Beavr, a French startup on Station F's Top 40 list, and Purdy Marketing Co., a boutique American firm. ",
  vijks:
    "4 virtual “exhibits” exploring how users can experience the Rijksmuseum's art remotely and admitted to the IEEE Visualization Conference as a presentation, poster, and public art installation.",
} satisfies Record<WrittenProject, string>;

export function ProjectCardsMobile({ className }: { className?: string }) {
  return (
    <ul className={cn('flex flex-col gap-4 bg-surface p-4', className)}>
      {Object.entries(projectContents).map(
        ([projectIdAsString, contents], index) => {
          const projectId = projectIdAsString as WrittenProject;
          const { title, subtitle } = contents;
          const { company, date, tags } = subtitle;
          const description = projectMobileNavDescriptions[projectId];
          const cardTitle =
            'titleMobileNav' in contents ? contents['titleMobileNav'] : title;
          const cardProjectTags =
            'tagsMobileNav' in subtitle ? subtitle['tagsMobileNav'] : tags;
          return (
            <li key={projectId}>
              <Link
                className={cn(
                  'flex flex-col items-start gap-[0.625rem] p-4',
                  'rounded-md border border-action-subtle bg-white'
                )}
                rel="bookmark"
                href={`/${projectId}`}
              >
                <p className={cn(tourneyStyle, 'text-2xl')}>{index + 1}</p>
                <h2 className={cn('text-xl font-bold')}>{cardTitle}</h2>
                <p className={cn('text-base tracking-[0.0125rem]')}>
                  {description}
                </p>
                <div className={cn('flex items-center gap-[0.375rem]')}>
                  <p
                    className={cn(
                      `${parisienneStyle} text-[1.5rem] leading-[1.25em]`
                    )}
                  >
                    {company}
                  </p>
                  <p className={cn(`${lektonStyle} text-base`)}>{date}</p>
                </div>
                <p className={cn(`${pirataOneStyle} text-base`)}>
                  {cardProjectTags}
                </p>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
}
