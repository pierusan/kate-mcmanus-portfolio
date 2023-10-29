import { ProjectFooter } from '../ProjectFooter';
import { ProjectHeader } from '../ProjectHeader';
import { ProjectImage } from '../ProjectImage';
import {
  Context,
  Goal,
  Process,
  Summary,
  Tags,
  Takeaways,
  Team,
  Title,
} from './Content';
import { cn } from '@/app/helpers';
import { NavMobileOrTouchScreen } from '@/app/NavMobileOrTouchScreen';

function MainImage() {
  return <ProjectImage imageType="main" name="project_journey_finder_1_full" />;
}

function ImageSet1() {
  return (
    <>
      <ProjectImage imageType="right" name="project_journey_finder_2_right" />
      <ProjectImage imageType="full" name="project_journey_finder_3_full" />
    </>
  );
}

function ImageSet2() {
  return (
    <>
      <ProjectImage
        imageType="leftSmall"
        name="project_journey_finder_4_leftSmall"
      />
      <ProjectImage
        imageType="rightSmall"
        name="project_journey_finder_4_rightSmall"
      />
      <ProjectImage imageType="full" name="project_journey_finder_5_full" />
    </>
  );
}
function ImageSet3() {
  return (
    <>
      <ProjectImage imageType="left" name="project_journey_finder_6_left" />
    </>
  );
}

export default function JourneyFinderPage() {
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
          <Title />
          <div className="grid grid-cols-3 gap-10 [&_p]:mb-7">
            <div>
              <Tags />
              <Summary />
              <Team />
            </div>
            <div>
              <Context />
              <Goal />
            </div>
            <div>
              <Process />
              <Takeaways />
            </div>
          </div>
        </main>
      </div>
      <div
        className={cn(
          'hidden lg:grid ',
          'pointer-events-none relative w-full ',
          'grid-cols-3 gap-10 px-10 pb-5 pt-[4.8125rem]'
        )}
      >
        <MainImage />
        <ImageSet1 />
        <ImageSet2 />
        <ImageSet3 />
        <div className="col-start-1 h-screen" />
        <ProjectFooter />
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
        <MainImage />
        {/* TODO: If the divs stay like this with as 3 different sections I can probably  */}
        <div className="col-span-full max-w-[37.5rem]">
          <Title />
          <Tags />
          <Summary />
          <Team />
        </div>
        <ImageSet1 />
        <div className="col-span-full max-w-[37.5rem]">
          <Context />
          <Goal />
        </div>
        <ImageSet2 />
        <div className="col-span-full max-w-[37.5rem]">
          <Process />
          <Takeaways />
        </div>
        <ImageSet3 />
        <ProjectFooter />
      </main>
      {/* Only show bottom nav on small or touch screens like for the homepage */}
      <NavMobileOrTouchScreen className="md:fine:hidden" />
    </>
  );
}
