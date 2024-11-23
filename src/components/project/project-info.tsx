'use client';

import { useProjectContext } from '@/app/projects/[chainId]/[projectId]/context';
import { ImageWithFallback } from '@/components/image-with-fallback';
import { IPFS_URL } from '@/core/constants';

export const ProjectInfo: React.FC = () => {
  const { project } = useProjectContext();
  if (!project) return <p>Loading Banner ...</p>;

  const banners = project.metadata?.bannerImg ? `${IPFS_URL}/${project.metadata?.bannerImg}` : 'https://builder.gitcoin.co/static/media/default-project-banner.2fc741d75e7b2a8ed935.png';
  const logos = project.metadata?.logoImg ? `${IPFS_URL}/${project.metadata?.logoImg}` : 'https://builder.gitcoin.co/static/media/default-project-logo.724472a8d8c6e410ed8c.png';
  const name = project.name;

  return (
    <>
      <div className='relative mb-12 mt-6 aspect-video md:mb-28 md:aspect-auto md:h-[320px] md:w-full'>
        <ImageWithFallback
          isPriority
          srcList={[banners]}
          alt={''}
          className="size-full rounded-3xl object-cover"
        />
        <ImageWithFallback srcList={[logos]} alt={''} className="absolute bottom-0 left-0 -mb-8 ml-6 size-16 border-2 border-white md:-mb-16 md:ml-7 md:size-28" />
      </div>
      <div className="">
        <h2 className='pb-2 text-2xl tracking-wide md:pb-3 md:text-4xl'>{name ?? 'Loading Name ...'}</h2>
        <hr className='mb-6' />
      </div>
    </>
  );
};
