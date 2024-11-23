import { useQuery } from '@tanstack/react-query';

import { useProject } from './use-project';

import { STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getRoundInfo } from '@/utils/get-round-info';

/**
 * @deprecated use useRoundInfoV2 instead
 */
export const useRoundInfo = (title: string, roundId?: string) => {
  const { data } = useProject(title);

  const applicationIds = data?.map((d) => d.applications!.map((a) => a.id)).flat() ?? [];

  return useQuery({
    queryKey: queryKeys.getRoundInfo(title, applicationIds, roundId),
    // @ts-expect-error TODO: fix this
    queryFn: () => getRoundInfo(data, roundId),
    enabled: !!data,
    staleTime: STALETIME.DEFAULT,
  });
};
