import Link from 'next/link';
import MissionAssuranceCard from './projectCardSvgs/ProjectCard_MissionAssuranceSystems.svg';
import { cn } from './helpers';

export function ProjectCardsDesktop({ className }: { className?: string }) {
  return (
    <ul className={cn('relative', className)}>
      <li className="absolute left-[4rem] top-[4rem]">
        <Link href="project/journey-finder">
          <MissionAssuranceCard />
        </Link>
      </li>
    </ul>
  );
}
