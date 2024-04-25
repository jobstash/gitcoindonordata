'use client';

import dynamic from 'next/dynamic';

import { DataEditor } from '@glideapps/glide-data-grid';

import { useDonationsTable } from '@/hooks/use-donations-table';

interface Props {
  title: string;
  roundId?: string;
}

export const DonationsTable = ({ title, roundId }: Props) => {
  const {
    isPending,
    donations,
    columns,
    getCellContent,
    defaultProps,
    onColumnResize,
    onItemHovered,
    getRowThemeOverride,
  } = useDonationsTable(title, roundId);

  if (isPending) return <p>Loading Table ...</p>;
  if (donations.length === 0) return <p>This project has not yet received any donations.</p>;

  return (
    <>
      <DonationsCSVButton donations={donations} />
      <div className="overflow-hidden rounded-xl" style={{ height: 600 }}>
        <DataEditor
          {...defaultProps}
          getCellContent={getCellContent}
          columns={columns}
          rows={donations.length}
          onColumnResize={onColumnResize}
          onItemHovered={onItemHovered}
          getRowThemeOverride={getRowThemeOverride}
        />
      </div>
    </>
  );
};

const DonationsCSVButton = dynamic(
  () => import('./donations-csv-button').then((m) => m.DonationsCSVButton),
  {
    ssr: false,
    loading: () => <p>Loading donations ...</p>,
  },
);
