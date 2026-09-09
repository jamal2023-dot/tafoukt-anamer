import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';
import { SiteShell } from '@/components/site-shell';
import { homeCopy } from '@/data/content';
import { assertLocale, locales } from '@/lib/i18n';
import { organizationJsonLd, siteUrl } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  assertLocale(locale);
  const copy = homeCopy[locale];
  const title =
    locale === 'fr'
      ? 'Ensemble, construisons l’avenir d’Anamer'
      : 'معاً، نبني مستقبل أنامر';
  return {
    title,
    description: copy.lead,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: { fr: `${siteUrl}/fr`, ar: `${siteUrl}/ar` },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_MA' : 'ar_MA',
      url: `${siteUrl}/${locale}`,
      title,
      description: copy.lead,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: copy.lead,
      images: ['/og.png'],
    },
  };
}

export default async function LocaleHome({ params }: Props) {
  const { locale } = await params;
  assertLocale(locale);
  const jsonLd = organizationJsonLd(locale);
  return (
    <SiteShell locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <HomePage locale={locale} />
    </SiteShell>
  );
}
