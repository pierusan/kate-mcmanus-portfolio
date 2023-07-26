import { useEffect, useState } from 'react';

// Our way to finding whether this is a touchscreen, using the same media
// query as CSS to avoid discrepancies
export function useIsPointerCoarse() {
  const [isPointerCoarse, setIsPointerCoarse] = useState(false);

  // Sync pointer coarse capability with React
  useEffect(() => {
    const mql = window.matchMedia('(pointer: coarse)');

    setIsPointerCoarse(mql.matches);

    // In development we might switch between desktop and mobile devices so we
    // listen to change events
    const handlePointerChange = (event: MediaQueryListEvent) => {
      setIsPointerCoarse(event.matches);
    };
    mql.addEventListener('change', handlePointerChange);

    return () => {
      mql.removeEventListener('change', handlePointerChange);
    };
  }, []);

  return isPointerCoarse;
}
