import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { getApprovedProjects } from '@/data/get-approved-projects';
import { getChainRounds } from '@/data/get-chain-rounds';
import { ReactQueryProvider } from '@/providers/react-query-client';
import { getQueryClient } from '@/utils/get-query-client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gitcoin Donor Data',
  description: 'Track the pulse of your Gitcoin projects with real-time insights.',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: Props) => {
  const queryClient = getQueryClient();

  const chainRounds = await queryClient.fetchQuery({
    queryKey: queryKeys.chainRounds(),
    queryFn: () => getChainRounds(),
    staleTime: STALETIME.DEFAULT,
  });

  await queryClient.prefetchQuery({
    queryKey: queryKeys.approvedProjects(chainRounds),
    queryFn: () => getApprovedProjects(chainRounds),
    staleTime: STALETIME.DEFAULT,
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
