import Image from 'next/image';

import { ApprovedProject } from '@/core/types';

interface Props {
  project: ApprovedProject;
}

export const ProjectImage = ({ project }: Props) => {
  const { inputValue, logo = '', banner = '' } = project;
  return (
    <div>
      <div className="avatar">
        <div className="mask mask-squircle w-24">
          <Image
            width={120}
            height={120}
            alt={`${inputValue} logo`}
            src={`${IPFS_PREFIX}/${logo}`}
          />
        </div>
      </div>

      <div className="avatar">
        <Image
          width={1280}
          height={320}
          alt={`${inputValue} banner`}
          src={`${IPFS_PREFIX}/${banner}`}
        />
      </div>
    </div>
  );
};

const IPFS_PREFIX = 'https://cloudflare-ipfs.com/ipfs';
