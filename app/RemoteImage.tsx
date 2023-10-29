import Image from 'next/image';
import { type ComponentProps } from 'react';
import remoteImages from './remoteImages.json';

type NextImageProperties = ComponentProps<typeof Image>;
type AnyRemoteImageName = keyof typeof remoteImages;

const remoteImageAltTexts = {
  nasa_sky_image: 'A sky full of clouds',
  project_journey_finder_1_full: '',
  project_journey_finder_2_right: '',
  project_journey_finder_3_full: '',
  project_journey_finder_4_leftSmall: '',
  project_journey_finder_4_rightSmall: '',
  project_journey_finder_5_full: '',
  project_journey_finder_6_left: '',
} satisfies Partial<Record<AnyRemoteImageName, string>>;
export type RemoteImageName = keyof typeof remoteImageAltTexts;

export function RemoteImage({
  name,
  fill,
  placeholder = 'blur',
  sizes,
  ...rest
}: {
  name: RemoteImageName;
  // Make sizes required for good practice
  sizes: NextImageProperties['sizes'];
} & Omit<
  NextImageProperties,
  'src' | 'alt' | 'width' | 'height' | 'blurDataUrl' | 'sizes'
>) {
  const { width, height, blurDataURL, src } = remoteImages[name];
  const alt = remoteImageAltTexts[name];
  const sizeProperties = fill ? { fill: true } : { width, height };

  return (
    <Image
      src={decodeURIComponent(src)}
      alt={alt}
      {...sizeProperties}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      sizes={sizes}
      {...rest}
    />
  );
}
