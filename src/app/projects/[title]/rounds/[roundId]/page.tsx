import { ProjectInfo } from '@/components/project-info';
import { RoundBreadcrumbs } from '@/components/round-breadcrumbs';
import { RoundInfo } from '@/components/round-info';
import { RoundStats } from '@/components/round-stats';

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
    </div>
  );
};
export default RoundPage;
