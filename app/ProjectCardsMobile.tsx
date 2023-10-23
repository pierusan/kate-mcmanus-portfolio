import Link from 'next/link';
import { cn } from './helpers';

export function ProjectCardsMobile({ className }: { className?: string }) {
  return (
    <ul className={cn('flex flex-col gap-8 bg-bg-surface', className)}>
      <li>
        <Link
          href="/project/journey-finder"
          className="block h-[20rem] w-full rounded-md bg-red-200"
        />
      </li>
      <li>
        <Link
          href="/project/journey-finder"
          className="block h-[20rem] w-full rounded-md bg-red-200"
        />
      </li>
      <li>
        <Link
          href="/project/journey-finder"
          className="block h-[20rem] w-full rounded-md bg-red-200"
        />
      </li>
      <li>
        <Link
          href="/project/journey-finder"
          className="block h-[20rem] w-full rounded-md bg-red-200"
        />
      </li>
    </ul>
  );
}
