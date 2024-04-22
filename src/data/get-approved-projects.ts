import { INDEXER_URL_PREFIX } from '@/core/constants';
import { Application, ApprovedProject, ChainRoundsData } from '@/core/types';
import { fulfilledPromises } from '@/utils/fulfilled-promises';
import { getPropsFromApplications } from '@/utils/get-props-from-applications';
import { groupApplicationsByTitle } from '@/utils/group-applications-by-title';

export const getApprovedProjects = async (
  chainRounds: ChainRoundsData[],
): Promise<ApprovedProject[]> => {
  const promises = [];

  for (const { chain, rounds } of chainRounds) {
    for (const round of rounds) {
      promises.push(
        fetch(`${INDEXER_URL_PREFIX}/${chain.id}/rounds/${round.id}/applications.json`)
          .then((res) => res.json())
          .then((data: Application[]) => data.filter((d) => d.status === 'APPROVED')),
      );
    }
  }

  const fetchedApplications = await fulfilledPromises(promises);
  const groupedApplications = groupApplicationsByTitle(fetchedApplications);

  return groupedApplications.map(({ key, applications }) => ({
    key,
    ...getPropsFromApplications(applications),
  }));
};
