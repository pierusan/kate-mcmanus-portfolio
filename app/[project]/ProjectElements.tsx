import { type ReactNode } from 'react';
import { type Route } from 'next';
import Link from 'next/link';
import { lektonStyle, parisienneStyle, pirataOneStyle } from '../fontSubsets';
import { cn } from '../helpers';
import { HomeButton } from '../HomeButton';
import {
  type ProjectSubtitle,
  type ProjectSection,
  type WrittenProject,
} from './projectContents';

export function ProjectHeader() {
  return (
    <header className="col-span-full mx-auto">
      <HomeButton />
    </header>
  );
}

export function ProjectTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <h1 className={cn('text-[1.75rem]', className)}>{children}</h1>;
}

export function ProjectSubtitle({ company, tags, date }: ProjectSubtitle) {
  return (
    <ol
      className={cn(
        'mb-5 flex',
        '[&>li:not(:last-child)]:after:content-["|"] ',
        '[&>li:not(:last-child)]:after:px-4 [&>li:not(:last-child)]:after:text-base ',
        '[&>li:not(:last-child)]:after:font-sans [&>li:not(:last-child)]:after:font-extralight'
      )}
    >
      <li className={`${parisienneStyle} text-[1.5rem]`}>{company}</li>
      <li className={`${pirataOneStyle} text-[1.125rem]`}>{tags}</li>
      <li className={`${lektonStyle} text-[1.125rem]`}>{date}</li>
    </ol>
  );
}

export function ProjectSection({
  heading,
  paragraphs,
  className,
}: ProjectSection & { className?: string }) {
  return (
    <section
      className={cn(
        '[&:not(:last-child)]:mb-5 [&>p:not(:last-child)]:mb-2 [&_p]:text-body',
        className
      )}
    >
      <h2
        className={cn(
          'mb-2.5 font-mono text-base lowercase tracking-[0.125rem]',
          { 'mb-1': heading === 'Team' }
        )}
      >
        {heading}
      </h2>
      {paragraphs}
    </section>
  );
}

export function ProjectFooter({
  nextProject,
  previousProject,
}: {
  nextProject: WrittenProject;
  previousProject: WrittenProject;
}) {
  return (
    <footer className="pointer-events-auto col-span-full flex justify-between">
      <Link
        href={`/${previousProject}` as Route}
        className="p-5 font-mono tracking-[0.125em]"
      >
        {'<previous'}
      </Link>
      <Link
        href={`/${nextProject}`}
        className="p-5 font-mono tracking-[0.125em]"
      >
        {'next>'}
      </Link>
    </footer>
  );
}
