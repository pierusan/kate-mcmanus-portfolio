import Image from 'next/image';
import resolveConfig from 'tailwindcss/resolveConfig';
import { cn } from './helpers';
import { UlAwareOfWindowWidth } from './UlAwareOfWindowWidth';
import { ProjectIllustration } from './ProjectIllustration';
import { ProjectIllustrationClickArea } from './ProjectIllustrationClickArea';
import { projectCardsInfo } from './projectCardsInfo';
import checkersPatternSvg from './projectCardSvgs/CheckersBackground.svg?url';
import { RemoteImage } from './RemoteImage';
import skyGlitter from './projectCardSvgs/nasa_sky_glitter.svg?url';
import tailwindConfig from '@/tailwind.config';

const mdBreakpoint = resolveConfig(tailwindConfig).theme?.screens.md;

export function ProjectCardsDesktop({ className }: { className?: string }) {
  return (
    // TODO: Could probably try and use tailwind's group or peer there maybe?
    <UlAwareOfWindowWidth
      windowWidthCSSCustomProperty="--window-width"
      className={cn(
        'relative',
        // Anchor all the illustrations on the top left of the area to properly apply their transforms
        '[&>li>div]:absolute [&>li]:absolute',
        // Hide all svgs until window width is set to prevent confusion
        'opacity-[calc(var(--window-width,0)/var(--window-width,1))]',
        // Only specified areas are hoverable and clickable
        '[&_*]:pointer-events-none',
        '[&_*.card-click-area]:cursor-pointer [&_*.card-click-area]:[pointer-events:all]',
        // By default hide the color and outline versions
        '[&_:is(.project-card-highlight,.project-card-outline,.project-card-click-area)]:opacity-0',
        // On hover reveal the highlighted svg for the illustration hovered, and
        // the outline svg for the rest
        '[&:has(.card-click-area:hover)_.project-card-default]:opacity-0',
        '[&:has(.card-click-area:hover)>li:has(.card-click-area:hover)_.project-card-highlight]:opacity-100',
        '[&:has(.card-click-area:hover)>li:not(:has(.card-click-area:hover))_.project-card-outline]:opacity-100',
        // Move the hovered project card to the foreground
        '[&:has(.card-click-area:hover)>li:has(.card-click-area:hover)]:z-20',
        // Special Backgrounds to reveal on hover
        '[&:has(.show-clouds:hover)>.clouds-background]:opacity-100',
        '[&:has(.show-checkers:hover)>.checkers-background]:opacity-100',
        className
      )}
    >
      {Object.entries(projectCardsInfo).map(([name, illustrations]) => (
        <li
          key={name}
          className={cn({
            // Special backgrounds
            'show-clouds': name === 'nasa',
            'show-checkers': name === 'interactives',
          })}
        >
          {illustrations.map((illustration, index) => (
            <ProjectIllustration
              key={`${name}-${index}`}
              positionPxAt769px={[
                illustration['769px'][0],
                illustration['769px'][1],
              ]}
              positionPxAt1099px={[
                illustration['1099px'][0],
                illustration['1099px'][1],
              ]}
              positionPxAt1100px={[
                illustration['1100px'][0],
                illustration['1100px'][1],
              ]}
              positionPxAt1800px={[
                illustration['1800px'][0],
                illustration['1800px'][1],
              ]}
              rotationDegAt769px={illustration['769px'][2]}
              rotationDegAt1099px={illustration['1099px'][2]}
              rotationDegAt1100px={illustration['1100px'][2]}
              rotationDegAt1800px={illustration['1800px'][2]}
            >
              <illustration.svg className="project-card-default" />
              <illustration.svgHighlight className="project-card-highlight" />
              <illustration.svgOutline className="project-card-outline" />
              <ProjectIllustrationClickArea
                linkRef={illustration.linkRef}
                clickAreaClassName="card-click-area"
                clickAreasContainerClassName="project-card-click-area"
              >
                <illustration.svgGuide />
              </ProjectIllustrationClickArea>
            </ProjectIllustration>
          ))}
        </li>
      ))}
      {/* Special Backgrounds to reveal on hover */}
      <div
        className={cn(
          'clouds-background pointer-events-none opacity-0',
          'fixed left-0 top-0 -z-10 h-screen w-screen'
        )}
      >
        <RemoteImage
          priority // Only image of the page, so load it first
          fill
          name="nasa_sky_image"
          sizes={`(max-width: ${mdBreakpoint}) 0px, 100vw`}
          className="object-cover"
        />
      </div>
      <div
        className={cn(
          'clouds-background pointer-events-none opacity-0',
          'fixed left-0 top-0 z-20 w-screen',
          'flex justify-center'
        )}
      >
        <Image
          src={skyGlitter}
          alt="illustrated 'glitter' red stars"
          placeholder="empty" // no blur. It's ok if it shows up later
          sizes={`(max-width: ${mdBreakpoint}) 0px, 100vw`}
          className="max-w-[unset] shrink-0"
        />
      </div>
      <div
        className={cn(
          'checkers-background pointer-events-none opacity-0',
          'fixed left-0 top-0 z-10 h-screen w-screen',
          'flex flex-col justify-between'
        )}
      >
        <div
          className="box-content h-[16px] w-full border-b-[1px] border-black bg-repeat-x"
          style={{ backgroundImage: `url(${checkersPatternSvg.src})` }}
        />
        <div
          className="h-[16px] w-full border-t-[1px] border-black bg-repeat-x"
          style={{ backgroundImage: `url(${checkersPatternSvg.src})` }}
        />
      </div>
    </UlAwareOfWindowWidth>
  );
}
