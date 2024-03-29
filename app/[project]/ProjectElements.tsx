import { type ReactNode } from 'react';
import { type Route } from 'next';
import Link from 'next/link';
import { lektonStyle, parisienneStyle, pirataOneStyle } from '@/fontSubsets';
import { HomeButton } from '@/components/HomeButton';
import {
  type ProjectSubtitle,
  type ProjectSection,
  type WrittenProject,
} from '@/projectContents';
import { cn } from '@/helpers';

export function ProjectHeader() {
  return (
    <header
      className={cn(
        // Fixed height to better deal with the different font line heights
        'grid h-[1.5625rem] grid-cols-1 grid-rows-1 items-center',
        'col-span-full mx-auto'
      )}
    >
      <HomeButton variant="large" className="pt-[2px]" />
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
  return (
    <h1
      className={cn(
        'mb-[1.875rem] text-[1.75rem] font-bold leading-[1.375]',
        className
      )}
    >
      {children}
    </h1>
  );
}

export function ProjectSubtitle({ company, tags, date }: ProjectSubtitle) {
  return (
    <ol
      className={cn(
        // Parisienne bleeds a bit on the left margin for some letters
        { 'ml-[2px]': company.startsWith('G') },
        { 'ml-[1px]': company.startsWith('N') || company.startsWith('F') },
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
