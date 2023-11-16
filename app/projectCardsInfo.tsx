import JourneyFinderSvg, {
  SVGRComponent,
} from './projectCardSvgs/1_JourneyFinder_Default.svg';
import JourneyFinderSvgHighlight from './projectCardSvgs/1_JourneyFinder_Hover.svg';
import JourneyFinderSvgOutline from './projectCardSvgs/1_JourneyFinder_Outline.svg';
import JourneyFinderSvgGuide from './projectCardSvgs/1_JourneyFinder_Guide.svg';
import VijksPt1Svg from './projectCardSvgs/2_Vijks_Pt1_Default.svg';
import VijksPt1SvgHighlight from './projectCardSvgs/2_Vijks_Pt1_Hover.svg';
import VijksPt1SvgOutline from './projectCardSvgs/2_Vijks_Pt1_Outline.svg';
import VijksPt1SvgGuide from './projectCardSvgs/2_Vijks_Pt1_Guide.svg';
import VijksPt2Svg from './projectCardSvgs/2_Vijks_Pt2_Default.svg';
import VijksPt2SvgHighlight from './projectCardSvgs/2_Vijks_Pt2_Hover.svg';
import VijksPt2SvgOutline from './projectCardSvgs/2_Vijks_Pt2_Outline.svg';
import VijksPt2SvgGuide from './projectCardSvgs/2_Vijks_Pt2_Guide.svg';
import BrandingSvg from './projectCardSvgs/3_Branding_Default.svg';
import BrandingSvgHighlight from './projectCardSvgs/3_Branding_Hover.svg';
import BrandingSvgOutline from './projectCardSvgs/3_Branding_Outline.svg';
import BrandingSvgGuide from './projectCardSvgs/3_Branding_Guide.svg';
// Reuse Outline for Nasa SVG
// import NasaSvg from './projectCardSvgs/4_Nasa_Default.svg';
import NasaSvgHighlight from './projectCardSvgs/4_Nasa_Hover.svg';
import NasaSvgOutline from './projectCardSvgs/4_Nasa_Outline.svg';
import NasaSvgGuide from './projectCardSvgs/4_Nasa_Guide.svg';
import InteractivesPt1Svg from './projectCardSvgs/5_Interactives_Pt1_Default.svg';
import InteractivesPt1SvgHighlight from './projectCardSvgs/5_Interactives_Pt1_Hover.svg';
import InteractivesPt1SvgOutline from './projectCardSvgs/5_Interactives_Pt1_Outline.svg';
import InteractivesPt1SvgGuide from './projectCardSvgs/5_Interactives_Pt1_Guide.svg';
import InteractivesPt2Svg from './projectCardSvgs/5_Interactives_Pt2_Default.svg';
import InteractivesPt2SvgHighlight from './projectCardSvgs/5_Interactives_Pt2_Hover.svg';
import InteractivesPt2SvgOutline from './projectCardSvgs/5_Interactives_Pt2_Outline.svg';
import InteractivesPt2SvgGuide from './projectCardSvgs/5_Interactives_Pt2_Guide.svg';
import VisualStoriesSvg from './projectCardSvgs/6_VisualStories_Default.svg';
import VisualStoriesSvgHighlight from './projectCardSvgs/6_VisualStories_Hover.svg';
import VisualStoriesSvgOutline from './projectCardSvgs/6_VisualStories_Outline.svg';
import VisualStoriesSvgGuide from './projectCardSvgs/6_VisualStories_Guide.svg';
import { WrittenProject } from './[project]/projectContents';

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
  projectLinkId: WrittenProject;
};
export const projectCardsInfo = {
  'journey-finder': [
    {
      '769px': [193, 97, 0],
      '1099px': [358, 97, 0],
      '1100px': [595, -60, 0],
      '1800px': [980, 115, 0],
      svg: JourneyFinderSvg,
      svgHighlight: JourneyFinderSvgHighlight,
      svgOutline: JourneyFinderSvgOutline,
      svgGuide: JourneyFinderSvgGuide,
      projectLinkId: 'journey-finder',
    },
  ],
  vijks: [
    {
      '769px': [453, 205, 34],
      '1099px': [618, 205, 34],
      '1100px': [740, 228, 0],
      '1800px': [1330, 197, 42],
      svg: VijksPt1Svg,
      svgHighlight: VijksPt1SvgHighlight,
      svgOutline: VijksPt1SvgOutline,
      svgGuide: VijksPt1SvgGuide,
      projectLinkId: 'vijks',
    },
    {
      '769px': [560, 64, 0],
      '1099px': [725, 64, 0],
      '1100px': [725, -340, 0],
      '1800px': [1380, 60, 0],
      svg: VijksPt2Svg,
      svgHighlight: VijksPt2SvgHighlight,
      svgOutline: VijksPt2SvgOutline,
      svgGuide: VijksPt2SvgGuide,
      projectLinkId: 'vijks',
    },
  ],
  branding: [
    {
      '769px': [-187, 538, -4],
      '1099px': [-22, 538, -4],
      '1100px': [405, 100, 15],
      '1800px': [575, 235, 0],
      svg: BrandingSvg,
      svgHighlight: BrandingSvgHighlight,
      svgOutline: BrandingSvgOutline,
      svgGuide: BrandingSvgGuide,
      projectLinkId: 'vijks',
    },
  ],
  nasa: [
    {
      '769px': [192, 523, 6],
      '1099px': [357, 523, 6],
      '1100px': [564, 644, -2],
      '1800px': [1075, 535, 0],
      svg: NasaSvgOutline, // Reuse Outline for Nasa SVG
      svgHighlight: NasaSvgHighlight,
      svgOutline: NasaSvgOutline,
      svgGuide: NasaSvgGuide,
      projectLinkId: 'nasa',
    },
  ],
  interactives: [
    {
      '769px': [-5, 427, 10],
      '1099px': [160, 427, 10],
      '1100px': [646, 662, -8],
      '1800px': [637, 745, 10],
      svg: InteractivesPt1Svg,
      svgHighlight: InteractivesPt1SvgHighlight,
      svgOutline: InteractivesPt1SvgOutline,
      svgGuide: InteractivesPt1SvgGuide,
      projectLinkId: 'interactives',
    },
    {
      '769px': [-22, 566, -5],
      '1099px': [143, 566, -5],
      '1100px': [368, 994, 97],
      '1800px': [679, 877, -10],
      svg: InteractivesPt2Svg,
      svgHighlight: InteractivesPt2SvgHighlight,
      svgOutline: InteractivesPt2SvgOutline,
      svgGuide: InteractivesPt2SvgGuide,
      projectLinkId: 'interactives',
    },
  ],
  'visual-stories': [
    {
      '769px': [-81, -24, 22],
      '1099px': [84, -24, 22],
      '1100px': [366, -182, -8],
      '1800px': [641, 26, 30],
      svg: VisualStoriesSvg,
      svgHighlight: VisualStoriesSvgHighlight,
      svgOutline: VisualStoriesSvgOutline,
      svgGuide: VisualStoriesSvgGuide,
      projectLinkId: 'visual-stories',
    },
  ],
} satisfies Record<string, ProjectIllustration[]>;
