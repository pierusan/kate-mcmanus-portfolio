/* eslint-disable react/jsx-key */
import { type ComponentProps, type ReactElement } from 'react';
import { ProjectImage } from './ProjectImage';

export type ProjectSection = {
  heading: string;
  paragraphs: ReactElement[];
};

export type ProjectSubtitle = {
  company: string;
  type: string;
  date: string;
};

type ProjectContents = {
  title: string;
  subtitle: ProjectSubtitle;
  leftColumn: ProjectSection[];
  middleColumn: ProjectSection[];
  rightColumn: ProjectSection[];
  imageHero: ComponentProps<typeof ProjectImage> & {
    imageType: 'full';
  };
  imagesLeftColumn: (ComponentProps<typeof ProjectImage> & {
    imageType: 'right' | 'full';
  })[];
  imagesMiddleColumn: (ComponentProps<typeof ProjectImage> & {
    imageType: 'sideA' | 'sideB' | 'full';
  })[];
  imagesRightColumn: (ComponentProps<typeof ProjectImage> & {
    imageType: 'left' | 'full';
  })[];
};

export const projectContents = {
  vijks: {
    title: 'Visualizing the Rijksmuseum',
    subtitle: {
      company: 'Class Project',
      type: 'Data Viz, Code',
      date: '2017',
    },
    leftColumn: [
      {
        heading: 'Overview',
        paragraphs: [
          <p key="vijks-left-1">
            In a Data Visualization course at Carnegie Mellon, for the final
            project, we were to find and visualize a dataset using d3.js. Our
            team was interested in the shift in how people were experiencing art
            as new initiatives spearheaded its digitization. We were inspired by
            innovative cultural projects, like those of Google&apos;s Arts &
            Culture. So, we chose to use The Rijksmuseum&apos;s newly released
            API, giving us full digital access to its collection in Amsterdam.
          </p>,
          <p key="vijks-left-2">
            We submitted our project to the IEEE Visualization Conference, an
            annual conference on information visualization. We were{' '}
            <b>
              selected to share our work in a presentation, poster, and public
              art installation
            </b>{' '}
            for the Vis Arts Program, alongside famous information designers
            such as Giorgia Lupi.
          </p>,
        ],
      },
      {
        heading: 'Goal',
        paragraphs: [
          <p key="vijks-left-3">
            <b>
              How can users experience the Rijksmuseum&apos;s art remotely in
              new ways that are not available through a museum visit?
            </b>{' '}
            Our project encompassed 4 virtual “exhibits,” or attempts to answer
            that question.
          </p>,
        ],
      },
      {
        heading: 'Team',
        paragraphs: [
          <p key="vijks-left-4">
            <b>Pierre Amelot, John Hwong</b>
          </p>,
        ],
      },
    ],
    middleColumn: [
      {
        heading: 'Process',
        paragraphs: [
          <p key="vijks-middle-1">
            To acquaint ourselves with the data, we created an internal
            interface to query the API, present the artworks, and filter by
            their attributes. Equipped with this reference, we brainstormed
            visualizations, usually by sketching on paper. We roughly prototyped
            our more compelling ideas within the interface, later refining the
            best of them.
          </p>,
        ],
      },
      {
        heading: 'Exhibit I',
        paragraphs: [
          <p key="vijks-middle-2">
            Plotting all of the 4,000 paintings on a timeline, ordered by
            creation date, gave a feel for the Rijksmuseum&apos;s identity. It
            revealed a high concentration of art spanning the 17th century, when
            The Netherlands experienced The Dutch Golden Age. At this time,
            Dutch trade, science, military, and art were among the most
            acclaimed in the world. The period during The Hague School
            (1860-1890) had denser coverage, too. We also highlighted if a
            painting was currently on display or in storage. This “exhibit,” a
            simple graph, illustrates that{' '}
            <b>
              visiting a museum can just scratch the surface of its full
              collection.
            </b>
          </p>,
        ],
      },
      {
        heading: 'Exhibit II',
        paragraphs: [
          <p key="vijks-middle-3">
            Next, we explored new, delightful ways for users to traverse a
            collection. Why not through the characters featured in the
            paintings?{' '}
            <b>
              Using the format established by social media, this amusing
              “exhibit” granted users the ability to engage through a web of
              personalities.
            </b>{' '}
            We ran facial recognition APIs on the paintings, testing a few
            options before landing on an option: Kairos. It also estimated other
            characteristics, which we hoped would playfully augment the dataset
            further.
          </p>,
        ],
      },
    ],
    rightColumn: [
      {
        heading: 'Exhibit III',
        paragraphs: [
          <p key="vijks-right-1">
            We were interested in the use of color in paintings from The Hague
            School. We read that over time, the artists transitioned their
            palettes from gloomy and gray to lighter and brighter, under the
            influence of Impressionism. To dig into this claim, we pulled a
            representative color sample of pixels from each painting. We sorted
            them by hue, saturation, value, and combinations of each, finding
            hue to be the clearest.{' '}
            <b>
              Once every painting was summarized into a strip of its colors, we
              ordered the strips by creation date.
            </b>{' '}
            (The resulting timeline did not support the claim, but a larger
            dataset is needed to verify.) To help users to get a feel for the
            physical scale of the works, we added another dimension. Small
            multiples showed each artist&apos;s preference in terms of their
            chosen canvas sizes. Hover interactions linked the visualizations
            together.
          </p>,
        ],
      },
      {
        heading: 'Exhibit IV',
        paragraphs: [
          <p key="vijks-right-2">
            For the final “exhibit,” we introduced gamification, focusing on the
            paintings that the Rijksmuseum designated “masterpieces” in their
            API.{' '}
            <b>
              As many of the paintings are well-known, we wanted to encourage
              users to guess the work&apos;s title and artist as it&apos;s
              slowly revealed.
            </b>{' '}
            Colorful pixels from a piece gradually make their way to their
            respective places on the final “canvas.” The pixels flow along the
            canals of a vectorized map of Amsterdam, to give a sense of place.
          </p>,
        ],
      },
    ],
    imageHero: { name: 'project_vijks_14_full_strip_many', imageType: 'full' },
    imagesLeftColumn: [
      { name: 'project_vijks_02_right_ieee', imageType: 'right' },
      { name: 'project_vijks_03_full_ieee', imageType: 'full' },
    ],
    imagesMiddleColumn: [
      {
        name: 'project_vijks_04_sideA_dripping',
        imageType: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_vijks_04_sideB_dripping',
        imageType: 'sideB',
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_05_full_query', imageType: 'full' },
      {
        name: 'project_vijks_06_sideA_sketch',
        imageType: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_vijks_06_sideB_draft',
        imageType: 'sideB',
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_07_full_beyond', imageType: 'full' },
      {
        name: 'project_vijks_08_sideA_faces',
        imageType: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_vijks_08_sideB_faces',
        imageType: 'sideB',
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_09_full_recognition', imageType: 'full' },
      { name: 'project_vijks_10_full_kairos', imageType: 'full' },
    ],
    imagesRightColumn: [
      {
        name: 'project_vijks_12_left_vg_pixels',
        imageType: 'left',
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_13_full_strip_one', imageType: 'full' },
      { name: 'project_vijks_14_full_strip_many', imageType: 'full' },
      { name: 'project_vijks_15_left_dim_sketch', imageType: 'left' },
      { name: 'project_vijks_16_full_dim_opacity', imageType: 'full' },
      { name: 'project_vijks_17_full_dim_final', imageType: 'full' },
      { name: 'project_vijks_18_full_dim_final_multiples', imageType: 'full' },
      {
        name: 'project_vijks_20_full_masterpieces_map',
        imageType: 'full',
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_21_full_masterpieces_focus', imageType: 'full' },
    ],
  },
} satisfies Record<string, ProjectContents>;

export type WrittenProject = keyof typeof projectContents;
