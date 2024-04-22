import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

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
