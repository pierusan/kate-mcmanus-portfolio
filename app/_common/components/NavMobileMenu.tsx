import { type ReactNode } from 'react';
import { cn } from '@/helpers';

function NavMobileMenuButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <li
      className={cn(
        // Add right border except for last button
        '[&:not(:last-child)]:border [&:not(:last-child)]:border-y-0 ',
        '[&:not(:last-child)]:border-l-0 [&:not(:last-child)]:border-r-action-subtle '
      )}
    >
      <button
        className="py-5 font-mono text-base lowercase tracking-[0.125rem]"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}

export function NavMobileMenu({
  tabs,
  className,
}: {
  tabs: { name: string; onClick: () => void }[];
  className?: string;
}) {
  return (
    <menu
      className={cn(
        // TODO: Check if the default tailwind md shadow is fine or if should
        // tweak based on designs
        'rounded-md border border-action-subtle bg-white shadow-md ',
        'grid grid-cols-2  [&_button]:w-full',
        className
      )}
    >
      {tabs.map(({ name, onClick }) => (
        <NavMobileMenuButton key={name} onClick={onClick}>
          {name}
        </NavMobileMenuButton>
      ))}
    </menu>
  );
}
