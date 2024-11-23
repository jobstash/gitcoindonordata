'use client';

import { useEffect, useState } from 'react';

import { useProjectContext } from '@/app/projects/[chainId]/[projectId]/context';
import { StatsSection } from '@/components/stats-section';
import { fetchRoundInfo } from '@/utils/fetch-round-info';


interface RoundInfo {
  estimatedFunds: number;
  contributors: number;
  uniqueContributors: number;
  roundsParticipated: number;
}

export const ProjectStats = () => {
  const { project } = useProjectContext();
  const [roundInfo, setRoundInfo] = useState<RoundInfo | undefined>(undefined);

  useEffect(() => {
    if (!project) return;
    const data = fetchRoundInfo(project);
    setRoundInfo({
      estimatedFunds: Number(data.estimatedFunds),
      contributors: data.contributors,
      uniqueContributors: data.uniqueContributors,
      roundsParticipated: data.roundsParticipated,
    });
  }, [project]);

  const stats = [
    { label: 'Est. funding received', content: roundInfo?.estimatedFunds },
    { label: 'No. of contributions', content: roundInfo?.contributors },
    { label: 'Unique contributors', content: roundInfo?.uniqueContributors },
    { label: 'Rounds participated', content: roundInfo?.roundsParticipated },
  ];

  return <StatsSection title="All-time stats" stats={stats} />;
};
