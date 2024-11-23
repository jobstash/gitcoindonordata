'use client';

import { useProjectContext } from '@/app/projects/[chainId]/[projectId]/context';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const ProjectBreadcrumbs: React.FC = () => {
  const { project } = useProjectContext();
  if (!project) return null;

  const links = [{
    text: project.name,
    href: `/projects/${project.chainId}/${project.id}`,
  }];

  return <Breadcrumbs links={links} />;
};
