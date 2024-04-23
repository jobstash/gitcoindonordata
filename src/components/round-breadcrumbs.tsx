'use client';

import { Breadcrumbs } from './breadcrumbs';

import { useRoundInfo } from '@/hooks/use-round-info';

interface Props {
  title: string;
  roundId: string;
}

export const RoundBreadcrumbs = ({ title, roundId }: Props) => {
  const { data } = useRoundInfo(title, roundId);

  const links = data
    ? [
        {
          text: data.projectName,
          href: `/projects/${title}`,
        },
        {
          text: `${data.name}${data.chain ? ` (${data.chain.name})` : ''}`,
          href: `/projects/${title}/rounds/${roundId}`,
        },
      ]
    : [];

  return <Breadcrumbs links={links} />;
};
