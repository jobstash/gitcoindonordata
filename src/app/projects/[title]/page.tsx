import { ProjectBreadcrumbs } from '@/components/project-breadcrumbs';
import { ProjectDonations } from '@/components/project-donations';
import { ProjectInfo } from '@/components/project-info';
import { ProjectRoundStats } from '@/components/project-round-stats';
import { ProjectStats } from '@/components/project-stats';

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
