import type { LocalizedText } from '@/types';

export const partnerLevels: LocalizedText[] = [
  { fr: 'Partenaire officiel', ar: 'الشريك الرسمي' },
  { fr: 'Partenaire principal', ar: 'الشريك الرئيسي' },
  { fr: 'Partenaire éducation', ar: 'شريك التعليم' },
  { fr: 'Partenaire solidaire', ar: 'الشريك التضامني' },
  { fr: 'Partenaire technique', ar: 'الشريك التقني' },
];

// Ajouter ici uniquement les partenaires confirmés par l'association.
export const partners: Array<{
  name: string;
  level: LocalizedText;
  logo?: string;
  website?: string;
}> = [];
