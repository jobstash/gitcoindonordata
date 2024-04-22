import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import { useApprovedProjects } from './use-approved-projects';

import { currentProjectAtom } from '@/atoms/current-project-atom';
import { STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getProject } from '@/data/get-project';

export const useProject = (title: string) => {
  const currentProject = useAtomValue(currentProjectAtom);

  const { data: approvedProjects } = useApprovedProjects({
    enabled: !currentProject,
  });

  return useQuery({
    queryKey: queryKeys.project(title),
    queryFn: () => getProject({ title, currentProject, approvedProjects: approvedProjects! }),
    staleTime: STALETIME.DEFAULT,
  });
};
