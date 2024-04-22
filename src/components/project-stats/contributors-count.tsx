'use client';

import { ApprovedProject } from '@/core/types';
import { useProjectVotes } from '@/hooks/use-project-votes';

interface Props {
  project: ApprovedProject;
  roundId?: string;
}

export const ContributorsCount = ({ project, roundId }: Props) => {
  const { data } = useProjectVotes(project, roundId);

  if (!data) return <span>Loading ...</span>;

  return <span>{data.length}</span>;
};
