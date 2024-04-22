'use client';

import { useEffect } from 'react';

import { useAtom } from 'jotai';

import { currentProjectAtom } from '@/atoms/current-project-atom';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ProjectImage } from '@/components/project-image';
import { RoundInfoSection } from '@/components/round-info-section';
import { RoundStats } from '@/components/round-stats';
import { useProject } from '@/hooks/use-project';
import { useRoundInfos } from '@/hooks/use-round-infos';

interface Props {
  params: {
    title: string;
    roundId: string;
  };
}

const ProjectRoundPage = ({ params: { title, roundId } }: Props) => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  const { data } = useProject(title);
  const { data: roundInfos } = useRoundInfos(data?.project, roundId);

  useEffect(() => {
    if (!!data?.project && currentProject?.key !== data?.project.key) {
      setCurrentProject(data.project);
    }
  }, [currentProject?.key, data?.project, setCurrentProject]);

  if (!data || data?.isLoading || !roundInfos) return <p>Loading ...</p>;
  if (!data.project) return <p>NOT FOUND</p>;
  if (roundInfos && roundInfos.length === 0) return <p>Not FOUND</p>;

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs
        links={[
          { text: 'Home', href: '/' },
          { text: data.project.inputValue, href: `/projects/${title}` },
          { text: roundId, href: `/projects/${title}/rounds/${roundId}` },
        ]}
      />
      <ProjectImage project={data.project} />
      <span>{data.project.inputValue}</span>
      <hr />
      <RoundInfoSection roundInfo={roundInfos[0]} />
      <RoundStats project={data.project} roundInfo={roundInfos[0]} />
      <pre>{JSON.stringify({ roundInfos }, undefined, '\t')}</pre>
      <pre>{JSON.stringify({ project: data.project }, undefined, '\t')}</pre>
    </div>
  );
};

export default ProjectRoundPage;
