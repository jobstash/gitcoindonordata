'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMemo, useState, useTransition } from 'react';

import { useProjectContext } from '@/app/projects/[chainId]/[projectId]/context';
import { CHAINS } from '@/core/constants';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/format-date';
import { normalizeString } from '@/utils/normalize-string';
import { sendEvent } from '@/utils/send-event';

export const ProjectRoundStats = () => {
  const { push } = useRouter();
  const { project } = useProjectContext();

  const roundInfos = useMemo(() => {
    if (!project) return [];

    const result = project.applications!
      .filter((application) => !!application.round?.roundMetadata.name)
      .map((application) => {
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
          ts: new Date(donationsStartTime).getTime(),
        };
      });

    return result.sort((a, b) => b.ts - a.ts);
  }, [project]);

  const [viewedRoundId, setViewedRoundId] = useState('');
  const [isPendingPush, startPushTransition] = useTransition();

  const onClickViewRound = (id: string, name: string) => {
    setViewedRoundId(id);
    sendEvent('buttonClicked', `View Round: "${name}"`);
    startPushTransition(() => {
      push(`/projects/${normalizeString(projectName)}/rounds/${id}`);
    });
  };

  if (!project) return <p>Loading Round Stats ...</p>;

  const projectName = project.name!;

  return (
    <div className="flex flex-col gap-6 pt-6">
      <h2 className="text-xl tracking-wide">Round stats</h2>
      <div className="-mx-2 flex flex-wrap md:-mx-3">
        {roundInfos.map(
          ({ id, name, chain, totalAmount, contributors, startTime, endTime }) => {
            const isLoadingBtn = id === viewedRoundId && isPendingPush;
            const startDate = startTime.split(' ')[0];
            const endDate = endTime.split(' ')[0];
            return (
              <div key={id} className="mb-4 flex w-1/2 flex-col px-2 md:mb-6 md:w-1/3 md:px-3">
                <div className="h-full space-y-2 rounded-xl bg-greyTile p-4 md:space-y-3 md:p-6">
                  <div className="">
                    <h3 className="text-base font-normal tracking-wide">{name}</h3>
                  </div>
                  <div className="flex items-center md:items-start md:justify-between">
                    <div>
                      <span className="block w-full font-mono text-xs font-normal text-greyMid">{`${startDate} - ${endDate}`}</span>
                      {/* {chain?.name && <span className='block w-full font-mono text-xs font-normal text-greyMid'>{chain.name}</span>} */}
                    </div>
                    {chain?.logo && (
                      <div>
                        <Image
                          className="grow-0"
                          height={IMAGE_SIZE}
                          width={IMAGE_SIZE}
                          alt={name}
                          src={chain.logo}
                        />
                      </div>
                    )}
                  </div>
                  <span className="block text-sm font-normal">{`$${(totalAmount ?? 0).toFixed(2)}`}</span>

                  <span className="block font-mono text-[10px]">
                    {!!contributors && contributors > 0
                      ? `total raised by ${contributors} contributors`
                      : 'No contributors'}
                  </span>

                  <button
                    className={cn(
                      'btn relative mx-auto flex cursor-pointer items-center rounded-lg bg-greenBtn px-3 py-2 font-mono text-sm md:mt-2 md:w-full',
                      { 'btn-disabled': isLoadingBtn },
                    )}
                    onClick={() => onClickViewRound(id, name)}
                  >
                    <span> View round</span>

                    {isLoadingBtn && (
                      <div className="absolute right-4">
                        <span className="loading loading-spinner loading-sm pl-2"></span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

const IMAGE_SIZE = 36;
