'use client';

import { useEffect } from 'react';
import { usePercentCharactersFlipped } from './usePercentCharactersFlipped';

type ColorHex = `#${string}`;
interface ColorMix {
  color1: ColorHex;
  color2: ColorHex;
  percentageMix: number;
}

const gradientStops: ColorHex[] = [
  '#FFF',
  '#FFE5EC',
  '#FFD600',
  '#ADFF00',
  '#00FF85',
];

// TODO: Add tests for this
/**
 * Convert a total progress into a color value on a gradient
 *
 * @param progress total progress in flipping characters on the page
 * @param colorStops colors stops on the gradient to progress along
 * @returns color mix information
 */
function getProgressColorInfo(
  progress: number,
  colorStops: ColorHex[]
): ColorMix {
  const nStops = colorStops.length;

  // Edge cases
  if (progress >= 1) {
    return {
      color1: colorStops[nStops - 2],
      color2: colorStops[nStops - 1],
      percentageMix: 100,
    };
  }

  const intervalNumber = Math.floor(progress * (nStops - 1));

  return {
    color1: colorStops[intervalNumber],
    color2: colorStops[intervalNumber + 1],
    percentageMix: ((progress * (nStops - 1)) % 1) * 100,
  };
}

let didRenderInBrowserOnce = false;

export function BodyBgFromCharactersFlipped() {
  const percentFlipped = usePercentCharactersFlipped();

  const { color1, color2, percentageMix } = getProgressColorInfo(
    percentFlipped,
    gradientStops
  );

  // document is only available in the browser so we only use this style update
  // after hydration
  if (didRenderInBrowserOnce && typeof window !== 'undefined') {
    document.body.style.backgroundColor = `color-mix(in oklab, ${color1}, ${color2} ${percentageMix}%)`;
  }

  useEffect(() => {
    didRenderInBrowserOnce = true;
  }, []);

  return <></>;
}
