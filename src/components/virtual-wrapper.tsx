import { useVirtualWrapper } from '@/hooks/use-virtual-wrapper';

interface Props {
  count: number;
  children: (index: number) => JSX.Element;
}

export const VirtualWrapper = ({ count, children }: Props) => {
  const { parentRef, virtualizer, items } = useVirtualWrapper(count);

  return (
    <div ref={parentRef}>
      <div
        className="relative w-full"
        style={{
          height: virtualizer.getTotalSize(),
        }}
      >
        <div
          className="absolute left-0 top-0 w-full"
          style={{
            transform: `translateY(${
              items[0] ? items[0].start - virtualizer.options.scrollMargin : 0
            }px)`,
          }}
        >
          {items.map((item) => (
            <div key={item.key} data-index={item.index} ref={virtualizer.measureElement}>
              {children(item.index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
