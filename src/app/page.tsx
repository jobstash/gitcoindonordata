import Image from 'next/image';

import { ProjectNameInput } from '@/components/project-name-input';

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <div className="fixed inset-0 -z-10">
        <Image
          width={1280}
          height={1280}
          alt=""
          src="/bg.webp"
          className="absolute inset-0 block size-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col">
        <div className="mx-auto max-w-[630px] space-y-4 rounded-xl border border-white bg-white/70  px-8 py-10">
          <h1 className="font-sans text-2xl font-medium leading-none tracking-wide">
            Project Stats Dashboard
          </h1>
          <p className="font-sans text-xs">
            Track the pulse of your Gitcoin projects with real-time insights. From funding
            progress to contributor activity, this dashboard empowers you to stay informed and
            make data-driven decisions.
          </p>
          <div className='flex flex-wrap justify-center space-y-4'>
            <h2 className="font-sans text-xl font-medium leading-none tracking-wide">
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
