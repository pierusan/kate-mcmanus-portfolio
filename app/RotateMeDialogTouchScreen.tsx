'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { lektonStyle, parisienneStyle, pirataOneStyle } from './fontSubsets';
import { cn } from './helpers';
import CherriesRotatedSvg from './icons/cherriesRotated.svg';
import { useHomeBgColor } from './useHomeBgColor';

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
    setShowRotateMeDialog(!screen.orientation.type.includes('portrait'));
  }, []);

  useLayoutEffect(() => {
    if (showRotateMeDialog) {
      dialogReference.current?.show();
    } else {
      dialogReference.current?.close();
    }
  }, [showRotateMeDialog]);

  useEffect(() => {
    const handleOrientationChange = (
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

    screen.orientation.addEventListener('change', handleOrientationChange);
  }, []);

  return (
    <dialog
      className={cn(
        'hidden open:grid',
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
