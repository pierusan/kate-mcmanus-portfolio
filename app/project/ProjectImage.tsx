import Image, { type StaticImageData } from 'next/image';
import resolveConfig from 'tailwindcss/resolveConfig';
import { cn } from '../helpers';

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

type ImageType =
  | 'main'
  | 'full'
  | 'left'
  | 'right'
  | 'leftSmall'
  | 'rightSmall';
export function ProjectImage({
  src,
  alt,
  imageType,
}: {
  imageType: ImageType;
  src: StaticImageData;
  alt: string;
}) {
  let priority = false,
    className: string | undefined,
    sizes: string | undefined;

  // Make these work for both large 3 column layout and small 2 column layouts
  switch (imageType) {
    case 'main': {
      sizes = largeImageSizes;
      className = 'col-span-full';
      priority = true;
      break;
    }
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
    case 'leftSmall': {
      sizes = smallImageSizes;
      className = 'col-span-1 col-start-1';
      break;
    }
    case 'rightSmall': {
      sizes = smallImageSizes;
      className = 'col-span-1 col-end-[-1]';
      break;
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = imageType;
    }
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={cn('w-full', className)}
      priority={priority}
      sizes={sizes}
      quality={100}
      placeholder="blur"
    />
  );
}
