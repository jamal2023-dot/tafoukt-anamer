export type Locale = 'fr' | 'ar' | 'en';

export type LocalizedText = Record<Locale, string>;

export type PageSlug =
  | 'association'
  | 'domaines-action'
  | 'projets'
  | 'anamer-lit'
  | 'terrain-anamer-bouchfoud'
  | 'actualites'
  | 'transparence'
  | 'partenaires'
  | 'devenir-partenaire'
  | 'soutenir'
  | 'contact';
