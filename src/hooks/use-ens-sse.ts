/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWRSubscription from 'swr/subscription';
import { BulkResponse, ProfileResponse } from 'use-enstate';

import { ENS_ENDPOINT } from '@/core/constants';

export const useEnsSse = (addresses: string[]) => {
  const key =
    addresses.length > 0 && ([ENS_ENDPOINT, '/sse/a', addresses] as [string, string, string[]]);

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
          const response = JSON.parse(e.data) as SSEResponse<BulkResponse<ProfileResponse>>;

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          next(undefined, (prev: any) => {
            return {
              ...prev,
              [response.query]: response.response,
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

      // const eventSource = new EventSource(
      //   `${key[0]}${key[1]}?${addresses.map((address) => `addresses[]=${address}`).join('&')}`,
      // );

      // eventSource.addEventListener('message', (e) => {
      //   const response = JSON.parse(e.data) as SSEResponse<BulkResponse<ProfileResponse>>;

      //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //   next(undefined, (prev: any) => {
      //     return {
      //       ...prev,
      //       [response.query]: response.response,
      //     };
      //   });
      // });

      // eventSource.addEventListener('error', () => {
      //   // Server Sent Events has no proper close event, so we have to rely on the error event
      //   // to clean up the event source.
      //   eventSource.close();
      // });

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
