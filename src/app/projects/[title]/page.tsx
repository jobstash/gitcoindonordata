'use client';

import { useEffect } from 'react';

import { useAtom } from 'jotai';

import { currentProjectAtom } from '@/atoms/current-project-atom';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ProjectImage } from '@/components/project-image';
import { ProjectRoundStats } from '@/components/project-round-stats';
import { ProjectStats } from '@/components/project-stats';
import { useProject } from '@/hooks/use-project';

interface Props {
  params: {
    title: string;
  };
}

const ProjectPage = ({ params: { title } }: Props) => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  const { data } = useProject(title);

  useEffect(() => {
    if (!!data?.project && currentProject?.key !== data?.project.key) {
      setCurrentProject(data.project);
    }
  }, [currentProject?.key, data?.project, setCurrentProject]);

  if (!data) return null;
  if (data?.isLoading) return <p>Loading ...</p>;
  if (!data.project) return <p>NOT FOUND</p>;

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs
        links={[
          { text: 'Home', href: '/' },
          { text: data.project.inputValue, href: `/projects/${title}` },
        ]}
      />
      <ProjectImage project={data.project} />
      <span>{data.project.inputValue}</span>
      <hr />
      <ProjectStats project={data.project} />
      <ProjectRoundStats project={data.project} />
    </div>
  );
};

export default ProjectPage;
