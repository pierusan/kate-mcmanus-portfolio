import { ContactInfo } from './homepageContent/ContactInfo';
import { NameHeader } from './homepageContent/NameHeader';
import { RolesParagraph } from './homepageContent/RolesParagraph';
import { CareerParagraph } from './homepageContent/CareerParagraph';
import { EducationParagraph } from './homepageContent/EducationParagraph';
import { RelocationParagraph } from './homepageContent/RelocationParagraph';

export default function HomePage() {
  return (
    <main className='grid grid-cols-[28.125rem_minmax(auto,43.75rem)] [grid-template-areas:"name_description"]'>
      {/* Remove line height for the descendant to prevent layout shift */}
      <div className='flex flex-col [grid-area:"name"] [&>h1>*]:[line-height:0]'>
        <NameHeader />
        <ContactInfo />
      </div>
      <div
        className="flex flex-col gap-8 text-4xl font-bold [&>p>*]:[line-height:0]"
        style={{ gridArea: 'description' }}
      >
        <RolesParagraph />
        <CareerParagraph />
        <EducationParagraph />
        <RelocationParagraph />
      </div>
    </main>
  );
}
