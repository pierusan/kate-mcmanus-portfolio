import { Fragment, type ReactNode } from 'react';
import { lektonStyle, parisienneStyle, pirataOneStyle } from '../fontSubsets';

export function ProjectTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-[2.25rem]">{children}</h1>;
}

export function ProjectTagsSection({
  company,
  role,
  date,
}: {
  company: string;
  role: string;
  date: string;
}) {
  return (
    <ol
      className={
        'mb-2.5 flex ' +
        '[&>li:not(:last-child)]:after:content-["|"] ' +
        '[&>li:not(:last-child)]:after:px-2 [&>li:not(:last-child)]:after:text-base ' +
        '[&>li:not(:last-child)]:after:font-sans [&>li:not(:last-child)]:after:font-extralight'
      }
    >
      {/* Add extra padding because Parisienne has a tendency to overflow */}
      {/* TODO: Check if the padding only should be added for certain letters */}
      <li className={`${parisienneStyle} pl-[2px] text-[1.5rem]`}>{company}</li>
      <li className={`${pirataOneStyle} text-[1.125rem]`}>{role}</li>
      <li className={`${lektonStyle} text-[1.125rem]`}>{date}</li>
    </ol>
  );
}

export function ProjectTeamSection({ lines }: { lines: string[] }) {
  return (
    <>
      <h2 className="mb-1">team</h2>
      {/* TODO: Use dl and dt instead? */}
      <p className="font-extrabold">
        {lines.map((line, index) => {
          return (
            <Fragment key={line}>
              {line}
              {index < lines.length - 1 ? <br /> : null}
            </Fragment>
          );
        })}
      </p>
    </>
  );
}
