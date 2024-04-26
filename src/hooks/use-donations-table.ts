import { useCallback, useMemo, useRef, useState } from 'react';

import {
  BaseGridCell,
  DataEditorProps,
  GetRowThemeCallback,
  GridCell,
  GridCellKind,
  GridColumn,
  GridMouseEventArgs,
  Item,
} from '@glideapps/glide-data-grid';

import { useEnsSse } from './use-ens-sse';
import { useProject } from './use-project';

import { CHAINS, DONATIONS_COLUMNS } from '@/core/constants';
import { Donation } from '@/gql/graphql';
import { formatAddress } from '@/utils/format-address';
import { formatDate } from '@/utils/format-date';
import { getTokenName } from '@/utils/get-token-name';
import { sendEvent } from '@/utils/send-event';

export const useDonationsTable = (title: string, roundId?: string) => {
  const { data: projectData, isPending } = useProject(title);

  const donations = useMemo(() => {
    const allDonations = ((projectData ?? []).flatMap((d) =>
      d.applications
        ?.flatMap((a) => a.donations)
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()),
    ) ?? []) as Donation[];

    return roundId ? allDonations.filter((d) => d.round?.id === roundId) : allDonations;
  }, [projectData, roundId]);

  const addresses = donations.map((d) => d?.donorAddress).filter(Boolean) as string[];
  useEnsSse(addresses, (donorAddress: string, ensName: string) => {
    let col: number | null = null;
    let row: number | null = null;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].id === 'donorAddress') {
        col = i;
        break;
      }
    }

    for (let i = 0; i < donations.length; i++) {
      if (donations[i].donorAddress === donorAddress) {
        row = i;
        break;
      }
    }

    if (col === null) return;
    if (row === null) return;

    setCellCacheValue([col, row], {
      kind: GridCellKind.Text,
      allowOverlay: false,
      displayData: ensName,
      data: donorAddress!,
      contentAlign: 'center',
    });

    // Force update
    setSwappedCount((prev) => prev + 1);
  });

  const cache = useRef<ContentCache>(new ContentCache());

  const [swappedCount, setSwappedCount] = useState(0);
  const [columns, setColumns] = useState<GridColumn[]>(DONATIONS_COLUMNS);

  const onColumnResize = useCallback((column: GridColumn, newSize: number) => {
    setColumns((prev) => {
      const index = prev.findIndex((prevColumn) => prevColumn.title === column.title);
      const newColumns = [...prev];
      newColumns.splice(index, 1, { ...prev[index], width: newSize });
      return newColumns;
    });
  }, []);

  const getCellContent = useCallback(
    ([col, row]: Item): GridCell => {
      let val = cache.current.get(col, row) as GridCell;
      if (val === undefined) {
        const donation = donations[row];
        val = getDonationCellContent(donation, col, title);
        cache.current.set(col, row, val);
      }

      return val;
    },
    [donations, title],
  );

  const setCellCacheValue = useCallback(([col, row]: Item, val: GridCell): void => {
    cache.current.set(col, row, val);
  }, []);

  const [hoverRow, setHoverRow] = useState<number | undefined>();
  const onItemHovered = useCallback((args: GridMouseEventArgs) => {
    const [_, row] = args.location;
    setHoverRow(args.kind !== 'cell' ? undefined : row);
  }, []);

  const getRowThemeOverride = useCallback<GetRowThemeCallback>(
    (row) => {
      const isHovered = row === hoverRow;
      const isEven = row % 2 === 0;

      const bgCell = isHovered ? '#e5fffc' : isEven ? '#EBEBEB' : '#fff';

      return {
        bgCell,
      };
    },
    [hoverRow],
  );

  return {
    isPending,
    donations: donations,
    swappedCount,
    columns,
    getCellContent,
    defaultProps: DEFAULT_TABLE_PROPS,
    onColumnResize,
    onItemHovered,
    getRowThemeOverride,
  };
};

class ContentCache {
  // column -> row -> value
  private cachedContent: Map<number, GridCell[]> = new Map();

  get(col: number, row: number) {
    const colCache = this.cachedContent.get(col);

    if (colCache === undefined) {
      return undefined;
    }

    return colCache[row];
  }

  set(col: number, row: number, value: GridCell) {
    let rowCache = this.cachedContent.get(col);
    if (rowCache === undefined) {
      this.cachedContent.set(col, (rowCache = []));
    }
    rowCache[row] = value;
  }
}

const DEFAULT_TABLE_PROPS: Partial<DataEditorProps> = {
  width: '100%',
  height: 600,
  rowHeight: 40,
  getCellsForSelection: true,
  rowMarkers: {
    kind: 'clickable-number',
    checkboxStyle: 'square',
  },
  theme: {
    linkColor: '#2a7fc9',
  },
};

const columnIds = DONATIONS_COLUMNS.map((column) => column.id!);

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

const getDonationCellContent = (
  donation: Donation,
  columnIndex: number,
  title: string,
): GridCell => {
  const {
    timestamp,
    round,
    transactionHash,
    donorAddress,
    tokenAddress,
    chainId,
    amountInUsd,
  } = donation;

  switch (columnIds[columnIndex]) {
    case 'timestamp': {
      if (!timestamp) return getDefaultGridCell();

      const dateText = formatDate(timestamp);

      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        displayData: dateText,
        data: dateText,
        contentAlign: 'center',
        copyData: timestamp,
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
        copyData: round.id!,
      };
    }
    case 'transactionHash': {
      const explorer = CHAINS.find((c) => c.id === `${chainId}`)?.explorer;
      if (!explorer) return getDefaultGridCell();
      if (!transactionHash) return getDefaultGridCell();

      const link = `${explorer}${transactionHash}`;

      return {
        kind: GridCellKind.Uri,
        allowOverlay: false,
        displayData: formatAddress(transactionHash),
        data: link,
        hoverEffect: true,
        contentAlign: 'center',
        onClickUri(args) {
          args.preventDefault();

          sendEvent('buttonClicked', `Txn Link: "${title}:${transactionHash}"`);
          window.open(link, '_blank');
        },
        copyData: transactionHash,
      };
    }

    case 'donorAddress': {
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        displayData: formatAddress(donorAddress!),
        data: formatAddress(donorAddress!),
        contentAlign: 'center',
        copyData: donorAddress!,
      };
    }
    case 'tokenAddress': {
      const token = getTokenName(chainId!, tokenAddress!);

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
        copyData: `${amountInUsd!}`,
      };
    }

    default: {
      throw new Error('Invalid table index');
    }
  }
};
