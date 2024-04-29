/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { SelectionChangedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

import { useEnsSse } from './use-ens-sse';
import { useProject } from './use-project';

import { DonationRow } from '@/core/types';
import { getTokenName } from '@/utils/get-token-name';

export const useDonations = (title: string, roundId?: string, isFocused?: boolean) => {
  const { data: projectData, isPending } = useProject(title);

  const donations = useMemo(() => {
    const allDonations = ((projectData ?? []).flatMap((d) =>
      d.applications
        ?.flatMap((a) => a.donations)
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()),
    ) ?? []) as DonationRow[];

    return roundId ? allDonations.filter((d) => d.round?.id === roundId) : allDonations;
  }, [projectData, roundId]);

  const gridRef = useRef<AgGridReact>(null);
  const addresses = useMemo(() => donations.map((d) => d.donorAddress), [donations]);
  useEnsSse(addresses, (donorAddress: string, ensName: string) => {
    let rowIndex: number | null = null;

    for (let i = 0; i < donations.length; i++) {
      if (donations[i].donorAddress === donorAddress) {
        rowIndex = i;
      }
    }

    if (rowIndex === null) return;

    const newItem = copyObject(donations[rowIndex]);
    newItem.donorAddress = ensName;

    gridRef.current!.api.applyTransactionAsync({ update: [newItem] });
  });

  const [pastaString, setPastaString] = useState<string>('');

  const onSelectionChanged = useCallback((e: SelectionChangedEvent<DonationRow>) => {
    setPastaString(
      e.api
        .getSelectedNodes()
        .map((node) => {
          const {
            timestamp,
            chainId,
            round: {
              roundMetadata: { name },
            },
            transactionHash,
            tokenAddress,
            amountInUsd,
          } = node.data!;

          const voter = e.api.getValue('donorAddress', node);
          const token = getTokenName(chainId, tokenAddress);

          return [timestamp, name, transactionHash, voter as string, token, amountInUsd].join(
            '\t',
          );
        })
        .join('\n'),
    );
  }, []);

  useEffect(() => {
    const handleCopy = () => {
      if (typeof navigator !== 'undefined' && isFocused) {
        navigator.clipboard.writeText(pastaString);
      }
    };

    document.addEventListener('copy', handleCopy);
    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  }, [isFocused, pastaString]);

  return {
    gridRef,
    donations,
    isPending,
    onSelectionChanged,
  };
};

const copyObject = (object: any) => {
  const newObject: any = {};
  // copy in the old values
  Object.keys(object).forEach((key) => {
    newObject[key] = object[key];
  });
  return newObject;
};
