'use client';

import { useState } from 'react';

import { VirtualWrapper } from './virtual-wrapper';

import { WithValue } from '@/core/types';
import { cn } from '@/utils/cn';

type Props<T extends WithValue> = {
  items: T[];
  total: number;
  inputValue: string;
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  onSelect: (value: string) => void;
  renderItem: (index: number) => React.ReactNode;
  isLoading: boolean;
};

export const AutoComplete = <T extends WithValue>(props: Props<T>) => {
  const { items, total, inputValue, onChangeInput, onSelect, renderItem, isLoading } = props;
  const hasItems = items.length > 0;
  const hasMatched = hasItems && inputValue === items[0].value;
  const isFiltered = inputValue.length > 1;

  const [open, setOpen] = useState(false);

  return (
    <div className={cn('dropdown relative z-30 w-full', { 'dropdown-open': open })}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow font-sans text-xs md:text-sm"
          value={inputValue}
          onChange={onChangeInput}
          placeholder="Enter project name"
          tabIndex={0}
        />
        {isLoading && <span className="loading loading-spinner text-neutral-400"></span>}
      </label>

      <div className="dropdown-content top-14 max-h-96 w-full flex-col overflow-auto rounded-md bg-base-200">
        {isLoading && (
          <div className="p-4">
            <p>Loading ...</p>
          </div>
        )}

        {!isLoading && !isFiltered && (
          <div className="p-4">
            <p>{`Search from ${total} gitcoin projects ...`}</p>
          </div>
        )}

        {hasItems && !hasMatched && isFiltered && (
          <ul className="menu-compact menu">
            <VirtualWrapper count={items.length}>
              {(index) => (
                <li
                  tabIndex={index + 1}
                  onClick={() => {
                    onSelect(items[index].value);
                    setOpen(false);
                  }}
                >
                  <button>{renderItem(index)}</button>
                </li>
              )}
            </VirtualWrapper>
          </ul>
        )}
      </div>
    </div>
  );
};
