'use client';

import { StatsSection } from './stats-section';

import { useRoundInfo } from '@/hooks/use-round-info';

interface Props {
  title: string;
  roundId: string;
}

export const RoundStats = ({ title, roundId }: Props) => {
  const { data } = useRoundInfo(title, roundId);

  if (!data) return <p>Loading Round Stats ...</p>;

  const { estimatedFunds, contributors, uniqueContributors, avgContribution } = data;

  const stats = [
    { label: 'Est. funding received', content: estimatedFunds },
    { label: 'No. of contributions', content: contributors },
    { label: 'Unique contributors', content: uniqueContributors },
    { label: 'Avg. contribution', content: avgContribution },
  ];

  return <StatsSection title="Overall stats" stats={stats} />;
};
