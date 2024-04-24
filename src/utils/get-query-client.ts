import { QueryClient } from '@tanstack/react-query';

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // Avoid refetching immediately on the client during SSR
        staleTime: 1000 * 60 * 60, // 1hr
        retry: false,
      },
    },
  });

let browserQueryClient: QueryClient | undefined = undefined;

export const getQueryClient = () => {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};
