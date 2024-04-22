'use client';

import { useState } from 'react';

import { VirtualWrapper } from './virtual-wrapper';

import { cn } from '@/utils/cn';

type Props<T extends WithValue> = {
  items: T[];
  inputValue: string;
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  onSelect: (value: string) => void;
  renderItem: (index: number) => React.ReactNode;
  isLoading: boolean;
};

export const AutoComplete = <T extends WithValue>(props: Props<T>) => {
  const { items, inputValue, onChangeInput, onSelect, renderItem, isLoading } = props;

  const [open, setOpen] = useState(false);

  return (
    <div className={cn('min-w-sm dropdown w-full', { 'dropdown-open': open })}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          value={inputValue}
          onChange={onChangeInput}
          placeholder="Enter project name"
          tabIndex={0}
        />
        {isLoading && <span className="loading loading-ring"></span>}
      </label>

      <div className="dropdown-content top-14 max-h-96 w-full flex-col overflow-auto rounded-md bg-base-200">
        {!isLoading && (
          <ul className="menu-compact menu">
            <VirtualWrapper count={items.length}>
              {(index) => (
                <li
                  tabIndex={index + 1}
                  onClick={() => {
                    setOpen(false);
                    onSelect(items[index].inputValue);
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

interface WithValue {
  inputValue: string;
}
