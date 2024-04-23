'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import { CHAINS } from '@/core/constants';
import { useProject } from '@/hooks/use-project';
import { formatDate } from '@/utils/format-date';
import { normalizeString } from '@/utils/normalize-string';

interface Props {
  title: string;
}

export const ProjectRoundStats = ({ title }: Props) => {
  const { push } = useRouter();
  const { data } = useProject(title);

  const roundInfos = useMemo(() => {
    if (!data) return [];

    const result = data.flatMap((d) =>
      d.applications!.map((application) => {
        const { totalAmountDonatedInUsd, totalDonationsCount, chainId, round } = application;
        const {
          id,
          roundMetadata: { name },
          donationsStartTime,
          donationsEndTime,
        } = round!;

        const chain = CHAINS.find((chain) => chain.id === `${chainId}`)!;

        return {
          id,
          name,
          chain,
          totalAmount: totalAmountDonatedInUsd ?? 0,
          contributors: totalDonationsCount ?? 0,
          startTime: formatDate(donationsStartTime),
          endTime: formatDate(donationsEndTime),
        };
      }),
    );

    return result;
  }, [data]);

  if (!data) return <p>Loading Round Stats ...</p>;

  const projectName = data.map((d) => d.name)[0]!;

  return (
    <div>
      <span>Round stats</span>
      <div className="grid grid-cols-3 gap-8">
        {roundInfos.map(
          ({ id, name, chain, totalAmount, contributors, startTime, endTime }) => (
            <div key={id} className="flex flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col gap-2">
                  <span>{name}</span>
                  <span>{`${startTime} - ${endTime}`}</span>
                  {chain?.name && <span>{chain.name}</span>}
                </div>
                {chain?.logo && (
                  <Image height={IMAGE_SIZE} width={IMAGE_SIZE} alt={name} src={chain.logo} />
                )}
              </div>

              <span>{`$${(totalAmount ?? 0).toFixed(2)}`}</span>

              <span>
                {!!contributors && contributors > 0
                  ? `total raised by ${contributors} contributors`
                  : 'No contributors'}
              </span>

              <button
                className="btn"
                onClick={() => push(`/projects/${normalizeString(projectName)}/rounds/${id}`)}
              >
                View round
              </button>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

const IMAGE_SIZE = 36;
