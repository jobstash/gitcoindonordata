import { useQuery } from '@tanstack/react-query';

import { STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { ApprovedProject } from '@/core/types';
import { getProjectVotes } from '@/data/get-project-votes';

export const useProjectVotes = (project: ApprovedProject, roundId?: string) => {
  return useQuery({
    queryKey: queryKeys.projectVotes(project.key, roundId),
    queryFn: () => getProjectVotes(project, roundId),
    staleTime: STALETIME.DEFAULT,
  });
};
