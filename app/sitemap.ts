import type { MetadataRoute } from 'next';
import { pageSlugs } from '@/data/content';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', ...pageSlugs];
  return paths.flatMap((path) => {
    const suffix = path ? `/${path}` : '';
    return ['fr', 'ar'].map((locale) => ({
      url: `${siteUrl}/${locale}${suffix}`,
      changeFrequency:
        path === 'actualites' ? ('weekly' as const) : ('monthly' as const),
      priority: path ? 0.8 : 1,
      alternates: {
        languages: {
          fr: `${siteUrl}/fr${suffix}`,
          ar: `${siteUrl}/ar${suffix}`,
        },
      },
    }));
  });
}
