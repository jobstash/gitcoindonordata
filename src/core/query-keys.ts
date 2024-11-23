export const queryKeys = {
  all: ['all'] as const,
  getProjects: (projectIds: string[]) =>
    [...queryKeys.all, 'get-projects', projectIds] as const,
  getProjectNames: (title?: string) => [...queryKeys.all, 'get-project-names', title] as const,
  getProject: (id: string) => [...queryKeys.all, 'get-project', id] as const,
  getRoundInfo: (title: string, applicationIds: string[], roundId?: string) =>
    [...queryKeys.all, 'get-round-info', title, applicationIds, roundId] as const,
  getEnsNames: (addresses: string[]) => [...queryKeys.all, 'get-ens-names', addresses] as const,
  searchProjects: (searchTerm: string) => [...queryKeys.all, 'search-projects', searchTerm] as const,
};
