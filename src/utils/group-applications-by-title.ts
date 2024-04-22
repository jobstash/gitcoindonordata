import { normalizeString } from './normalize-string';

import { Application, GroupedApplications } from '@/core/types';

export const groupApplicationsByTitle = (
  applications: Application[],
): GroupedApplications[] => {
  const normalizedMap = new Map<string, Application[]>();

  for (const application of applications) {
    const {
      metadata: {
        application: {
          project: { title },
        },
      },
    } = application;
    const key = normalizeString(title);
    const prev = normalizedMap.get(key) || [];
    normalizedMap.set(key, [...prev, application]);
  }

  return Array.from(normalizedMap.entries(), ([key, applications]) => ({
    key,
    applications,
  }));
};
