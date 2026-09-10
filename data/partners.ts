import type { LocalizedText } from '@/types';

export const partnerLevels: LocalizedText[] = [
  { fr: 'Partenaire officiel', ar: 'الشريك الرسمي', en: 'Official partner' },
  { fr: 'Partenaire principal', ar: 'الشريك الرئيسي', en: 'Main partner' },
  { fr: 'Partenaire éducation', ar: 'شريك التعليم', en: 'Education partner' },
  {
    fr: 'Partenaire solidaire',
    ar: 'الشريك التضامني',
    en: 'Community partner',
  },
  { fr: 'Partenaire technique', ar: 'الشريك التقني', en: 'Technical partner' },
];

// Ajouter ici uniquement les partenaires confirmés par l'association.
export const partners: Array<{
  name: string;
  level: LocalizedText;
  logo?: string;
  website?: string;
}> = [];
