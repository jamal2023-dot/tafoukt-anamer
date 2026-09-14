import type { Locale, PageSlug } from '@/types';
import { contactDetails } from '@/data/contact';

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tafoukt-anamer.site';

export function organizationJsonLd(locale: Locale) {
  const organizationNames: Record<Locale, string> = {
    fr: 'Association Tafoukt pour le Sport et l’Art – Anamer',
    ar: 'جمعية تافوكت للرياضة و الفن – أنامر',
    en: 'Tafoukt Association for Sport and Art – Anamer',
  };
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: organizationNames[locale],
    alternateName:
      locale === 'ar' ? organizationNames.fr : organizationNames.ar,
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/logo.jpg`,
    areaServed: 'Anamer, Morocco',
    telephone: contactDetails.phones.map((phone) => phone.display),
    sameAs: [contactDetails.facebook.href, contactDetails.whatsapp.href],
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
        name: { fr: 'Accueil', ar: 'الرئيسية', en: 'Home' }[locale],
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
