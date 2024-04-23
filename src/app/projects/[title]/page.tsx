import '@glideapps/glide-data-grid/dist/index.css';

import dynamic from 'next/dynamic';

import { ProjectBreadcrumbs } from '@/components/project-breadcrumbs';
import { ProjectInfo } from '@/components/project-info';
import { ProjectRoundStats } from '@/components/project-round-stats';
import { ProjectStats } from '@/components/project-stats';

const ProjectDonations = dynamic(
  () => import('@/components/project-donations').then((m) => m.ProjectDonations),
  {
    ssr: false,
    loading: () => <p>LOading donations ...</p>,
  },
);

interface Props {
  params: {
    title: string;
  };
}

const ProjectPage = ({ params: { title } }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <ProjectBreadcrumbs title={title} />
      <ProjectInfo title={title} />
      <ProjectStats title={title} />
      <ProjectRoundStats title={title} />
      <ProjectDonations title={title} />
    </div>
  );
};
export default ProjectPage;
