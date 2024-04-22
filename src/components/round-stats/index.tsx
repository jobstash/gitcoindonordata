'use client';

import { StatsSection } from '../stats-section';

import { ApprovedProject, RoundInfo } from '@/core/types';
import { useProjectVotes } from '@/hooks/use-project-votes';

interface Props {
  project: ApprovedProject;
  roundInfo: RoundInfo;
}

export const RoundStats = ({ project, roundInfo }: Props) => {
  const { data } = useProjectVotes(project, roundInfo.id);

  if (!data) return <p>Loading XXX</p>;

  const estFunds = roundInfo.amountUSD;
  const estFundsText = `$${estFunds.toFixed(2)}`;
  const contributorCount = data.length;
  const uniqueCount = new Set(data.map((d) => d.voter)).size;
  const average = !contributorCount
    ? estFundsText
    : `$${(estFunds / contributorCount).toFixed(2)}`;

  const stats = [
    { label: 'Est. funding received', content: estFundsText },
    { label: 'No. of contributors', content: contributorCount },
    { label: 'Unique contributors', content: uniqueCount },
    { label: 'Avg. contribution', content: average },
  ];

  return <StatsSection title="Overall stats" stats={stats} />;
};
