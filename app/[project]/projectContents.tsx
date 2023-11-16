/* eslint-disable react/jsx-key */
import { type ComponentProps, type ReactElement } from 'react';
import { ProjectImage } from './ProjectImage';
import { ProjectVideo } from './ProjectVideo';

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
  mediumHero: ComponentProps<typeof ProjectImage | typeof ProjectVideo> & {
    alignment: 'right' | 'full';
  };
  mediaLeftColumn: (ComponentProps<
    typeof ProjectImage | typeof ProjectVideo
  > & {
    alignment: 'right' | 'full';
  })[];
  mediaMiddleColumn: (ComponentProps<
    typeof ProjectImage | typeof ProjectVideo
  > & {
    alignment: 'sideA' | 'sideB' | 'full';
  })[];
  mediaRightColumn: (ComponentProps<
    typeof ProjectImage | typeof ProjectVideo
  > & {
    alignment: 'left' | 'full';
  })[];
};

export const projectContents = {
  interactives: {
    title: 'Interactive Articles',
    subtitle: {
      company: 'Google',
      type: 'UX Design, DataViz',
      date: '2019',
    },
    leftColumn: [
      {
        heading: 'Overview',
        paragraphs: [
          <p key="interactives-left-1">
            Think with Google (TwG), a B2C/B2B consumer insights driven
            marketing group and thought leader, publishes content on marketing
            research and digital trends. TwG&apos;s interactive articles
            received up to 3x more unique page views than their most popular
            standard articles. To build out their platform with more of these
            delightful digital experiences, I was brought on to lead UX Design
            and Data Visualization. Our team ensured{' '}
            <b>responsive, best-in-class storytelling</b>, at times for
            audiences across 50+ countries.{' '}
            <b>
              The interactive articles and tools we produced increased
              engagement rate and time users spent on-site
            </b>
            (4+ minutes vs. 2.3 minute TwG average).
          </p>,
        ],
      },
      {
        heading: 'Early work',
        paragraphs: [
          <p key="interactives-left-2">
            <b>
              I started by familiarizing myself with the data and the story it
              told
            </b>
            . This often entailed combing through spreadsheets and creating
            graphs. This stage was also very collaborative, brainstorming with
            product, copy, visual design, or the researchers who ran the
            studies, during which rough visualizations were a helpful reference.
            We often drafted early ideas on paper.
          </p>,
          <p key="interactives-left-3">
            We also experimented with various <b>visual styles</b>. We were
            guided by the article&apos;s core themes, such as anonymity for a
            piece about CMOs (“What board members say about the CMO—off the
            record”). “What the World Watched in a Day” was a YouTube piece, so
            we leaned into their brand colors: red, black, and white. We later
            moved away from the initial use of a red background due to
            accessibility.
          </p>,
        ],
      },
    ],
    middleColumn: [
      {
        heading: 'Storyboarding',
        paragraphs: [
          <p key="interactives-middle-1">
            <b>
              Creating storyboards helped us lay out core elements, like if the
              piece would be author-driven or user-driven
            </b>
            . For “What the World Watched in a Day,” we had heaps of data. We
            were concerned it could overwhelm users if we expected them to make
            sense of it without guidance. Plus, in our initial investigation, a
            clear story had emerged from the data. This led us to design an
            author-driven experience, where we presented the most interesting
            charts in a “scrolly” design; textboxes narrated charts as they were
            revealed. For our piece on Digital Wellbeing, we opted for a hybrid
            approach. We introduced the graph with a summary of the
            researchers&apos; findings. Directly below it, we opened the graph
            up to the user for exploration through interaction.
          </p>,
        ],
      },
      {
        heading: 'Responsive design',
        paragraphs: [
          <p key="interactives-middle-2">
            Strong UX across devices was foundational.{' '}
            <b>
              With bespoke, complex charts, it was often challenging to fit all
              the information into view on mobile devices
            </b>
            . This was especially true for “What the World Watched in a Day”
            because we used a “scrolly” design. This style allowed us to animate
            elements (e.g. textboxes), into view on scroll. However, it also
            restricted our ability to use scroll as it typically works: to
            reveal more of the page. With a “scrolly,” all page elements must
            fit on one screen.
          </p>,
          <p key="interactives-middle-3">
            We also didn&apos;t want to limit the possibilities available on
            desktop, such as adding detail, hover interactions, etc. The magic
            was in ensuring the translation from mobile to desktop was seamless,
            lovely, and playing to the strengths of the respective device.
          </p>,
        ],
      },
    ],
    rightColumn: [
      {
        heading: 'Implementation',
        paragraphs: [
          <p key="interactives-right-1">
            I always push to meet with developers soon as I have a general idea
            of the design approach in order to receive feedback on feasibility
            and other technical considerations. When elements of the design are
            flexible, it&apos;s helpful to collaborate to determine solutions
            that work best for everyone. For example, in our piece on CMOs,
            I&apos;d only created storyboards for the opening animation. The
            project&apos;s developer, a strong animator, wanted to flesh out the
            transitions himself, and the final animation was stronger for it.
          </p>,
          <p key="interactives-right-2">
            When engineers provide a staging link to view the first draft, this
            often entails simply highlighting discrepancies from the designs.
            However, sometimes interacting with the content revealed unforeseen
            issues. For example, when observing users interact with the initial
            implementation of the CMO piece, we noticed many entirely missed
            that the colorful, occluded textboxes in the paragraph were
            hoverable. To solve this, we introduced a slight quiver animation to
            interactable elements. The animation cycles until a user
            successfully initiates a reveal.
          </p>,
        ],
      },
      {
        heading: 'Team',
        paragraphs: [
          <p key="interactives-right-3">
            <b>
              Product: Casey Fictum; Copy: Marianna Nash; Design: Tim McAuliffe;
              Production: Jenny Maughan; Development: Grow (Agency), Mattie?
            </b>
          </p>,
        ],
      },
    ],
    mediumHero: {
      name: 'project_interactives_01_full_hero',
      alignment: 'full',
    },
    mediaLeftColumn: [
      { name: 'project_interactives_02_right_charts', alignment: 'right' },
      { name: 'project_interactives_03_right_sketches', alignment: 'right' },
      { name: 'project_interactives_04_right_cmo_hero', alignment: 'right' },
      {
        name: 'project_interactives_05_full_cmo_visuals',
        alignment: 'full',
        showCaption: false,
      },
      { name: 'project_interactives_06_right_yt_red', alignment: 'right' },
      { name: 'project_interactives_07_right_rising_rrc', alignment: 'right' },
    ],
    mediaMiddleColumn: [
      {
        name: 'project_interactives_08_sideA_storyboards',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_interactives_08_sideB_storyboards',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      { name: 'project_interactives_09_full_story_yt', alignment: 'full' },
      { name: 'project_interactives_10_full_story_dw', alignment: 'full' },
      {
        name: 'project_interactives_11_full_yt_responsive_1',
        alignment: 'full',
      },
      {
        name: 'project_interactives_12_full_yt_responsive_2',
        alignment: 'full',
      },
      {
        name: 'project_interactives_13_full_yt_responsive_3',
        alignment: 'full',
      },
      { name: 'project_interactives_14_full_3phones_dw', alignment: 'full' },
      { name: 'project_interactives_15_full_paragraph', alignment: 'full' },
    ],
    mediaRightColumn: [
      {
        name: 'project_interactives_16_left_frames_desktop',
        alignment: 'left',
      },
      { name: 'project_interactives_17_full_frames_mobile', alignment: 'full' },
      { name: 'project_interactives_18_full_intro', alignment: 'full' },
      { name: 'project_interactives_19_left_quiver', alignment: 'left' },
    ],
  },
  nasa: {
    title: 'LSAIB',
    subtitle: {
      company: 'Nasa',
      type: 'UX Research, UX Design',
      date: '2019',
    },
    leftColumn: [
      {
        heading: 'Overview',
        paragraphs: [
          <p key="nasa-left-1">
            I was part of NASA&apos;s Human-Computer Interaction (HCI) division.
            Following a user-centered approach, we created internal software
            tools for teams across the organization. We built many products on
            our flexible, configurable platform, Mission Assurance Systems
            (MAS).{' '}
            <b>
              My colleague and I spearheaded the creation of a MAS tool, LSAIB
              (Launch Site Assembly and Integration Baseline). LSAIB manages the
              documentation and approval process of rocket parts. Across NASA,
              LSAIB is the source of truth for the set of drawings required for
              the vehicle&apos;s assembly and integration.
            </b>
          </p>,
          <p key="nasa-left-2">
            At this time, LSAIB supported Artemis I, the first uncrewed,
            integrated flight test of the Orion Spacecraft and Space Launch
            System (SLS). The mission successfully launched on Nov. 16, 2022 and
            reentered Earth&apos;s atmosphere on Dec. 11. This moon-orbiting
            mission marked NASA&apos;s return to lunar exploration after the
            conclusion of its Apollo program 5 decades before.
          </p>,
        ],
      },
      {
        heading: 'Interviews',
        paragraphs: [
          <p key="nasa-left-3">
            At the stakeholder kick-off, we introduced our user-centered design
            principles, connected individuals from diverse teams, and defined
            success for the project. Next,{' '}
            <b>
              we met individually with subject-matter experts to perform
              contextual interviews
            </b>
            . At Marshall Space Flight Center (MSFC) and Johnson Space Center
            (JSC), we met with Elements, or engineers involved in the design of
            rocket hardware. At Kennedy Space Center (KSC), we met with
            engineers responsible for the assembly and integration of rocket
            hardware. In all centers, we also held sessions with Configuration
            Management (CM), or teams that oversee documentation and approvals.
            Through the interviews, we learned about process intricacies, team
            priorities, and cultural dynamics. We also created relationships
            that continued throughout my time at NASA.
          </p>,
        ],
      },
    ],
    middleColumn: [
      {
        heading: 'Analysis',
        paragraphs: [
          <p key="nasa-middle-1">
            After each session, we sketched diagrams to document our
            understanding of the existing process from different perspectives.
            We often validated them with participants. At the conclusion of our
            on-site research, we integrated all of our drawings into a
            comprehensive view. This{' '}
            <b>consolidated workflow model helped identify pain points</b> and
            opportunities for optimization.
          </p>,
          <p key="nasa-middle-2">
            We also created an affinity diagram. Using notes from our contextual
            interviews, we categorized the many unstructured ideas into related
            groups. The{' '}
            <b>
              affinity diagram revealed meaningful patterns and themes that were
              more human and experience-focused
            </b>
            , such as relationships between teams and gaps in knowledge.
          </p>,
        ],
      },
      {
        heading: 'Insight & recommendations',
        paragraphs: [
          <p key="nasa-middle-3">
            To set deadlines, access impacts, and complete other assembly tasks,
            engineers at KSC depended on LSAIB technical drawings. However, we
            discovered many folks at NASA involved in the process fundamentally
            didn&apos;t understand the LSAIB&apos;s significance. Therefore,{' '}
            <b>
              a critical aspect of the project became educating and bridging
              disparate groups.
            </b>
          </p>,
          <p key="nasa-middle-4">
            Our other insights were around the execution of the existing
            process. We found multiple roles were redundantly engaged in
            transferring spreadsheet data to various PDF forms. Repetitive
            copying and pasting was not only inefficient, but it also introduced
            more room for error. Additionally, involved parties were overwhelmed
            by an excessive volume of emails.{' '}
            <b>
              These insights led us to believe that streamlining the process and
              eliminating duplicative tasks could lead to significant
              time-savings and a more positive user experience.
            </b>
          </p>,
        ],
      },
    ],
    rightColumn: [
      {
        heading: 'Lean UX',
        paragraphs: [
          <p key="nasa-right-1">
            MAS&apos;s ability to facilitate complex processes and robust
            versioning and permission capabilities led us to hypothesize that it
            would be a strong platform on which to build LSAIB. To ensure our
            decisions were user-driven, we identified our assumptions and rated
            them according to risk level.{' '}
            <b>
              Applying Lean UX, we configured prototypes in MAS to quickly test
              our highest risk assumptions with users. We iteratively refined
              designs based on feedback and findings.
            </b>
          </p>,
          <p key="nasa-right-2">
            Elements are the responsible for the first step in the LSAIB
            process: inputting the technical drawing data that everyone relies
            on. We needed to make it as easy as possible for them to enter and
            associate data. So, we usability tested designs with them. We were
            also concerned that MAS reports were not a good fit, so we usability
            tested and iterated different ways to views reports. Lastly, we
            hypothesized users wanted actionable email summaries. We made a
            variety of email designs, asked participants to select the design
            they wanted to receive daily, and tested the winner during a live
            review cycle.
          </p>,
        ],
      },
      {
        heading: 'Release & training',
        paragraphs: [
          <p key="nasa-right-3">
            <b>
              Coinciding with LSAIB&apos;s release, we traveled to the various
              NASA centers to lead in-person training sessions and ensure a
              smooth transition.
            </b>{' '}
            During sessions, we used the LSAIB Workflow diagram to move through
            mock examples. When users processed their first technical drawings,
            we were able to field questions and provide support. At release, we
            already had desired features in the pipeline, and these sessions
            obviously sparked more ideas. We made it clear to users that their
            feedback was documented and would be considered for the future.
          </p>,
        ],
      },
      {
        heading: 'Team',
        paragraphs: [
          <p key="nasa-right-4">
            <b>
              UX Design & UX Research: Kristle McCracken; Quality Assurance:
              Deiter
            </b>
          </p>,
        ],
      },
    ],
    mediumHero: {
      name: 'project_nasa_01_full_hero',
      alignment: 'full',
    },
    mediaLeftColumn: [
      { name: 'project_nasa_02_full_parts', alignment: 'full' },
      { name: 'project_nasa_03_right_ksc', alignment: 'right' },
      { name: 'project_nasa_04_right_jsc', alignment: 'right' },
      { name: 'project_nasa_05_right_msfc', alignment: 'right' },
    ],
    mediaMiddleColumn: [
      {
        name: 'project_nasa_06_sideA_diagrams',
        alignment: 'sideA',
      },
      {
        name: 'project_nasa_06_sideB_diagrams',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_nasa_07_full_diagram',
        alignment: 'full',
        useAltTextAsCaption: false,
      },
      { name: 'project_nasa_08_full_consolidated', alignment: 'full' },
      {
        name: 'project_nasa_09_sideA_affinity',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_nasa_09_sideB_affinity',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_nasa_10_sideA_insights',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_nasa_10_sideB_recs',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
    ],
    mediaRightColumn: [
      { name: 'project_nasa_11_left_risks', alignment: 'left' },
      { name: 'project_nasa_12_left_prototype1', alignment: 'left' },
      { name: 'project_nasa_13_left_prototype2', alignment: 'left' },
      { name: 'project_nasa_14_left_prototype3', alignment: 'left' },
      { name: 'project_nasa_15_full_draft', alignment: 'full' },
      { name: 'project_nasa_16_left_workflow1', alignment: 'left' },
      {
        name: 'project_nasa_17_left_workflow2',
        alignment: 'left',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_nasa_18_left_workflow3',
        alignment: 'left',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_nasa_19_left_workflow4',
        alignment: 'left',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_nasa_20_left_workflow5',
        alignment: 'left',
        useAltTextAsCaption: false,
      },
      { name: 'project_nasa_20_left_workflow5', alignment: 'left' },
    ],
  },
  'visual-stories': {
    title: 'Visual Stories',
    subtitle: {
      company: 'Google',
      type: 'UX/UI Design',
      date: '2020',
    },
    leftColumn: [
      {
        heading: 'Overview',
        paragraphs: [
          <p key="vs-left-1">
            As the pandemic took hold, at Think with Google (TwG), information
            evolved so rapidly that articles from the week before could feel
            stale, even out-of-touch. Our Interactive Articles took 2+ weeks to
            launch, so producing them no longer made sense.{' '}
            <b>
              Many marketers and retailers were struggling, and we needed to
              deliver relevant data to them more quickly than ever.
            </b>
          </p>,
          <p key="vs-left-2">
            Site metrics also showed a shift in the way users consumed platform
            content, from desktop to mobile.{' '}
            <b>
              Now, nearly 75% of users were accessing the platform from their
              phones, and they were seeking more bite-sized content. To meet
              their needs without sacrificing visually-rich, data-driven
              storytelling, we launched Visual Stories.
            </b>
            Inspired by “stories” on social media apps, Visual Stories are
            mobile-first, full-bleed, tappable articles. They were originally
            available through a custom TwG product page, which we designed as a
            vibrant board.
          </p>,
          <p key="vs-left-3">
            As they grew to be a site staple, we integrated Visual Stories into
            the TwG platform as a core content type, translated across 18
            languages. To facilitate the creation of Visual Stories by teams
            throughout the larger Google Marketing organization, we setup an
            internal editor.
          </p>,
        ],
      },
      {
        heading: 'Team',
        paragraphs: [
          <p key="vs-left-4">
            <b>
              Design: Kelly Sullan, Grow (Agency); Product: Casey Fictum;
              Production: Jenny Maughan; Development: Victor Zeng, Grow (Agency)
            </b>
          </p>,
        ],
      },
    ],
    middleColumn: [
      {
        heading: 'Original product ux/ui',
        paragraphs: [
          <p key="vs-middle-1">
            We built the original Visual Stories from the ground up. This
            encompassed the UX/UI of the new article type. If this project had
            had a less urgent timeline, I would have advocated more for UX
            research to test our designs. In lieu of research, we collected an
            archive of articles in this style from other publications. We
            studied their decisions, considering elements from navigation arrows
            to the progress bar. One strength we cherry-picked was the inclusion
            of a larger, more pronounced arrow on a story&apos;s first page. We
            added descriptive text (“NEXT”) and a pulsing animation to catch
            users&apos; attention. It was critical that they understood how to
            advance to the next page. On the following pages, when the behavior
            was learned, the arrows receded.
          </p>,
        ],
      },
      {
        heading: 'Responsive templates',
        paragraphs: [
          <p key="vs-middle-2">
            To make Visual Stories easy and fast to launch, we defined
            guardrails. For example, for text positions, we enabled 9 core
            options for larger screens: a pairing of a vertical alignment (top,
            middle, or bottom) with a horizontal alignment (left, center, or
            right). For smaller screen sizes, we enabled 3 options. We also
            designed reusable, responsive templates. When designing a page for a
            Visual Story, designers would simply provide the image or video
            asset and specify which responsive template they wished to use. We
            outlined these guides in a “Starter Figma,” the perfect resource for
            designers kicking-off a new Visual Story. All of these decisions
            were made in collaboration with the developer as he built the
            product. It was a balance to build in flexibility for future story
            designs and to establish simple, streamlined rules.
          </p>,
        ],
      },
    ],
    rightColumn: [
      {
        heading: 'Visual Design',
        paragraphs: [
          <p key="vs-right-1">
            <b>
              I also owned the complete visual design of a set of Visual Stories
            </b>
            , (which put the templates to use). Every story required a
            substantial creative lift to fill each page with dynamic content. We
            ensured each piece had a unique visual identity that supported its
            story conceptually, but still aligned with TwG&apos;s overarching
            brand identity.
          </p>,
        ],
      },
      {
        heading: 'Scaling',
        paragraphs: [
          <p key="vs-right-2">
            As Visual Stories took off, we needed to quickly scale. Our original
            templates facilitated rapid creation, but they were intended to be
            used by professional designers; they lived in Figma and required an
            understanding of responsive behavior. Google teams without a design
            role wanted to make Visual Stories.
          </p>,
          <p key="vs-right-3">
            So,{' '}
            <b>
              we brought in Newsroom, a WYSIWYG editor that empowered
              non-designers to craft custom Visual Stories.
            </b>{' '}
            Unfortunately, Newsroom supplanted our custom-built UI with their UI
            and simplified all future Visual Stories to a mobile-only format.
            While this diminished the immersive experience on desktop, the
            efficiencies in article creation were immense. This decision was
            made easier because the vast majority of TwG users were experiencing
            Visual Stories on their mobile devices.
          </p>,
          <p key="vs-right-4">
            <b>
              As the reach of Visual Stories expanded, our team&apos;s design
              role transitioned from hands-on designing to knowledge-sharing and
              oversight. To uphold quality standards, we defined visual
              guidelines in a Style Guide and led creative reviews.
            </b>{' '}
            To help non-designers get started, we also fashioned templates in
            Newsroom, where creators could drop in their custom images and text.
          </p>,
        ],
      },
    ],
    mediumHero: {
      name: 'project_vs_01_full_tiled',
      alignment: 'full',
      useAltTextAsCaption: false,
    },
    mediaLeftColumn: [
      { name: 'project_vs_02_right_covers', alignment: 'right' },
      { name: 'project_vs_03_right_og_board', alignment: 'right' },
      { name: 'project_vs_04_full_vs_twg', alignment: 'full' },
    ],
    mediaMiddleColumn: [
      {
        name: 'project_vs_05_sideA_textpos',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_vs_05_sideB_textpos',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_vs_06_sideA_responsive',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_vs_06_sideB_responsive',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      { name: 'project_vs_07_full_rise', alignment: 'full' },
      { name: 'project_vs_08_full_auto', alignment: 'full' },
      { name: 'project_vs_09_full_ads', alignment: 'full' },
      { name: 'project_vs_10_full_micro', alignment: 'full' },
      { name: 'project_vs_11_full_connected', alignment: 'full' },
    ],
    mediaRightColumn: [
      { name: 'project_vs_12_left_newsroom', alignment: 'left' },
      { name: 'project_vs_13_left_ui', alignment: 'left' },
      { name: 'project_vs_14_left_desktop_mobile', alignment: 'left' },
      { name: 'project_vs_15_full_styleguide', alignment: 'full' },
      { name: 'project_vs_16_left_templates', alignment: 'left' },
    ],
  },
  'journey-finder': {
    title: 'JourneyFinder',
    subtitle: {
      company: 'Google',
      type: 'UX Design',
      date: '2021',
    },
    leftColumn: [
      {
        heading: 'Overview',
        paragraphs: [
          <p key="journey-finder-left-1">
            <b>
              JourneyFinder is used by 3,000+ Google employees to navigate over
              320k customer journeys
            </b>
            , consisting of 800M touch-points, across 30 verticals. Beyond
            empowering Sales and Marketing teams with examples of real journeys,
            the internal tool enabled core insights in Google&apos;s narrative
            for their $100B Ad Marketing business. These insights were presented
            in executive keynotes, featured in Think With Google articles
            (collectively receiving 256k UPVs), and referenced at CES and
            Shoptalk. I led the tool&apos;s UX Design. The timeline was very
            short—I had a 2-week design sprint to hand-off final designs. (Note:
            Journey data wasn&apos;t internal Google data, but purchased from a
            third-party where participants opted in to use tracking software in
            a paid study.)
          </p>,
        ],
      },
      {
        heading: 'User goals & tasks',
        paragraphs: [
          <p key="journey-finder-left-2">
            Leading up to the sprint, I joined user interviews led by our UX
            researcher with internal Sales and Marketing folks.{' '}
            <b>
              We observed the participants interact with an early iteration of
              JourneyFinder and learned about the role of customer journeys in
              their work.
            </b>{' '}
            This groundwork informed our efforts to define their critical goals
            and the set of tasks to achieve those goals. Establishing user goals
            and tasks kept our team aligned and accountable for UX quality as we
            strove to create a useful and usable product.
          </p>,
        ],
      },
    ],
    middleColumn: [
      {
        heading: 'Process',
        paragraphs: [
          <p key="journey-finder-middle-1">
            To start,{' '}
            <b>
              I organized the data attributes in a shared spreadsheet,
              categorizing and adding notes.
            </b>{' '}
            The user research sessions had illuminated which attributes deserved
            priority, paired nicely, worked well for filtering vs. sorting, etc.
            Our team worked in the spreadsheet together. Engineers clarified
            capabilities, research fielded user questions, etc. A source of
            truth, it cemented our shared understanding and was foundational in
            later decision-making. For example, mutually exclusive attributes
            translated to radio buttons, whereas attributes supporting multiple
            choices called for checkboxes. Our attribute descriptions supplied
            copy for subheads and tooltips.
          </p>,
          <p key="journey-finder-middle-2">
            When the sprint began,{' '}
            <b>
              I took advantage of established Google resources like their
              Material Library.
            </b>{' '}
            Adhering to best practices and utilizing building blocks, I could
            rapidly shape a sophisticated tool. Without time for usability
            testing the new tool, it was helpful to tap into Google Flights, an
            enormously successful and tested Google tool with much functionality
            overlap. We referenced the live site frequently when finalizing
            interaction decisions.
          </p>,
        ],
      },
      {
        heading: 'Prioritization',
        paragraphs: [
          <p key="journey-finder-middle-3">
            Our rapid timeline meant we tabled some features. Our choices were
            dictated by the value each feature would provide to users and
            technical effort required. For example, we didn&apos;t include
            filtering results by “Purchase Sites.” User interviews revealed that
            this would be valuable because clients are often interested in
            journeys where customers purchase items from their site or their
            competitors&apos; sites. Unfortunately, this required significant
            data cleaning, rendering it out of scope.
          </p>,
        ],
      },
    ],
    rightColumn: [
      {
        heading: 'Search',
        paragraphs: [
          <p key="journey-finder-right-1">
            <b>
              When designing the search bar, we decided to incorporate
              additional functionality beyond standard global search.
            </b>{' '}
            The customer journey data had a 3-tier hierarchy. Industry verticals
            (e.g. Auto, Consumer Electronics, Health, etc.) at the top broke
            down into vertical subcategories, and again into further
            subcategories.{' '}
            <b>
              During research sessions, many users sought journeys pertaining to
              a specific industry vertical because they largely worked with
              clients in a particular industry.
            </b>{' '}
            Therefore, we believed it&apos;d be advantageous for users to be
            able to navigate the data tiers. We also believed traversing the
            hierarchy would help users form a mental model of the data.
          </p>,
          <p key="journey-finder-right-2">
            For a next step, I would have prioritized user-testing on the search
            bar design as it deviates from convention. In lieu of this, I leaned
            heavily on best practices outlined by Nielsen Norman Group (NN/G).
            We applied their advice to always allow users to submit a standard
            search query. If users search using an industry vertical or
            subcategory (scoped search), NN/G recommends to explicitly state
            where the user is in the hierarchy at the top of the results and to
            enable 1-click access to move between tiers (enlarge the scope). I
            used breadcrumbs to address this advice.
          </p>,
        ],
      },
      {
        heading: 'Team',
        paragraphs: [
          <p key="journey-finder-right-3">
            <b>
              Product & Engineering: Nathan Beddome; Project & UX Research:
              Katie Herskovitz; Engineering: Victor Zeng
            </b>
          </p>,
        ],
      },
    ],
    mediumHero: {
      name: 'project_journeyfinder_01_right_screenA',
      alignment: 'right',
    },
    mediaLeftColumn: [
      { name: 'project_journeyfinder_02_right_screenB', alignment: 'right' },
      { name: 'project_journeyfinder_03_right_screenC', alignment: 'right' },
      { name: 'project_journeyfinder_03_right_screenC', alignment: 'right' },
      {
        name: 'project_journeyfinder_04_right_cuj',
        alignment: 'right',
        useAltTextAsCaption: false,
      },
    ],
    mediaMiddleColumn: [
      {
        name: 'project_journeyfinder_05_sideA_chips',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_journeyfinder_05_sideB_chips',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_journeyfinder_06_sideA_tooltips',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_journeyfinder_06_sideB_tooltips',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      { name: 'project_journeyfinder_07_full', alignment: 'full' },
      { name: 'project_journeyfinder_08_full_results', alignment: 'full' },
    ],
    mediaRightColumn: [
      { name: 'project_journeyfinder_09_left_hierarchy', alignment: 'left' },
      { name: 'project_journeyfinder_10_left_searchA', alignment: 'left' },
      { name: 'project_journeyfinder_11_left_searchB', alignment: 'left' },
      {
        name: 'project_journeyfinder_12_full_quote',
        alignment: 'full',
        useAltTextAsCaption: false,
      },
    ],
  },
  branding: {
    title: 'Brand Identity Projects',
    subtitle: {
      company: 'Freelance',
      type: 'Visual Design',
      date: '2022-23',
    },
    leftColumn: [
      {
        heading: 'Coming Soon',
        paragraphs: [
          <p key="branding-left-1">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>,
        ],
      },
    ],
    middleColumn: [],
    rightColumn: [],
    mediumHero: {
      name: 'project_branding_00_right_wrong_material',
      alignment: 'right',
    },
    mediaLeftColumn: [],
    mediaMiddleColumn: [],
    mediaRightColumn: [],
  },
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
    mediumHero: { name: 'project_vijks_01_full_all', alignment: 'full' },
    mediaLeftColumn: [
      { name: 'project_vijks_02_right_ieee', alignment: 'right' },
      { name: 'project_vijks_03_full_ieee', alignment: 'full' },
    ],
    mediaMiddleColumn: [
      {
        name: 'project_vijks_04_sideA_dripping',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_vijks_04_sideB_dripping',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_05_full_query', alignment: 'full' },
      {
        name: 'project_vijks_06_sideA_sketch',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_vijks_06_sideB_draft',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_07_full_beyond', alignment: 'full' },
      {
        name: 'project_vijks_08_sideA_faces',
        alignment: 'sideA',
        useAltTextAsCaption: false,
      },
      {
        name: 'project_vijks_08_sideB_faces',
        alignment: 'sideB',
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_09_full_recognition', alignment: 'full' },
      { name: 'project_vijks_10_full_kairos', alignment: 'full' },
      { name: 'project_vijks_11_exhibit_faces', alignment: 'full' },
    ],
    mediaRightColumn: [
      {
        name: 'project_vijks_12_left_vg_pixels',
        alignment: 'left',
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_13_full_strip_one', alignment: 'full' },
      { name: 'project_vijks_14_full_strip_many', alignment: 'full' },
      { name: 'project_vijks_15_left_dim_sketch', alignment: 'left' },
      { name: 'project_vijks_16_full_dim_opacity', alignment: 'full' },
      { name: 'project_vijks_17_full_dim_final', alignment: 'full' },
      { name: 'project_vijks_18_full_dim_final_multiples', alignment: 'full' },
      { name: 'project_vijks_19_exhibit_hague', alignment: 'full' },
      {
        name: 'project_vijks_20_full_masterpieces_map',
        alignment: 'left', // Was mislabeled
        useAltTextAsCaption: false,
      },
      { name: 'project_vijks_21_full_masterpieces_focus', alignment: 'full' },
      { name: 'project_vijks_22_exhibit_masterpieces', alignment: 'full' },
    ],
  },
} satisfies Record<string, ProjectContents>;

export type WrittenProject = keyof typeof projectContents;
