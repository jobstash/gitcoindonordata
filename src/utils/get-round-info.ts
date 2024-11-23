import { formatDate } from './format-date';

import { CHAINS } from '@/core/constants';
import { Project } from '@/core/types';

export const getRoundInfo = (project: Project, roundId?: string) => {
  if (!project)
    return {
      name: DEFAULT_TEXT,
      chain: null,
      logo: null,
      projectName: DEFAULT_TEXT,
      startTime: DEFAULT_TEXT,
      endTime: DEFAULT_TEXT,
      estimatedFunds: 0,
      contributors: 0,
      uniqueContributors: 0,
      roundsParticipated: 0,
      avgContribution: 0,
    };

  let estimatedFunds: number = 0;
  let contributors: number = 0;
  let name: string | undefined;
  let chain: (typeof CHAINS)[number] | null = null;
  let donationsStartTime: string | undefined;
  let donationsEndTime: string | undefined;
  const donorsSet = new Set();

  const projectName = project.name!;
  const applicationList = project.applications ?? [];
  const applications = roundId
    ? applicationList.filter((a) => a!.round?.id === roundId)
    : applicationList;

  for (const application of applications) {
    estimatedFunds += application!.totalAmountDonatedInUsd ?? 0;
    contributors += application!.totalDonationsCount ?? 0;

    // TODO: This is a temporary solution to get the donors. We need to use the API to get the donors.
    // we should have a helper function to get the donors from the API so its more performant.
    const donors = application!.donations.map((d) => d.donorAddress);
    for (const donor of donors) {
      if (donor) donorsSet.add(donor);
    }

    if (application?.round?.id === roundId) {
      name = application?.round?.roundMetadata.name;
      chain = CHAINS.find((c) => c.id === `${application?.chainId}`)!;
      donationsStartTime = application?.round?.donationsStartTime;
      donationsEndTime = application?.round?.donationsEndTime;
    }
  }

  return {
    name,
    chain,
    projectName,
    startTime: formatDate(donationsStartTime!),
    endTime: formatDate(donationsEndTime!),
    estimatedFunds: `$${estimatedFunds.toFixed(2)}`,
    contributors,
    uniqueContributors: donorsSet.size,
    roundsParticipated: applicationList.length,
    avgContribution: !contributors ? '$0' : `$${(estimatedFunds / contributors).toFixed(2)}`,
  };
};

const DEFAULT_TEXT = 'N/A';
