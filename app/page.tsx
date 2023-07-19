import { ContactInfo } from './homepageContent/ContactInfo';
import { NameHeader } from './homepageContent/NameHeader';
import { RolesParagraph } from './homepageContent/RolesParagraph';
import { CareerParagraph } from './homepageContent/CareerParagraph';
import { EducationParagraph } from './homepageContent/EducationParagraph';
import { RelocationParagraph } from './homepageContent/RelocationParagraph';
import { CharacterCountProvider } from './CharacterCountProvider';
import { BgFromCharacterHover } from './BgFromCharacterHover';
import { ProjectsNav } from './ProjectsNav';

export default function HomePage() {
  return (
    <CharacterCountProvider>
      <BgFromCharacterHover
        className={
          'grid py-10 pl-10 ' +
          'grid-cols-[auto] grid-rows-[auto_1fr] ' +
          'lg:grid-cols-[auto_1fr] lg:grid-rows-[auto] ' +
          '[grid-template-areas:"description"_"projects"] ' +
          'lg:[grid-template-areas:"description_projects"] ' +
          'relative'
        }
      >
        <main
          className={
            'w-[37.5rem] [grid-area:description] ' +
            'flex flex-col gap-10 ' +
            '[&>p]:text-4xl [&>p]:font-bold ' +
            // Prevent wrapping. We manually set line breaks
            'whitespace-nowrap ' +
            // Remove line heights for the descendant to prevent layout shift
            // when changing font on hover
            '[&>h1>*]:[line-height:0] [&>p>*]:[line-height:0]'
          }
        >
          <NameHeader className="mb-[-1.0625rem]" />
          <RolesParagraph />
          <CareerParagraph />
          <EducationParagraph />
          <RelocationParagraph />
          <ContactInfo
            className={
              'absolute right-5 top-5 z-50 ' +
              '[transform-origin:left_top] [transform:translateX(100%)_rotate(90deg)]'
            }
          />
        </main>
        <ProjectsNav className="[grid-area:projects]" />
      </BgFromCharacterHover>
    </CharacterCountProvider>
  );
}
