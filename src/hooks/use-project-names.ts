import { useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';

import { GQL_ENDPOINT, STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getProjectNames } from '@/data/get-project-names';
import { selectFromProjectNamesQuery } from '@/utils/select-from-project-names-query';
import { GetProjectNamesQuery } from '@/gql/graphql';

export const useProjectNames = (normalizedName?: string) => {
  return useQuery({
    queryKey: queryKeys.getProjectNames(normalizedName),
    queryFn: async () => {
      let offset = 0;
      const limit = 200;
      const allData: GetProjectNamesQuery[] = [];
      let hasMore = true;

      while (hasMore) {
        const data = await request(GQL_ENDPOINT, getProjectNames, { offset });
        if (data && data.applications.length > 0) {
          allData.push(data);
          offset += limit;
        } else {
          hasMore = false;
        }
      }

      return allData;
    },
    staleTime: STALETIME.DEFAULT,
    select: (data) => selectFromProjectNamesQuery(
      { applications: data.flatMap((query) => query.applications) },
      normalizedName
    ),
  });
};
