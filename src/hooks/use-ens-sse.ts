/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

import useSWRSubscription from 'swr/subscription';
import { BulkResponse, ProfileResponse } from 'use-enstate';

import { ENS_ENDPOINT } from '@/core/constants';

export const useEnsSse = (
  addresses: string[],
  updateEns: (address: string, name: string) => void,
) => {
  const key =
    addresses.length > 0 && ([ENS_ENDPOINT, '/sse/a', addresses] as [string, string, string[]]);

  const fetchedSet = useRef(new Set());

  return useSWRSubscription(
    key,
    (key, { next }) => {
      const closeFns: (() => void)[] = [];

      const batches = splitIntoBatches(addresses);

      for (const batch of batches) {
        const eventSource = new EventSource(
          `${key[0]}${key[1]}?${batch.map((address) => `addresses[]=${address}`).join('&')}`,
        );

        eventSource.addEventListener('message', (e) => {
          const { query, response } = JSON.parse(e.data) as SSEResponse<
            BulkResponse<ProfileResponse>
          >;

          if (!fetchedSet.current.has(query)) {
            fetchedSet.current.add(query);

            if (response.type === 'success') {
              updateEns(query, response.name);
            }
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          next(undefined, () => {
            return {
              query,
              response,
            };
          });
        });

        eventSource.addEventListener('error', () => {
          // Server Sent Events has no proper close event, so we have to rely on the error event
          // to clean up the event source.
          eventSource.close();
        });

        closeFns.push(() => eventSource.close());
      }

      return () => {
        for (const fn of closeFns) {
          fn();
        }
      };
    },
    {
      shouldRetryOnError: false,
    },
  );
};

interface SSEResponse<T> {
  query: string;
  response: T;
}

const BATCH_COUNT = 10;
const splitIntoBatches = <T>(array: T[]): T[][] => {
  const batches: T[][] = [];
  let currentBatch: T[] = [];

  for (const item of array) {
    currentBatch.push(item);
    if (currentBatch.length === BATCH_COUNT) {
      batches.push(currentBatch);
      currentBatch = []; // start a new batch
    }
  }

  // Add the last batch if it has any items and wasn't added yet
  if (currentBatch.length > 0) {
    batches.push(currentBatch);
  }

  return batches;
};
