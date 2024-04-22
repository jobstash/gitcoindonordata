import { ApprovedProject } from '@/core/types';

interface Props {
  title: string;
  currentProject: ApprovedProject | null;
  approvedProjects: ApprovedProject[];
}

export const getProject = async ({ title, currentProject, approvedProjects }: Props) => {
  if (currentProject) {
    return {
      isLoading: false,
      project: currentProject,
    };
  }

  const project = approvedProjects?.find((p) => p.key === title);
  const isLoading = !approvedProjects;

  return {
    project,
    isLoading,
  };
};
