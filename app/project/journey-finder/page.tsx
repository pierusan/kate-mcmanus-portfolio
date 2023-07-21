import { ProjectFooter } from '../ProjectFooter';
import { ProjectHeader } from '../ProjectHeader';
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
import {
  ImageFull1,
  ImageFull2,
  ImageLeft1,
  ImagePair1,
  ImageRight1,
  MainImage,
} from './Images';

export default function JourneyFinderPage() {
  return (
    <>
      {/* PAGE LARGE */}
      <div
        className={
          'fixed inset-0 hidden min-h-screen lg:grid ' +
          'grid-cols-1 grid-rows-[auto_minmax(0,1fr)] ' +
          'mx-auto max-w-screen-2xl items-center p-5'
        }
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
        className={
          'hidden lg:grid ' +
          'pointer-events-none relative w-full ' +
          'grid-cols-3 gap-10 px-10 pb-5 pt-[4.8125rem]'
        }
      >
        <MainImage />
        <ImageRight1 />
        <ImageFull1 />
        <ImagePair1 />
        <ImageFull2 />
        <ImageLeft1 />
        <div className="col-start-1 h-screen" />
        <ProjectFooter />
      </div>

      {/* PAGE MOBILE */}
      <main className="grid grid-cols-2 gap-x-6 gap-y-10 p-10 lg:hidden">
        <ProjectHeader />
        <MainImage />
        {/* TODO: If the divs stay like this with as 3 different sections I can probably  */}
        <div className="col-span-full w-[70%]">
          <Title />
          <Tags />
          <Summary />
          <Team />
        </div>
        <ImageRight1 />
        <ImageFull1 />
        <div className="col-span-full">
          <Context />
          <Goal />
        </div>
        <ImagePair1 />
        <ImageFull2 />
        <div className="col-span-full">
          <Process />
          <Takeaways />
        </div>
        <ImageLeft1 />
        <ProjectFooter />
      </main>
    </>
  );
}
