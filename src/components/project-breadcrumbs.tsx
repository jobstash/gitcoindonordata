'use client';

import { Breadcrumbs } from './breadcrumbs';

import { useProject } from '@/hooks/use-project';

interface Props {
  title: string;
}

export const ProjectBreadcrumbs = ({ title }: Props) => {
  const { data } = useProject(title);
  const name = (data ?? []).map((d) => d.name)[0];

  const links = data
    ? [
        {
          text: name,
          href: `/projects/${title}`,
        },
      ]
    : [];

  return <Breadcrumbs links={links} />;
};
