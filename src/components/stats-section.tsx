interface StatsItem {
  label: string;
  content: React.ReactNode;
}

interface Props {
  title: string;
  stats: StatsItem[];
}

export const StatsSection = ({ title, stats }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <span>{title}</span>

      <div className="grid grid-cols-4 gap-8">
        {stats.map(({ label, content }) => (
          <Stats key={label} label={label} content={content} />
        ))}
      </div>
    </div>
  );
};

const Stats = ({ content, label }: StatsItem) => {
  return (
    <div className="stats bg-[#F7F7F7] shadow-md">
      <div className="stat">
        <div className="stat-value">{content}</div>
        <div className="stat-desc pt-4">{label}</div>
      </div>
    </div>
  );
};
