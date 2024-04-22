import Image from 'next/image';

import { RoundInfo } from '@/core/types';
import { getRoundTimestampText } from '@/utils/round-timestamp';

interface Props {
  roundInfo: RoundInfo;
}

export const RoundInfoSection = ({ roundInfo }: Props) => {
  const { name, chain, logo, roundEndTime, roundStartTime } = roundInfo;
  const dateText = getRoundTimestampText(roundStartTime, roundEndTime, 'UTC');

  const roundEnded = new Date(Number(roundEndTime)).getTime() < Date.now();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <span>{name}</span>
        {roundEnded && <span>Round ended</span>}
      </div>
      <div className="flex gap-4">
        <span>on</span>
        <div className="flex items-center gap-1">
          <Image width={24} height={24} src={logo} alt={chain} />
          <span>{chain}</span>
        </div>
        <span>[]</span>
        <span>{dateText}</span>
      </div>
    </div>
  );
};
