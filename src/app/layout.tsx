import '@/style/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>MKS Sistemas</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
