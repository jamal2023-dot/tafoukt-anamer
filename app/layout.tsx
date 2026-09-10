import type { Metadata } from 'next';
import { Manrope, Newsreader, Noto_Sans_Arabic } from 'next/font/google';
import { siteUrl } from '@/lib/seo';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});
const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  display: 'swap',
});
const arabic = Noto_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Association Tafoukt pour le Sport et l’Art – Anamer',
    template: '%s | Association Tafoukt',
  },
  description:
    'Sport, éducation, culture, solidarité et engagement citoyen au service d’Anamer.',
  applicationName: 'Association Tafoukt',
  authors: [{ name: 'Association Tafoukt pour le Sport et l’Art – Anamer' }],
  category: 'association',
  icons: { icon: '/logo.jpg', apple: '/logo.jpg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${newsreader.variable} ${arabic.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
