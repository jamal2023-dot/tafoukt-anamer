import type { LocalizedText } from '@/types';

export const impact: Array<{ label: LocalizedText; value: LocalizedText }> = [
  {
    label: { fr: 'Montant collecté', ar: 'المبلغ المحصل', en: 'Funds raised' },
    value: { fr: 'À compléter', ar: 'قيد الاستكمال', en: 'To be completed' },
  },
  {
    label: { fr: 'Montant dépensé', ar: 'المبلغ المصروف', en: 'Funds spent' },
    value: { fr: 'À compléter', ar: 'قيد الاستكمال', en: 'To be completed' },
  },
  {
    label: { fr: 'Solde', ar: 'الرصيد', en: 'Balance' },
    value: { fr: 'À compléter', ar: 'قيد الاستكمال', en: 'To be completed' },
  },
  {
    label: {
      fr: 'Progression des projets',
      ar: 'تقدم المشاريع',
      en: 'Project progress',
    },
    value: { fr: 'À compléter', ar: 'قيد الاستكمال', en: 'To be completed' },
  },
];
