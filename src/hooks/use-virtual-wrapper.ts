import { useRef } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

export const useVirtualWrapper = (count: number) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ESTIMATE_SIZE,
    overscan: OVERSCAN,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
    initialRect: {
      width: ESTIMATE_SIZE,
      height: ESTIMATE_SIZE * 20,
    },
  });
  const items = virtualizer.getVirtualItems();

  return { parentRef, virtualizer, items };
};

const OVERSCAN = 5;
const ESTIMATE_SIZE = 500;
