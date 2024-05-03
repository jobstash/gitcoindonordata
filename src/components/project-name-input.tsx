'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

import { AutoComplete } from './autocomplete';

import { WithValue } from '@/core/types';
import { useProjectNames } from '@/hooks/use-project-names';
import { cn } from '@/utils/cn';
import { normalizeString } from '@/utils/normalize-string';
import { sendEvent } from '@/utils/send-event';

export const ProjectNameInput = () => {
  const { data } = useProjectNames();

  const [search, setSearch] = useState('');
  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearch(e.target.value);

  type Item = NonNullable<typeof data>[number] & WithValue;

  const [currentItem, setCurrentItem] = useState<Item | null>(null);
  const [items, setItems] = useState<Item[]>([]);

  const renderItem = (index: number) => <p>{items[index].value}</p>;

  const onSelect = (value: string) => {
    setSearch(value);
    const matchKey = normalizeString(value);
    const selected = (items ?? []).find((project) => project.key === matchKey);
    const name = selected?.projects.filter((p) => !!p?.name)[0]?.name;
    if (selected && name) setCurrentItem({ ...selected, value: name });
  };

  const { push } = useRouter();
  const [isPendingPush, startPushTransition] = useTransition();
  const onClickFetch = () => {
    if (currentItem) {
      sendEvent('buttonClicked', `Fetch Data: "${currentItem.value}"`);
      startPushTransition(() => push(`/projects/${currentItem.key}`));
    }
  };

  useEffect(() => {
    if (search.length > 1) {
      const newItems = (data ?? [])
        .filter((project) => {
          const inputMatch = search.toLowerCase();
          const isMatchKey = project.key.includes(inputMatch);
          const isMatchTitle = project.projects
            .map((p) => p?.name)
            .some((title) => title?.includes(inputMatch));
          return isMatchKey || isMatchTitle;
        })
        .map((project) => ({
          ...project,
          value: project.projects.filter((p) => !!p?.name)[0]?.name as string,
        }));

      setItems(newItems);
    }
  }, [data, search]);

  const isLoading = !data || isPendingPush;
  const isLoadingBtn = isLoading || !currentItem || !search;

  return (
    <>
      <AutoComplete
        items={items}
        total={data?.length ?? 0}
        inputValue={search}
        onChangeInput={onChangeInput}
        onSelect={onSelect}
        renderItem={renderItem}
        isLoading={isLoading}
      />
      <div className="absolute bottom-0 left-0 z-20 w-full">
        <button
          className={cn(
            'block h-[80px] w-full cursor-pointer rounded-b-xl bg-[#EBEBEB] px-8 py-3 font-mono text-[24px] font-semibold hover:opacity-75',
            { '!opacity-30 !cursor-default': isLoadingBtn },
          )}
          disabled={isLoadingBtn}
          onClick={onClickFetch}
        >
          Fetch Data
        </button>
      </div>
    </>
  );
};
