import {
  ProjectTagsSection,
  ProjectTeamSection,
  ProjectTitle,
} from '../ProjectContent';

export function Title() {
  return <ProjectTitle>JourneyFinder</ProjectTitle>;
}

export function Summary() {
  return (
    <p>
      I was responsible for redesigning the navigation for JourneyFinder, an
      internal tool to enable 3,000 Googlers on Marketing and Sales teams browse
      over 320,000 user journeys. Ultimately, the tool helped produce and
      illuminate core insights in Google&apos;s narrative for their $100B Ad
      Marketing business. Note: the data used for JourneyFinder was not internal
      Google data, but data Google purchased through a paid study where
      participants opted in to use tracking software.
    </p>
  );
}
export function Tags() {
  return <ProjectTagsSection company="Google" role="UX Design" date="2021" />;
}

export function Team() {
  return (
    <ProjectTeamSection
      lines={[
        'Product & Engineering: Nathan Beddome',
        'Project & UX Research: Katie Herskovitz',
        'Engineering: Victor Zeng',
      ]}
    />
  );
}

export function Context() {
  return (
    <>
      <h2>context</h2>
      <p>
        The project required a rapid delivery for hand-off before the holidays;
        I had 2 weeks to produce high-fidelity designs. Without time for
        usability testing, I pulled heavily from an enormously successful, tried
        and tested Google tool with much functionality overlap: Google Flights.
        Adhering to best practices and building blocks (components from Google’s
        Material Library) defined by large teams before me, I was able to
        rapidly shape a sophisticated tool.
      </p>
    </>
  );
}

export function Goal() {
  return (
    <>
      <h2>goal</h2>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </>
  );
}

export function Process() {
  return (
    <>
      <h2>process</h2>
      <p>
        To start, I joined Katie&apos;s user research sessions to better
        understand different use cases. I also organized the various data
        attributes in a spreadsheet, defining which would deserve priority, pair
        nicely, work well for filtering or sorting, etc. We worked together in
        the spreadsheet, Nathan clarifying data capabilities and Katie fielding
        user-focused questions. This source of truth cemented our shared
        understanding and became foundational in design decisions. For example,
        mutually exclusive attributes resulted in radio buttons while attributes
        that required selecting any number of choices resulted in checkboxes.
        Our attribute descriptions supplied the copy for sub-heads and tooltips
        sprinkled throughout the final tool.
      </p>
    </>
  );
}

export function Takeaways() {
  return (
    <>
      <h2>takeaways</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </>
  );
}
