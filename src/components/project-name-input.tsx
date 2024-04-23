'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { AutoComplete } from './autocomplete';

import { WithValue } from '@/core/types';
import { useProjectNames } from '@/hooks/use-project-names';
import { normalizeString } from '@/utils/normalize-string';

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
  const onClickFetch = () => {
    if (currentItem) {
      push(`/projects/${currentItem.key}`);
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

  return (
    <>
      <AutoComplete
        items={items}
        total={data?.length ?? 0}
        inputValue={search}
        onChangeInput={onChangeInput}
        onSelect={onSelect}
        renderItem={renderItem}
        isLoading={!data}
      />
      <button className="btn" disabled={!currentItem || !search} onClick={onClickFetch}>
        Fetch Data
      </button>
    </>
  );
};
