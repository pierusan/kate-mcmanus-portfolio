import { NameHeader } from './homepageContent/NameHeader';
import { RolesParagraph } from './homepageContent/RolesParagraph';
import { CareerParagraph } from './homepageContent/CareerParagraph';
import { EducationParagraph } from './homepageContent/EducationParagraph';
import { RelocationParagraph } from './homepageContent/RelocationParagraph';
import { CharacterCountProvider } from './CharacterCountProvider';
import { BodyBgFromCharacterHover } from './BodyBgFromCharacterHover';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';

export default function HomePage() {
  return (
    <body
      className={
        'min-h-[100dvh] w-screen overflow-scroll ' +
        'grid py-10 pl-10 ' +
        'grid-cols-[auto] grid-rows-[auto] ' +
        'md:grid-cols-[auto] md:grid-rows-[auto_1fr] ' +
        'lg:grid-cols-[auto_1fr] lg:grid-rows-[auto] ' +
        '[grid-template-areas:"description"] ' +
        'md:[grid-template-areas:"description"_"projects"] ' +
        'lg:[grid-template-areas:"description_projects"] ' +
        // Add side margins on very wide screens
        'relative max-w-screen-2xl 2xl:mx-auto'
      }
    >
      <CharacterCountProvider>
        <main
          className={
            '[grid-area:description] ' +
            'flex flex-col gap-10 font-bold ' +
            // On small screens have the text shrink with the width of the page
            // TODO: Find a way to still use a rem unit here?
            '[&>h1]:text-[calc(100vw*56/768)] [&>p]:text-[calc(100vw*36/768)] ' +
            'md:w-[37.5rem] md:[&>h1]:text-[3.5rem] md:[&>p]:text-[2.25rem] ' +
            // Prevent wrapping. We manually set line breaks
            'whitespace-nowrap ' +
            // Set explicit line height to prevent layout shift when changing
            // font on hover
            '[&>h1]:[line-height:1.1em] [&>p]:[line-height:1.36611em] ' +
            '[&>h1>*]:[line-height:0] [&>p>*]:[line-height:0]'
          }
        >
          <NameHeader className="mb-[-1.0625rem]" />
          <RolesParagraph />
          <CareerParagraph />
          <EducationParagraph />
          <RelocationParagraph />
        </main>
        <NavDesktop className="hidden [grid-area:projects] md:[display:unset]" />
        <NavMobile className="md:hidden" />
        <BodyBgFromCharacterHover />
      </CharacterCountProvider>
    </body>
  );
}
