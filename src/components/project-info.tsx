'use client';

import { ImageWithFallback } from './image-with-fallback';

import { IPFS_URL } from '@/core/constants';
import { useProject } from '@/hooks/use-project';

interface Props {
  title: string;
}

export const ProjectInfo = ({ title }: Props) => {
  const { data } = useProject(title);

  if (!data) return <p>Loading Banner ...</p>;

  const banners = data.map((p) => `${IPFS_URL}/${p.metadata?.bannerImg}`);
  const logos = data.map((p) => `${IPFS_URL}/${p.metadata?.logoImg}`);
  const name = data.map((d) => d.name)[0];

  return (
    <>
      <div>
        <ImageWithFallback
          isPriority
          srcList={banners}
          alt={''}
          className="h-80 w-[1280px] rounded-3xl"
        />
        <ImageWithFallback srcList={logos} alt={''} className="size-32" />
      </div>

      <div className="min-h-20">
        <span>{name ?? 'Loading Name ...'}</span>
        <hr />
      </div>
    </>
  );
};
