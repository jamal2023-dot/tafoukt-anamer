import type { Locale, PageSlug } from '@/types';

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://tafoukt-anamer-jamalkarami2019.gheima.ma';

export function organizationJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name:
      locale === 'fr'
        ? 'Association Tafoukt pour le Sport et l’Art – Anamer'
        : 'جمعية تافوكت للرياضة والفن – أنامر',
    alternateName:
      locale === 'fr'
        ? 'جمعية تافوكت للرياضة والفن – أنامر'
        : 'Association Tafoukt pour le Sport et l’Art – Anamer',
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/logo.jpg`,
    areaServed: 'Anamer, Morocco',
    nonprofitStatus: 'NonprofitType',
  };
}

export function breadcrumbJsonLd(
  locale: Locale,
  slug: PageSlug,
  title: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'fr' ? 'Accueil' : 'الرئيسية',
        item: `${siteUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: `${siteUrl}/${locale}/${slug}`,
      },
    ],
  };
}
