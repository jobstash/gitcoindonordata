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
      <div className="flex flex-wrap items-center gap-2 md:gap-4 [&_*]:text-xs [&_*]:font-normal [&_*]:md:text-base">
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
        <span>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.2605 0C3.70821 0 3.2605 0.447715 3.2605 1V2H2.2605C1.15593 2 0.260498 2.89543 0.260498 4V14C0.260498 15.1046 1.15593 16 2.2605 16H14.2605C15.3651 16 16.2605 15.1046 16.2605 14V4C16.2605 2.89543 15.3651 2 14.2605 2H13.2605V1C13.2605 0.447715 12.8128 0 12.2605 0C11.7082 0 11.2605 0.447715 11.2605 1V2H5.2605V1C5.2605 0.447715 4.81278 0 4.2605 0ZM4.2605 5C3.70821 5 3.2605 5.44772 3.2605 6C3.2605 6.55228 3.70821 7 4.2605 7H12.2605C12.8128 7 13.2605 6.55228 13.2605 6C13.2605 5.44772 12.8128 5 12.2605 5H4.2605Z" fill="#555555"/>
          </svg>
        </span>
        <div className='flex gap-1'>
          <span className='rounded-md bg-greyTile px-1 py-0.5'>{`${startTime}`}</span>
          - 
          <span className='rounded-md bg-greyTile px-1 py-0.5'>{`${endTime}`}</span>
        </div>
      </div>
    </div>
  );
};
