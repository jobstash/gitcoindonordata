import { ProjectNameInput } from '@/components/project-name-input';

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex max-w-[30%] flex-col gap-2">
        <h1>Project Stats Dashboard</h1>
        <span>
          Track the pulse of your Gitcoin projects with real-time insights. From funding
          progress to contributor activity, this dashboard empowers you to stay informed and
          make data-driven decisions.
        </span>
        <ProjectNameInput />
      </div>
    </div>
  );
};

export default HomePage;
