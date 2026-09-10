import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Languages,
  Menu,
} from 'lucide-react';
import { siteCopy } from '@/data/content';
import { localeNames, locales } from '@/lib/i18n';
import type { Locale, PageSlug } from '@/types';

export function SiteHeader({
  locale,
  currentSlug,
}: {
  locale: Locale;
  currentSlug?: PageSlug;
}) {
  const copy = siteCopy[locale];
  const languageMenuLabel =
    locale === 'ar'
      ? 'اختيار اللغة'
      : locale === 'en'
        ? 'Choose language'
        : 'Choisir la langue';
  const localeCodes: Record<Locale, string> = {
    fr: 'FR',
    ar: 'AR',
    en: 'EN',
  };
  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>
      <header className="site-header">
        <Link
          href={`/${locale}`}
          className="brand"
          aria-label={`${copy.breadcrumbHome} — ${copy.organizationName}`}
        >
          <Image src="/logo.jpg" width={48} height={48} alt="" priority />
          <span>
            <strong>{copy.brandName}</strong>
            <small>{copy.brandLine}</small>
          </span>
        </Link>
        <nav
          aria-label={
            locale === 'ar'
              ? 'التنقل الرئيسي'
              : locale === 'en'
                ? 'Main navigation'
                : 'Navigation principale'
          }
        >
          {copy.nav.map(([label, slug]) => (
            <Link
              key={slug}
              href={`/${locale}/${slug}`}
              aria-current={currentSlug === slug ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <details className="language-menu">
            <summary aria-label={languageMenuLabel}>
              <Languages aria-hidden="true" size={18} />
              <span aria-hidden="true">{localeCodes[locale]}</span>
              <ChevronDown aria-hidden="true" size={13} />
            </summary>
            <div className="language-menu-panel">
              {locales.map((candidate) => (
                <Link
                  aria-label={localeNames[candidate]}
                  aria-current={candidate === locale ? 'page' : undefined}
                  href={
                    currentSlug
                      ? `/${candidate}/${currentSlug}`
                      : `/${candidate}`
                  }
                  hrefLang={candidate}
                  key={candidate}
                >
                  <span className="language-menu-code">
                    {localeCodes[candidate]}
                  </span>
                  <span>{localeNames[candidate]}</span>
                  {candidate === locale ? (
                    <Check aria-hidden="true" size={15} />
                  ) : null}
                </Link>
              ))}
            </div>
          </details>
          <Link className="button button-small" href={`/${locale}/soutenir`}>
            {copy.support}
          </Link>
          <details className="mobile-menu">
            <summary aria-label={copy.menu}>
              <Menu size={23} />
            </summary>
            <div className="mobile-menu-panel">
              {copy.nav.map(([label, slug]) => (
                <Link key={slug} href={`/${locale}/${slug}`}>
                  {label}
                </Link>
              ))}
              <Link href={`/${locale}/actualites`}>
                {copy.pages.actualites.eyebrow}
              </Link>
              <Link href={`/${locale}/contact`}>{copy.contact}</Link>
              <Link className="mobile-support" href={`/${locale}/soutenir`}>
                {copy.support} <ArrowUpRight size={17} />
              </Link>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
