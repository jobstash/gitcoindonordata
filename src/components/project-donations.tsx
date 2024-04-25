'use client';

import dynamic from 'next/dynamic';

import { DataEditor } from '@glideapps/glide-data-grid';

import { Donation } from '@/gql/graphql';
import { useDonationsTable } from '@/hooks/use-donations-table';
import { useEnsSse } from '@/hooks/use-ens-sse';
import { useProject } from '@/hooks/use-project';

interface Props {
  title: string;
}

export const ProjectDonations = ({ title }: Props) => {
  const { data } = useProject(title);

  const donations = ((data ?? []).flatMap((d) => d.applications?.flatMap((a) => a.donations)) ??
    []) as Donation[];

  const addresses = donations.map((d) => d?.donorAddress).filter(Boolean) as string[];

  const { columns, getCellContent, defaultProps, onColumnResize, updateEnsName } =
    useDonationsTable(donations);

  useEnsSse(addresses.slice(0, 200), updateEnsName);
  return (
    <>
      <DonationsCSVButton donations={donations} />
      <DataEditor
        {...defaultProps}
        getCellContent={getCellContent}
        columns={columns}
        rows={donations.length}
        onColumnResize={onColumnResize}
      />
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
