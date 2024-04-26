import { redirect, RedirectType } from 'next/navigation';

import { DonationsTable } from '@/components/donations-table';
import { ProjectInfo } from '@/components/project-info';
import { RoundBreadcrumbs } from '@/components/round-breadcrumbs';
import { RoundInfo } from '@/components/round-info';
import { RoundStats } from '@/components/round-stats';
import { getProjectNameFromTitle } from '@/utils/get-project-name-from-title';

interface Props {
  params: {
    title: string;
    roundId: string;
  };
}

const RoundPage = ({ params: { title, roundId } }: Props) => {
  return (
    <div>
      <RoundBreadcrumbs title={title} roundId={roundId} />
      <ProjectInfo title={title} />
      <RoundInfo title={title} roundId={roundId} />
      <RoundStats title={title} roundId={roundId} />
      <DonationsTable title={title} roundId={roundId} />
    </div>
  );
};
export default RoundPage;

export const generateMetadata = async ({ params: { title } }: Props) => {
  const name = await getProjectNameFromTitle(title);
  if (!name) redirect('/', RedirectType.replace);

  return { title: name };
};
