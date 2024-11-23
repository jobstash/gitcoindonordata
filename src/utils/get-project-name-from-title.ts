import request from 'graphql-request';

import { getQueryClient } from './get-query-client';
import { normalizeString } from './normalize-string';
import { selectFromProjectNamesQuery } from './select-from-project-names-query';

import { GQL_ENDPOINT, STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getProjectNames } from '@/data/get-project-names';

/**
 * @deprecated
 */
export const getProjectNameFromTitle = async (title: string) => {
  const queryClient = getQueryClient();
  const normalizedName = normalizeString(title);

  const projectNamesData = await queryClient.fetchQuery({
    queryKey: queryKeys.getProjectNames(),
    queryFn: () => request(GQL_ENDPOINT, getProjectNames),
    staleTime: STALETIME.DEFAULT,
  });

  return selectFromProjectNamesQuery(projectNamesData, normalizedName)
    .flatMap((p) => p.projects)
    .find((p) => normalizeString(p?.name ?? '') === title)?.name;
};
