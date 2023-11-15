import { NavMobileOrTouchScreen } from '../NavMobileOrTouchScreen';
import { cn, positiveModulo } from '../helpers';
import {
  ProjectHeader,
  ProjectTitle,
  ProjectSubtitle,
  ProjectSection,
  ProjectFooter,
} from './ProjectElements';
import { ProjectImage } from './ProjectImage';
import { type WrittenProject, projectContents } from './projectContents';

export function generateStaticParams() {
  return Object.keys(projectContents);
}

const nextProject = (project: WrittenProject) => {
  const projectKeys = Object.keys(projectContents) as WrittenProject[];
  const currentIndex = projectKeys.indexOf(project);
  const nextIndex = positiveModulo(currentIndex + 1, projectKeys.length);
  return projectKeys[nextIndex];
};

const previousProject = (project: WrittenProject) => {
  const projectKeys = Object.keys(projectContents) as WrittenProject[];
  const currentIndex = projectKeys.indexOf(project);
  const nextIndex = positiveModulo(currentIndex - 1, projectKeys.length);
  return projectKeys[nextIndex];
};

export function ProjectPage({
  params,
}: {
  params: { project: WrittenProject };
}) {
  const content = projectContents[params.project];

  return (
    <>
      {/* PAGE LARGE */}
      <div
        className={cn(
          'hidden lg:grid ',
          'fixed inset-0 min-h-screen ',
          'grid-cols-1 grid-rows-[auto_minmax(0,1fr)] ',
          'mx-auto max-w-screen-2xl items-center p-5'
        )}
      >
        <ProjectHeader />
        <main className="flex flex-col px-5 text-sm leading-[1.375rem]">
          <ProjectTitle className={cn('mb-1')}>{content.title}</ProjectTitle>
          <ProjectSubtitle {...content.subtitle} />
          <div className="grid grid-cols-3 gap-10">
            <div>
              {content.leftColumn.map((columnSection, index) => (
                <ProjectSection key={index} {...columnSection} />
              ))}
            </div>
            <div>
              {content.middleColumn.map((columnSection, index) => (
                <ProjectSection key={index} {...columnSection} />
              ))}
            </div>
            <div>
              {content.rightColumn.map((columnSection, index) => (
                <ProjectSection key={index} {...columnSection} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <div
        className={cn(
          'hidden lg:grid',
          'pointer-events-none relative w-full',
          'grid-cols-3 gap-10 px-10 pb-5 pt-[4.8125rem]'
        )}
      >
        <ProjectImage priority={true} {...content.imageHero} />
        {[
          ...content.imagesLeftColumn,
          ...content.imagesMiddleColumn,
          ...content.imagesRightColumn,
        ].map((image) => {
          return <ProjectImage key={image.name} {...image} />;
        })}
        <div className="col-start-1 h-screen" />
        <ProjectFooter
          nextProject={nextProject(params.project)}
          previousProject={previousProject(params.project)}
        />
      </div>

      {/* PAGE MOBILE */}
      <main
        className={cn(
          'grid lg:hidden ',
          'p-5 md:p-10 ',
          // Add bottom margin on small screens to reveal Next/Prev buttons
          // above fixed bottom nav
          'mb-20 md:mb-0 ',
          'grid-cols-2 gap-x-6 gap-y-10'
        )}
      >
        <ProjectHeader />
        <ProjectImage priority={true} {...content.imageHero} />
        <div className="col-span-full max-w-[37.5rem]">
          <ProjectTitle>{content.title}</ProjectTitle>
          <ProjectSubtitle {...content.subtitle} />
          {content.leftColumn.map((columnSection, index) => (
            <ProjectSection key={index} {...columnSection} />
          ))}
        </div>
        {content.imagesLeftColumn.map((image) => {
          return <ProjectImage key={image.name} {...image} />;
        })}
        <div className="col-span-full max-w-[37.5rem]">
          {content.middleColumn.map((columnSection, index) => (
            <ProjectSection key={index} {...columnSection} />
          ))}
        </div>
        {content.imagesMiddleColumn.map((image) => {
          return <ProjectImage key={image.name} {...image} />;
        })}
        <div className="col-span-full max-w-[37.5rem]">
          {content.rightColumn.map((columnSection, index) => (
            <ProjectSection key={index} {...columnSection} />
          ))}
        </div>
        {content.imagesRightColumn.map((image) => {
          return <ProjectImage key={image.name} {...image} />;
        })}
        <ProjectFooter
          nextProject={nextProject(params.project)}
          previousProject={previousProject(params.project)}
        />
      </main>
      {/* Only show bottom nav on small or touch screens like for the homepage */}
      <NavMobileOrTouchScreen className="md:fine:hidden" />
    </>
  );
}
