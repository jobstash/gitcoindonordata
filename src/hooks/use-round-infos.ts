import { useQuery } from '@tanstack/react-query';

import { useChainRounds } from './use-chain-rounds';

import { STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { ApprovedProject } from '@/core/types';
import { getRoundInfos } from '@/data/get-round-infos';

export const useRoundInfos = (project: ApprovedProject | undefined, roundId?: string) => {
  const { data: chainRounds } = useChainRounds();
  return useQuery({
    queryKey: queryKeys.roundInfos(project?.key, roundId),
    queryFn: () => getRoundInfos(project!, chainRounds!, roundId),
    staleTime: STALETIME.DEFAULT,
    enabled: !!chainRounds && !!project,
  });
};
