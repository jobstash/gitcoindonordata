import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

import { GQL_ENDPOINT, STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getProjectNames } from '@/data/get-project-names';
import { normalizeString } from '@/utils/normalize-string';

export const useProjectNames = (normalizedName?: string) => {
  return useQuery({
    queryKey: queryKeys.getProjectNames(normalizedName),
    queryFn: () => request(GQL_ENDPOINT, getProjectNames),
    staleTime: STALETIME.DEFAULT,
    select: (data) => {
      const projects = (data.applications ?? []).map((a) => a.project);
      const projectMap = new Map<string, typeof projects>();
      for (const project of projects!) {
        if (project && project.name) {
          const key = normalizeString(project.name);
          const prev = projectMap.get(key) || [];
          projectMap.set(key, [...prev, project]);
        }
      }
      const result = Array.from(projectMap.entries(), ([key, projects]) => ({ key, projects }));
      return normalizedName ? result.filter((r) => r.key === normalizedName) : result;
    },
  });
};
