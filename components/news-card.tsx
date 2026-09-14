import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { newsCategoryLabels, type NewsItem } from '@/data/news';
import type { Locale } from '@/types';

const dateLocales: Record<Locale, string> = {
  fr: 'fr-MA',
  ar: 'ar-MA',
  en: 'en-GB',
};

const sourceLabels: Record<Locale, string> = {
  fr: 'Voir la publication originale',
  ar: 'عرض المنشور الأصلي',
  en: 'View the original post',
};

export function NewsCard({
  item,
  locale,
  detailed = false,
}: {
  item: NewsItem;
  locale: Locale;
  detailed?: boolean;
}) {
  const formattedDate = new Intl.DateTimeFormat(dateLocales[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${item.date}T12:00:00Z`));

  return (
    <article className="news-card">
      {item.image ? (
        <div className="news-card-image">
          <Image
            src={item.image}
            alt={item.title[locale]}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
      ) : null}
      <div className="news-meta">
        <span>{newsCategoryLabels[item.category][locale]}</span>
        <time dateTime={item.date}>{formattedDate}</time>
      </div>
      <h2>{item.title[locale]}</h2>
      <p>{detailed ? item.content[locale] : item.summary[locale]}</p>
      {item.sourceUrl ? (
        <a href={item.sourceUrl} target="_blank" rel="noreferrer">
          {sourceLabels[locale]}
          <ArrowUpRight size={16} />
        </a>
      ) : null}
    </article>
  );
}
