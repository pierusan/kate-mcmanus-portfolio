import resolveConfig from 'tailwindcss/resolveConfig';
import {
  RemoteImage,
  remoteImageAltTexts,
  type RemoteImageName,
} from '../RemoteImage';
import { cn } from '../helpers';
import { ProjectFigure } from './ProjectFigure';
import tailwindConfig from '@/tailwind.config';

let smallImageSizes: string | undefined,
  mediumImageSizes: string | undefined,
  largeImageSizes: string | undefined;

// Compute image responsive sizes in advance. This is helpful to tell Next the
// srcset of images to create and then tell the browser when to use them
const breakpoints = resolveConfig(tailwindConfig).theme?.screens;
if (
  breakpoints &&
  !Array.isArray(breakpoints) &&
  breakpoints.lg &&
  breakpoints['2xl']
) {
  smallImageSizes = `(max-width: ${breakpoints.lg}) 50vw, max-width: ${breakpoints['2xl']}) 33vw, calc(${breakpoints['2xl']}*0.33)`;
  mediumImageSizes = `(max-width: ${breakpoints.lg}) 100vw, max-width: ${breakpoints['2xl']}) 66vw, calc(${breakpoints['2xl']}*0.66)`;
  largeImageSizes = `(max-width: ${breakpoints['2xl']}) 100vw, ${breakpoints['2xl']}`;
} else {
  console.error('Could not retrieve breakpoints from tailwind config');
}

export type ImageAlignment = 'full' | 'left' | 'right' | 'sideA' | 'sideB';

export function imageAlignmentProps(alignment: ImageAlignment) {
  let className: string | undefined, sizes: string | undefined;

  // Make these work for both large 3 column layout and small 2 column layouts
  switch (alignment) {
    case 'full': {
      sizes = largeImageSizes;
      className = 'col-span-full';
      break;
    }
    case 'left': {
      sizes = mediumImageSizes;
      className = 'col-span-2 col-start-1';
      break;
    }
    case 'right': {
      sizes = mediumImageSizes;
      className = 'col-span-2 col-end-[-1]';
      break;
    }
    case 'sideA': {
      sizes = smallImageSizes;
      className = 'col-span-1 col-start-1';
      break;
    }
    case 'sideB': {
      sizes = smallImageSizes;
      className = 'col-span-1 col-end-[-1]';
      break;
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = alignment;
    }
  }
  return { className, sizes };
}

export function ProjectImage({
  name,
  alignment,
  priority,
  useAltTextAsCaption = true,
  className,
}: {
  name: RemoteImageName;
  alignment: ImageAlignment;
  priority?: boolean;
  useAltTextAsCaption?: boolean;
  className?: string;
}) {
  const { className: alignmentClassName, sizes } =
    imageAlignmentProps(alignment);

  return (
    <ProjectFigure
      className={cn(
        // Add pointer events to allow right-clicking on the image or
        // highlighting caption. It was awkward to be able to highlight the text
        // below the images
        'pointer-events-auto w-full',
        alignmentClassName,
        className
      )}
      caption={useAltTextAsCaption ? remoteImageAltTexts[name] : undefined}
    >
      <RemoteImage name={name} priority={priority} sizes={sizes} />
    </ProjectFigure>
  );
}
