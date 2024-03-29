import Image from 'next/image';
import { type ComponentProps } from 'react';
import remoteMedia from '../remoteMedia.json';

const remoteImages = remoteMedia.images;

type NextImageProperties = ComponentProps<typeof Image>;
type AnyRemoteImageName = keyof typeof remoteImages;

export const remoteImageAltTexts = {
  nasa_sky_image: 'A sky full of clouds',
  project_brand_01_right_hero: "Excerpts from Beavr's Style Guide deck",
  project_brand_03_right_figjam:
    'The Figjam from our original brainstorming session',
  project_brand_07_right_color_photos:
    "Photography choices were informed by Beavr's color palette",
  project_brand_09_right_business_cards: 'Business card designs',
  project_brand_10_right_figma_type:
    'The typography section of the Figma deliverable corresponds to the rules laid out in the Style Guide. Beavr’s font set and color palette are setup as local styles, so designers can easily create consistent content.',
  project_brand_11_sideA_deck:
    "A colorful deck template where Beavr's brand identity is applied",
  project_brand_11_sideB_deck:
    "A more simple deck template, using only Beavr's primary color palette",
  project_brand_12_left_book:
    'The book cover design of the novel Wrong Material, by Casey Fictum',
  project_interactives_01_full_hero:
    'Landing pages from 4 different interactive articles and tools',
  project_interactives_02_right_charts:
    'Exploratory visualizations for the interactive “What the World Watched in a Day”',
  project_interactives_03_right_sketches:
    'Brainstorming visualizations for the interactive “What the World Watched in a Day” ',
  project_interactives_04_right_cmo_hero:
    'When creating visuals for the interactive ”What board members say about the CMO—off the record,” we leaned into the theme of anonymity.',
  project_interactives_06_right_yt_red:
    'For an early iteration of a YouTube interactive (“What the World Watched in a Day”), we leaned into their brand colors. We later moved away from this visual design due to problems with accessibility.',
  project_interactives_07_right_rising_rrc:
    'An unused visual I created as an option for the hero of Rising Retail Categories, an interactive tool by Think with Google. (Early in the pandemic, we temporarily released this tool to help retailers understand trending consumer products in Google Search.)',
  project_interactives_08_sideA_storyboards:
    'Copy outlined frame by frame for “What the World Watched in a Day”',
  project_interactives_08_sideB_storyboards:
    'Charts, corresponding to the copy outline, laid out frame by frame for “What the World Watched in a Day”',
  project_interactives_11_full_yt_responsive_1:
    "Font size, and therefore legibility, decreases on smaller screens. To counter this, the text's background is white, instead of red, on mobile devices.",
  project_interactives_12_full_yt_responsive_2:
    "On smaller screens, textboxes overlap with charts to save space. As users control the textbox's position with scroll, they can always remove any obstruction to an area that interests them.",
  project_interactives_13_full_yt_responsive_3:
    'While the two designs are largely identical, larger screens allowed for the addition of supplementary details.',
  project_interactives_16_left_frames_desktop:
    "For the interactive about CMOs, I used this frame-by-frame storyboard of the introductory animation to collaborate with the project's developer.",
  project_interactives_17_full_frames_mobile:
    'Like the previous image, this is a storyboard for the CMO interactive, but it features mobile designs.',
  project_journeyfinder_01_right_screenA:
    'Users enter JourneyFinder here. On the landing page, users begin their search for customer journeys using the search bar.',
  project_journeyfinder_02_right_screenB:
    'This page displays customer journeys for users to browse. Using filters and sorts, users can refine the search results to find customer journeys that are relevant to them.',
  project_journeyfinder_03_right_screenC:
    "Users are taken here when they select a customer journey from the search results. This page summarizes the selected customer journey's key metrics and lists all of its touchpoints. Using filters and sorts, users can find the touchpoints that are relevant to them. They can also select specific touchpoints to export a customer journey visualization to a Google Slide.",
  project_journeyfinder_04_right_cuj:
    'We defined our users, their critical goals, and the set of tasks to achieve those goals.',
  project_journeyfinder_05_sideA_chips:
    'Attributes supporting multiple choices called for checkboxes.',
  project_journeyfinder_05_sideB_chips:
    'Mutually exclusive attributes translated to radio buttons.',
  project_journeyfinder_06_sideA_tooltips:
    'Informative subhead copy was supplied by the attribute descriptions we wrote in a shared spreadsheet.',
  project_journeyfinder_06_sideB_tooltips:
    'Tooltip copy was supplied by the attribute descriptions we wrote in a shared spreadsheet',
  project_journeyfinder_08_full_results:
    'The original design for the customer journey search results page. The “Purchase Sites” filter was removed from the design for the initial release due to substantial technical overhead and time constraints.',
  project_journeyfinder_09_left_hierarchy:
    'The customer journey data was organized by industry vertical. These industry verticals broke down into vertical subcategories, and again into further subcategories.',
  project_journeyfinder_12_full_quote:
    'An email from a happy user on a Google Analytical Team',
  project_nasa_01_full_hero:
    'Orion Spacecraft and Space Launch System (SLS) lift off from a Launch Complex at Kennedy Space Center on Nov. 16, 2022. (Photo by Joel Kowsky, nasa.gov.)',
  project_nasa_02_full_parts:
    'This diagram shows the core rocket parts that form Artemis I. The first integrated flight of SLS and Orion, it stands taller than the Statue of Liberty. (nasa.gov.)',
  project_nasa_03_right_ksc:
    'Rocket parts are assembled in the Vehicle Assembly Building (VAB) before launch. (Visit to Kennedy Space Center, Merritt Island, Florida)',
  project_nasa_04_right_jsc:
    "Orion Spacecraft, formerly referred to as Orion Multi-Purpose Crew Vehicle, is the partially reusable crewed spacecraft used in NASA's Artemis program. (Visit to Johnson Space Center, Houston, Texas)",
  project_nasa_05_right_msfc:
    'On display at the U.S. Space & Rocket Center, an External Tank (ET) test article and 2 Solid Rocket Booster (SRB) models form a complete Space Shuttle stack, like those used during Shuttle missions. (Visit to Marshall Space Flight Center, Huntsville, Alabama)',
  project_nasa_06_sideA_diagrams:
    'After each contextual interview with subject-matter experts, we sketched workflow diagrams to document our understanding of the existing process.',
  project_nasa_06_sideB_diagrams:
    'More workflow diagrams sketched after our sessions',
  project_nasa_07_full_diagram: 'The first of 2 consolidated workflow models',
  project_nasa_08_full_consolidated:
    'We integrated all of our drawings into a consolidated workflow model. Pain points are listed in red.',
  project_nasa_09_sideA_affinity:
    'The affinity diagram categorized our notes from contextual interviews. (1 of 2 images)',
  project_nasa_09_sideB_affinity:
    'The affinity diagram revealed more meaningful, human patterns and themes. (2 of 2 images)',
  project_nasa_10_sideA_insights:
    "A list of 6 user insights, for example: #1 Elements don't know what the LSAIB is or why it is important.",
  project_nasa_10_sideB_recs:
    'A list of 6 design recommendations, for example: #1 Make it as easy as possible for elements to complete their part of the process.',
  project_nasa_11_left_risks:
    "MAS's ability to facilitate complex processes and robust versioning and permission capabilities led us to hypothesize that it would be a strong platform on which to build LSAIB. To ensure our decisions were user-driven, we identified our assumptions and rated them according to risk level. Applying Lean UX, we configured prototypes in MAS to quickly test our highest risk assumptions with users. We iteratively refined designs based on feedback and findings.",
  project_nasa_12_left_prototype1:
    'During sessions with Elements, we usability tested designs to enter and associate data.',
  project_nasa_13_left_prototype2:
    'We were also concerned that MAS reports were not a good fit, so we usability tested and iterated different ways to views reports.',
  project_nasa_14_left_prototype3:
    'We made a variety of email summary designs and asked users to pick their favorite. We tested the winner during a live review cycle.',
  project_nasa_15_full_draft:
    'Drafting the proposed LSAIB workflow, facilitated by the new LSAIB tool.',
  project_nasa_16_left_workflow1:
    'Here is the first page of the new LSAIB workflow. This informational document was emailed to users on release, distributed as a hard-copy and explained during training sessions, and available in the “Help” section of the LSAIB tool. (Page 1 of 5)',
  project_nasa_17_left_workflow2: 'The new LSAIB workflow (Page 2 of 5)',
  project_nasa_18_left_workflow3: 'The new LSAIB workflow, (Page 3 of 5)',
  project_nasa_19_left_workflow4: 'The new LSAIB workflow, (Page 4 of 5)',
  project_nasa_20_left_workflow5: 'The new LSAIB workflow, (Page 5 of 5)',
  project_nasa_21_left_me:
    'Me at Kennedy Space Center in the Vehicle Assembly Building :)',
  project_vs_01_full_tiled:
    'A collection of colorful, varied pages from different Visual Stories laid out in a patchwork formation',
  project_vs_03_right_og_board:
    'Visual Stories were originally available through a custom Think with Google product page, which we designed as a masonry-style board.',
  project_vs_04_full_vs_twg:
    'We later integrated Visual Stories into the core Think with Google platform as a content type, alongside standard articles, videos, and more.',
  project_vs_05_sideA_textpos:
    'To speed up the launches of Visual Stories, we defined a set of options for the design of each page. For example, we outlined 9 core textbox options for screen widths over 768px.',
  project_vs_05_sideB_textpos:
    'For screen widths of 768px or less, for a given page, designers could select between three textbox positions.',
  project_vs_06_sideA_responsive:
    'We designed responsive templates to apply to different Visual Story pages. In this example, the video asset fits to the height of the screen and stays centered on both mobile and desktop.',
  project_vs_06_sideB_responsive:
    'In this responsive template example, on larger screens, the image asset fits to the height of the screen and sticks to the right side. On smaller screens, the image fits to the width of the screen and sticks to the top.',
  project_vs_08_full_auto:
    'Selected pages from a Visual Story that I designed: “Auto, Accelerated”',
  project_vs_12_left_newsroom:
    'Newsroom, a WYSIWYG editor, facilitated the creation of Visual Stories by individuals with little to no design experience. This internal tool allowed the product to scale.',
  project_vs_13_left_ui:
    'In the Style Guide, we outline the UI components inherent to all Visual Stories created in Newsroom at that time.',
  project_vs_15_full_styleguide:
    'Excerpts from the Visual Stories Style Guide, created to uphold quality standards',
  project_vs_16_left_templates:
    'To help non-designers get started, we created templates in Newsroom where creators could drop in their custom images and text.',
  project_vijks_02_right_ieee:
    "Entrance to Vis Arts Program's public art installations, IEEE Visualization Conference",
  project_vijks_03_full_ieee:
    'Presentation & poster, IEEE Visualization Conference',
  project_vijks_04_sideA_dripping:
    'Paintings displayed roughly in our internal interface from a Rijksmuseum API query (1 of 2 images)',
  project_vijks_04_sideB_dripping:
    'Paintings displayed roughly in our internal interface from a Rijksmuseum API query (2 of 2 images)',
  project_vijks_05_full_query:
    "Internal interface to query The Rijksmuseum's API",
  project_vijks_06_sideA_sketch:
    'An early sketch of 2 bar charts where Rijksmuseum paintings are ordered by creation date. One bar chart features the paintings in storage and the other features the paintings on display.',
  project_vijks_06_sideB_draft:
    "An early iteration of bar charts featuring data from the Rijksmuseum's API without styling.",
  project_vijks_07_full_beyond:
    "Exhibit I: The Rijksmuseum's paintings ordered by creation date",
  project_vijks_08_sideA_faces:
    'Mosaic of painted, expressive faces from the Rijksmuseum (1 of 2 images)',
  project_vijks_08_sideB_faces:
    'Mosaic of painted, expressive faces from the Rijksmuseum (2 of 2 images)',
  project_vijks_09_full_recognition:
    'Evaluating the efficacy of different facial recognition APIs',
  project_vijks_10_full_kairos:
    'Using Kairos, a facial recognition API, to augment our dataset with facial data',
  project_vijks_12_left_vg_pixels:
    "Viewing hex color codes in a browser console, pulled from pixels in a self-portrait by Vincent van Gogh, part of the Rijksmuseum's collection",
  project_vijks_13_full_strip_one:
    'To create a representative color sample of In the Month of July (1889) by Paul Gabriël, we pulled a set of pixels from evenly spaced intervals. Next, we sorted the array of pixels by hue.',
  project_vijks_14_full_strip_many:
    "Each painting from the Rijksmuseum's Hague School collection is summarized as a strip of its colors. The strips are ordered by creation date. See Gabriël's In the Month of July highlighted in pink on hover.",
  project_vijks_15_left_dim_sketch:
    'Sketches brainstorming the presentation of canvas size of paintings from The Hague School',
  project_vijks_16_full_dim_opacity:
    'For the initial prototyping of canvas size, we aligned every painting by their bottom left corner and set their opacities to 5%.',
  project_vijks_17_full_dim_final:
    "We later refined the visualization to include interaction. Gabriël's In the Month of July is revealed on hover.",
  project_vijks_18_full_dim_final_multiples:
    "Small multiples show the size of the canvases that each artist chose to work with. See Gabriël's In the Month of July highlighted in pink on hover.",
  project_vijks_20_full_masterpieces_map:
    'A screenshot of Amsterdam from Google Maps',
  project_vijks_21_full_masterpieces_focus:
    'Snapshots from our final exhibit, specifically the gradual reveal of The Merry Drinker (1628) by Frans Hals',
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
