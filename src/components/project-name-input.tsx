'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

import { AutoComplete } from './autocomplete';

import { Project, SearchProjectsResponse } from '@/core/types';
import { useSearchProjects } from '@/hooks/use-search-projects';
import { cn } from '@/utils/cn';
import { sendEvent } from '@/utils/send-event';

const MIN_QUERY_LENGTH = 3;

export const ProjectNameInput = () => {
  const [query, setQuery] = useState('');
  const { data, isFetching } = useSearchProjects(query.length > MIN_QUERY_LENGTH ? query : undefined) as SearchProjectsResponse;
  const [results, updateResults] = useState<Project[]>([]);
  const [currentItem, setCurrentItem] = useState<Project | null>(null);

  const onSelect = (projectId: string) => {
    setCurrentItem(results.find((project) => project.id === projectId) ?? null);
  };

  const { push } = useRouter();
  const [isPendingPush, startPushTransition] = useTransition();

  /**
   * Navigate to project page on select
   */
  const onClickFetch = () => {
    console.log('clicked fetch...');
    if (currentItem) {
      sendEvent('buttonClicked', `Fetch Data: "${currentItem.id}"`);
      startPushTransition(() => push(`/projects/${currentItem.chainId}/${currentItem.id}`));
    }
  };

  useEffect(() => {
    if (data?.searchProjects && data?.searchProjects.length > 0) {
      updateResults(data.searchProjects.map((project: Project) => ({
        ...project,
        value: project.id,
      }))
      );
    }
  }, [data]);

  const isLoadingBtn = isFetching || isPendingPush;

  const renderAutocompleteSuggestion = (index: number) => {
    const title = `${results[index].name} (${results[index].chainId})`;
    return <p>{title}</p>;
  };

  return (
    <>
      <AutoComplete
        // @ts-expect-error TODO: fix this
        items={results}
        total={results.length}
        inputValue={currentItem?.name ?? query}
        onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        onSelect={onSelect}
        renderItem={renderAutocompleteSuggestion}
        isLoading={isFetching}
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
