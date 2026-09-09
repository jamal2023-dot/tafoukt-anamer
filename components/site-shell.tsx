import type { ReactNode } from 'react';
import type { Locale, PageSlug } from '@/types';
import { LanguageDocument } from './language-document';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

export function SiteShell({
  locale,
  currentSlug,
  children,
}: {
  locale: Locale;
  currentSlug?: PageSlug;
  children: ReactNode;
}) {
  return (
    <div
      className={locale === 'ar' ? 'locale-ar' : 'locale-fr'}
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <LanguageDocument locale={locale} />
      <SiteHeader locale={locale} currentSlug={currentSlug} />
      {children}
      <SiteFooter locale={locale} />
    </div>
  );
}
