/* eslint-disable unicorn/number-literal-case */
/* eslint-disable unicorn/prefer-string-replace-all */
import { useEffect, useState } from 'react';
import { usePercentCharactersFlipped } from './usePercentCharactersFlipped';
import { useIsPointerCoarse } from '@/hooks/useIsPointerCoarse';

type ColorHex = `#${string}`;
interface ColorMix {
  color1: ColorHex;
  color2: ColorHex;
  percentageMix: number;
}

const touchGradientStops: ColorHex[] = [
  '#FFFFFF',
  '#FFE5EC',
  '#FFD600',
  '#ADFF00',
  '#00FF85',
];

// On desktop, revealing letters one by one takes time, so to avoid users
// getting bored before they see cool colors, we add more stops
const desktopGradientStops: ColorHex[] = [
  '#FFFFFF',
  '#FFD600',
  '#FAFF00',
  '#ADFF00',
  '#00FF85',
  '#3FE8FF',
  '#85BDFF',
  '#A7CAFF',
  '#CF9EFF',
  '#FF005C',
  '#FF8ED8',
  '#FFE5EC',
];

// For older browsers that don't support color-mix, we linearly interpolate
// https://gist.github.com/rosszurowski/67f04465c424a9bc0dae
function linearlyInterpolateHexColor(a: string, b: string, amount: number) {
  const ah = Number.parseInt(a.replaceAll(/#/g, ''), 16),
    ar = ah >> 16,
    ag = (ah >> 8) & 0xff,
    ab = ah & 0xff,
    bh = Number.parseInt(b.replaceAll(/#/g, ''), 16),
    br = bh >> 16,
    bg = (bh >> 8) & 0xff,
    bb = bh & 0xff,
    rr = ar + amount * (br - ar),
    rg = ag + amount * (bg - ag),
    rb = ab + amount * (bb - ab);

  return (
    '#' +
    Math.trunc((1 << 24) + (rr << 16) + (rg << 8) + rb)
      .toString(16)
      .slice(1)
  );
}

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

export function useHomeBgColor() {
  const [supportsColorMix, setSupportsColorMix] = useState(true);

  const isPointerCoarse = useIsPointerCoarse();
  const percentFlipped = usePercentCharactersFlipped();

  const { color1, color2, percentageMix } = getProgressColorInfo(
    percentFlipped,
    isPointerCoarse ? touchGradientStops : desktopGradientStops
  );

  useEffect(() => {
    if (!CSS.supports('background-color: color-mix(in oklab, red, blue 50%)')) {
      setSupportsColorMix(false);
    }
  }, []);

  if (!supportsColorMix) {
    return `${linearlyInterpolateHexColor(
      color1,
      color2,
      percentageMix / 100
    )}`;
  }

  return `color-mix(in oklab, ${color1}, ${color2} ${percentageMix}%)`;
}
