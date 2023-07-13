'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = { Home: '/', Projects: '/projects' };

export function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ol className="flex flex-row gap-5 uppercase tracking-[0.1875rem]">
        {Object.entries(navLinks).map(([linkName, linkPath]) => {
          const isActive = pathname === linkPath;
          return (
            <li
              key={linkPath}
              className={isActive ? 'font-extrabold' : 'font-normal'}
            >
              <Link href={linkPath}>{linkName}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
