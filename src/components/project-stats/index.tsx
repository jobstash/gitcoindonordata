import { StatsSection } from '../stats-section';

import { ContributorsCount } from './contributors-count';
import { UniqueContributorsCount } from './unique-contributors-count';

import { ApprovedProject } from '@/core/types';

interface Props {
  project: ApprovedProject;
}

export const ProjectStats = ({ project }: Props) => {
  const { estimatedFunds, projects } = project;

  const stats = [
    { label: 'Est. funding received', content: `$${estimatedFunds}` },
    { label: 'No. of contributors', content: <ContributorsCount project={project} /> },
    { label: 'Unique contributors', content: <UniqueContributorsCount project={project} /> },
    { label: 'Rounds participated', content: projects.map((p) => p.roundId).length },
  ];

  return <StatsSection title="All-time stats" stats={stats} />;
};
