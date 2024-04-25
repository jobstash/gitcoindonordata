'use client';

import { StatsSection } from './stats-section';

import { useRoundInfo } from '@/hooks/use-round-info';

interface Props {
  title: string;
}

export const ProjectStats = ({ title }: Props) => {
  const { data, error } = useRoundInfo(title);

  if (error) return <p>Project Stats Error: {error.message}</p>;
  if (!data) return <p>Loading Project Stats ...</p>;

  const { estimatedFunds, contributors, uniqueContributors, roundsParticipated } = data;

  const stats = [
    { label: 'Est. funding received', content: estimatedFunds },
    { label: 'No. of contributions', content: contributors },
    { label: 'Unique contributors', content: uniqueContributors },
    { label: 'Rounds participated', content: roundsParticipated },
  ];

  return <StatsSection title="All-time stats" stats={stats} />;
};
