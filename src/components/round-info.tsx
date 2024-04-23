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
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <span>{name}</span>
        {roundEnded && <span>Round ended</span>}
      </div>
      <div className="flex gap-4">
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
        <span>{`${startTime} - ${endTime}`}</span>
      </div>
    </div>
  );
};
