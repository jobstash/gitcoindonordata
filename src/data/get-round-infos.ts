import { ApprovedProject, ChainRoundsData, RoundInfo } from '@/core/types';
import { getRoundTimestampText } from '@/utils/round-timestamp';

export const getRoundInfos = async (
  approvedProject: ApprovedProject,
  chainRounds: ChainRoundsData[] | undefined,
  roundId?: string,
) => {
  if (!chainRounds) return [];

  const roundMap = new Map<string, Omit<RoundInfo, 'amountUSD'>>();
  for (const chainRound of chainRounds) {
    for (const round of chainRound.rounds) {
      const {
        id,
        metadata: { name },
        roundStartTime,
        roundEndTime,
      } = round;
      const dateText = getRoundTimestampText(roundStartTime, roundEndTime);
      roundMap.set(round.id, {
        id,
        name,
        roundStartTime,
        roundEndTime,
        dateText,
        logo: chainRound.chain.logo,
        chain: chainRound.chain.name,
      });
    }
  }

  const result: RoundInfo[] = [];
  for (const project of approvedProject.projects) {
    const roundInfo = roundMap.get(project.roundId);
    if (roundInfo) {
      result.push({
        amountUSD: project.amountUSD,
        ...roundInfo,
      });
    }
  }

  return roundId ? result.filter((r) => r.id === roundId) : result;
};
