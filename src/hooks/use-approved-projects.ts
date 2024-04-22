import { useQuery } from '@tanstack/react-query';

import { useChainRounds } from './use-chain-rounds';

import { STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getApprovedProjects } from '@/data/get-approved-projects';

export const useApprovedProjects = (option?: { enabled: boolean }) => {
  const { enabled } = option || { enabled: true };

  const { data: chainRounds } = useChainRounds();
  return useQuery({
    queryKey: queryKeys.approvedProjects(chainRounds ?? []),
    queryFn: () => getApprovedProjects(chainRounds ?? []),
    staleTime: STALETIME.DEFAULT,
    enabled,
    retry: false,
  });
};
