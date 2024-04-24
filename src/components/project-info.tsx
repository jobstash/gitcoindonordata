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
      <div className='relative mb-12 mt-6 aspect-video md:mb-28 md:aspect-auto md:h-[320px] md:w-full'>
        <ImageWithFallback
          isPriority
          srcList={banners}
          alt={''}
          className="size-full rounded-3xl object-cover"
        />
        <ImageWithFallback srcList={logos} alt={''} className="absolute bottom-0 left-0 -mb-8 ml-6 size-16 border-2 border-white md:-mb-16 md:ml-7 md:size-28" />
      </div>
      <div className="">
        <h2 className='pb-2 text-2xl tracking-wide md:pb-3 md:text-4xl'>{name ?? 'Loading Name ...'}</h2>
        <hr className='mb-6' />
      </div>
    </>
  );
};
