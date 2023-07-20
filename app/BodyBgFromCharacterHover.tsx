'use client';
import { useContext } from 'react';
import { CharacterCountContext } from './CharacterCountContext';

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
 * @param progress total progress in hovering characters on the page
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

export function BodyBgFromCharacterHover() {
  const { percentHovered } = useContext(CharacterCountContext);

  const { color1, color2, percentageMix } = getProgressColorInfo(
    percentHovered,
    gradientStops
  );

  // Here we style the body background instead of say, a div, because the
  // background color will be preserved even when the user scrolls outside the
  // page
  // TODO: Fix for old versions of Safari
  document.body.style.backgroundColor = `color-mix(in oklab, ${color1}, ${color2} ${percentageMix}%)`;

  return <></>;
}