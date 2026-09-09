import type { LocalizedText } from '@/types';

export type TeamMember = {
  name: LocalizedText;
  role: LocalizedText;
};

export const team: TeamMember[] = [
  {
    name: { fr: 'Ibrahim Ouhmid', ar: 'إبراهيم أوحميد' },
    role: { fr: 'Président de l’Association Tafoukt', ar: 'رئيس جمعية تافوكت' },
  },
  {
    name: { fr: 'Jamal Karami', ar: 'جمال الكرامي' },
    role: {
      fr: 'Responsable finances & transparence',
      ar: 'مسؤول المالية والشفافية',
    },
  },
  {
    name: { fr: 'Said Karami', ar: 'سعيد الكرامي' },
    role: {
      fr: 'Responsable logistique, achats & partenariats',
      ar: 'مسؤول اللوجستيك والمشتريات والشراكات',
    },
  },
];
