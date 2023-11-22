import { NameTitle } from './_intro/NameTitle';
import { RolesParagraph } from './_intro/RolesParagraph';
import { CareerParagraph } from './_intro/CareerParagraph';
import { EducationParagraph } from './_intro/EducationParagraph';
import { RelocationParagraph } from './_intro/RelocationParagraph';
import { CharacterCountProvider } from './CharacterCountProvider';
import { BodyBgFromCharactersFlipped } from './BodyBgFromCharactersFlipped';
import { HomeNavDesktop } from './HomeNavDesktop';
import { ScrollDivTouchScreen } from './ScrollDivTouchScreen';
import { RotateMeDialogTouchScreen } from './RotateMeDialogTouchScreen';
import { NavMobileOrTouchScreen } from '@/components/NavMobileOrTouchScreen';
import { cn } from '@/helpers';

export default function HomePage() {
  return (
    <body
      className={cn(
        'min-h-[100dvh] w-screen',
        // Clip svgs at large screens. Text will still overflow to be readable
        // thanks to overflow-scroll on html tag
        'overflow-hidden',
        'py-5 pl-5 md:py-10 md:pl-10 ',
        // Grid layout at different screen sizes (for desktops with mouse)
        'grid grid-cols-[1fr] grid-rows-[1fr] ',
        'fine:md:grid-cols-[1fr] fine:md:grid-rows-[auto_69.5rem] ',
        'fine:lg:grid-cols-[37.5rem_1fr] fine:lg:grid-rows-[auto] ',
        '[grid-template-areas:"description"] ',
        'fine:md:[grid-template-areas:"description"_"projects"] ',
        'fine:lg:[grid-template-areas:"description_projects"] ',
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
          <NameTitle />
          <RolesParagraph />
          <CareerParagraph />
          <EducationParagraph />
          <RelocationParagraph />
        </main>
        <HomeNavDesktop
          className={cn(
            '[grid-area:projects]',
            'hidden fine:md:[display:unset]'
          )}
        />
        <BodyBgFromCharactersFlipped />
        <div
          className={cn(
            // Create a new 'touch screen' stacking context above the flippable
            // letters that we had to elevate a bit to be above the
            // illustrations
            'relative z-10'
          )}
        >
          <ScrollDivTouchScreen className="fine:hidden" />
          <NavMobileOrTouchScreen className="fine:md:hidden" />
          <RotateMeDialogTouchScreen className="fine:hidden" />
        </div>
      </CharacterCountProvider>
    </body>
  );
}
