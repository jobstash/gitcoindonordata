import { useCallback, useRef, useState } from 'react';

import {
  BaseGridCell,
  DataEditorProps,
  GridCell,
  GridCellKind,
  GridColumn,
  Item,
} from '@glideapps/glide-data-grid';

import { TOKENS } from '@/core/constants';
import { Donation } from '@/gql/graphql';
import { formatDate } from '@/utils/format-date';

export const useDonationsTable = (donations: Donation[]) => {
  const cache = useRef<ContentCache>(new ContentCache());

  const [swappedCount, setSwappedCount] = useState(0);
  const [columns, setColumns] = useState<GridColumn[]>(DEFAULT_COLUMNS);

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
        val = getDonationCellContent(donation, col);
        cache.current.set(col, row, val);
      }

      return val;
    },
    [donations],
  );

  const setCellCacheValue = useCallback(([col, row]: Item, val: GridCell): void => {
    cache.current.set(col, row, val);
  }, []);

  const updateEnsName = (donorAddress: string, ensName: string) => {
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

    if (col === null) throw new Error('ENS Update Error: col not found');
    if (row === null) throw new Error('ENS Update Error: row not found');

    setCellCacheValue([col, row], {
      kind: GridCellKind.Text,
      allowOverlay: false,
      displayData: ensName,
      data: donorAddress!,
      contentAlign: 'center',
    });

    // Force update
    setSwappedCount((prev) => prev + 1);
  };

  return {
    swappedCount,
    columns,
    getCellContent,
    defaultProps: DEFAULT_TABLE_PROPS,
    onColumnResize,
    updateEnsName,
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
};

const DEFAULT_COLUMNS: GridColumn[] = [
  {
    id: 'timestamp' as const,
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
] as const;

const columnIds = DEFAULT_COLUMNS.map((column) => column.id!);

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

const getDonationCellContent = (donation: Donation, columnIndex: number): GridCell => {
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
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        displayData: donorAddress!,
        data: donorAddress!,
        contentAlign: 'center',
      };
    }
    case 'tokenAddress': {
      const tokenKey = `${chainId}:${tokenAddress?.toLowerCase()}`;
      const token =
        tokenAddress && tokenKey in TOKENS ? TOKENS[tokenKey as keyof typeof TOKENS] : tokenKey;

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
};
