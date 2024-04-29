import { ColDef } from 'ag-grid-community';
import { CustomCellRendererProps } from 'ag-grid-react';

import { CHAINS } from './constants';
import { DonationRow } from './types';

import { LinkCellRenderer } from '@/components/link-cell-renderer';
import { formatAddress } from '@/utils/format-address';
import { formatDate } from '@/utils/format-date';
import { getTokenName } from '@/utils/get-token-name';

export const DONATIONS_COLUMNS: ColDef<DonationRow>[] = [
  {
    headerName: 'DATE',
    field: 'timestamp',
    valueFormatter: ({ data }) => formatDate(data?.timestamp),
  },
  {
    headerName: 'ROUND',
    field: 'round.roundMetadata.name',
  },
  {
    headerName: 'TXN HASH',
    field: 'transactionHash',
    valueFormatter: ({ data }) => formatAddress(data?.transactionHash),
    filter: true,
    cellRenderer: (props: CustomCellRendererProps) => (
      <LinkCellRenderer
        getLink={(value: string) => {
          const { data } = props;
          const explorer = CHAINS.find((c) => c.id === `${data.chainId}`)?.explorer;
          return `${explorer}${value}`;
        }}
        {...props}
      />
    ),
  },
  {
    headerName: 'VOTER ADDRESS',
    field: 'donorAddress',
    valueFormatter: ({ data }) => {
      const address = data?.donorAddress;
      return address?.startsWith('0x') ? formatAddress(address) : address!;
    },
    filter: true,
    enableCellChangeFlash: true,
    cellRendererSelector: (props: CustomCellRendererProps) => {
      const { valueFormatted } = props;
      const isEns = valueFormatted?.includes('.eth');
      if (isEns)
        return {
          component: () => (
            <LinkCellRenderer
              getLink={(value) => `https://app.ens.domains/${value}`}
              {...props}
            />
          ),
        };
    },
  },
  {
    headerName: 'TOKEN',
    field: 'tokenAddress',
    valueGetter: ({ data }) => getTokenName(data?.chainId, data?.tokenAddress),
  },
  {
    headerName: 'USD',
    field: 'amountInUsd',
    valueFormatter: ({ data }) => `$${data?.amountInUsd.toFixed(2)}`,
  },
];
