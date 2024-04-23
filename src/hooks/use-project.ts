import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

import { useProjectNames } from './use-project-names';

import { GQL_ENDPOINT, STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getProjectsByIds } from '@/data/get-projects-by-ids';

export const useProject = (title: string) => {
  const { data: projectNames } = useProjectNames(title);

  const projectIds = Array.from(
    new Set(
      (projectNames ?? [])
        .flatMap((p) => p.projects.map((p) => p?.id))
        .filter(Boolean) as string[],
    ),
  );

  return useQuery({
    queryKey: queryKeys.getProjects(projectIds),
    queryFn: () => request(GQL_ENDPOINT, getProjectsByIds, { projectIds }),
    staleTime: STALETIME.DEFAULT,
    enabled: !!projectNames,
    select: (data) => {
      const result = data.projects!.sort((a, b) => b.metadata.createdAt - a.metadata.createdAt);

      // // Sort by donations desc
      // const result = data.projects!.sort((a, b) => {
      //   const donationsB = getTotalDonations(b);
      //   const donationsA = getTotalDonations(a);

      //   return donationsB - donationsA;
      // });

      return result;
    },
  });
};

// const getTotalDonations = (project: NonNullable<GetProjectQuery['projects']>[number]) => {
//   return (project.applications ?? []).reduce(
//     (total, application) => total + application.donations.length,
//     0,
//   );
// };
