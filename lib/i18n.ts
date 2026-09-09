import { notFound } from 'next/navigation';
import { pageSlugs } from '@/data/content';
import type { Locale, PageSlug } from '@/types';

export const locales: Locale[] = ['fr', 'ar'];

export function assertLocale(value: string): asserts value is Locale {
  if (!locales.includes(value as Locale)) notFound();
}

export function assertPageSlug(value: string): asserts value is PageSlug {
  if (!pageSlugs.includes(value as PageSlug)) notFound();
}
