'use client';

import { useProject } from '@/hooks/use-project';

interface Props {
  title: string;
}

export const ProjectDonations = ({ title }: Props) => {
  const { data } = useProject(title);

  return (
    <pre>
      {JSON.stringify(
        {
          donations: data?.flatMap((d) => d.applications?.flatMap((a) => a.donations)),
        },
        undefined,
        '\t',
      )}
    </pre>
  );
};
