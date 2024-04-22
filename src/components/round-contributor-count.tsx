import { ApprovedProject } from '@/core/types';
import { useProjectVotes } from '@/hooks/use-project-votes';

interface Props {
  project: ApprovedProject;
  roundId: string;
}

export const RoundContributorCount = ({ project, roundId }: Props) => {
  const { data } = useProjectVotes(project, roundId);

  if (!data) return <span>Loading ...</span>;

  return <span>{`total raised by ${data.length} contributors`}</span>;
};
