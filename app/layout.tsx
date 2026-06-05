import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laura Santillan — Data Engineer',
  description: 'Data Engineer · Pipelines, analytics & insights that move businesses forward.',
  metadataBase: new URL('https://laura.santillan.pro'),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Laura Santillan — Data Engineer',
    description: 'Data Engineer · Pipelines, analytics & insights.',
    url: 'https://laura.santillan.pro',
    siteName: 'Laura Santillan',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Laura Santillan — Data Engineer',
    description: 'Data Engineer · Pipelines, analytics & insights.',
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0d0510',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-grid" />
        <div className="bg-dots" />
        <div className="bg-dots-2" />
        {children}
      </body>
    </html>
  );
}
