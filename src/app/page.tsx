import Image from 'next/image';

import { ProjectNameInput } from '@/components/project-name-input';

const HomePage = () => {
  return (
    <div className="flex min-h-[calc(100dvh-168px)] w-full items-center justify-center overflow-hidden px-4">
      <div className="fixed inset-0">
        <Image
          width={1280}
          height={1280}
          alt=""
          src="/bg.webp"
          className="absolute inset-0 block size-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col">
        <div className="relative mx-auto max-w-[630px] space-y-4 rounded-xl bg-white/70 px-8 py-10 pb-[110px] md:space-y-6">
          <h1 className="font-sans text-2xl font-medium leading-none tracking-wide md:text-5xl md:font-normal">
            Project Stats Dashboard
          </h1>
          <p className="font-sans text-xs md:text-base">
            Track the pulse of your Gitcoin projects with real-time insights. From funding
            progress to contributor activity, this dashboard empowers you to stay informed and
            make data-driven decisions.
          </p>
          <div className=' mx-auto flex w-full flex-wrap justify-center space-y-4 md:space-y-6'>
            <h2 className="font-sans text-xl font-medium leading-none tracking-wide md:text-2xl">
              Project Name
            </h2>
            <ProjectNameInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
