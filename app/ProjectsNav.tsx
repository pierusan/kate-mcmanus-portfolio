import Link from 'next/link';
import MissionAssuranceCard from './projectCardSvgs/ProjectCard_MissionAssuranceSystems.svg';

export function ProjectsNav({ className }: { className?: string }) {
  return (
    <nav className={`${className} relative`}>
      <Link href="project" className="absolute left-[4rem] top-[4rem]">
        <MissionAssuranceCard />
      </Link>
    </nav>
  );
}
