'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { useAtom } from 'jotai';

import { AutoComplete } from './autocomplete';

import { currentProjectAtom } from '@/atoms/current-project-atom';
import { ApprovedProject } from '@/core/types';
import { useApprovedProjects } from '@/hooks/use-approved-projects';
import { normalizeString } from '@/utils/normalize-string';

export const ProjectInput = () => {
  const { data: projects, isPending } = useApprovedProjects();

  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const [search, setSearch] = useState('');
  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
    if (currentProject) setCurrentProject(null);
  };

  const [items, setItems] = useState<ApprovedProject[]>([]);
  const showAllItems = useCallback(() => setItems(projects ?? []), [projects]);
  const renderItem = (index: number) => <p>{items[index].inputValue}</p>;

  const onSelect = (value: string) => {
    setSearch(value);
    const matchKey = normalizeString(value);
    const selected = (items ?? []).find((project) => project.key === matchKey);
    if (selected) setCurrentProject(selected);
  };

  const { push } = useRouter();
  const onClickFetch = () => {
    if (currentProject) {
      push(`/projects/${currentProject.key}`);
    }
  };

  useEffect(() => {
    if (!search) {
      showAllItems();
      return;
    }

    if (search.length > 1) {
      const newItems = (projects ?? [])
        .filter((project) => {
          const inputMatch = search.toLowerCase();
          const isMatchKey = project.key.includes(inputMatch);
          const isMatchTitle = project.projects
            .map((p) => p.title)
            .some((title) => title.includes(inputMatch));
          return isMatchKey || isMatchTitle;
        })
        .map((project) => ({ ...project, value: project.projects[0].title }));
      setItems(newItems);
    }
  }, [projects, search, showAllItems]);

  return (
    <>
      <AutoComplete
        items={items}
        inputValue={search}
        onChangeInput={onChangeInput}
        onSelect={onSelect}
        renderItem={renderItem}
        isLoading={isPending}
      />
      <button className="btn" disabled={!currentProject || !search} onClick={onClickFetch}>
        Fetch Data
      </button>
    </>
  );
};
