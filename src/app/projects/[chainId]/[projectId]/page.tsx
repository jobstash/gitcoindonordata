import { ProjectProvider } from './context';

import { ProjectBreadcrumbs, ProjectInfo, ProjectRoundStats, ProjectStats } from '@/components/project';
import { getProject } from '@/utils/get-project';

// const DonationsTable = dynamic(
//   () => import('@/components/donations-table').then((m) => m.DonationsTable),
//   {
//     ssr: false,
//     loading: () => <p>Loading donations ...</p>,
//   },
// );

interface Props {
  params: {
    chainId: string;
    projectId: string;
  };
}

const ProjectPage = async ({ params: { chainId, projectId } }: Props) => {
  const project = await getProject({ chainId: Number(chainId), projectId });
  if (!project) return <p>Project not found</p>;

  return (
    <ProjectProvider project={project}>
      <ProjectBreadcrumbs />
      <ProjectInfo />
      <ProjectStats />
      <ProjectRoundStats />
      {/* <DonationsTable title={project.name!} /> */}
    </ProjectProvider>
  );
};

export default ProjectPage;

// FIXME: Restore this
// export const generateMetadata = async (props: Props) => {
//   const [chainId, projectId] = props.params['chainId-project-id'].split('-');
//   const project = await getProject({ chainId: Number(chainId), projectId });
//   if (!project) redirect('/', RedirectType.replace);
//   return { project };
// };
