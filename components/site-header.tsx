import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';
import { siteCopy } from '@/data/content';
import type { Locale, PageSlug } from '@/types';

export function SiteHeader({
  locale,
  currentSlug,
}: {
  locale: Locale;
  currentSlug?: PageSlug;
}) {
  const copy = siteCopy[locale];
  const other = locale === 'fr' ? 'ar' : 'fr';
  const otherHref = currentSlug ? `/${other}/${currentSlug}` : `/${other}`;
  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>
      <header className="site-header">
        <Link
          href={`/${locale}`}
          className="brand"
          aria-label={`${copy.breadcrumbHome} — Association Tafoukt`}
        >
          <Image src="/logo.jpg" width={48} height={48} alt="" priority />
          <span>
            <strong>Tafoukt</strong>
            <small>{copy.brandLine}</small>
          </span>
        </Link>
        <nav
          aria-label={
            locale === 'fr' ? 'Navigation principale' : 'التنقل الرئيسي'
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
          <Link className="language" href={otherHref} hrefLang={other}>
            {copy.otherLocale}
          </Link>
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
