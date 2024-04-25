import './globals.css';

import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { ReactQueryProvider } from '@/providers/react-query-client';
import { getQueryClient } from '@/utils/get-query-client';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  userScalable: false,
};

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
        <div className="font-sans font-medium">
          <header className="relative z-50 p-4 shadow-sm md:px-8">
            <div className="mx-auto w-full max-w-7xl">
              <svg width="27" height="32" fill="none">
                <path
                  fill="#146C76"
                  d="M25.869 17.778c0 1.773-.401 3.453-1.118 4.954l-1.559-.97-.73-.456c.47-1.082.73-2.275.73-3.528 0-1.253-.26-2.447-.73-3.528l.73-.456 1.56-.97a11.473 11.473 0 0 1 1.117 4.954Z"
                />
                <path
                  fill="#130C03"
                  d="m23.193 21.761-.73-.455-2.802-1.744a.443.443 0 0 1-.197-.484 5.346 5.346 0 0 0 0-2.6.443.443 0 0 1 .197-.483l2.801-1.744 2.29-1.427 1.571-.978a.886.886 0 0 0 .301-1.197 13.958 13.958 0 0 0-1.011-1.506 14.267 14.267 0 0 0-11.12-5.585.223.223 0 0 1-.221-.222V1.333c0-.736-.6-1.333-1.338-1.333-.739 0-1.338.597-1.338 1.333v2.29a.223.223 0 0 1-.18.219c-.755.152-1.488.365-2.195.631a.223.223 0 0 1-.301-.207V1.333C8.92.597 8.32 0 7.582 0c-.739 0-1.338.597-1.338 1.333v4.453a.447.447 0 0 1-.192.365C2.404 8.717.016 12.945 0 17.729-.026 25.58 6.501 32 14.378 32h10.599a.89.89 0 0 0 .892-.889v-7.067c0-.383-.198-.74-.524-.942l-.594-.37-1.558-.97Zm-.446 7.572h-8.371c-6.385 0-11.705-5.205-11.7-11.566a11.497 11.497 0 0 1 3.378-8.14.112.112 0 0 1 .19.078v1.406c0 .736.6 1.333 1.339 1.333s1.338-.597 1.338-1.333V7.798c0-.17.097-.325.25-.4a11.579 11.579 0 0 1 5.102-1.176c3.478 0 6.598 1.526 8.723 3.942a.444.444 0 0 1-.099.67l-1.854 1.155-2.534 1.578a.895.895 0 0 1-1.01-.045 5.335 5.335 0 0 0-3.255-1.077c-2.9.016-5.28 2.364-5.323 5.254-.043 2.982 2.37 5.413 5.352 5.413a5.336 5.336 0 0 0 3.23-1.081.89.89 0 0 1 1.006-.042l2.534 1.578 1.888 1.176c.163.101.262.28.262.47v3.676c0 .246-.2.445-.446.445Zm-5.8-11.649v.187a2.646 2.646 0 0 1-.405 1.32 2.68 2.68 0 0 1-4.946-1.413 2.671 2.671 0 0 1 2.676-2.667 2.671 2.671 0 0 1 2.675 2.573Z"
                />
              </svg>
            </div>
          </header>
          <main className="flex flex-col bg-bgGrey px-4 py-6 md:px-8">
            <div className="mx-auto w-full max-w-7xl">
              <ReactQueryProvider>
                <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
              </ReactQueryProvider>
            </div>
          </main>
          <footer className="bg-bgGrey p-4 md:px-8">
            <div className="mx-auto w-full max-w-7xl">
              Built with ❤️‍🔥 by the{' '}
              <a rel="noreferrer" target="_blank" href="https://jobstash.xyz">
                JobStash
              </a>{' '}
              Team. Support our{' '}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://explorer.gitcoin.co/#/round/42161/25/121"
              >
                GitCoin Grant here
              </a>
            </div>
          </footer>
        </div>
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId="G-FZZB7CVNXL" />}
    </html>
  );
};

export default RootLayout;
