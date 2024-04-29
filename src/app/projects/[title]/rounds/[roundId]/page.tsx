import dynamic from 'next/dynamic';
import { redirect, RedirectType } from 'next/navigation';

import { ProjectInfo } from '@/components/project-info';
import { RoundBreadcrumbs } from '@/components/round-breadcrumbs';
import { RoundInfo } from '@/components/round-info';
import { RoundStats } from '@/components/round-stats';
import { getProjectNameFromTitle } from '@/utils/get-project-name-from-title';

const DonationsTable = dynamic(
  () => import('@/components/donations-table').then((m) => m.DonationsTable),
  {
    ssr: false,
    loading: () => <p>Loading donations ...</p>,
  },
);

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
