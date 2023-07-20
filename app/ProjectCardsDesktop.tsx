import Link from 'next/link';
import MissionAssuranceCard from './projectCardSvgs/ProjectCard_MissionAssuranceSystems.svg';

export function ProjectCardsDesktop({ className }: { className?: string }) {
  return (
    <ul className={`relative ${className}`}>
      <li className="absolute left-[4rem] top-[4rem]">
        <Link href="project">
          <MissionAssuranceCard />
        </Link>
      </li>
    </ul>
  );
}
