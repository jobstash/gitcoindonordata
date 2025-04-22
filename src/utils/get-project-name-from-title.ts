import request from 'graphql-request';

import { normalizeString } from './normalize-string';
import { selectFromProjectNamesQuery } from './select-from-project-names-query';

import { GQL_ENDPOINT } from '@/core/constants';
import { getProjectNames } from '@/data/get-project-names';
import { GetProjectNamesQuery } from '@/gql/graphql';

export const getProjectNameFromTitle = async (title: string) => {
  const normalizedName = normalizeString(title);

  let allProjectNamesData: GetProjectNamesQuery[] = [];
  let offset = 0;
  const limit = 200;

  while (true) {
    const projectNamesData = await request(GQL_ENDPOINT, getProjectNames, { offset });

    if (!projectNamesData || projectNamesData.applications.length === 0) {
      break;
    }

    allProjectNamesData = allProjectNamesData.concat(projectNamesData);
    offset += limit;
  }

  return selectFromProjectNamesQuery(
    { applications: allProjectNamesData.flatMap((query) => query.applications) },
    normalizedName)
    .flatMap((p) => p.projects)
    .find((p) => normalizeString(p?.name ?? '') === title)?.name;
};