'use client';

import { useRouter } from 'next/navigation';

import { useRef, useLayoutEffect, useEffect, type ReactElement } from 'react';
import type { Route } from 'next';
import { cn } from '@/helpers';
import { WrittenProject } from '@/projectContents';

/**
 *  Make all the shapes inside an svg hoverable and clickable. Turn them into
 *  svg link (with potentially unusual shapes - aka non-box - as hover and click
 *  areas)
 */
export function ProjectIllustrationClickArea({
  linkRef,
  clickAreasContainerClassName,
  clickAreaClassName,
  children,
}: {
  linkRef: Route<`/${WrittenProject}`>; // Dynamic routing
  clickAreasContainerClassName: string;
  clickAreaClassName: string;
  children?: ReactElement;
}) {
  // Can't use a Link component because the hover/click area can be unusual
  // shapes so they must be inside the svg. We use useRouter instead
  const router = useRouter();
  useEffect(() => {
    router.prefetch(linkRef);
  }, [router, linkRef]);

  // Make all the shapes inside the svg hoverable and clickable
  const svgContainerReference = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const svgContainer = svgContainerReference.current;
    if (!svgContainer || !svgContainer.children[0]) return;

    // Wrap each shape in an anchor tag so the browser status bar shows the link
    // url on hover
    const shapes = [...svgContainer.children[0].children];
    shapes.forEach((shape) => {
      const anchorTag = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'a'
      );
      anchorTag.classList.add(clickAreaClassName);
      anchorTag.setAttribute('href', linkRef);
      shape.parentNode?.insertBefore(anchorTag, shape);
      anchorTag.append(shape);

      // Not sure why but we need to add the class to the underlying shape as
      // well
      shape.classList.add(clickAreaClassName);
    });

    return () => {
      shapes.forEach((shape) => {
        shape.classList.remove(clickAreaClassName);
        const parentAnchor = shape.parentElement;
        if (!parentAnchor || parentAnchor.nodeName !== 'a') {
          console.warn(
            'The click/hover shape parent should have been an SVG anchor. Something went wrong, stopping here.'
          );
          return;
        }
        parentAnchor?.replaceWith(shape);
      });
    };
  }, [linkRef, router, clickAreaClassName]);

  return (
    // We can't pass the svg directly because it can't be serialized from a
    // server to a parent component. We add a div container instead that we can
    // manipulate
    <div
      className={cn(clickAreasContainerClassName)}
      ref={svgContainerReference}
    >
      {children}
    </div>
  );
}
