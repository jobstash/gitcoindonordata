import { ChainRoundsData } from './types';

export const queryKeys = {
  all: ['all'] as const,
  chainRounds: () => [...queryKeys.all, 'chain-rounds'] as const,
  roundInfos: (title?: string, roundId?: string) =>
    [...queryKeys.all, 'round-infos', title, roundId] as const,
  project: (title: string) => [...queryKeys.all, 'project', title] as const,
  approvedProjects: (chainRounds: ChainRoundsData[]) =>
    [
      ...queryKeys.all,
      'approved-projects',
      chainRounds.map((c) => c.chain.id).join(','),
    ] as const,
  projectVotes: (normalizedTitle: string, roundId?: string) =>
    [...queryKeys.all, 'project-votes', normalizedTitle, roundId] as const,
};
