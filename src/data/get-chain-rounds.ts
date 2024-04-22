import { CHAINS, INDEXER_URL_PREFIX } from '@/core/constants';
import { ChainRoundsData, Round } from '@/core/types';

export const getChainRounds = async (): Promise<ChainRoundsData[]> => {
  const promises = [];

  for (const chain of CHAINS) {
    promises.push(
      fetch(`${INDEXER_URL_PREFIX}/${chain.id}/rounds.json`)
        .then((res) => res.json())
        .then((rounds: Round[]) => ({ chain, rounds })),
    );
  }

  return Promise.all(promises);
};
