'use client';

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

  const donations = (data ?? []).flatMap((d) => d.applications?.flatMap((a) => a.donations));

  const addresses = donations.map((d) => d?.donorAddress).filter(Boolean) as string[];

  const { columns, getCellContent, defaultProps, onColumnResize, updateEnsName } =
    useDonationsTable((donations ?? []) as Donation[]);

  useEnsSse(addresses.slice(0, 200), updateEnsName);
  return (
    <>
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
