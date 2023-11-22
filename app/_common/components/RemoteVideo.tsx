import { type VideoHTMLAttributes } from 'react';
import remoteMedia from '../remoteMedia.json';

export const remoteVideos = remoteMedia.videos;

export type RemoteVideoName = keyof typeof remoteVideos;

export const remoteVideoCaptions = {
  project_interactives_05_full_cmo_visuals:
    'Additional visuals for our interactive about CMOs that continue with the anonymity theme',
  project_interactives_09_full_story_yt:
    'In this author-driven “scrolly” design, as the user scrolls, textboxes narrate the animated charts.',
  project_interactives_10_full_story_dw:
    "In the Digital Wellbeing interactive, the data is introduced with a summary of the researchers' findings. Next, users can explore the data for themselves.",
  project_interactives_14_full_3phones_dw:
    "Each video illustrates different aspects of the Digital Wellbeing interactive's mobile design. The first video displays the introduction of the data. The second demonstrates the handling of text overflow for “Activities” with many characters. The third shows how users explore the data by scrolling the “Activities.” (On desktop, this interaction works with hover.)",
  project_interactives_15_full_paragraph:
    'On desktop, users reveal occluded text and related quotes by hovering. On mobile, users must tap on the occluded text, swipe on the pop-up to reveal more quotes, and tap outside of the pop-up to return to the paragraph.',
  project_interactives_18_full_intro:
    'The introductory animation for “What board members say about the CMO—off the record” on desktop and mobile. You can see how the final result evolved beyond the original storyboards above.',
  project_interactives_19_left_quiver:
    'To address the issue of users not understanding that the occluded text elements in the paragraph are interactable, we added a quiver animation. The animation cycles until a user interacts.',
  project_journeyfinder_07_full:
    "Each filter chip and sort drop-down required custom design decisions. These decisions were straightforward once we defined and categorized the various data attributes. Module interactions were informed by Google's Material Library and live tool, Google Flights.",
  project_journeyfinder_10_left_searchA:
    'When designing the search bar, we incorporated additional functionality beyond standard global search. Users can navigate the customer journey data through browsing industry verticals, industry vertical subcategories, or further subcategories. Users can also submit a standard search query (non-scoped), as seen here with the term “travel.”',
  project_journeyfinder_11_left_searchB:
    'Users can click the breadcrumbs resting above the search bar to navigate across the different tiers of the data hierarchy. These breadcrumbs address 2 recommendations from Nielsen Norman Group: explicitly state where the user is in the hierarchy at the top of the results and enable 1-click access to move between tiers.',
  project_vijks_01_full_all:
    'These short videos feature each of our 4 virtual “exhibits,” all available on an interactive website.',
  project_vijks_11_exhibit_faces: 'Exhibit II: Faces of the Rijksmuseum',
  project_vijks_19_exhibit_hague: 'Exhibit III: The Hague School Paintings',
  project_vijks_22_exhibit_masterpieces: 'Exhibit IV: Masterpieces',
  project_vs_02_right_covers:
    'Cover pages that I designed for various Visual Stories on desktop',
  project_vs_07_full_rise:
    'Selected pages from a Visual Story that I designed: “What Makes Content Good?”',
  project_vs_09_full_ads:
    'Selected pages from a Visual Story that I designed: “Are Ads Inclusive Yet? Unfortunately Not.”',
  project_vs_10_full_micro:
    'Selected pages from a Visual Story that I designed: “Could Micro-Influencers Help Counter Vaccine Hesitancy?”',
  project_vs_11_full_connected:
    'Selected pages from a Visual Story that I designed: “Connected: What Do We Mean When We Say TV?”',
  project_vs_14_left_desktop_mobile:
    "As “What Makes Content Good?” was published after we introduced Newsroom, it uses Newsroom's UI. Visual Stories published using Newsroom are simplified to a mobile-only format, even when viewed on larger devices.",
} satisfies Record<RemoteVideoName, string>;

export function RemoteVideo({
  name,
  style,
  ...rest
}: { name: RemoteVideoName } & Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  'src' | 'width' | 'height'
>) {
  const { src, width, height } = remoteVideos[name];

  return (
    <video
      src={src}
      width={width}
      height={height}
      // Typescript 'preflight' reset rules (height:auto) break the aspect ratio
      // automatically computed by the browser. height:unset doesn't reset it so
      // we apply the aspect ratio manually here. Monitor this thread for
      // updates: https://github.com/tailwindlabs/tailwindcss/issues/506
      style={{ aspectRatio: `${width}/${height}`, ...style }}
      {...rest}
    />
  );
}
