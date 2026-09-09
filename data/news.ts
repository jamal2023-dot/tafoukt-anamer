import type { LocalizedText } from '@/types';

export type NewsCategory =
  | 'Sport'
  | 'Éducation'
  | 'Culture'
  | 'Solidarité'
  | 'Environnement'
  | 'Projets'
  | 'Association';

export type NewsItem = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  content: LocalizedText;
  date: string;
  category: NewsCategory;
  image?: string;
  gallery?: string[];
};

// Publier une actualité uniquement avec un contenu, une date et des médias vérifiés.
export const news: NewsItem[] = [];
