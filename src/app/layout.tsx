'use client'

import '@/style/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient();

  return (
    <html lang="pt-BR">
      <head>
        <title>MKS Sistemas</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
