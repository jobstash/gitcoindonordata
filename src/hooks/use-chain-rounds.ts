import { useQuery } from '@tanstack/react-query';

import { STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getChainRounds } from '@/data/get-chain-rounds';

export const useChainRounds = (option?: { enabled: boolean }) => {
  const { enabled } = option || { enabled: true };

  return useQuery({
    queryKey: queryKeys.chainRounds(),
    queryFn: () => getChainRounds(),
    staleTime: STALETIME.DEFAULT,
    enabled,
  });
};
