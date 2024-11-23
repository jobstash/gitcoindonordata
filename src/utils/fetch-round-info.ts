import { getRoundInfo } from './get-round-info';

import { Project } from '@/gql/graphql';

export const fetchRoundInfo = (project: Project, roundId?: string) => {
  return getRoundInfo(project, roundId);
};
