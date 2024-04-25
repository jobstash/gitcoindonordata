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
    <div className='flex flex-col gap-6 pt-6'>
      <h2 className='text-xl tracking-wide'>Round stats</h2>
      <div className="-mx-2 flex flex-wrap md:-mx-3">
        {roundInfos.map(
          ({ id, name, chain, totalAmount, contributors, startTime, endTime }) => {
            const startDate = startTime.split(' ')[0];
            const endDate = endTime.split(' ')[0];
            return (
              <div key={id} className="mb-4 flex w-1/2 flex-col px-2 md:mb-6 md:w-1/3 md:px-3">
                <div className="h-full space-y-2 rounded-xl bg-greyTile p-4 md:space-y-3 md:p-6">
                  <div className="">
                    <h3 className='text-base font-normal tracking-wide'>{name}</h3>
                  </div>
                  <div className='flex items-center md:items-start md:justify-between'>
                    <div>
                      <span className='block w-full font-mono text-xs font-normal text-greyMid'>{`${startDate} - ${endDate}`}</span>
                      {/* {chain?.name && <span className='block w-full font-mono text-xs font-normal text-greyMid'>{chain.name}</span>} */}
                    </div>
                    {chain?.logo && (
                      <div>
                        <Image className='grow-0' height={IMAGE_SIZE} width={IMAGE_SIZE} alt={name} src={chain.logo} />
                      </div>
                    )}
                  </div>         
                  <span className='block text-sm font-normal'>{`$${(totalAmount ?? 0).toFixed(2)}`}</span>

                  <span className='block font-mono text-[10px]'>
                    {!!contributors && contributors > 0
                      ? `total raised by ${contributors} contributors`
                      : 'No contributors'}
                  </span>

                  <button
                    className="mx-auto block cursor-pointer rounded-lg bg-greenBtn px-3 py-2 font-mono text-sm md:mt-2 md:w-full"
                    onClick={() => push(`/projects/${normalizeString(projectName)}/rounds/${id}`)}
                  >
                    View round
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

const IMAGE_SIZE = 36;
