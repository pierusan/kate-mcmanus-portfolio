import Image from 'next/image';
import { ProjectSummary } from './ProjectSummary';
import styles from './page.module.css';
import { projectSummaryList } from './projectSummaryList';

export default function ProjectsPage() {
  return (
    <main
      className={`${styles.projectPageMain} grid grid-cols-[700px_1fr] gap-[113px]`}
    >
      <div className="flex flex-col gap-[3.75rem]">
        {projectSummaryList.map(
          ({ title, company, dateRange, description, tags }) => (
            <ProjectSummary
              key={title}
              title={title}
              company={company}
              dateRange={dateRange}
              description={description}
              tags={tags}
            />
          )
        )}
      </div>
      <aside className="grid-rows--[[yo]_1fr] grid grid-cols-[[yo]_1fr]">
        {projectSummaryList.map(({ title, imageUrl }, index) => (
          <Image
            key={title}
            alt={title}
            src={imageUrl}
            placeholder="blur"
            style={{ gridArea: 'yo' }}
            priority={index === 0}
          />
        ))}
      </aside>
    </main>
  );
}
