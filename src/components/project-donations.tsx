'use client';

import { useCallback, useState } from 'react';

import {
  BaseGridCell,
  DataEditor,
  GridCell,
  GridCellKind,
  GridColumn,
  Item,
} from '@glideapps/glide-data-grid';

import { TOKENS } from '@/core/constants';
// import { useEnsNames } from '@/hooks/use-ens-names';
import { useEnsSse } from '@/hooks/use-ens-sse';
import { useProject } from '@/hooks/use-project';
import { formatDate } from '@/utils/format-date';

interface Props {
  title: string;
}

export const ProjectDonations = ({ title }: Props) => {
  const { data } = useProject(title);

  const donations = (data ?? []).flatMap((d) => d.applications?.flatMap((a) => a.donations));

  const addresses = donations.map((d) => d?.donorAddress).filter(Boolean) as string[];
  // const { data: ensData, error } = useEnsNames(addresses.slice(0, 10));
  const { data: ensData } = useEnsSse(addresses);

  const getContent = useCallback(
    (cell: Item): GridCell => {
      const [col, row] = cell;
      const {
        timestamp,
        round,
        transactionHash,
        donorAddress,
        tokenAddress,
        chainId,
        amountInUsd,
      } = (donations ?? [])[row]!;

      switch (indexes[col]) {
        case 'timestamp': {
          if (!timestamp) return getDefaultGridCell();

          const dateText = formatDate(timestamp);

          return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            displayData: dateText,
            data: dateText,
            contentAlign: 'center',
          };
        }
        case 'roundId': {
          if (!round?.roundMetadata?.name) return getDefaultGridCell();
          return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            displayData: round.roundMetadata.name,
            data: round.roundMetadata.name,
            contentAlign: 'center',
          };
        }
        case 'transactionHash': {
          if (!transactionHash) return getDefaultGridCell();
          return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            displayData: transactionHash,
            data: transactionHash,
            contentAlign: 'center',
          };
        }

        case 'donorAddress': {
          const text = !ensData
            ? `${donorAddress} [---]`
            : Object.hasOwn(ensData, donorAddress!) && !!ensData[donorAddress!].name
              ? ensData[donorAddress!].name
              : donorAddress!;

          return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            displayData: text,
            data: text,
            contentAlign: 'center',
          };
        }
        case 'tokenAddress': {
          const tokenKey = `${chainId}:${tokenAddress?.toLowerCase()}`;
          const token =
            tokenAddress && tokenKey in TOKENS
              ? TOKENS[tokenKey as keyof typeof TOKENS]
              : tokenKey;

          return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            displayData: token,
            data: token,
            contentAlign: 'center',
          };
        }
        case 'amountInUsd': {
          if (!amountInUsd) return getDefaultGridCell({ contentAlign: 'center' });
          return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            displayData: `$${amountInUsd.toFixed(2)}`,
            data: amountInUsd.toString(),
            contentAlign: 'center',
          };
        }

        default: {
          throw new Error('Invalid table index');
        }
      }
    },
    [donations, ensData],
  );

  const [columns, setColumns] = useState<GridColumn[]>(DEFAULT_COLUMNS);

  const onColumnResize = useCallback((column: GridColumn, newSize: number) => {
    setColumns((prev) => {
      const index = prev.findIndex((prevColumn) => prevColumn.title === column.title);
      const newColumns = [...prev];
      newColumns.splice(index, 1, { ...prev[index], width: newSize });
      return newColumns;
    });
  }, []);

  return (
    <>
      {/* <pre>
        {JSON.stringify(
          {
            ensData,
            error: error?.message,
          },
          undefined,
          '\t',
        )}
      </pre> */}
      <DataEditor
        getCellContent={getContent}
        columns={columns}
        rows={donations?.length ?? 0}
        width="100%"
        height={600}
        rowHeight={40}
        // theme={{
        //   //
        //   bgCell: '#141317',
        //   textDark: 'white',
        //   bgHeader: '#141317',
        //   bgHeaderHasFocus: 'rgb(52, 52, 52)',
        //   bgHeaderHovered: 'rgb(75, 75, 75)',
        //   textHeader: 'white',
        //   accentColor: 'rgb(75,75,75)',
        //   linkColor: '#8fb2f7',
        //   accentLight: 'rgb(30, 30, 30)',
        //   bgBubble: 'rgb(52, 52, 52)',
        //   textBubble: 'white',
        // }}
        // customRenderers={
        //   // TODO: extract to exported const
        //   [githubCellRenderer]
        // }
        onColumnResize={onColumnResize}
      />
      {/* <pre>
        {JSON.stringify(
          {
            donations: data?.flatMap((d) => d.applications?.flatMap((a) => a.donations)),
          },
          undefined,
          '\t',
        )}
      </pre> */}
    </>
  );
};

const indexes = [
  'timestamp',
  'roundId',
  'transactionHash',
  'donorAddress',
  'tokenAddress',
  'amountInUsd',
] as const;

const DEFAULT_COLUMNS: GridColumn[] = [
  {
    id: 'timestamp',
    title: 'DATE',
    width: 130,
  },
  {
    id: 'roundId',
    title: 'ROUND',
    width: 320,
  },
  {
    id: 'transactionHash',
    title: 'TXN HASH',
    grow: 1,
  },
  {
    id: 'donorAddress',
    title: 'VOTER ADDRESS',
    width: 320,
  },
  {
    id: 'tokenAddress',
    title: 'TOKEN',
    width: 60,
  },
  {
    id: 'amountInUsd',
    title: 'USD',
    width: 120,
  },
];

const getDefaultGridCell = (args?: {
  text?: string;
  contentAlign?: BaseGridCell['contentAlign'];
}): GridCell => {
  const { text = 'N/A', contentAlign = 'center' } = args ?? {
    text: 'N/A',
  };

  return {
    kind: GridCellKind.Text,
    allowOverlay: false,
    displayData: text,
    data: text,
    contentAlign,
  };
};
