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
  const isAnamerLit = slug === 'anamer-lit';
  const anamerMeta = {
    fr: {
      title: 'Anamer Lit 2026 : résultats de la première phase',
      description:
        'Résultats vérifiés de la phase 1 : 9 579 DH mobilisés, 40 élèves bénéficiaires et 95 livres prévus pour l’école d’Anamer.',
    },
    ar: {
      title: 'أنامر تقرأ 2026: نتائج المرحلة الأولى',
      description:
        'النتائج المؤكدة للمرحلة الأولى: 9,579 درهماً و40 تلميذاً مستفيداً و95 كتاباً مبرمجاً لفائدة مدرسة أنامر.',
    },
    en: {
      title: 'Anamer Reads 2026: Phase One results',
      description:
        'Verified Phase One results: MAD 9,579 mobilised, 40 pupils supported and 95 books planned for Anamer school.',
    },
  }[locale];
  const title = isAnamerLit ? anamerMeta.title : page.title;
  const description = isAnamerLit ? anamerMeta.description : page.intro;
  const socialImage = isAnamerLit
    ? '/images/anamer-lit/phase-1-results.png'
    : '/og.png';
  return {
    title,
    description,
    keywords: isAnamerLit
      ? [
          'Anamer Lit',
          'أنامر تقرأ',
          'Association Tafoukt',
          'éducation Anamer',
          'soutien scolaire Maroc',
        ]
      : undefined,
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
      title,
      description,
      images: [{ url: socialImage, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
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
