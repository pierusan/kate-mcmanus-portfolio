import { SVGRComponent } from './projectCardSvgs/1_JourneyFinder_Default.svg';

type X = number;
type Y = number;
type Rotation = number;
type Transform = readonly [X, Y, Rotation];

type ProjectIllustration = {
  '769px': Transform;
  '1099px': Transform;
  '1100px': Transform;
  '1800px': Transform;
  svg: SVGRComponent;
  svgHighlight: SVGRComponent;
  svgOutline: SVGRComponent;
  svgGuide: SVGRComponent;
  linkRef: string;
};
export const projectCardsInfo = {} as const satisfies Record<
  string,
  readonly ProjectIllustration[]
>;
