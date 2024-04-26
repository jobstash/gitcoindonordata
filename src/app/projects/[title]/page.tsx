import '@glideapps/glide-data-grid/dist/index.css';

import dynamic from 'next/dynamic';
import { redirect, RedirectType } from 'next/navigation';

import { ProjectBreadcrumbs } from '@/components/project-breadcrumbs';
import { ProjectInfo } from '@/components/project-info';
import { ProjectRoundStats } from '@/components/project-round-stats';
import { ProjectStats } from '@/components/project-stats';
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
  };
}

const ProjectPage = ({ params: { title } }: Props) => {
  return (
    <div>
      <ProjectBreadcrumbs title={title} />
      <ProjectInfo title={title} />
      <ProjectStats title={title} />
      <ProjectRoundStats title={title} />
      <DonationsTable title={title} />
    </div>
  );
};

export default ProjectPage;

export const generateMetadata = async ({ params: { title } }: Props) => {
  const name = await getProjectNameFromTitle(title);
  if (!name) redirect('/', RedirectType.replace);

  return { title: name };
};
