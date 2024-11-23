import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

import { GQL_ENDPOINT, STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getProjectNames } from '@/data/get-project-names';
import { selectFromProjectNamesQuery } from '@/utils/select-from-project-names-query';

/**
 * @deprecated
 */
export const useProjectNames = (normalizedName?: string) => {
  return useQuery({
    queryKey: queryKeys.getProjectNames(normalizedName),
    queryFn: () => request(GQL_ENDPOINT, getProjectNames),
    staleTime: STALETIME.DEFAULT,
    select: (data) => selectFromProjectNamesQuery(data, normalizedName),
  });
};
