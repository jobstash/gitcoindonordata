'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { RoundContributorCount } from './round-contributor-count';

import { ApprovedProject } from '@/core/types';
import { useRoundInfos } from '@/hooks/use-round-infos';

interface Props {
  project: ApprovedProject;
}

export const ProjectRoundStats = ({ project }: Props) => {
  const { push } = useRouter();
  const { data } = useRoundInfos(project);

  return (
    <div>
      <span>Round stats</span>
      {!data ? (
        <p>Loading</p>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {data.map(({ id, name, amountUSD, dateText, logo, chain }) => (
            <div key={id} className="flex flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col gap-2">
                  <span>{name}</span>
                  <span>{dateText}</span>
                  <span>{chain}</span>
                </div>
                <Image height={IMAGE_SIZE} width={IMAGE_SIZE} alt={name} src={logo} />
              </div>
              <span>{`$${amountUSD.toFixed(2)}`}</span>
              <RoundContributorCount project={project} roundId={id} />
              <button
                className="btn"
                onClick={() => push(`/projects/${project.key}/rounds/${id}`)}
              >
                View round
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const IMAGE_SIZE = 36;
