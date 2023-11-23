'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { useHomeBgColor } from './useHomeBgColor';
import { lektonStyle, parisienneStyle, pirataOneStyle } from '@/fontSubsets';
import { cn } from '@/helpers';
import CherriesRotatedSvg from '@/icons/cherriesRotated.svg';

export function RotateMeDialogTouchScreen({
  className,
}: {
  className?: string;
}) {
  const homeBgColor = useHomeBgColor();
  const dialogReference = useRef<HTMLDialogElement>(null);
  const [showRotateMeDialog, setShowRotateMeDialog] = useState(false);

  // Initialization in the client only and not in the server
  useLayoutEffect(() => {
    // Safari on iOS only started to support screen.orientation recently so we
    // use window orientation instead even if it's less precise
    if (!screen.orientation) {
      const mql = window.matchMedia('(orientation: landscape)');
      setShowRotateMeDialog(mql.matches);

      const handleWindowOrientationChange = (event: MediaQueryListEvent) => {
        setShowRotateMeDialog(event.matches);
      };
      mql.addEventListener('change', handleWindowOrientationChange);

      return () => {
        mql.removeEventListener('change', handleWindowOrientationChange);
      };
    }

    // Use screen.orientation if available
    setShowRotateMeDialog(!screen.orientation.type.includes('portrait'));

    const handleScreenOrientationChange = (
      event: ScreenOrientationEventMap['change']
    ) => {
      if (!event || !event.target) return;
      const type = (event.target as ScreenOrientation).type;
      switch (type) {
        case 'portrait-primary':
        case 'portrait-secondary': {
          setShowRotateMeDialog(false);
          break;
        }
        case 'landscape-primary':
        case 'landscape-secondary': {
          setShowRotateMeDialog(true);
          break;
        }
        default: {
          console.warn('Unknown orientation type', type);
        }
      }
    };

    screen.orientation.addEventListener(
      'change',
      handleScreenOrientationChange
    );
    return () =>
      screen.orientation.removeEventListener(
        'change',
        handleScreenOrientationChange
      );
  }, []);

  useLayoutEffect(() => {
    if (showRotateMeDialog) {
      dialogReference.current?.show();
    } else {
      dialogReference.current?.close();
    }
  }, [showRotateMeDialog]);

  return (
    <dialog
      className={cn(
        'hidden coarse:open:grid',
        'fixed inset-0 h-screen w-screen',
        'place-items-center',
        className
      )}
      style={{ backgroundColor: homeBgColor }}
      ref={dialogReference}
    >
      <div className={cn('flex flex-nowrap items-center gap-5')}>
        <CherriesRotatedSvg />
        <p className={cn('text-lg')}>
          <span className={cn(parisienneStyle)}>Please</span>{' '}
          <span>rotate</span> <span className={cn(pirataOneStyle)}>your</span>{' '}
          <span className={cn(lektonStyle)}>device.</span>{' '}
        </p>
        <CherriesRotatedSvg />
      </div>
    </dialog>
  );
}
