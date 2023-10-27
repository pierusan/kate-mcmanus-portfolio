import { NameHeader } from './homepageContent/NameHeader';
import { RolesParagraph } from './homepageContent/RolesParagraph';
import { CareerParagraph } from './homepageContent/CareerParagraph';
import { EducationParagraph } from './homepageContent/EducationParagraph';
import { RelocationParagraph } from './homepageContent/RelocationParagraph';
import { CharacterCountProvider } from './CharacterCountProvider';
import { BodyBgFromCharactersFlipped } from './BodyBgFromCharactersFlipped';
import { NavDesktop } from './NavDesktop';
import { NavMobileOrTouchScreen } from './NavMobileOrTouchScreen';
import { ScrollDivTouchScreen } from './ScrollDivTouchScreen';
import { cn } from './helpers';

export default function HomePage() {
  return (
    <body
      className={cn(
        'min-h-[100dvh] w-screen',
        // Clip svgs at large screens. Text will still overflow to be readable
        // thanks to overflow-scroll on html tag
        'overflow-hidden',
        'py-5 pl-5 md:py-10 md:pl-10 ',
        // Grid layout at different screen sizes
        'grid grid-cols-[1fr] grid-rows-[1fr] ',
        'md:grid-cols-[1fr] md:grid-rows-[auto_69.5rem] ',
        'lg:grid-cols-[37.5rem_1fr] lg:grid-rows-[auto] ',
        '[grid-template-areas:"description"] ',
        'md:[grid-template-areas:"description"_"projects"] ',
        'lg:[grid-template-areas:"description_projects"] ',
        // Add side margins on very wide screens
        'relative max-w-screen-2xl 2xl:mx-auto'
      )}
    >
      <CharacterCountProvider>
        <main
          className={cn(
            '[grid-area:description] ',
            'coarse:fixed coarse:inset-5 ',
            'flex flex-col font-bold ',
            // On small screens have the text shrink with the width of the page
            'text-[clamp(0px,_100vw_*_36_/_768,_2.25rem)] ',
            '[&>h1]:text-[calc(56em/36)] ',
            // Also calculate the gap between paragraphs based on the screen
            // size (aka on font size here)
            'gap-[calc(40em_/_36)] [&>h1]:mb-0 ',
            // Prevent wrapping. We manually set line breaks
            'whitespace-nowrap ',
            // Set explicit line height to prevent layout shift when changing
            // font on flip
            '[&>h1]:[line-height:1.1em] [&>p]:[line-height:1.36611em] ',
            '[&>h1>*]:[line-height:0] [&>p>*]:[line-height:0]',
            'md:[&>h1]:mb-[calc(-6em/56)] md:[&>h1]:[line-height:1.357em]'
          )}
        >
          <NameHeader />
          <RolesParagraph />
          <CareerParagraph />
          <EducationParagraph />
          <RelocationParagraph />
        </main>
        <NavDesktop className="hidden [grid-area:projects] md-and-fine:[display:unset]" />
        <ScrollDivTouchScreen className="hidden coarse:block" />
        <NavMobileOrTouchScreen className="md-and-fine:hidden" />
        <BodyBgFromCharactersFlipped />
      </CharacterCountProvider>
    </body>
  );
}
