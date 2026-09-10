import type { Metadata } from 'next';
import { ContentPage } from '@/components/content-page';
import { SiteShell } from '@/components/site-shell';
import { pageSlugs, siteCopy } from '@/data/content';
import { assertLocale, assertPageSlug, locales } from '@/lib/i18n';
import { breadcrumbJsonLd, siteUrl } from '@/lib/seo';

type Props = { params: Promise<{ locale: string; slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pageSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  assertLocale(locale);
  assertPageSlug(slug);
  const page = siteCopy[locale].pages[slug];
  const canonical = `${siteUrl}/${locale}/${slug}`;
  return {
    title: page.title,
    description: page.intro,
    alternates: {
      canonical,
      languages: {
        fr: `${siteUrl}/fr/${slug}`,
        ar: `${siteUrl}/ar/${slug}`,
        en: `${siteUrl}/en/${slug}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: { fr: 'fr_MA', ar: 'ar_MA', en: 'en_GB' }[locale],
      url: canonical,
      title: page.title,
      description: page.intro,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.intro,
      images: ['/og.png'],
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  assertLocale(locale);
  assertPageSlug(slug);
  const page = siteCopy[locale].pages[slug];
  const jsonLd = breadcrumbJsonLd(locale, slug, page.title);
  return (
    <SiteShell locale={locale} currentSlug={slug}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ContentPage locale={locale} slug={slug} />
    </SiteShell>
  );
}
