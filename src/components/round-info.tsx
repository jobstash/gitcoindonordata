'use client';

import Image from 'next/image';

import { useRoundInfo } from '@/hooks/use-round-info';

interface Props {
  title: string;
  roundId: string;
}

export const RoundInfo = ({ title, roundId }: Props) => {
  const { data } = useRoundInfo(title, roundId);

  if (!data) return <p>Loading Round Info ...</p>;

  const { name, startTime, endTime, chain } = data;
  const roundEnded = new Date(endTime).getTime() < Date.now();

  return (
    <div className="pb-8">
      <div className="flex flex-wrap items-center gap-2 pb-6 md:gap-4 md:pb-4">
        <span className='text-xl md:text-2xl'>{name}</span>
        {roundEnded && <span className='rounded-xl bg-alert px-2 py-0.5 text-base'>Round ended</span>}
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4 [&_*]:text-xs [&_*]:font-normal [&_*]:md:text-base">
        <span>on</span>
        <div className="flex items-center gap-1">
          <Image
            width={24}
            height={24}
            src={chain?.logo as string}
            alt={chain?.name as string}
          />
          <span>{chain?.name}</span>
        </div>
        <span>[]</span>
        <div className='flex gap-1'>
          <span className='rounded-md bg-greyTile px-1 py-0.5'>{`${startTime}`}</span>
          - 
          <span className='rounded-md bg-greyTile px-1 py-0.5'>{`${endTime}`}</span>
        </div>
      </div>
    </div>
  );
};
