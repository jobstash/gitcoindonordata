'use client';

import { useMemo } from 'react';

import { ApprovedProject } from '@/core/types';
import { useProjectVotes } from '@/hooks/use-project-votes';

interface Props {
  project: ApprovedProject;
  roundId?: string;
}

export const UniqueContributorsCount = ({ project, roundId }: Props) => {
  const { data } = useProjectVotes(project, roundId);

  const uniqueCount = useMemo(() => {
    if (!data) return 0;

    const uniqueSet = new Set();
    for (const { voter } of data) {
      uniqueSet.add(voter);
    }

    return uniqueSet.size;
  }, [data]);

  if (!data) return <span>Loading ...</span>;

  return <span>{uniqueCount}</span>;
};
