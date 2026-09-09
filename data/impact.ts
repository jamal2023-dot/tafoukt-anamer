import type { LocalizedText } from '@/types';

export const impact: Array<{ label: LocalizedText; value: LocalizedText }> = [
  {
    label: { fr: 'Montant collecté', ar: 'المبلغ المحصل' },
    value: { fr: 'À compléter', ar: 'قيد الاستكمال' },
  },
  {
    label: { fr: 'Montant dépensé', ar: 'المبلغ المصروف' },
    value: { fr: 'À compléter', ar: 'قيد الاستكمال' },
  },
  {
    label: { fr: 'Solde', ar: 'الرصيد' },
    value: { fr: 'À compléter', ar: 'قيد الاستكمال' },
  },
  {
    label: { fr: 'Progression des projets', ar: 'تقدم المشاريع' },
    value: { fr: 'À compléter', ar: 'قيد الاستكمال' },
  },
];
