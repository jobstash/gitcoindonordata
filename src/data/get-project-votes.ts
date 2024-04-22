import { INDEXER_URL_PREFIX } from '@/core/constants';
import { ApprovedProject, Vote } from '@/core/types';
import { fulfilledPromises } from '@/utils/fulfilled-promises';

export const getProjectVotes = async (project: ApprovedProject, roundId?: string) => {
  const projectChainRounds: { chainId: string; roundId: string }[] = [];
  for (const { id, roundId } of project.projects) {
    projectChainRounds.push({
      chainId: id.split(':')[0],
      roundId,
    });
  }

  const promises = [];
  for (const { chainId, roundId: chainRoundId } of projectChainRounds) {
    promises.push(
      fetch(`${INDEXER_URL_PREFIX}/${chainId}/rounds/${chainRoundId}/votes.json`).then(
        (res) => res.json() as Promise<Vote[]>,
      ),
    );
  }

  const chainRoundVotes = await fulfilledPromises(promises);
  const projectIds = project.projects.map((p) => p.projectId);
  const projectVotes = chainRoundVotes.filter((vote) => projectIds.includes(vote.projectId));

  return roundId ? projectVotes.filter((v) => v.roundId === roundId) : projectVotes;
};
