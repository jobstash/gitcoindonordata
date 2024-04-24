import { useQuery } from '@tanstack/react-query';

import { STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getEnsNames } from '@/data/get-ens-names';

export const useEnsNames = (addresses: string[]) => {
  return useQuery({
    queryKey: queryKeys.getEnsNames(addresses),
    queryFn: () => getEnsNames(addresses.slice(0, 50)),
    staleTime: STALETIME.DEFAULT,
    enabled: addresses.length > 0,
  });
};
