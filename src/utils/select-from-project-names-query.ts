import { normalizeString } from './normalize-string';

import { GetProjectNamesQuery } from '@/gql/graphql';

export const selectFromProjectNamesQuery = (
  data: GetProjectNamesQuery,
  normalizedName?: string,
) => {
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
};
