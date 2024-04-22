interface Props {
  content: React.ReactNode;
  label: string;
}

export const Stats = ({ content, label }: Props) => {
  return (
    <div className="stats bg-[#F7F7F7] shadow-md">
      <div className="stat">
        <div className="stat-value">{content}</div>
        <div className="stat-desc pt-4">{label}</div>
      </div>
    </div>
  );
};
