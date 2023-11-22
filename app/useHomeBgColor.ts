import { useIsPointerCoarse } from './_common/hooks/useIsPointerCoarse';
import { usePercentCharactersFlipped } from './usePercentCharactersFlipped';

type ColorHex = `#${string}`;
interface ColorMix {
  color1: ColorHex;
  color2: ColorHex;
  percentageMix: number;
}

const touchGradientStops: ColorHex[] = [
  '#FFF',
  '#FFE5EC',
  '#FFD600',
  '#ADFF00',
  '#00FF85',
];

// On desktop, revealing letters one by one takes time, so to avoid users
// getting bored before they see cool colors, we add more stops
const desktopGradientStops: ColorHex[] = [
  '#FFF',
  '#FFE5EC',
  '#00FF85',
  '#ADFF00',
  '#A7CAFF',
  '#CF9EFF',
  '#FFD600',
  '#FF8ED8',
  '#FF005C',
  '#3FE8FF',
  '#85BDFF',
  '#FAFF00',
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

export function useHomeBgColor() {
  const isPointerCoarse = useIsPointerCoarse();
  const percentFlipped = usePercentCharactersFlipped();

  const { color1, color2, percentageMix } = getProgressColorInfo(
    percentFlipped,
    isPointerCoarse ? touchGradientStops : desktopGradientStops
  );

  return `color-mix(in oklab, ${color1}, ${color2} ${percentageMix}%)`;
}
