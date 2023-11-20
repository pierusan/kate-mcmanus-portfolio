'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ProjectCardsMobile } from './ProjectCardsMobile';
import { ContactInfoMobile } from './ContactInfoMobile';
import { NavMobileMenu } from './NavMobileMenu';
import { NavMobileHeader } from './NavMobileHeader';
import { cn } from './helpers';

export function NavMobileOrTouchScreen({ className }: { className?: string }) {
  const dialogReference = useRef<HTMLDialogElement>(null);
  const [showProjectsTab, setShowProjectsTab] = useState(true);
  const pathname = usePathname();

  // Close the dialog when clicking outside of it. This is a common limitation
  // of dialog HTML elements
  useEffect(() => {
    const dialog = dialogReference.current;
    if (!dialog) return;

    const handler = (event: MouseEvent) => {
      // If dialog is the target instead of an inner element elements, it means
      // the event bubbled to the top and the user clicked outside of the dialog
      // https://web.dev/articles/building/a-dialog-component#adding_light_dismiss
      if (dialog === event.target) {
        dialog.close('clickedOutside');
      }
    };

    dialog.addEventListener('click', handler);
    return () => {
      dialog.removeEventListener('click', handler);
    };
  });

  // On the homepage, the home link navigation will have no effect but the user
  // likely still expects the dialog to close
  const onHomeButtonClick = useCallback(() => {
    if (pathname !== '/') return; // navigation will close the dialog

    dialogReference.current?.close('close');
  }, [pathname]);

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
          'rounded-md border border-action-subtle',
          'hidden open:grid',
          'grid-cols-[1fr] grid-rows-[3rem_1fr_auto]'
        )}
      >
        <NavMobileHeader
          onHomeButtonClick={onHomeButtonClick}
          className="border-x-0 border-t-0"
        />
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
