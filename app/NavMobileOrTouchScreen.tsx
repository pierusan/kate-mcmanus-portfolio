'use client';

import { useRef, useState } from 'react';
import { ProjectCardsMobile } from './ProjectCardsMobile';
import { ContactInfoMobile } from './ContactInfoMobile';
import { NavMobileMenu } from './NavMobileMenu';
import { NavMobileHeader } from './NavMobileHeader';
import { cn } from './helpers';

export function NavMobileOrTouchScreen({ className }: { className?: string }) {
  const dialogReference = useRef<HTMLDialogElement>(null);
  const [showProjectsTab, setShowProjectsTab] = useState(true);

  return (
    <nav className={cn('', className)}>
      {/* TODO: Style backdrop? */}
      {/* We use dialog here for built-in and accessible modal interactions */}
      {/* such as the use of the escape key, background elements being inert, */}
      {/* and straightforward creation and styling of the backdrop */}
      <dialog
        ref={dialogReference}
        className={cn(
          'fixed inset-5 h-auto w-auto bg-surface p-0 ',
          'rounded-md border border-action-subtle ',
          'hidden open:grid',
          'grid-cols-[1fr] grid-rows-[3rem_1fr_auto]'
        )}
      >
        <NavMobileHeader className="border-x-0 border-t-0 " />
        {showProjectsTab ? (
          <ProjectCardsMobile className="overflow-scroll" />
        ) : (
          <ContactInfoMobile className="overflow-scroll" />
        )}
        {/* We have to add menu again to the dialog when opened */
        /* because the previous menu that opened it will become inert */}
        <NavMobileMenu
          className="border-x-0 border-b-0"
          tabs={[
            {
              name: 'Projects',
              onClick: () => {
                setShowProjectsTab(true);
              },
            },
            {
              name: 'Contact',
              onClick: () => {
                setShowProjectsTab(false);
              },
            },
          ]}
        />
      </dialog>
      <NavMobileMenu
        className="fixed inset-x-5 bottom-5"
        tabs={[
          {
            name: 'Projects',
            onClick: () => {
              setShowProjectsTab(true);
              dialogReference.current?.showModal();
            },
          },
          {
            name: 'Contact',
            onClick: () => {
              setShowProjectsTab(false);
              dialogReference.current?.showModal();
            },
          },
        ]}
      />
    </nav>
  );
}
