import { StaticImageData } from 'next/image';
import { lekton, parisienne, pirataOne } from '../fontSubsets';

export type ProjectInfo = {
  title: string;
  company: string;
  description: string;
  dateRange: string;
  tags: string[];
  imageUrl: StaticImageData | string;
};

export function ProjectSummary({
  title,
  company,
  description,
  dateRange,
  tags,
}: Omit<ProjectInfo, 'imageUrl'>) {
  return (
    <article>
      <a className="flex flex-col gap-[0.875rem] hover:cursor-pointer hover:underline">
        <div className="flex items-baseline gap-4">
          <h2 className="inline">{title}</h2>
          <p className={`${parisienne.className} inline text-[3.09375rem]`}>
            {company}
          </p>
        </div>
        <p className={`inline ${lekton.className} text-[2rem] leading-9`}>
          {description}
          {' |'}
          <strong className="font-bold">{` ${dateRange}`}</strong>
        </p>
        <footer className={`${pirataOne.className} text-2xl`}>
          {tags.join(',')}
        </footer>
      </a>
    </article>
  );
}
