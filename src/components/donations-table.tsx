'use client';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import '@/app/custom-ag-grid.css';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';

import { DONATIONS_COLUMNS } from '@/core/misc';
import { useDonations } from '@/hooks/use-donations';

interface Props {
  title: string;
  roundId?: string;
}

export const DonationsTable = ({ title, roundId }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const { isPending, donations, gridRef, onSelectionChanged } = useDonations(
    title,
    roundId,
    isFocused,
  );

  if (isPending) return <p>Loading table ...</p>;
  if (donations.length === 0) return <p>This project has not yet received any donations.</p>;

  return (
    <>
      <DonationsCSVButton donations={donations} />

      <div
        className="ag-theme-material"
        style={{ height: 600 }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <AgGridReact
          ref={gridRef}
          getRowId={(r) => r.data.id}
          rowData={donations}
          rowSelection="multiple"
          rowMultiSelectWithClick={true}
          columnDefs={DONATIONS_COLUMNS}
          onSelectionChanged={onSelectionChanged}
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
