'use client';

import { useEffect } from 'react';
import { useHomeBgColor } from './useHomeBgColor';

let didRenderInBrowserOnce = false;

export function BodyBgFromCharactersFlipped() {
  const bgColor = useHomeBgColor();

  // document is only available in the browser so we only use this style update
  // after hydration
  if (didRenderInBrowserOnce && typeof window !== 'undefined') {
    document.body.style.backgroundColor = bgColor;
  }

  useEffect(() => {
    didRenderInBrowserOnce = true;
  }, []);

  return <></>;
}
